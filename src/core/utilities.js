// A few utility classes for hooking up with the actual interface -- we'll be using a callback type system to do this
class UpdateHook {
    constructor({
                    method = null,
                    defaults = null
                } = {}
    ) {
        this.method = method;
        this.defaults = (defaults === null) ? [] : [...defaults];
    }
    bind(...args) {
        this.defaults = [...this.defaults, ...args];
        return this;
    }
    apply(...args) {
        if (this.method !== null) {
            this.method(...args);
        }
    }
}
class DataHandler {
    constructor(
        index,
        data_type,
        {
            update_hook = null
        } = {}
    ) {
        const hook = (update_hook === null) ? new UpdateHook({defaults : [this]}) : update_hook;
        this.props = null;
        this._data_handler = data_type;
        this._data = new data_type(index);
        this.update_hook = hook;
        this._load_base_data = this._load_base_data.bind(this);
        this.load_base_data();
    }

    //region Load Data
    load_base_data() {
        return this._data.object.then(this._load_base_data);
    }
    _load_base_data(
        data
    ) {
        this.props = data;
    }
    //endregion

    get index() {
        return this._data.index;
    }
    get data() {
        return this._data;
    }
    set index(i) {
        this._data.index = i;
        if (this._data.ds === null) {
            this._data.object.then(d => [
                this._load_base_data(d),
                this.update_hook.apply(i, 'index', this)
            ])
        } else {
            this._load_base_data(this._data.l_object);
            this.update_hook.apply(i, 'index', this);
        }
    }

}
class BoundField {
    constructor(
        component,
        object,
        field_name,
        {
            ready = null,
            default_value = null,
            accessor_field = null,
            lister = null,
            getter = null,
            setter = null,
            validator = null,
            update_hook = null
        } = {}
    ) {
        this.component = component;
        this.field_name = field_name;
        this.object = object;
        this.default_value = default_value;
        this.validator = validator;
        this.ready = ready;

        this.accessor_field = (accessor_field === null) ? this.field_name : accessor_field;

        this.lister = ( lister === null ) ? (t) => (t.object.data.list) : lister;
        this.getter = ( getter === null ) ? (t) => (t.object[t.accessor_field]) : getter;
        if (typeof this.getter === "string") {
            this.getter = function(g){return  (t) => (t.object[g])}(this.getter);
        }
        this.setter = ( setter === null ) ? (t, v) => ( t.object[t.accessor_field] = v ): setter;
        if (typeof this.setter === "string") {
            this.setter = function(f){return  (t, v) => (t.object[f] = v)}(this.setter);
        }

        this.update_hook = (update_hook === null) ? new UpdateHook({defaults : [this]}) : update_hook;
        if (typeof this.update_hook === "function") {
            this.update_hook = new UpdateHook({
                method : this.update_hook,
                defaults : [this]
            })
        }
        this.bind_component();
    }

    get value() {
        return (this.ready === null || this.ready() ) ? this.getter(this) : this.default_value;
    }
    set value(v) {
        return this.setter(this, v);
    }

    get list() {
        let base =  (this.ready === null || this.ready() ) ? this.lister(this) : [];
        if ('then' in base) {
            base = base.then(
                data => data.map(
                    (o, i) =>
                        ( ('index' in o) ? o : { 'index': i, 'key': i, 'data':o } )
                )
            )
        } else {
            base = base.map(
                    (o, i) =>
                        ( ('index' in o) ? o : { 'index': i, 'key': i, 'data':o } )
                );
        }
        return base;
    }

    change(event) {
        const v = event.target.value;
        this.value = (this.validator === null) ? v : this.validator(v);
        let state = {};
        state[this.field_name] = v;
        this.component.setState(state);
        this.update_hook.apply(v, this.field_name, this.object);
    }

    bind_component() {
        this.change = this.change.bind(this);
        const v = this.value;
        this.component.state[this.field_name] = v;
        let state = {};
        state[this.field_name] = v;
        this.component.setState(
            state
        );
    }
}

export {
    UpdateHook,
    DataHandler,
    BoundField
}
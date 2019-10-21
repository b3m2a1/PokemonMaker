import ReactDOM from "react-dom";
import React from "react";

import "./index.css";

import Banner from "./core/banner";
import FooterPanel from "./core/footer";
import CodePanel from "./core/code_panel";
import OptionsPanel from "./core/options_panel";
import PokemonForm from "./core/pokemon_form";

var mainForm = new PokemonForm();

var banner_config = {
    "title": "Pokemon Maker",
    "links": [
        {
            "loc": ":https://www.ocf.berkeley.edu/~jdonald/pokemon/kpdavatar/PokemonMakerHelp.txt",
            "name": "Help"
        },
        {
            "loc": ":about.html",
            "name": "About"
        }
    ]
};


ReactDOM.render(
    <Banner
        title={banner_config.title}
        links={banner_config.links}
    />,
    document.getElementById('banner')
);

var intro_message = `
    I found this app old and somewhat abandoned and decided to give it a bit of a sprucing up.
    Here's the original usage text:
    
        Only use ONE Pokemon Code at a time.
        Use at your own risk.
        10/09/2004 Fixed Japanese Emerald (m) code added Fire/Leaf for US v1.1/Spanish/German/French/Italian
        10/15/2004 Japanese Emerald PC Addr fix Mirage Island Code
        10/21/2004 Fixed "Ulist". Added Move Sort by TMs/HMs,vs 2 Moves
        11/11/2004 Added CB type 5 codes(Thanks Kenobi). Added Move Sort by Cool/Beauty/Cute/Smart/Tough
        01/29/2005 changed Pokerus to list/Fix CB/GSv3+type5 (m)       
`;
var output_config = {
    "header": "Output",
    "code": intro_message,
    "log": "As the log is generated it will appear here"
};

ReactDOM.render(
    <CodePanel
        form={mainForm}
        header={output_config.header}
        code={output_config.code}
        log={output_config.log}
        footer={output_config.footer}
    />,
    document.getElementById('display_output')
);


var options_config = {
    "header": "Options"
};
ReactDOM.render(
    <OptionsPanel
        form={mainForm}
        header={options_config.header}
    />,
    document.getElementById('options_panel')
);

ReactDOM.render(
    <FooterPanel
        body={<p className="text-light"> PokemonMaker by kpdavatar restyled and extended by b3m2a1 </p>}
    />,
    document.getElementById('footer')
);
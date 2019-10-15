
function BannerLinks(props) {
    const links = props.links.map(
        (link_data) =>
            <li className="banner-link-item">
              <a className="navbar-link" href={link_data.loc}>
                {link_data.title}
              </a>
            </li>
    );
    return (
        <ul className="banner-links">links</ul>
    );
}

function Banner(props) {
  return (
      <div className="main-header bg-primary jumbotron jumbotron-fluid">
          <div className="container">
              <h1 className="display-4">props.title</h1>
              <BannerLinks links = {props.links} />
          </div>
      </div>
  );
}

// This will be the main interface class where we feed everything in and actually display it on screen
// We'll call into it from Pokemon which will be our backend
class PokemonForm {
    constructor(
        
    ){

    }

}
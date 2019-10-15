var banner_config = {
    "title":"Pokemon Maker",
    "links": [
        {
            "loc":":https://www.ocf.berkeley.edu/~jdonald/pokemon/kpdavatar/PokemonMakerHelp.txt",
            "name":"Help"
            },
        {
            "loc":":about.html",
            "name":"About"
            }
        ]
}

ReactDOM.render(
  <Banner
      title={banner_config.title}
      links={banner_config.links}
  />,
  document.getElementById('banner')
);
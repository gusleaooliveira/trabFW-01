let React = require('react');

let HeaderLayout = require('./layouts/HeaderLayout');
let MenuLayout = require('./layouts/MenuLayout');
let FooterLayout = require('./layouts/FooterLayout');

function Pacote(props){
    return (
        <div id="root">
            <HeaderLayout titulo="Pacote" subtitulo="Administração dos pacotes Linux" />
            <MenuLayout />
            <FooterLayout />
        </div>
    );
}

module.exports = Pacote;
let React = require('react');

let HeaderLayout = require('./layouts/HeaderLayout');
let MenuLayout = require('./layouts/MenuLayout');
let FooterLayout = require('./layouts/FooterLayout');

let CadastraAdministrador = require('./components/CadastraAdministrador');

function Administrador(props){
    return (
        <div id="root">
            <HeaderLayout titulo="Administrador" subtitulo="Área do administrador" />
            <MenuLayout />
            <CadastraAdministrador />
            <FooterLayout />
        </div>
    );
}

module.exports = Administrador;
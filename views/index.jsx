let React = require('react');

let HeaderLayout = require('./layouts/HeaderLayout');
let FooterLayout = require('./layouts/FooterLayout');
let MenuLayout = require('./layouts/MenuLayout');
let ConteudoInicio = require('./components/ConteudoInicio');

function Inicio(props){
    return (
            <div id="root">
                <HeaderLayout titulo="Início" subtitulo="Início" />
                <MenuLayout />
                <ConteudoInicio />
                <FooterLayout />
            </div>
        );
}

module.exports = Inicio;
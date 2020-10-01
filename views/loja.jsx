let React = require('react');

let HeaderLayout = require('./layouts/HeaderLayout');
let MenuLayout = require('./layouts/MenuLayout');
let FooterLayout = require('./layouts/FooterLayout');

function Loja(props){
    return (
        <div id="root">
            <HeaderLayout titulo="Loja" subtitulo="Loja de pacotes Linux" />
            <MenuLayout />
            <FooterLayout />
        </div>
    );
}

module.exports = Loja;
let React = require('react');

let HeaderLayout = require('./layouts/HeaderLayout');
let MenuLayout = require('./layouts/MenuLayout');
let FooterLayout = require('./layouts/FooterLayout');

function Logout(props){
    return (
        <div id="root">
            <HeaderLayout titulo="Logout" subtitulo="Logout" />
            <MenuLayout />
            <FooterLayout />
        </div>
    );
}

module.exports = Logout;
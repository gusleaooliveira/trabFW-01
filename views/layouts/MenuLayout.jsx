let React = require('react');

function MenuLayout(props){
    return  <nav className="bar bar-mobile container teal">
                <a href="/view/" className="btn eggplant">Início</a>
                <a href="/view/login" className="btn eggplant">Login</a>
                <a href="/view/administrador" className="btn eggplant">Cadastrar Administrador</a>
                <a href="/view/pacote" className="btn eggplant">Cadastrar Pacotes</a>
                <a href="/view/loja" className="btn eggplant">Loja</a>
                <a href="/view/logout" className="btn eggplant">Logout</a>
            </nav>;
}

module.exports = MenuLayout;
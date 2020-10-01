let React = require('react');

function CadastraAdministrador(props){
    return  <section className="padding-10">
                <form method="POST" action="/api/usuario/" className="card padding-10 light-gray">
                    <h3 className="text-center padding-16">Cadastrar Administrador</h3>
                    <div className="grid column-2">
                        <div className="padding-5">
                            <label for="nome">
                                Nome: 
                            </label>
                            <input type="text" placeholder="Digite o seu nome" name="nome" id="nome" className="input border-bottom-eggplant-focus white" />
                        </div>
                        <div className="padding-5">
                            <label for="sobrenome">
                                Sobrenome: 
                            </label>
                            <input type="text" placeholder="Digite o seu sobrenome" name="sobrenome" id="sobrenome" className="input border-bottom-eggplant-focus white" />
                        </div>
                    </div>
                    <label for="email">
                        Email: 
                    </label>
                    <input type="email" placeholder="Digite o seu email" name="email" id="email" className="input border-bottom-eggplant-focus white" />
                    <div className="grid column-2">
                        <div className="padding-5">
                            <label for="nome">
                                Senha: 
                            </label>
                            <input type="password" placeholder="Digite o seu senha" name="senha" id="senha" className="input border-bottom-eggplant-focus white" />
                        </div>
                        <div className="padding-5">
                            <label for="confirmar">
                                Confirmar: 
                            </label>
                            <input type="password" placeholder="Digite o seu confirmar" name="confirmar" id="confirmar" className="input border-bottom-eggplant-focus white " />
                        </div>
                    </div>
                    <input type="submit" className="btn btn-block eggplant" />
                </form>
            </section>;
}

module.exports = CadastraAdministrador;
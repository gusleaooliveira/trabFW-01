exports.index = (req, res) => {
    res.render('index');
}

exports.login = (req, res) => {
    res.render('login');
}

exports.administrador = (req, res) => {
    res.render('administrador');
}

exports.pacote = (req, res) => {
    res.render('pacote');
}

exports.logout = (req, res) => {
    res.render('logout');
}

exports.loja = (req, res) => {
    res.render('loja');
}
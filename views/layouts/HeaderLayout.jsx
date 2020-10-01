let React = require('react');

function HeaderLayout(props){
    return  <html lang="pt-br">
                <head>
                    <meta charset="utf-8" />

                    <title>{props.titulo}</title>

                    <link rel="stylesheet" href="../static/hcw.min.css" />

                    <script src="https://kit.fontawesome.com/089953a984.js" crossorigin="anonymous"></script>
                </head>
                <body className="teal">
                    <header className="teal padding-16">
                        <h1 className="text-center">{props.subtitulo}</h1>
                    </header>
                </body>
            </html>;
}

module.exports = HeaderLayout;
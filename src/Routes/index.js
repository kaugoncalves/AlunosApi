const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Rota padrão</h1>
            </body>
        </html>
    `);
});

routes.get('/rota2', (req, res) => {
  res.send(`
      <html>
          <head>
              <meta charset="utf-8">
          </head>
          <body>
              <h1>rota legal</h1>
          </body>
      </html>
  `);
});

module.exports = routes; 
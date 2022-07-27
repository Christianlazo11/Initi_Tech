// if (process.env.NODE_ENV !== 'production') {
require('dotenv').config();
// }
const {
  errorHandler,
  logErrors,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');
const { checkApiKey } = require('./middlewares/auth.handler');
require('./utils/auth/index');

const express = require('express');
const routerApi = require('./routes');
const app = express();
const cors = require('cors');

const { db } = require('./models/index');
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

app.get('/nueva-ruta', checkApiKey, (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Port conected: ' + PORT);
  db.sequelize
    .authenticate()
    .then(() => {
      console.log('Conection success');
    })
    .catch((error) => console.log(error));
});

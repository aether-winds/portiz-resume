import express from 'express';
import hbs from 'hbs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const application = express();
application.set('view engine', 'hbs');
application.set('views', join(__dirname, 'views'));
application.engine('html', hbs.__express);
application.use('/assets', express.static(join(__dirname, 'assets')));

application.get('/', (_, response) => response.render('index.html'));

application.listen(3000, () => console.log('Listening on http://localhost:3000'));

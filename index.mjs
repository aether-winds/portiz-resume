import express from 'express';
import hbs from 'hbs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Application Manager
 * ===================
 * - Manages the express application
 * - Provides methods for registering a develepers application (see below)
 * - Provides baseline template and static assets
 * - Provides baseline components for templates
 * - Provides baseline routes for content delivery
 */

/**
 * Developer application
 * ======================
 * - Registers templates with application manager via methods
 * - Registers static assets with application manager via methods
 * - Defines routes for content delivery via methods
 */
 

// Create application manager
// * Should create express application
// * 
// * Has register template for view engine
// * Has register static assets folder
// * Has reroute for first view on content request
// * Should define the index view
// * Should define 

// Routes 
// * Should return text/html
// * Has context for nonce value

const application = express();
application.set('view engine', 'hbs');
application.set('views', join(__dirname, 'views'));
application.engine('html', hbs.__express);
application.use('/assets', express.static(join(__dirname, 'assets')));

// Add Content Security Policy Header

application.get('/', (_, response) => response.render('index.html'));


export default {
  start: (port) => application.listen(port, () => console.log(`Listening on http://localhost:${port}`)),
}



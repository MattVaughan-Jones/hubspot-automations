import express, { Router } from 'express';
import * as bodyParser from 'body-parser';
import { solarChoiceRoute } from './solarChoiceRoutes.js';

export const routes = Router();

//middleware
// routes.use(bodyParser.json());
// routes.use(bodyParser.urlencoded({ extended: false }));

routes.get('/', (req, res) => {
    res.send('Hello from the server :)');
});

routes.use(
    solarChoiceRoute,
    // other route imports go here
);

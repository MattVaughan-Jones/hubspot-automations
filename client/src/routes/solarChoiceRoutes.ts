import { Router, Request, Response } from 'express';

export const solarChoiceRoute = Router();

solarChoiceRoute.get('/solarChoice', (req: Request, res: Response, next) => {
    console.log('this is the solar choice router');
});

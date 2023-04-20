'use strict'
import { Router } from 'express';
import airportTemp from './airportTemp.js';
import stockPrice from './stockPrice.js';
import evalExpr from './evalExpression.js';

const router = Router();
router.get('/', async function(req, res) {
    const query = req.url.split('?')[1];
    const key = query.split('=')[0];
    const value = query.split('=')[1];
    switch(key) {
        case 'queryAirportTemp':
            res.json(await airportTemp(value));
            break;
        case 'queryStockPrice':
            res.json(await stockPrice(value));
            break;
        case 'queryEval':
            res.json(evalExpr(value));
            break;
        default:
            console.log('Invalid query');
            res.status(404);
            break;
    }
});
    
export default router;

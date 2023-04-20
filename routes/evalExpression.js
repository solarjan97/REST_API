'use strict'
import { evaluate } from 'mathjs';

function evalExpr(expr) {
    try{
        const result = evaluate(expr);
        console.log(result);
        return result;
    }
    catch(err){
        return err;
    }
}

export default evalExpr;
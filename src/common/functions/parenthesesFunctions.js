import {isValueGreaterThanZeroFunction} from "./zeroInsertFunctions";
import {squareEvaluation, doArithmetic, evaluateIndex} from "./arithmeticFunctions";

export const evaluateParenthesis = input => {
    if(input.length < 1){
        return input;
    };

    if(!input.includes("(")){
        if(input.includes("²")){
            input = squareEvaluation(input);
        };
        return doArithmetic(input);
    };

    let pArr = input.match(/[^()]+/g);
    input = evaluateIndex(pArr, input);
    return evaluateParenthesis(input);
}

export const openCloseCount = str => {
    let count = {
        open: 0,
        close: 0
    };
    for(var i = 0; i < str.length; i++){
        if(str[i] === "("){
            count.open ++;
        } else if( str[i] === ")"){
            count.close ++;
        };
    };
    return count;
};

export default (currentInput, arrIndex, lastIndex) => {
    const count = openCloseCount(currentInput);
    if(!lastIndex){
        return "(";
    };
    if(lastIndex && !isValueGreaterThanZeroFunction(arrIndex) && !arrIndex.includes("0")){
        return "(";
    };
    if(isValueGreaterThanZeroFunction(arrIndex) && count.open > count.close){
        return ")";
    };
    return false;
}
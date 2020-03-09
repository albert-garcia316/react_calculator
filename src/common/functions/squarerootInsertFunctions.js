import {isValueGreaterThanZeroFunction} from "./zeroInsertFunctions";
import {operators} from "../acceptedKeys";
import {operatorsUsedFunction} from "./stateStringFunctions";
import {evaluateParenthesis} from "./parenthesesFunctions";


export const squarerootCalculation = input => {
    for(var i = 0 ; i < input.length; i++){
        if(input[i] === "√"){
            let block = rootBlockFinder(input.slice(i+1));
            let val = evaluateParenthesis(block);
            if(operators.includes(val[val.length-1])){
                val = val.slice(0, val.length -1);
            };
            val = Math.sqrt(val);
            val = val.toString();

            input = input.replace("√(" + block + ")", val);
            input = input.replace("√(" + block, val);
        };
    };
    return input;
};


const rootBlockFinder = str => {
    let count = {
        open: 1,
        close: 0
    };
    let block = "";
    for(var i = 0; i < str.length; i++){
        if(str[i] === "("){
            count.open += 1;
        };
        if(str[i] === ")"){
            count.close += 1;
        };
        if(count.open === count.close){
            break;
        };
        block += str[i];
    };
    return block;
};

export default (currentInput, stateArr, arrIndex, lastIndex) => {
    if(arrIndex.length > 0){
        if(arrIndex.includes(")")){
            return currentInput;
        };
        if((lastIndex === "0" || lastIndex === ".") && !isValueGreaterThanZeroFunction(arrIndex)){
            return currentInput;
        };
        if(stateArr.length < 2){
            if(arrIndex.includes("(") && !isValueGreaterThanZeroFunction(arrIndex)){
                return arrIndex + "√(";
            };
            if(arrIndex.includes("(") && isValueGreaterThanZeroFunction(arrIndex)){
                return arrIndex.slice(0, arrIndex.lastIndexOf("(") + 1) + "√(" + arrIndex.slice(arrIndex.lastIndexOf("(") + 1);
            };
            return "√(" + arrIndex;
        };
        if(stateArr.length > 1){
            const operatorsUsed = operatorsUsedFunction(currentInput);
            let output = "";
            for(var i = 0; i < stateArr.length; i++){
                output += stateArr[i] + operatorsUsed[i];
            };
    
            if(arrIndex.includes("(") && !isValueGreaterThanZeroFunction(arrIndex)){
                return currentInput + "√(";
            };
            if(arrIndex.includes("(") && isValueGreaterThanZeroFunction(arrIndex)){
                const str = arrIndex.slice(0, arrIndex.lastIndexOf("(") + 1) + "√(" + arrIndex.slice(arrIndex.lastIndexOf("(") + 1);
                return output + str;
            };
            return output + "√(" + arrIndex;
        };
    };
    return currentInput + arrIndex + "√(";  
};
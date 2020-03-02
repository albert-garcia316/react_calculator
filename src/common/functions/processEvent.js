import {numbers, operators, numbersNotAllowed} from "../acceptedKeys";
import {stateSplitFunction, arrIndexFunction, lastIndexFunction, operatorsUsedFunction} from "./stateStringFunctions";
import {insertDotFunction} from "./dotInsertFunctions";
import zeroInsertFunction, {isValueGreaterThanZeroFunction} from "./zeroInsertFunctions";
import operatorInsertFunction from "./operatorInsertFunctions";
import percentInsertFunction from "./percentInsertFunctions";



// check for non zero number
const numberChecker = input => {
    return numbers.includes(input) ? true : false;
};
const opChecker = input => {
    return operators.includes(input) ? true : false;
};


export default (newInput, eq, currentOutput) => {
    let currentInput = eq;
    let equalFlag = false;

    // split state on operands
    const stateArr = stateSplitFunction(currentInput);
    const arrIndex = arrIndexFunction(stateArr);
    const lastIndex = lastIndexFunction(arrIndex);
    const operatorsUsed = operatorsUsedFunction(currentInput);
    const switchInput = numberChecker(newInput) ? "number" : opChecker(newInput) ? "operand" : newInput;


    switch(switchInput){
        case ".":
            const insertDot = insertDotFunction(arrIndex, lastIndex);
            if(insertDot){
                currentInput = currentInput + insertDot;
            };
            break;

        case "0":
            const z = zeroInsertFunction(arrIndex, lastIndex);
            if(z && numbersNotAllowed.includes(lastIndex)){
                currentInput = currentInput + z;
            };
            break;

        case "number":
            if(lastIndex === "0" && arrIndex.length === 1){
                break;
            };
            currentInput = !numbersNotAllowed.includes(lastIndex) ? currentInput + newInput : currentInput;
            break;

        case "operand":
            const op = operatorInsertFunction (newInput, arrIndex, lastIndex);
            currentInput = op ? currentInput + op : currentInput;
            break;

        case "%":
            const percentOkay = percentInsertFunction(arrIndex, lastIndex);
            currentInput = percentOkay ? currentInput + percentOkay : currentInput;
            break;

        case "²":
            if(numbers.includes(lastIndex) || lastIndex === "0" || lastIndex === ")"){
                if(lastIndex === "0" && !isValueGreaterThanZeroFunction(arrIndex)){
                    break;
                };
                currentInput = currentInput + newInput;
            };
            break;

        case "√":
            currentInput = squarerootInsertFunction(currentInput, stateArr, arrIndex, lastIndex);
            break;

        case "±":
            break;

        case "()":
            break;

        case "&#9003;":
            break;

        case "C":
            break;

        case "CE":
            break;

        case "=":
            break;

        default:
            break;
    };

};
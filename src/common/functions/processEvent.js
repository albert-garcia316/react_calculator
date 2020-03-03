import {numbers, operators, numbersNotAllowed} from "../acceptedKeys";
import {stateSplitFunction, arrIndexFunction, lastIndexFunction, operatorsUsedFunction} from "./stateStringFunctions";
import {insertDotFunction} from "./dotInsertFunctions";
import zeroInsertFunction, {isValueGreaterThanZeroFunction} from "./zeroInsertFunctions";
import operatorInsertFunction from "./operatorInsertFunctions";
import percentInsertFunction from "./percentInsertFunctions";
import plusMinusInsertFunction from "./plusMinusFunctions";
import squarerootInsertFunction from "./squarerootInsertFunctions";
import parenthesesInsertFunction, { openCloseCount } from "./parenthesesFunctions";


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
            currentInput = plusMinusInsertFunction(currentInput);
            break;

        case "()":
            const insertParenthesis = parenthesesInsertFunction(currentInput, arrIndex, lastIndex);
            currentInput = insertParenthesis ? currentInput + insertParenthesis : currentInput;
            break;

        case "&#9003;":
            if(currentInput.length > 1 && currentInput[currentInput.length - 2] === "√"){
                currentInput = currentInput.substr(0,currentInput.length - 2);
            };
            if(arrIndex.length === 1){
                currentOutput = "";
            };
            currentInput = currentInput.length > 0 ? currentInput.substr(0, currentInput.length -1) : currentInput; 
            break;

        case "C":
            currentInput = currentInput.length > 0 ? "" : currentInput;
            currentOutput = "";
            break;

        case "CE":
            if(stateArr.length < 2){
                currentInput = "";
            } else if(arrIndex.length > 0){
                let updatedInput = "";
                for(var i = 0; i < stateArr.length - 1; i++){
                    updatedInput += stateArr[i] + operatorsUsed[i];
                };
                currentInput = updatedInput;
            };
            currentOutput = "";
            break;

        case "=":
            const equalInsertable = ["%", "√", "²"];
            const count = openCloseCount(currentInput);
            if(count.open === count.close && ((stateArr.length > 1 && isValueGreaterThanZeroFunction(arrIndex)) || equalInsertable.some(i => currentInput.includes(i)))){
                equalFlag = true;
            };
            break;

        default:
            break;
    };

    return {
        input: currentInput,
        output: currentOutput
    };
};
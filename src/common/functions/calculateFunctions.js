import {stateSplitFunction, arrIndexFunction} from "./stateStringFunctions";
import {isValueGreaterThanZeroFunction} from "./zeroInsertFunctions";
import {operators} from "../acceptedKeys";
import {squarerootCalculation} from "./squarerootInsertFunctions";
import {evalutateParenthesis} from "./parenthesesFunctions";

const pemdasCalc = input => {
    if(input.includes("√")){
        input = squarerootCalculation(input);
    };
    let answer = input.toString().includes("(") ? evalutateParenthesis(input) : input;
    if(operators.includes(answer[answer.length -1])){
        answer = answer.slice(0, answer.length-1);
    };
    return answer;
};


export const runningOutput = (input, output) => {
    const stateArr = stateSplitFunction(input);
    const arrIndex = arrIndexFunction(stateArr);

    if(
        (isValueGreaterThanZeroFunction(arrIndex) || arrIndex.length === 0)
        && (stateArr.length > 1
        || (stateArr.length === 1
        && (input.includes("%") || input.includes("²") || input.includes("√"))))){
            let answer = pemdasCalc(input);

            if(answer === input){
                return output;
            };
            return answer !== output ? answer : output;
    };
    return output;
};
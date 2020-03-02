import {operators} from "../acceptedKeys";

export const stateSplitFunction = (state) => state.split(/\+|-|÷|×/);

export const arrIndexFunction = stateArr => stateArr[stateArr.length -1];

export const lastIndexFunction = indexStr => {
    return indexStr !== "" ? indexStr[indexStr.length - 1] : null;
};

export const parenthSplitFunction = state => state.split(/\(|\)/);

export const operatorsUsedFunction = input => {
    let output = "";
    for(var i = 0; i < input.lenth; i++){
        if(operators.includes(input[i])){
            output += input[i];
        };
    };
    return output;
};
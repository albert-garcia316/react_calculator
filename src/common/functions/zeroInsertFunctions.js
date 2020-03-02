import {parenthSplitFunction} from "./stateStringFunctions";

export const isValueGreaterThanZeroFunction = str => {
    let output = false;
    const parenthArr = parenthSplitFunction(str);
    for(var i = 0; i < parenthArr.length; i++){
        if(parenthArr[i].length > 0 && parseFloat(parenthArr[i]) > 0){
            output = true;
        };
    };
    return output;
};

const lengthOfZeroChecker = lastIndex => lastIndex ? false : true;

export default (arrIndex, lastIndex) => {
    const isLengthZero = lengthOfZeroChecker(lastIndex);
    if(isLengthZero || lastIndex === "("){
        return "0.";
    } else if((lastIndex === "0" && arrIndex.length === 1) || lastIndex === ")"){
        return false;
    } else {
        return "0"
    };
};
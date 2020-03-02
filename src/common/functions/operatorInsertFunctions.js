import {isValueGreaterThanZeroFunction} from "./zeroInsertFunctions";

export default (newInput, arrIndex, LastIndex) => {
    if(LastIndex === "0" && !isValueGreaterThanZeroFunction(arrIndex)){
        return false;
    };
    if(!LastIndex || LastIndex === "." || LastIndex === "("){
        return false;
    };
    return newInput;
};
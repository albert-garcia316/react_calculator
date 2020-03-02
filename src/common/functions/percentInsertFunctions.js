import {numbers} from "../acceptedKeys";
import {isValueGreaterThanZeroFunction} from "./zeroInsertFunctions";

export const percentRemover = input => input.slice(0, input.lastIndexOf("%"));

export default (arrIndex, lastIndex) => {
    if(lastIndex === "0" && !isValueGreaterThanZeroFunction(arrIndex)){
        return false;
    };
    if(lastIndex && (numbers.includes(lastIndex) || lastIndex === "0")){
        return "%";
    };
    return false;
};
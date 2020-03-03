import {operators} from "../acceptedKeys";
import {openCloseCount} from "./parenthesesFunctions";

const plusMinusSplitFunction = str => {
    let outputArr = [];
    let tempStr = "";
    for(var i = 0; i < str.length; i++){
        if(!operators.includes(str[i])){
            tempStr += str[i];
        };
        if(operators.includes(str[i]) && str[i-1] === "(" && str[i] === "-"){
            tempStr += str[i];
            continue;
        };
        if(operators.includes(str[i])){
            outputArr.push(tempStr);
            outputArr.push(str[i]);
            tempStr = "";
        };
    };
    outputArr.push(tempStr);
    return outputArr;
};

export default currentInput => {
    const plusMinusArr = plusMinusSplitFunction(currentInput);
    let lastArrIndex = plusMinusArr[plusMinusArr.length - 1];
    plusMinusArr.pop();
    let updatedInput = plusMinusArr.join("");
    const negativeLocation = lastArrIndex.indexOf("(-");
    if(negativeLocation >= 0){
        lastArrIndex = lastArrIndex.slice(0, negativeLocation) + lastArrIndex.slice(negativeLocation + 2);
    } else {
        const includesSqure = lastArrIndex.lastIndexOf("√(");
        const lastOpen = lastArrIndex.lastIndexOf("(");
        if(includesSqure >= 0){
            lastArrIndex = lastArrIndex.slice(0, includesSqure) + "(-" + lastArrIndex.slice(includesSqure);
        } else if(lastOpen >= 0){
            lastArrIndex = lastArrIndex.slice(0, lastOpen) + "(-" + lastArrIndex.slice(lastOpen + 1);
        } else {
            lastArrIndex = "(-" + lastArrIndex;
        };
    };
    updatedInput += lastArrIndex;
    const count = openCloseCount(updatedInput);
    if(count.close > count.open){
        if(updatedInput[updatedInput.length - 1] === ")"){
            updatedInput = updatedInput.slice(0, updatedInput.length - 1);
        };
    };
};
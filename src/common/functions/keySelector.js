import {specialCharacters, numbers, stringAlterations} from "../acceptedKeys";

const numberCheck = key => {
    if(key === 0){
        return "0";
    };
    return numbers.includes(key) ? key : false;
};
const specialCheck = key => {
    if(key === "(" || key === ")"){
        return "()";
    } else if(key === "/"){
        return "÷";
    } else if(key === "*"){
        return "×";
    } else if(specialCharacters.includes(key)){
        return key;
    } else {
        return false;
    };
};
const changeCheck = key => {
    if(key === "Enter"){
        return "=";
    } else if(key === "Escape"){
        return "C";
    } else if(key === "Backspace"){
        return "&#9003;";
    } else if(key === "Delete"){
        return "CE";
    } else if(stringAlterations.includes(key)){
        return key;
    } else {
        return false;
    };
};

export default keyPress => {
    if(numberCheck(keyPress)){
        return numberCheck(keyPress);
    };
    if(specialCheck(keyPress)){
        return specialCheck(keyPress);
    };
    if(changeCheck(keyPress)){
        return changeCheck(keyPress);
    };
    return false;
};
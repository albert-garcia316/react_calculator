const isDotFunction = str => {
    if(str && str.includes(".")){
        return true;
    };
    return false;
};

export const insertDotFunction = (arrStr, lastIndex) => {
    const isDot = isDotFunction(arrStr);
    const islengthZero = lastIndex ? false : true;
    if(islengthZero || lastIndex === "("){
        return "0."
    };
    if(!isDot && lastIndex !== ")"){
        return "."
    } else {
        return false;
    };
};
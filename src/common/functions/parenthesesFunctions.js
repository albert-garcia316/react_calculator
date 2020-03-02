import {isValueGreaterThanZeroFunction} from "./zeroInsertFunctions";
// import {} from "./";


export const openCloseCount = str => {
    let count = {
        open: 0,
        close: 0
    };
    for(var i = 0; i < str.length; i++){
        if(str[i] === "("){
            count.open ++;
        } else if( str[i] === ")"){
            count.close ++;
        };
    };
    return count;
};
import {percentRemover} from "./percentOperationFunctions";
import {operators, numbers} from "../acceptedKeys";
import {stateSplitFunction} from "./stateStringFunctions";

export const squareEvaluation = input => {
    let arr = stateSplitFunction(input);
    for(var i = 0; i < arr.length; i++){
        if(arr[i].includes("²") && arr[i].length > 1){
            const valToSquare = arr[i].slice(0, arr[i].indexOf("²"));
            let val = parseFloat(valToSquare);
            val = val * val;
            input = input.replace(arr[i], val.toString());
        };
    };
    return input;
};

export const evaluateIndex = (arr, input) => {
    for(var i = 0; i < arr.length; i++){
        let evIndex = arr[i];
       
        if(evIndex.includes("²")){
            evIndex = squareEvaluation(evIndex);
        };

        if(!evIndex.includes("²")){
            if( (operators.includes(evIndex[0]) && evIndex[0] === "-") || !operators.includes(evIndex[0])){
                const lastI = evIndex[evIndex.length -1];
                if(operators.includes(lastI)){
                    evIndex = evIndex.slice(0, -1);
                    evIndex = doArithmetic(evIndex);
                    evIndex += lastI;
                } else {
                    evIndex = doArithmetic(evIndex);
                };
            };
        };

        // there may be an instance where this is needed
        //  if(evIndex !== arr[i]){
        input = input.replace("(" + arr[i] + ")", evIndex);
        input = input.replace("(" + arr[i], evIndex);
        input = input.replace(arr[i], evIndex);
        // }
    };
    return input;
};

export const doArithmetic = input => {
    let outputArr = [];
    let tempStr = "";
    let beginingOp = false;
    let endingOp = false;

    for(var i = 0; i < input.length; i++){
        if( (i === 0 && input[i] === "-" && input[i+1] !== "-") || (i === 1 && input[i] === "-" && beginingOp) ){
            tempStr += input[i];
            continue;
        };

        if(numbers.includes(input[i]) || input[i] === "0" || input[i] === "." || input[i] === "%"){
            tempStr += input[i];
        };

        if(operators.includes(input[i])){
            if(i === 0){
                beginingOp = true;
                continue;
            };
            if(i === input.lenth - 1){
                endingOp = true;
                continue;
            };

            if(tempStr){
                outputArr.push(tempStr);
                tempStr = "";
            };
            if(input[i+1] === "-"){
                if(input[i] === "×"){
                    outputArr.push("*-");
                } else if(nput[i] === "÷"){
                    outputArr.push("/-");
                } else {
                    outputArr.push(input[i] + "-");
                };
                i++;
                continue;
            };
            if(input[i] === "×"){
                outputArr.push("*");
            } else if(nput[i] === "÷"){
                outputArr.push("/");
            } else {
                outputArr.push(input[i]);
            };
        };
    };

    if(tempStr){
        outputArr.push(tempStr);
    };

    const doMultOrDivide = ["*", "*-", "/", "/-"];

    for(var n = 1; n < outputArr.length - 1; n += 2){
        let a = false;
        if(doMultOrDivide.includes(outputArr[n])){
            if(outputArr[n-1].includes("%")){
                outputArr[n-1] = percentRemover(outputArr[n-1]);
                outputArr[n-1] /= 100;
            };
            if(outputArr[n+1].includes("%")){
                outputArr[n+1] = percentRemover(outputArr[n+1]);
                outputArr[n+1] /= 100;
            };
        };
        switch(outputArr[n]){
            case "*":
                a = outputArr[n-1] * outputArr[n+1];
                break;
            case "/":
                a = outputArr[n-1] / outputArr[n+1];
                break;
            case "*-":
                a = outputArr[n-1] * outputArr[n+1] * -1;
                break;
            case "/-":
                a = outputArr[n-1] / outputArr[n+1] * -1;
                break;
            default:
                break;
        };
        if(a !== false){
            outputArr.splice(n-1, 3, a);
        };
    };

    let answer = outputArr[0];
    if(answer.toString().includes("%")){
        answer = percentRemover(answer);
        answer /= 100;
    };

    for(var i = 1; i < outputArr.length - 1; i += 2){
        if(outputArr[i+1].toString().includes("%")){
            outputArr[i+1] = percentRemover(outputArr[i+1]);
            outputArr[i+1] /= 100;
            outputArr[i+1] *= answer;
        };

        switch(outputArr[i]){
            case "--":
            case "+":
                answer = ((answer * 1000000) + (outputArr[i+1] * 1000000))/1000000;
                break;
            case "+-":
            case "-":
                answer = ((answer * 1000000) - (outputArr[i+1] * 1000000))/1000000;
                break;
            default:
                break;
        };
    };
    let strToReplace = input;
    if(beginingOp){
        strToReplace = strToReplace.slice(1);
    };
    if(endingOp){
        strToReplace = strToReplace.slice(0, strToReplace.length -1);
    };
    return input.replace(strToReplace, answer);
};
module.exports = function toReadable (number) {
  let result = "";

  if(number.toString().length === 3) {
    switch (number.toString()[0]){
        case "1":
            result += "one";
            break;
        case "2": 
            result += "two";
            break;
        case "3": 
            result += "three";
            break;
        case "4": 
            result += "four";
            break;
        case "5": 
            result += "five";
            break;
        case "6": 
            result += "six";
            break;
        case "7": 
            result += "seven";
            break;
        case "8": 
            result += "eight";
            break;
        case "9": 
            result += "nine";
            break;
    }
    result = result + " hundred ";
  } else {
    number = number + 100;
  }

  let isEnd = false;

  if(number.toString()[1]) {
    switch (number.toString()[1]){
        case "1":
            switch (number.toString()[2]){
                case "0":
                    result += "ten";
                    isEnd = true;
                    break;
                case "1":
                    result += "eleven";
                    isEnd = true;
                    break;
                case "2": 
                    result += "twelve";
                    isEnd = true;
                    break;
                case "3": 
                    result += "thirteen";
                    isEnd = true;
                    break;
                case "4": 
                    result += "fourteen";
                    isEnd = true;
                    break;
                case "5": 
                    result += "fifteen";
                    isEnd = true;
                    break;
                case "6": 
                    result += "sixteen";
                    isEnd = true;
                    break;
                case "7": 
                    result += "seventeen";
                    isEnd = true;
                    break;
                case "8": 
                    result += "eighteen";
                    isEnd = true;
                    break;
                case "9": 
                    result += "nineteen";
                    isEnd = true;
                    break;
            }
            break;
        case "2": 
            result += "twenty";
            break;
        case "3": 
            result += "thirty";
            break;
        case "4": 
            result += "forty";
            break;
        case "5": 
            result += "fifty";
            break;
        case "6": 
            result += "sixty";
            break;
        case "7": 
            result += "seventy";
            break;
        case "8": 
            result += "eighty";
            break;
        case "9": 
            result += "ninety";
            break;
    }
  }

  if(number.toString()[2] && !isEnd) {
    result = addSpaceAtTheEnd(result);
    switch (number.toString()[2]){
        case "0":
            result = result.slice(0, -1);
            break;
        case "1":
            result += "one";
            break;
        case "2": 
            result += "two";
            break;
        case "3": 
            result += "three";
            break;
        case "4": 
            result += "four";
            break;
        case "5": 
            result += "five";
            break;
        case "6": 
            result += "six";
            break;
        case "7": 
            result += "seven";
            break;
        case "8": 
            result += "eight";
            break;
        case "9": 
            result += "nine";
            break;
    }
  }

  if (result === "") {
    return "zero";
  }

  return result;
}

function addSpaceAtTheEnd(text){
    if(text[text.length-1] !== " " && text){
        return text + " ";
    } else {
        return text;
    }
}
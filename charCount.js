module.exports = function frequencyCounter(arr){
    let message = '';
    let result = {
    }
    if (arr.length < 1 || arr.length >10) {
        return "Error: Please enter an array with 1-10 items."
    }
  
    if (arr.indexOf(null) !== -1 ){
        return "Hmmm, please confirm that only valid arguments are included in your array."
    }
    for (char of arr){

        if (typeof char === 'undefined'  || char.length > 1){
            return "Invalid arguments passed"
        }
        if(/[a-z0-9]/.test(char)) {
        char.toLowerCase()
        result[char] = ++result[char] || 1; 
        }
    }
    let compare = 0;
    for(key in result){
        compare = (result[key] > compare) ? result[key]  : compare;
    }

    let value = Object.keys(result).filter((num) => result[num] === compare)


    let solution = {}
    // let solution = []
    // if (value.length > 1){
    //     solution.unshift("It's a tie between the following letters:")
    //  } else {
    //     solution.unshift("The letter which appears most frequently is:")
    //  }
    
  
    value.forEach(int => solution[int] = compare);
    return solution
}


// even funtion to return even digits
function even(input){
    var pushStr=[];
    console.log("Even numbers");
    for(i=0;i<input.length;i++){
        if(input[i]%2 == 0){
            pushStr.push(parseInt(input[i]));
        }
    }
    console.log(pushStr);
}
// odd funtion to return odd digits

function odd(input){
    var pushStr=[];
    console.log("Odd numbers");
    for(i=0;i<input.length;i++){
        if(input[i]%2 !== 0){
            pushStr.push(parseInt(input[i]));
        }
    }
    console.log(pushStr);
}

// function to replace even with odd
function replaceEvenWithOdd(input){
    var input = "2346548459";
    var pushStr=[];
    console.log("Exchange");
    for (i=0; i<input.length; i++){
        if(input[i]%2 == 0) {
            pushStr.push((Number(input[i])+1));
        } else {
            pushStr.push(parseInt(input[i]));
        }
    }
    console.log(pushStr);
}

// function to remove odd from the number
function removeOdd(input){
    var pushStr=[];
    console.log("Removing odd numbers");
    for(i=0;i<input.length;i++){
        if(input[i]%2 == 0){
            pushStr.push(parseInt(input[i]));
                }
    }
    console.log(pushStr);
}


even("2346548459");
odd("2346548459");
replaceEvenWithOdd("2346548459");
removeOdd("2346548459"); 


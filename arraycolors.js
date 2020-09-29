// Program to combine 2 arrays to form a sentence.

var arr1 = ["Blue","Green","Red","Orange","violet","Indigo","Yellow"];
var arr2 = ["th","st","nd","rd"];
for(i=1 ; i<arr1.length ; i++){
    if(i==0){
        console.log(i+1 + arr2[1] + " choice is " + arr1[i]);
    }
    else if (i==1){
        console.log(i+1 + arr2[2] + " choice is " + arr1[i]);
    }
    else if (i==2){
        console.log(i+1 + arr2[3] + " choice is " + arr1[i]);
    }
    else{
        console.log(i+1 + arr2[0] + " choice is " + arr1[i]);
    }
}
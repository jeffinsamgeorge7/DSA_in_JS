function BinarySearch(array,x){

    let n=array.length;
    let start=0;
    let end=n-1;
    
let mid=0
    while(start<=end){
        mid=Math.floor((start+end)/2)

        if(array[mid] === x){
            return mid;
        }
        else if(array[mid]<x){
            start =mid+1;
        }
        else{
            end =mid-1;
        }
        
    }
    return false;
}

let array=[2,4,5,7,9];
let x= 9;
let data=BinarySearch(array,x);

if(!data){
    console.log("Number not in the list")
}
else{
    console.log("The number is in the position:",data)
}

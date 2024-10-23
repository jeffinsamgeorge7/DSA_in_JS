const sorting= (arr)=>{
      let n=arr.length;  //define length
      for(let i=0;i<n-1;i++){   //read each value till second last one  i=1  first value
        for(let j=i+1;j<n;j++){   // read next value till last one      j=i+1 second value
                if(arr[i]>arr[j]){
                    let temp=arr[i];  // store first value in temp       temp = A
                    arr[i]=arr[j];    // store next value in first       A=B
                    arr[j]=temp       // store temp value in next        B= temp(value of A) swapping
                } 
        }
      }
      return arr; // return sorted array
}
let arr=[11,4,2,6,5,1,8,3,7]
console.log("The unsorted array is:",arr)
console.log("The sorted array is:",sorting(arr));

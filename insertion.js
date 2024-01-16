let data=[60,30,3,9,10,50];
let newE1=90;
let position=2;
// console.log(data)
for(let i= data.length-1; i>=0;i--){
    // console.log(data[i])
   if(i>=position){
     data[i+1]=data[i];
       if(i==position){
        data[i]=newE1;
       }
    }

}
console.log(data)
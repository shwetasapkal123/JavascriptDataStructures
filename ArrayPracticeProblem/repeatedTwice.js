let a=100;
let numArr=new Array();
for(i=1;i<a;i++)
{
    if(i%11==0)
    {
        numArr.push(i);
    }  
}
console.log(numArr.length);
console.log("repeated number digits are: "+numArr);

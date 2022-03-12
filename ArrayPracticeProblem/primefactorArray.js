let prompt=require('prompt-sync')();
let primeFactorArray=new Array();
num=parseInt(prompt(console.log("Enter number")));
for(i=2;i<=num/i;i++)
{
while(num%i==0)
{
    console.log("i= "+i+" factor= "+num);
    num=num/i;
    primeFactorArray.push(i);
}
}

console.log("prime factors are "+primeFactorArray)

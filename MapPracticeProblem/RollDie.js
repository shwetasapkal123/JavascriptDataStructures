
//for(i=0;i<6;i++)
//{
//let dieNum=Math.floor(Math.random()*6)+1;
//console.log(dieNum);
//}

//create function using lambda to get random value
let getRandomDieValue=()=>Math.floor(Math.random()*6)+1;
//created map to store value
let diceValueMap=new Map();
limit=10;
count=0;
while(count<limit)
    {
        countElement=0;
        //getting random dice value
        let diceRoll=getRandomDieValue();
        //checking value already present in the map using has method
        if(diceValueMap.has(diceRoll))
        {
            countElement=diceValueMap.get(diceRoll)+1;
        }
        diceValueMap.set(diceRoll,countElement);
        if(countElement>count)
        {
            count=countElement;
        }
        for(let [key,value] of diceValueMap)
        {
            console.log("dice value: "+key+ " dice count: "+value);
        }
    }
    FindMaxMinDiceRoll(diceValueMap);


function FindMaxMinDiceRoll(diceValueMap)
{
let max=0;
let min=11;
let maxDiceRoll,MinDiceRoll;
for(let [key,value] of diceValueMap)
{
    if(value>max)
    {
        max=value;
        maxDiceRoll=key;
    }
    if(value<min)
    {
        min=value;
        minDiceRoll=key;
    }
}
console.log("Maximum dice rolled: "+maxDiceRoll+" min dice rolled: "+MinDiceRoll);
}

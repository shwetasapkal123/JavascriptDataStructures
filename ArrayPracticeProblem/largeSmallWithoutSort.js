//1a.-Generating 10 random 3 digit number
let randomNumber=0;
let randomArray=new Array();
    for(let i=0;i<10;i++)
    {
        randomNumber=Math.floor(Math.random()*899)+100;
        console.log(randomNumber);
        //1b-Srored random values in the array   
        randomArray.push(randomNumber);
    }

    let n=randomArray.length;
    console.log("size is "+n);
    console.log(randomArray);
    secondMinimumWithoutSort(randomArray);
    secondMaximumWithoutSort(randomArray);
    secondSmallUsingSort(randomArray);
    secondMaxNumberUsingSort(randomArray);

    //1c-second minimum number
    function secondMinimumWithoutSort(randomArr)
     {
        firstNum = randomArr[0];
        secondNum = randomArr[1];
        for (let i = 0; i < 10; i++) {
            if (randomArr[i] < firstNum) {
                //Swap the numbers
                secondNum = firstNum;
                firstNum = randomArr[i];
            }
            if (randomArr[i] < secondNum && randomArr[i] != firstNum) {
                //Swap the numbers
                secondNum = randomArr[i]
            }
        }
        console.log("Second Minimum number is: "+secondNum);
    }

    //1c-second large number
    function secondMaximumWithoutSort(randomArr) {
        firstNum = randomArr[0];
        secondNum = randomArr[1];
        for (let i = 0; i < 10; i++) {
            if (randomArr[i] > firstNum) {
                //Swap the numbers
                secondNum = firstNum;
                firstNum = randomArr[i];
            }
            if (randomArr[i] > secondNum && randomArr[i] != firstNum) {
                //Swap the numbers
                secondNum = randomArr[i]
            }
        }
        console.log("second large number is: "+secondNum);
    }

    function secondSmallUsingSort(randomArr)
    {
        let sortedArr=randomArr.sort();
        console.log("Second Small Number using sort is: "+sortedArr[1]);
    }
    function secondMaxNumberUsingSort(randomArr)
    {
        let sortedArr=randomArr.sort();
        console.log("Second large number using sort is: "+sortedArr[8]);
    }
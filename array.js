const num = [
    1, 2, 3, 2, 3, 3, 4, 33, 5, 6, 6, 7, 88, 8, 7, 6, 5, 55, 6, 7, 7, 7,
  ];
  //filter
  const evenNumbers = num.filter((num) => num % 2 == 0);
  console.log(evenNumbers);
  
  const oddNumbers = num.filter((num) => num % 2 != 0);
  console.log(oddNumbers);
  
  //map
  const squreNumber = evenNumbers.map((num) => num ** 2);
  console.log(squreNumber);
  
  //find()
  const FirstGrater50 = squreNumber.find((num) => num > 50);
  console.log(FirstGrater50);
  
  //concat
  const additionNumber = [1211, 3232];
  const comineArray = squreNumber.concat(additionNumber);
  console.log(comineArray);
  
  //copywithin  
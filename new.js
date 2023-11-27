function Map(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  }
  
  // if (data.length > 0) {
  //   const sortedData = ownMap(data,(item) => ({
  //     rate: item.rate,
  //     date: item.exchangedate
  //     //noname: item.txt
  //   }));
  
  const numbers = [1, 2, 3, 4, 5];
  const doubled = Map(numbers, (num) => num * 5);
  console.log(doubled); 
  //
  // function iterateArray(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log(arr[i]); 
     
  //   }
  // }
  
  // // Приклад використання
  // const num = [1, 2, 3, 4, 5];
  // iterateArray(numbers);
  
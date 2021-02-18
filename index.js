const arr = [1, 3, 6, -2];
const k = -1; // Modify the value to check if a sum in arr has this value as result

const sums = (arr, sum) => {
  let pairs = [];
  let numList = [];

  for(let i = 0; i < arr.length; i++){
    let currNum = arr[i];
    let diff = sum - currNum;

    if(numList.includes(diff)){
      pairs.push([currNum, diff]);
    };
    numList.push(currNum);
  };
  console.log(pairs);

  if(pairs.length){
    return true;
  } else{
    return false;
  };
};

console.log(sums(arr, k)); // return true or false

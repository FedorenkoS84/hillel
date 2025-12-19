const handelNum = (number, onOddNumber, onEvenNumber) => {
  if (number % 2 === 0) {
    onEvenNumber(number);
  } else {
    onOddNumber(number);
  }
};

const handelOdd = (number) => {
  console.log(`Number ${number} is Odd`);
};
const handelEven = (number) => {
  console.log(`Number ${number} is Even`);
};

handelNum(2, handelEven, handelOdd);
handelNum(5, handelEven, handelOdd);

const number = (num) => {
  if (num <= 0) return;
  console.log(num);
  number(num - 1);
};

number(5);

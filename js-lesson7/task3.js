const divide = (numerator, denominator) => {
  if (typeof numerator != "number" || typeof denominator != "number") {
    throw new Error("Один або обидва аргументи не є числом");
  }
  if (denominator === 0) {
    throw new Error("Ділення на нуль заборонено");
  }

  return numerator / denominator;
};

try {
  console.log(divide(10, 2));
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log(divide(5, 0));
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log(divide("a", 5));
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Робота завершена");
}

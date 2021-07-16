let str = `1000.00!=
125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10`;

const balance = (book) => {
  const lines = book.split`\n`;
  const budget = parseInt(lines.shift()); // store an Original Balance
  // we need to clear all record from special characters, so
  // a helper function: remove special characters
  // (only alphanums and a '.' are allowed)
  const filterChars = (r) => r.split``.filter((a) => /[\w,\.]/.test(a)).join``;

  // take each line from a book
  const expensesLines = lines
    // split each line by a whitespace
    .map((record) => record.split` `)
    // store only not empty lines
    .filter((r) => r[2])
    // for that lines take 3 records
    .map(
      (r) => [
        r[0], // take a record's number, it's a string
        filterChars(r[1]), // remove special chars from a title
        parseFloat(filterChars(r[2])),
      ] // remove special chars from a price
      // and take a float number value
    );

  let balance = budget;
  let totalExpense = 0;
  const calculateLines = expensesLines.map((r) => {
    balance -= r[2]; // calculate current balance
    totalExpense += r[2]; // calculate a Total expense
    // for a result formatted line
    return `${r[0]} ${r[1]} ${r[2].toFixed(2)} Balance ${balance.toFixed(2)}`;
  });
  // return all records as a text
  // Original balance
  return (
    `Original Balance: ${budget.toFixed(2)}\r\n` +
    // join all formatted into a one string
    calculateLines.join("\r\n") +
    "\r\n" +
    // add a Total expense
    `Total expense  ${totalExpense.toFixed(2)}\r\n` +
    // and calculate an Average expense
    `Average expense  ${(totalExpense / calculateLines.length).toFixed(2)}`
  );
};

console.log(balance(str));

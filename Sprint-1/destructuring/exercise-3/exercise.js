let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
console.log("QTY     ITEM                TOTAL");

let totalPence = 0;

for (const { itemName, quantity, unitPricePence } of order) {
  const itemTotalPence = quantity * unitPricePence;
  totalPence += itemTotalPence;

  const itemTotalPounds = (itemTotalPence / 100).toFixed(2);

  // format spacing
  const qty = String(quantity).padEnd(8);
  const name = itemName.padEnd(20);

  console.log(`${qty}${name}${itemTotalPounds}`);
}

console.log("");
console.log(`Total: ${(totalPence / 100).toFixed(2)}`);

let products = [{
    name:"laptop",
    category: "electronics",
    price: 1500,
    inventory: 15,
},
{
    name: "jacket",
    category: "apparel",
    price: 50,
    inventory: 10
},
{
    name: "fruits",
    category: "groceries",
    price: 5,
    inventory: 5
},
{
    name: "soap",
    category: "household",
    price: 15, 
    inventory: 20

},
{
    name: "backpack",
    category: "other",
    price: 30,
    inventory: 10
}

]

// for ..of loop with switch statement for product categories to apply discounts
for (const product of products) {
    let discount = 0;

    switch (product.category){
        case "electronics":
            discount = 0.20;
            break;
            
        case "apparel":
            discount = 0.15; 
            break;

        case "groceries" :
        case "household" : 
            discount = 0.10;
            break;
        
        default: 
            discount = 0    

    }
        // application of product category discounts 
    const discountedPrice = product.price * (1-discount);
    console.log(
        `${product.name} (${product.category}): Original Price $${product.price}, Discounted Price $${discountedPrice}`
    );
}

console.log(`-----------------------`)

// creation of customer specific discount variable and if-else if chain to apply customer specific discounts
let customerTypes = ["regular", "student", "senior"]
let customerTypeDiscount = 0

if (customerTypes === "student") {

    customerTypeDiscount = 0.05;

} else if (customerTypes === "senior") {

  customerTypeDiscount = 0.07;
    
} 
else(customerTypes === "regular"); {

    customerTypeDiscount = 0

}
// Simulation of 3 customers checkout processes
let customerOrder = [
  ["laptop", "soap"],        
  ["jacket", "fruits"],      
  ["backpack", "soap", "fruits"] 
];

// Checkout  for loop
for (let i = 0; i < 3; i++) {
  const cart = customerOrder[i];
  const customerType = customerTypes[i]; 
  let customerTypeDiscount = 0;

  
  if (customerType === "student") {
    customerTypeDiscount = 0.05;
  } else if (customerType === "senior") {
    customerTypeDiscount = 0.07;
  } else {
    customerTypeDiscount = 0;
  }

  let totalCost = 0;

  for (const itemName of cart) {
    let product = products.find(p => p.name === itemName);
    if (product && product.inventory > 0) {
      let categoryDiscount = 0;

      // category discount
      switch (product.category) {
        case "electronics":
          categoryDiscount = 0.20;
          break;
        case "apparel":
          categoryDiscount = 0.15;
          break;
        case "groceries":
        case "household":
          categoryDiscount = 0.10;
          break;
        default:
          categoryDiscount = 0;
      }

      let discountedPrice = product.price * (1 - categoryDiscount);
      discountedPrice *= (1 - customerTypeDiscount);

      totalCost += discountedPrice;

      // Decrease inventory
      product.inventory -= 1;
    } else {
      console.log(`Product ${itemName} is not available.`);
    }
  }

  console.log(`Customer ${i + 1} (${customerType}) Total: $${totalCost}`);
}

console.log(`----------------------`);



console.log("Updated Inventory:");
for (const product of products) {
  console.log(`${product.name}: ${product.inventory} remaining`);
}

console.log(`----------------------`);


// for in loop to log key/value pairs for a single product after discount is applied 

const exampleProduct = products[2]; // "fruits"
const exampleCustomerType = "senior"; 

console.log(`Details for product: ${exampleProduct.name} (Customer Type: ${exampleCustomerType})`);

// Log key/value pairs only
for (const key in exampleProduct) {
  console.log(`${key}: ${exampleProduct[key]}`);
}

// Calculate discounted price after logging key-value pairs
let categoryDiscount = 0;

switch (exampleProduct.category) {
  case "electronics":
    categoryDiscount = 0.20;
    break;
  case "apparel":
    categoryDiscount = 0.15;
    break;
  case "groceries":
  case "household":
    categoryDiscount = 0.10;
    break;
  default:
    categoryDiscount = 0;
}

let customerDiscount = 0;
if (exampleCustomerType === "student") {
  customerDiscount = 0.05;
} else if (exampleCustomerType === "senior") {
  customerDiscount = 0.07;
}

const newPrice = exampleProduct.price * (1 - categoryDiscount) * (1 - customerDiscount);
console.log(`newPrice (after discounts): ${newPrice}`);
console.log(`---------------`)


// Product Info after Inventory Update 
for(const product of products){
    console.log(`Product: ${product.name}`);
    for(const [key, value] of Object.entries(product)){
        console.log(`${key}: ${value}`);
    }
    console.log(`------------`)
}

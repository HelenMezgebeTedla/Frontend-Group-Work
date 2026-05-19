function getInStockNames(productsArray) {
  let inStockNames = [];

  for (let i = 0; i < productsArray.length; i++) {
    if (productsArray[i].stock > 0) {
      inStockNames.push(productsArray[i].name);
    }
  }

  return inStockNames;
}

const products = [
  { name: "T-shirt",    price: 800,  stock: 12,  category: "clothing"    },
  { name: "Headphones", price: 2500, stock: 0,   category: "electronics" },
  { name: "Notebook",   price: 150,  stock: 45,  category: "stationery"  },
  { name: "Sneakers",   price: 3200, stock: 5,   category: "clothing"    },
  { name: "Pen",        price: 50,   stock: 200, category: "stationery"  },
];

const availableItems = getInStockNames(products);
console.log(availableItems);

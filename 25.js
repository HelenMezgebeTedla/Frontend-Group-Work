function getAvailableClothing(productsArray) {
  let availableClothing = [];

  for (let i = 0; i < productsArray.length; i++) {
    if (productsArray[i].category === "clothing" && productsArray[i].stock > 0) {
      availableClothing.push(productsArray[i]);
    }
  }

  return availableClothing;
}

const products = [
  { name: "T-shirt",    price: 800,  stock: 12,  category: "clothing"    },
  { name: "Headphones", price: 2500, stock: 0,   category: "electronics" },
  { name: "Notebook",   price: 150,  stock: 45,  category: "stationery"  },
  { name: "Sneakers",   price: 3200, stock: 5,   category: "clothing"    },
  { name: "Pen",        price: 50,   stock: 200, category: "stationery"  },
];

const result = getAvailableClothing(products);
console.log(result);

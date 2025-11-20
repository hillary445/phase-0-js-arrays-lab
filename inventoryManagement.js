// Write your code here
//Storing products
const products = ["Laptop", "Phone", "Headphones", "Monitor"]

//Log details of first product
function logFirstProduct(){
  console.log(products[0]);
}

//Add product to the array
function addProduct(product){
  products.push(product);
}

//Update a product name
function updateProductName(index, newName){
  products[index]=newName;
}

//Removing the last product from the array
function removeLastProduct(){
  products.pop();
}






// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};

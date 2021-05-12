class Product{
  constructor(productName,productDescription,productNumber){
    this.productName = productName
    this.productDescription = productDescription
    this.productNumber = productNumber
  }
}

let iPhone = new Product(`Apple iPhone 12`, `Apple iPhone 12 Smartphone  128 GB   12 MP Camera`, 1069374430)
let samsung = new Product(`Samsung S21`, `Samsung Galaxy S21 256 GB   104 MP Camera`, 1069374429)

class Store{
  constructor(){
    this.products = []
  }
  addProduct(obj){
    this.products.push(obj)
  }
  delProduct(id){
    for(let product in this.products){
      if (id == this.products[product].productNumber){
      this.products.splice(product,1)
      }
    }
  }
  search(str){
    // for(let product in this.products){
    //   if (this.products[product].productName.toLowerCase().includes(str.toLowerCase())){
    //     console.log(`Found it! ==> ${this.products[product].productName}`);
    //     }
    //   else if(this.products[product].productDescription.toLowerCase().includes(str.toLowerCase())){
    //     console.log(`Found it! ==> ${this.products[product].productName}`);
    //     }
    //   else if(this.products[product].productNumber == str){
    //     console.log(`Found it! ==> ${this.products[product].productName}`);
    //     }
    // }
    let result = this.products.filter(item => {
      return item.productName.includes(str) || item.productDescription.includes(str) ||item.productNumber.toString().includes(str)
    })
    console.log(result);
  }
}

let store = new Store
store.addProduct(iPhone)
store.addProduct(samsung)
// store.delProduct(1069374430)
// store.search("Apple")
store.search("1069374430")
// store.search("128 GB ")
// console.log(store);

class ProductUI extends Store{
  addAlert(alert){
    console.log("I am printing a message", alert);
  }
  printAll(){
    console.log(this.products);
  }
  deleteAll(){
    this.products = []
  }
}

let UI = new ProductUI
console.log(UI);
UI.addAlert("WOOT WOOT")
UI.addProduct(iPhone)
UI.addProduct(samsung)
UI.printAll()
UI.deleteAll()
console.log(UI);

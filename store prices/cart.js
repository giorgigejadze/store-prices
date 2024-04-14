class shoppingCart{
    constructor(id , name , price , quantity){
          this.id = id ;
          this.name = name;
          this.price = price ;
          this.quantity = quantity 
    }
}

const product = [
    {
        id: 0,
        name: "banan",
        price: 50 ,
        quantity: 10
    },
    {
        id: 1,
        name: "apple",
        price: 3,
        quantity: 5
    },
    {
        id: 2 ,
        name: "orange",
        price: 4,
        quantity: 6
    },
    {
        id: 3,
        name: "cocacola",
        price: 3,
        quantity: 2
    },
    {
       id: 4,
       name: "fanta",
       price: 3,
       quantity: 2
    },
    {
        id: 5,
        name: "Strawberry",
        price: 5,
        quantity: 10
    }
];








const prompt = require('prompt-sync')();
 
let gg = false;
let using;
while(!gg){
  using = prompt("Enter the id of the product you want:")

  if(using === ""){
    gg = true;
    console.log(this.price * this.quantity);
  }else {
    console.table(
        product.filter(product => product.id == using)
    );
  }
}

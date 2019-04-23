import _ from "lodash";

export const Total = (prices) =>{
  const total = _.chain(prices)
  .map((list) => {
    return Object.values(list);
  })
  .flatten()
  .map((price) => {
    return parseFloat(price);
  })
  .reduce(function(sum, num) {
    return sum + num;
  })
  .value();

  return total 
}

export const Purchase = (product, total,user) =>{
 function purchase(prod, total,user){
     this.Products = prod
     this.Total = total
     this.User = user
 }
 const list = new purchase(product,total,user)
 return list
}
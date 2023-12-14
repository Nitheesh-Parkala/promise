const cart =["shoes","pants","kurta"];

// createOrder(cart,function(){
//     proceedToPayment(orderId);
// }); 

const promise = createOrder(cart);

//{data:undefine} it is nothing but a empty object were it hold a data
// But after some times data will be filled with some value like {data: orderDetails}

promise.then(function(orderId){
    proceedToPayment(orderId);
});
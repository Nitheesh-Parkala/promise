const cart =["shoes","pants","kurta"];

createOrder(cart); //orderId- here it will create a order Id.

proceedToPayment(orderId);

// So here Two API are asynchronous . we don't know how much time will take and they are depend on each other.
//so we create call back function here 

createOrder(cart,function(orderId){
    proceedToPayment(orderId);
}); 

// so we will get issue like inversion of control so we use here promise
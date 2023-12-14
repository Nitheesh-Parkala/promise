createOrder(cart, function(orderId){

    proceedToPayment(orderId,function(paymentInfo){

        showOrderSummary(paymentInfo,function(){
               updateWalletBalance()  
        });
    });
}); 

createOrder(cart)
.then(function(orderId){
  return  proceedToPayment(orderId)
})

.then(function(paymentInfo){

     return   showOrderSummary(paymentInfo)
})
.then(function(paymentInfo){

     return   updateWalletBalance(paymentInfo)
})

// we can write like this also using arrow function
// createOrder(cart) 
// .then(orderId => proceedToPayment(orderId))
// .then(paymentInfo => showOrderSummary(paymentInfo))
// .then(paymentInfo => updateWalletBalance(paymentInfo))
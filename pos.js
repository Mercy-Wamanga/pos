// A javascript program that returns quantity,number of items sold,total cost and balance of itemsgit 

class pos{

    constructor(quantity,amount,amount_received) {
        this.quantity = quantity;
        this.amount = amount;
        this.amount_received=amount_received;
      }



      totalCost(){
        return this.quantity*this.amount;
         
      }

      balance(){

         return this.amount_received-(this.quantity*this.amount);
      }

}

let pos1 = new pos(2,1000,10000);
console.log("Number of items sold:"+" "+pos1.quantity);
console.log("Total cost:"+" "+pos1.totalCost());
console.log("Amount Received:"+" "+pos1.amount_received);
console.log("Balance:"+" "+pos1.balance());





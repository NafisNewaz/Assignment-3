// kilometerToMeter
function kilometerToMeter(kiloMeter)
 {
    if(kiloMeter>=0)
    {
    var meter=kiloMeter*1000;  /** 1 kilometer=1000 meter */
    return meter;
    }
    else
    {
    return "Distace can't be neagative!" /** show message when user give negative value as a input */
    }
  }         
 
  

// budgetCalculator
 function budgetCalculator(watch,phone,laptop)
 {
   if(watch,phone,laptop>=0)
   {
   var watchPrice=50; 
   var phonePrice=100;
   var laptopPrice=500;
   var watchBudget=watchPrice*watch;     /**watch price=50 x how many watch wanted to buy */
   var phoneBudget=phonePrice*phone;      /**Phone price=100 x how many phone wanted to buy */
   var laptopBudget=laptopPrice*laptop;    /**Laptop price=500 x how many laptop wanted to buy */

   var totalBudget=watchBudget+phoneBudget+laptopBudget;
    return totalBudget;
   }
   else
   {
    return "Budget canot be negative!" /** show this message when user put negative input */
   }
 }



// hotelCost
  function hotelCost(n)
  {
    while(n>0)
    {  
        for(var i=0; i<=n;i++)
        {
        var elements=n[i];
        if(n<=10 && n>=1 ) 
        {
        var moneyNeed=n*100;   /**(1st 10days)  per day cost 100 */
        return moneyNeed;
        }  

        else if( n<=20 && n>=11)
        {
         var moneyNeed=(80*(n-10))+(100*10);   /** 1st 10days  cost=100*10 , from 11 days to 20 days  per day cost 80*/
         return moneyNeed;
        }
        else
        {                                   
         var moneyNeed=(50*(n-20))+(1000+800);  /** 1st 10 days cost=1000, from 11 days to 20 days cost=80*10=800  */
         return moneyNeed; 
        }
         }
      }
      return "put the input again! Day cannot be zero or negative. ";    /** Days can't be zero or negative */
  }
        


// megaFriend 
function megaFriend(names)
{
if( names.length==0 )  /** name can't be null . */
  {
  return "Invalid Input!";  /** show this message for handle invalid string */
  }
else
  {
  var bigName=names[0]; 
  for(var i=0;i<names.length;i++)
  {
    var element=names[i];
  if(bigName.length<element.length)
   {
   bigName=element;
   }
  } 
 return bigName;
  }  
}


    






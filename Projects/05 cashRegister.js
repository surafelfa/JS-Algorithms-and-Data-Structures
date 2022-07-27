function checkCashRegister(price, cash, cid) {
    /*
      price :- purchase price
      case  :- payment as the second argument
      cid   :- cash in drawer, 2D array 
    */
    let change = {
      "status": '',
      "change": []
    };
    let cashInDrawer = 0;
    cid.forEach(value=>{
      cashInDrawer += value[1];
    })
    cashInDrawer = cashInDrawer.toFixed(2);
    let  currencyUnit = {
      "PENNY": 0.01,      //0      
      "NICKEL": 0.05,     //1
      "DIME": 0.1,        //2
      "QUARTER": 0.25,    //3
      "ONE": 1,           //4
      "FIVE": 5,          //5
      "TEN": 10,          //6
      "TWENTY": 20,       //7
      "ONE HUNDRED": 100  //8
    };
    let ex = cash - price;
    /*  
      1.  Return {status: "INSUFFICIENT_FUNDS", change: []} if 
          cash-in-drawer is less than the change due, or if you 
          cannot return the exact change.
      2.  Return {status: "CLOSED", change: [...]} with cash-in-
          drawer as the value for the key change if it is equal 
          to the change due.
      3.  Return {status: "OPEN", change: [...]}, with the change 
          due in coins and bills, sorted in highest to lowest order,
           as the value of the change key.
    */
    if(ex > cashInDrawer){
     change['status'] = "INSUFFICIENT_FUNDS" 
    }
    else if(ex == cashInDrawer){
      change['status'] = "CLOSED"
      for(let i = 0; i < cid.length; i++){
        change['change'].push(cid[i]);
      }
    }else{
      let givenUnit = [], numberOfUnit;
      for(let i = cid.length-1; i != -1; i--){
        if(cid[i][1] != 0){
          numberOfUnit = parseInt(ex/currencyUnit[cid[i][0]]);
          if(numberOfUnit > 0){
            if(numberOfUnit * currencyUnit[cid[i][0]] > cid[i][1]){
              givenUnit = [cid[i][0], cid[i][1]]
              ex = (ex - cid[i][1]).toFixed(2);
            }
            else{function checkCashRegister(price, cash, cid) {
                /*
                  price :- purchase price
                  case  :- payment as the second argument
                  cid   :- cash in drawer, 2D array 
                */
                let change = {
                  "status": '',
                  "change": []
                };
                let cashInDrawer = 0;
                cid.forEach(value=>{
                  cashInDrawer += value[1];
                })
                cashInDrawer = cashInDrawer.toFixed(2);
                let  currencyUnit = {
                  "PENNY": 0.01,      //0      
                  "NICKEL": 0.05,     //1
                  "DIME": 0.1,        //2
                  "QUARTER": 0.25,    //3
                  "ONE": 1,           //4
                  "FIVE": 5,          //5
                  "TEN": 10,          //6
                  "TWENTY": 20,       //7
                  "ONE HUNDRED": 100  //8
                };
                let ex = cash - price;
                /*  
                  1.  Return {status: "INSUFFICIENT_FUNDS", change: []} if 
                      cash-in-drawer is less than the change due, or if you 
                      cannot return the exact change.
                  2.  Return {status: "CLOSED", change: [...]} with cash-in-
                      drawer as the value for the key change if it is equal 
                      to the change due.
                  3.  Return {status: "OPEN", change: [...]}, with the change 
                      due in coins and bills, sorted in highest to lowest order,
                       as the value of the change key.
                */
                if(ex > cashInDrawer){
                 change['status'] = "INSUFFICIENT_FUNDS" 
                }
                else if(ex == cashInDrawer){
                  change['status'] = "CLOSED"
                  for(let i = 0; i < cid.length; i++){
                    change['change'].push(cid[i]);
                  }
                }else{
                  let givenUnit = [], numberOfUnit;
                  for(let i = cid.length-1; i != -1; i--){
                    if(cid[i][1] != 0){
                      numberOfUnit = parseInt(ex/currencyUnit[cid[i][0]]);
                      if(numberOfUnit > 0){
                        if(numberOfUnit * currencyUnit[cid[i][0]] > cid[i][1]){
                          givenUnit = [cid[i][0], cid[i][1]]
                          ex = (ex - cid[i][1]).toFixed(2);
                        }
                        else{
                           givenUnit = [cid[i][0], numberOfUnit * currencyUnit[cid[i][0]]];
                           ex = (ex - numberOfUnit * currencyUnit[cid[i][0]]).toFixed(2); 
                        }
                        change['change'].push(givenUnit)
                      }
                    }    
                  }
                  if(ex != 0){
                    change['status'] = 'INSUFFICIENT_FUNDS';
                    change['change'] = [];
                  }
                  else{
                    change['status'] = 'OPEN';
                  }
                }
                return change; //change  :- an object with a status key and a change key
              }
              
              checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
               givenUnit = [cid[i][0], numberOfUnit * currencyUnit[cid[i][0]]];
               ex = (ex - numberOfUnit * currencyUnit[cid[i][0]]).toFixed(2); 
            }
            change['change'].push(givenUnit)
          }
        }    
      }
      if(ex != 0){
        change['status'] = 'INSUFFICIENT_FUNDS';
        change['change'] = [];
      }
      else{
        change['status'] = 'OPEN';
      }
    }
    return change; //change  :- an object with a status key and a change key
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
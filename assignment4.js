
function calculateMoney(ticketSale){
    const perTicketValue = 120;
    const perDayGuardSalary = 500;
    const stafQuantity = 8;
    const perStafCost = 50;

    if(ticketSale < 0){
        return 'Invalid Number';
    }
    else{
        const totalIncome = perTicketValue * ticketSale;
        const totalExpenditure = perDayGuardSalary + stafQuantity * perStafCost;
        const remainingMoney = totalIncome - totalExpenditure;
        return remainingMoney;
    }
    }




function checkName(name){
    let c = name[name.length - 1];
    let chars = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    
    if(chars.includes(c)){
        return 'Good Name';
    }
    else{
        return 'Bad name';
    }
    }




function deleteinvalids(array){
        const tempArray = [];
        array.forEach(element => {
       if(typeof(element) === 'string'){
        tempArray.push(element);
       }  
    });
    return tempArray;
    
    }    

    

function monthlySavings(arr, livingCost){
        
        let saving = 0;

        if(Array.isArray(arr) === false){
            return 'Invalid input';
        }
        if(typeof livingCost !== 'number'){
            return 'Invalid Input';
        }
        
        arr.forEach(element => {
            let tex = 0;
            let texAmount = element - 3000;
            if(texAmount >= 0){
                tex = element * 0.2;
            }
            saving = saving + element - tex;
        });
        saving = saving - livingCost;
        return saving;
        

    }





    
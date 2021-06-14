//console.log('Greetings from Vivek Joshi');

/*
Methods used:
.getElenemtbyId() : returns the element that has the Id attribute with the specified value.
.toFixed(NUMBER) : used to fix the input upto "NUMBER" decimal places and return type is string.

Function used:
isNaN(input) : checks whether a value is NaN or not.
*/



//flag used for decision making : whether to execute the calculations or not.........( line 61)
let flag = 0;


/* calculate : it contains to core logic and calculation of this basic web page.
   it is activated by using calculate button on web page.
*/
const calculate = () => {

    
// bill is the amount needed to pay.

    let bill = document.getElementById('amount_of_bill').value;
    try {
        if (bill == '')
        throw 'Bill amount is empty';

        if (isNaN(bill))
        throw 'please enter valid bill';
        
        bill = Number(bill);
        if (bill<1)
        throw 'Please enter Bill amount in positive numbers only';
    }
    catch (err){
        alert(err);
        flag = 1;
    }
    finally{
        document.getElementById('amount_of_bill').value = '';
        flag = 0;
    }


//per : it is the percentage of tip.

    if (document.getElementById('tip_percent').selectedIndex == 0){
        alert('Please Rate out customer Service to proceed');
        flag = 1;
    }
    let per = Number(document.getElementById('tip_percent').value);
    tip_percent.selectedIndex = 0;
    

//poople : total number of people on the table.

    if (document.getElementById('Tot_people').selectedIndex == 0){
        alert('Kindly select total number of people');
        flag = 1;
    }
    let people = Number(document.getElementById('Tot_people').value);
    Tot_people.selectedIndex = 0; 



//tip_p_per = tip per person
//tot_amt_p_person = total payable amount per person 

    if (flag == 0){
        let tot_tip = bill*(per/100);

        tip_p_per = tot_tip / people;
        tip_p_per = tip_p_per.toFixed(2);
        tip_p_per = Number(tip_p_per);

        document.getElementById('tip_per_person').value = '$' + tip_p_per;
        
        tot_amt_p_person = ( bill/ people) + tip_p_per;
        document.getElementById('total_per_person').value= '$' + tot_amt_p_person;
    
    }
    
}

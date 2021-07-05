var resultDay;
var resultMonth;
var resultYear;
var TodayDate= new Date();
var DateVal;
console.log(TodayDate)

var day = TodayDate.getDate();
console.log(day);
var month = TodayDate.getMonth() + 1;
console.log(month);
var year = TodayDate.getFullYear();
console.log(year);

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = year + "-" + month + "-" + day;
// var today = month+"/"+day+"/"+year;
console.log(today)
document.getElementById('date').value  = today;

// function getInputValue(){
//    DateVal  = document.getElementById("date").value;
//    const date1 = moment() //Gives you current date and time
//    date1.diff(DateVal,"days") //returns the difference between these 2 dates in days
//    ///var selectedDate = moment(DateVal, 'MM/DD/YYYY');
//  //  let Years = TodayDate.diff(DateVal, 'years');
// // let months = DateVal.diff(TodayDate, 'months');
// // let days = DateVal.diff(TodayDate, 'days');

// // console.log("Year: " + Years, ", Month: ", months-(Years*12), ", Days: ", days-(Years*365.25)-((365.25*(days- (Years*12)))/12));

// }



function getInputValue() {  
    const thirtyOneMonths =[1,3,5,7,8,10,12];
    const twentyNineMonths =[2];
    var userInput =  document.getElementById("date").value; 
    var birthdayDate = new Date(userInput);  
      console.log("my birth date"+birthdayDate)
      var bDay=birthdayDate.getDate();
       var  bMonth=birthdayDate.getMonth()+1;
       var  bYear=birthdayDate.getFullYear();

       console.log("my birth date in days"+bDay)
       console.log("my birth date in months"+bMonth)
       console.log("my birth date in years"+bYear)

     if(bYear  > year)
    {

        document.getElementById('message').innerHTML="You should enter suitable date !"; 
        return false;

    }
   else if(bYear  == year)
    {

        document.getElementById('message').innerHTML="this is date in the same year !!!!!"; 
        return false;

    }
    else {

if(bDay < day || bDay == day )
{
resultDay = day-bDay;

}
else{
    if(thirtyOneMonths.includes(bMonth)  )
{
    console.log("ggggggggggg",day);
    console.log("ggggggggggg",bDay);
    let daynumber = parseInt(day, 10);

    var tempDay= daynumber+31;
    resultDay=tempDay-bDay;
    console.log("gggggggggggggggggggggg",resultDay)
    month --;
}
else if(twentyNineMonths.includes(bMonth)  ){
    var tempDay= day+29;
    resultDay=tempDay-bDay;
    month --;
}
else{
    var tempDay= day+30;
    resultDay=tempDay-bDay;
    month --;
}

}

if(bMonth < month || bMonth == month )
{
    resultMonth = month-bMonth;
}
else{
    let monthnumber = parseInt(month, 10);

    var tempMonth= monthnumber+12;
    resultMonth=tempMonth-bMonth;
    year --;
}

resultYear = year- bYear;
console.log(resultDay)
console.log(resultMonth)
console.log(resultYear)
document.getElementById('message').innerHTML="your age is"+resultYear +" years , "+ resultMonth+" months and "+resultDay +" days !"; 

    } 



}  
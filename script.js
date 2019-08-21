var days= new Array;
days[0]= "Sunday";
days[1]= "Monday";
days[2]= "Tuesday";
days[3]= "Wednesday";
days[4]= "Thursday";
days[5]= "Friday";
days[6]= "Saturday";

var maleAkaname = {
    Sunday: "Kwasi",
    Monday: "Kwadwo",
    Tuesday: "Kwaben",
    Wednesday: "Kwaku",
    Thursday: "Yaw",
    Friday: "Kofi",
    Saturday: "Kwame"

}
var femaleAkaname = {
    Sunday: "Akosua",
    Monday: "Adwoa",
    Tuesday: "Abenaa",
    Wednesday: "Akua",
    Thursday: "Yaa",
    Friday: "Afua",
    Saturday: "Ama"

}
function validate() {
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    if (day <= 0 || day > 31) {
        alert("Date invalid");
        return false;
    }
    if (month <= 0 || month > 12) {
        alert("Month invalid");
        return false;
    }
    if (year <= 0 || year > 2019) {
        alert("Year is invalid");
        return false;
    }

    var validateObj = {
        day: day,
        month: month,
        year: year
    }
    return validateObj;
}
function getValues() {
    var ele = document.getElementsByName('gender');
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);


    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            mgender = ele[i].value;
    }

    var getValuesObj = {

        day: day,
        month: month,
        year: year,
        mgender: mgender

    }
    return getValuesObj;

}
function myFunc() {
    var validated = validate();
    if(validated === false){
        return false;
    }else{
        getValues();
        CalDayoftheWeek();
        DisplAkaname()
        return false;
    }


}

function CalDayoftheWeek() {
    var getDetails = getValues();
    var newGender = getDetails.mgender;
    var newDay = getDetails.day;
    var newMonth = getDetails.month;
    var newYear = getDetails.year;

    var a = Math.floor((14 - newMonth) / 12);
    var y = newYear - a;
    var m = newMonth + 12 * a - 2;
    var dayOfWeek = (newDay + y + Math.floor(y / 4) - Math.floor(y / 100) +
        Math.floor(newYear / 400) + Math.floor((31 * m) / 12)) % 7;

    var theDay = daysofaweek[dayOfWeek];

    return theDay;

}
function DisplAkaname() {
    var getGender = getValues();
    var gender = getGender.mgender;
    var day = CalDayoftheWeek();

    if (gender === "male") {
        var myAkanObj = maleAkaname;

        for (var akan in myAkanObj) {
            if (myAkanObj.hasOwnProperty(akan)) {
                if (akan === day) {
                    userAkanName = myAkanObj[akan];
                }
            }
        }


    } else if (gender === "female") {
        var myAkanObj = femaleAkaname;


        for (var akan in myAkanObj) {
            if (myAkanObj.hasOwnProperty(akan)) {
                if (akan === day) {
                    userAkanName = myAkanObj[akan];
                }
            }
        }

    }

    alert(userAkanName);
    return userAkanName;
}

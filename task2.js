
    var rno = 0;
var grade = new Array();
var no_of_sub = 4;
var english = 0; 
var maths = 0; 
var science = 0; 
var social = 0;
var sum = 0;
var average = 0;
var passpercentage=new Array(12).fill(0);
var pass = new Array(12).fill(0);
var fail =new Array(12).fill(0);
var no_of_stu = new Array(12).fill(0);
var totalpass=0;
var totalfail=0;
var totalstudcount=0;
var totalpasspercentage=0;
var x = 0;
var z=0;
var y="Y";
var n="N";

window.onload = function() 
{
    document.getElementById("rno").focus();
}

function myFunction() {
    var str = "REPORT CARD";
    var result = str.link("task.html");
    document.getElementById("demo").innerHTML = result;
  }

function validate()
{
    rno = parseInt(document.getElementById("rno").value,10);
    grade[x] = parseInt(document.getElementById("grade").value,10);
    english = parseInt(document.getElementById("english").value,10); 
    maths =   parseInt(document.getElementById("maths").value,10); 
    science =  parseInt(document.getElementById("science").value,10); 
    social =  parseInt(document.getElementById("social").value,10); 
    var div = document.getElementById("div").value;
    
    if(isNaN(rno))
    {
        alert("Roll number has to be entered ");
        myForm.rno.focus();
    }
    else if((rno<1)||(rno>1440))
    {
        alert("enter valid roll number in the range 1 - 1440");
    }
    else if(isNaN(grade[x]))
    {
        alert("Grade has to be entered ");
    }
    else if (myform.div.value == "") 
    {
        alert("Division has to be entered");
        myForm.div.focus();
        return false;
    }
  
    else if(isNaN(english)||isNaN(maths)||isNaN(science)||isNaN(social))
    {
        alert("Marks has to be entered ");
        
    }
    else if((english<0)||(maths<0)||(science<0)||(social<0))
    {
        alert("Marks can't be negative");
        valcleartext();
    }
    else if((english>100)||(maths>100)||(science>100)||(social>100))
    {
        alert("Marks can't be greater than 100");
        valcleartext();
    }
    else
    {
        calculate();   
    }
    x++;
    
}

function cleartext()
{
    document.getElementById("rno").value = "";
    document.getElementById("grade").value = "";
    document.getElementById("div").value = "";
    document.getElementById("english").value = "";
    document.getElementById("maths").value = "";
    document.getElementById("science").value = "";
    document.getElementById("social").value = "";
}

function valcleartext()
{
    document.getElementById("english").value = "";
    document.getElementById("maths").value = "";
    document.getElementById("science").value = "";
    document.getElementById("social").value = "";
}


function calculate()
{
    alert("MARKS ENTERED");
    sum = english+maths+science+social;
    average = (sum/no_of_sub);
    totalstudcount++;
    
    if(average>=60)
    {   pass[grade[x]]++;
        no_of_stud[grade[x]]++;
        totalpass++;  
    }
    else if(average<60)
    {
        fail[grade[x]]++;
        no_of_stud[grade[x]]++;
        totalfail++;
    }
   
    totalpasspercentage = ((totalpass / totalstudcount) * 100).toFixed(2);
    passpercentage[grade[x]] = ((pass[grade[x]] / no_of_stu[grade[x]]) * 100).toFixed(2);
    cleartext();  
}

function display()
{
    var myTable = "<h1>Final Results</h1>";
    myTable += "<table border='5'><tr><td style='width: 100px; color: red;'>Grades</td>";
    myTable += "<td style='width: 100px; color: red; font-family:'Montserrat' , sans-serif; text-align: center;'>No of students</td>";
    myTable += "<td style='width: 100px; color: red; text-align: right;'>Pass</td>";
    myTable += "<td style='width: 100px; color: red; text-align: right;'>Fail</td>";
    myTable += "<td style='width: 100px; color: red; text-align: right;'>Average</td></tr>";
    
    
    
    
    for (var i = 1; i <= 12; i++) {
        
        myTable += "<tr><td style='width: 100px;'>Grade" + i + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + no_of_stu[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + pass[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + fail[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + passpercentage[i] + "</td></tr>";
        
    }
    
    myTable += "</table>";
    myTable += "<h3>Total passed students:" + totalpass + "</h3>";
    myTable += "<h3>Total failed students:" + totalfail + "</h3>";
    myTable += "<h3>Total students are:" + totalstudcount + "</h3>";
    if(totalstudcount==0)
    {
        totalpasspercent=0;
        myTable += "<h3>Total Pass percentage:" + totalpasspercentage + "</h3>";
    }
    else{
        myTable += "<h3>Total Pass percentage:" + totalpasspercentage + "</h3>";  
    }
    
    document.getElementById("Result").innerHTML = myTable; 
}


function myFunction() {
  var f = document.getElementById("myDIV");
  if (x.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}
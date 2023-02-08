function checkresults(){
  var marks = document.getElementById("inputmarks").value;
    if(marks>=0 && marks<35){
    document.getElementById("result").innerHTML = "fail";
    }
    else if (marks>=35 && marks<=50){
      document.getElementById("result").innerHTML = "just pass";
    }
    else if (marks>=51 && marks<=100){
      document.getElementById("result").innerHTML = "pass";
    }
    else{
      document.getElementById("result").innerHTML = "enter the number 0 to 100";
    }
    }


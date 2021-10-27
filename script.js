var firstOk = false; // flag for the first operand
var setFirst = false;
var operation = ''; // saves the operation
var secondOk = false; // flag for the second operand
var setSecond = false;
var finish = false;

function getValue(val, role){
    if(role == "clear"){
        document.getElementById("first-operand").innerHTML = "";
        document.getElementById("second-operand").innerHTML = "";
        document.getElementById("operation").innerHTML = "";
        document.getElementById("result").innerHTML = "";
        firstOk = false;
        setFirst = false;
        setSecond = false;
        finish = false;
    }
    else{
        if(setFirst == false){
            if(role == 'operation' && firstOk == true){
                if(val == "add")
                    {document.getElementById("operation").innerHTML = "+";}
                if(val == "subs")
                    {document.getElementById("operation").innerHTML = "-";}
                if(val == "divide")
                    {document.getElementById("operation").innerHTML = "/";}
                if(val == "mul")
                    {document.getElementById("operation").innerHTML = "*";}
                operation = val;
                setFirst = true;
                
            }
            if(role == 'number'){
                document.getElementById("first-operand").innerHTML += val;
                firstOk = true;
            }
            
            if(role == "dot" && document.getElementById("first-operand").innerHTML.includes(".")){
                return;
            }
            else if(role == "dot"){
                document.getElementById("first-operand").innerHTML += ".";
            }
        }
        else if(finish == false){
            if(role == 'operation'){
                return;    
            }
            if(role == 'number'){
                document.getElementById("second-operand").innerHTML += val;
                secondOk = true;
                setSecond = true;
            }
            if(role == "dot" && document.getElementById("second-operand").innerHTML.includes(".")){
                return;
            }
            else if(role == "dot"){
                document.getElementById("second-operand").innerHTML += ".";
            }
    }
}
}

function calculate(){
    if(setSecond && setFirst){
        document.getElementById("result").innerHTML = "=";
        var first = document.getElementById("first-operand").innerHTML;
        first = parseFloat(first);

        var second = document.getElementById("second-operand").innerHTML;
        second = parseFloat(second);

        switch(operation){
            case "add":
                document.getElementById("result").innerHTML += first + second;
                break;
            case "subs":
                document.getElementById("result").innerHTML += first - second;    
                break;
            case "divide":
                document.getElementById("result").innerHTML += first / second;    
                break;
            case "mul":
                document.getElementById("result").innerHTML += first * second;    
                break;
        }
        finish = true;
    }
}
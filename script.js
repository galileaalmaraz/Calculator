let outputscreen = document.getElementById("outputscreen");
function display(num)
{
    outputscreen.value += num
}
function percentage(num, per)
{
    display
    return (num/100)*per;
}
function calculate() 
{
    try {
        outputscreen.value = eval(outputscreen.value)
    }
    catch(err) {
        alert("Invalid")
    }
}
function Clear() {
    outputscreen.value = ""
}
function del() {
    outputscreen.value = outputscreen.value.slice(0,-1)
}
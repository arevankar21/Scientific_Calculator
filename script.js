
let display=document.getElementById('display');
function appendToDisplay(value)
{
  display.value+=value;
}
function clearDisplay()
{
  display.value=' ';
}
function factorial()
{
  let inputValue=display.value;
  if(isNaN(inputValue) && parseInt(inputValue)==parseFloat(inputValue) && parseInt(inputValue)>=0)
  {
    let result=1;
    for(let i=1;i<=parseInt(inputValue);i++)
    {
      result *= i;
    }
    display.value=result;
  }
  else {
      display.value='Error';
    }
}
function square() {
  let inputValue = display.value;
  let result = parseFloat(inputValue) ** 2;
  display.value = result;
}
function toggleSign() {
  let inputValue = display.value;
  let result = -parseFloat(inputValue);
  display.value = result;
}
function naturalLog()
{
  let inputValue=display.value;
  let result= Math.log(parseFloat(inputValue));
  display.value=result;
}
function toDegrees()
{
  let inputValue=display.value;
  let radians=parseFloat(inputValue);
  let degrees= (radians*180) / Math.PI;
  display.value=degrees;
}
function toRadians()
{
  let inputValue=display.value;
  let degrees=parseFloat(inputValue);
  let radians=(degrees*Math.PI)/180;
  display.value=radians;
}
function calculate()
{
  try {
    display.value=eval(display.value);
  } catch (error) {
    display.value='Error';
  }
}

function itog()
{
let f1=Number(document.getElementById("field1").value);
let f2=Number(document.getElementById("field2").value);
let f3=f1*f2;
if ((f1>0)&&(f2>0))
{
document.getElementById("f3").innerHTML = f3;
}
else {document.getElementById("f3").innerHTML = "Введите корректные данные (без отрицательных чисел)";}
}

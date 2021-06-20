array=[];
function submit()
{
    n1=document.getElementById("name1").value;
    n2=document.getElementById("name2").value;
    n3=document.getElementById("name3").value;
    n4=document.getElementById("name4").value;
    n5=document.getElementById("name5").value;
array.push(n1);
array.push(n2);
array.push(n3);
array.push(n4);
array.push(n5);
document.getElementById("display").innerHTML=array;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
}
function sort()
{
array.sort();
document.getElementById("display").innerHTML=array;
}
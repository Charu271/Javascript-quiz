function myfun1(){
var val=document.getElementsByName('1');
for(var i=0;i<val.length;i++)
{
if(val[i].checked)
{
if(val[i].value==="script")
{document.getElementById("result1").innerHTML="correct";
document.getElementById("result1").style.color="green";
return true;}
else
{document.getElementById("result1").innerHTML="Incorrect";
document.getElementById("result1").style.color="red";
break;
}
}
}
return false;
}
function myfun2(){
var val=document.getElementsByName('2');
	for(var i=0;i<val.length;i++)
{
if(val[i].checked)
{
if(val[i].value==='document.getElementById("demo").innerHTML="Hello world"')
{document.getElementById("result2").innerHTML="correct";
document.getElementById("result2").style.color="green";
return true;}
else
{document.getElementById("result2").innerHTML="Incorrect";
document.getElementById("result2").style.color="red";
}
}
}
return false; 
}
function myfun3(){
var val=document.getElementsByName('3');
	for(var i=0;i<val.length;i++)
{
if(val[i].checked)
{
if(val[i].value==='both')
{document.getElementById("result3").innerHTML="correct";
document.getElementById("result3").style.color="green";
return true;}
else
{document.getElementById("result3").innerHTML="Incorrect";
document.getElementById("result3").style.color="red";
}
}
}
return false; 
}
function myfun4(){
var val=document.getElementsByName('4');
	for(var i=0;i<val.length;i++)
{
if(val[i].checked)
{
if(val[i].value==='src')
{document.getElementById("result4").innerHTML="correct";
document.getElementById("result4").style.color="green";
return true;}
else
{document.getElementById("result4").innerHTML="Incorrect";
document.getElementById("result4").style.color="red";
}
}
}
return false; 
}
function myfun5(){
var val=document.getElementsByName('5');
	for(var i=0;i<val.length;i++)
{
if(val[i].checked)
{
if(val[i].value==='false')
{document.getElementById("result5").innerHTML="correct";
document.getElementById("result5").style.color="green";
return true;}
else
{document.getElementById("result5").innerHTML="incorrect";
}
}
}
return false; 
}
function myfun6(){
var val=document.getElementsByName('6');
	for(var i=0;i<val.length;i++)
{
if(val[i].checked)
{
if(val[i].value==='alert')
{document.getElementById("result6").innerHTML="correct";
document.getElementById("result6").style.color="green";
return true;}
else
{document.getElementById("result6").innerHTML="Incorrect";
document.getElementById("result6").style.color="red";
}
}
}
return false; 
}
function myfun7(){
var val=document.getElementsByName('7');
	for(var i=0;i<val.length;i++)
{
if(val[i].checked)
{
if(val[i].value===" ")
{document.getElementById("result7").innerHTML="correct";
document.getElementById("result7").style.color="green";
return true;}
else
{document.getElementById("result7").innerHTML="Incorrect";
document.getElementById("result7").style.color="red";

}
}
}
return false; 
}
function myfun8(){
var val=document.getElementsByName('8');
	for(var i=0;i<val.length;i++)
{
if(val[i].checked)
{
if(val[i].value===" ")
{document.getElementById("result8").innerHTML="correct";
document.getElementById("result8").style.color="green";
return true;}
else
{document.getElementById("result8").innerHTML="Incorrect";
document.getElementById("result8").style.color="red";
}
}
}
return false; 
}
function myfun9(){
var val=document.getElementsByName('9');
	for(var i=0;i<val.length;i++)
{
if(val[i].checked)
{
if(val[i].value=='//')
{document.getElementById("result9").innerHTML="correct";
document.getElementById("result9").style.color="green";
return true;}
else
{document.getElementById("result9").innerHTML="Incorrect";
document.getElementById("result9").style.color="red";
}
}
}
return false; 
}
function myfun10(){
var val=document.getElementsByName('10');
	for(var i=0;i<val.length;i++)
{
if(val[i].checked)
{
if(val[i].value==='navigator')
{document.getElementById("result10").innerHTML="correct";
document.getElementById("result10").style.color="green";
return true;}
else
{document.getElementById("result10").innerHTML="Incorrect";
document.getElementById("result10").style.color="red";
}
}
}
return false; 
}
function fun(){
	array=[];
	var a1=myfun1();
	var a2=myfun2();
	var a3=myfun3();
	var a4=myfun4();
	var a5=myfun5();
	var a6=myfun6();
	var a7=myfun7();
	var a8=myfun8();
	var a9=myfun9();
	var a10=myfun10();
	array.push(a1);
	array.push(a2);
	array.push(a3);
	array.push(a4);
	array.push(a5);
	array.push(a6);
	array.push(a7);
	array.push(a8);
	array.push(a9);
	array.push(a10);
	document.getElementById("result1").style.visibility="visible";
	document.getElementById("result2").style.visibility="visible";
	document.getElementById("result3").style.visibility="visible";
	document.getElementById("result4").style.visibility="visible";
	document.getElementById("result5").style.visibility="visible";
	document.getElementById("result6").style.visibility="visible";
	document.getElementById("result7").style.visibility="visible";
	document.getElementById("result8").style.visibility="visible";
	document.getElementById("result9").style.visibility="visible";
	document.getElementById("result10").style.visibility="visible";
	if(a1===true)
{
document.getElementById("q1t").style.color="green";
}
else{
document.getElementById("q1f1").style.color="red";
document.getElementById("q1f2").style.color="red";
document.getElementById("q1f3").style.color="red";
document.getElementById("q1t").style.color="green";
}
if(a2===true)
{
	document.getElementById("q2t").style.color="green";
}
else{
document.getElementById("q2f1").style.color="red";
document.getElementById("q2f2").style.color="red";
document.getElementById("q2f3").style.color="red";
document.getElementById("q2t").style.color="green";
}
if(a3===true)
{
document.getElementById("q3t").style.color="green";
}
else{
document.getElementById("q3f1").style.color="red";
document.getElementById("q3f2").style.color="red";
document.getElementById("q3f3").style.color="red";
document.getElementById("q3t").style.color="green";
}
if(a4===true)
{
	document.getElementById("q4t").style.color="green";
}
else{
document.getElementById("q4f1").style.color="red";
document.getElementById("q4f2").style.color="red";
document.getElementById("q4f3").style.color="red";
document.getElementById("q4t").style.color="green";
}
if(a5===true)
{
	document.getElementById("q5t").style.color="green";
}
else{
document.getElementById("q5f1").style.color="red";
document.getElementById("q5t").style.color="green";
}

if(a6===true)
{
	document.getElementById("q6t").style.color="green";
}
else{
document.getElementById("q6f1").style.color="red";
document.getElementById("q6f2").style.color="red";
document.getElementById("q6f3").style.color="red";
document.getElementById("q6t").style.color="green";
}

if(a7===true)
{
	document.getElementById("q7t").style.color="green";
}
else{
document.getElementById("q7f1").style.color="red";
document.getElementById("q7f2").style.color="red";
document.getElementById("q7t").style.color="green";
}
if(a8===true)
{
	document.getElementById("q8t").style.color="green";
}
else{
document.getElementById("q8f1").style.color="red";
document.getElementById("q8f2").style.color="red";
document.getElementById("q8t").style.color="green";
}

if(a9===true)
{
	document.getElementById("q9t").style.color="green";
}
else{
document.getElementById("q9f1").style.color="red";
document.getElementById("q9f2").style.color="red";
document.getElementById("q9t").style.color="green";
}

if(a10===true)
{
	document.getElementById("q10t").style.color="green";
}
else{
document.getElementById("q10f1").style.color="red";
document.getElementById("q10f2").style.color="red";
document.getElementById("q10t").style.color="green";
}
var ct=0;
	for(var i=0;i<array.length;i++)
	{
		if(array[i]===true)
		{ct++;}
	}
	document.getElementById("result").innerHTML=`You got ${ct} out of 10`;
}
var total_seconds=60*15;
var min=parseInt(total_seconds/60);
var sec=parseInt(total_seconds%60);

var inter=setInterval(function(){
document.getElementById("time").innerHTML=`${min}:${sec}`;
if(total_seconds<0){
clearInterval(inter);
fun();
alert("time up!")
}
else{
total_seconds--;
min=parseInt(total_seconds/60);
sec=parseInt(total_seconds%60);

}
},1000);

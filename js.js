

var series1=false;
var cardProp1="";
var series2=false;
var cardProp2="";
var seriesCard1="";
var seriesCard2="";





 
var cards = [];
cards[0] = {hp:40, weight:43, height:2.11};
cards[1] = {hp:65, weight:106, height:4.11};
cards[2] = {hp:60, weight:147, height:3.11};
cards[3] = {hp:40, weight:19, height:2 };
cards[4] = {hp:50, weight:54, height:2.7};
cards[5] = {hp:70, weight:66, height:2.8};


function cardsClick(no)
{
if(no==1||no==2||no==3){
document.getElementById("1").style.display="none";
series1=true;
seriesCard1=no;
}
else if(no==3||no==4||no==5){
	if(series1!=true){
		document.getElementById("1").style.display="block";
		return;
	}

	document.getElementById("2").style.display="none";
	series2=true;
	seriesCard2=no;
}
}


function propClick(series,prop){
if((series1==false&&series==1)||(series2==false&&series==2))
{
var spn=document.getElementById(series);
spn.style.display="block";
return;
}
if(prop="hp")
prop="hp";
else if(prop="hgt")
prop="height";
else
prop="weight";

if(series1==true&&series==1){
	cardProp1=prop;
}
if(cardProp1==""&& series==2){
	alert("please select property");
}
else if(series2==true&&series==2&&cardProp1!="") {
	cardProp2=prop;
}
if(cardProp1!=""&&cardProp2!="")
{
	if(cardProp1!=cardProp2)
	{
		alert("please select same property!!!");
	}


	alert(cardProp1);
	alert(cardProp2);
	var cs1=cards[seriesCard1].cardProp1;
	var cs2=cards[seriesCard2].cardProp2;
	//var cs1=document.getElementById("c"+series1);
	//var cs2=document.getElementById("c"+seriesCard2);
}

}




/*

 var holder1 = document.getElementById('card1');
  var holder2 = document.getElementById('card2');


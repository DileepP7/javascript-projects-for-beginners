// JavaScript Document

	var bd = document.getElementsByTagName("body");
	var div1 = document.createElement("div");

	
	div1.style.background = "blue";
	div1.style.width = "800px";
	div1.style.height = "400px";
	div1.style.margin = "auto";
	div1.style.position = "relative";
	
	
	<!-------------------------------random generator function----------------------------------->
	function getRandomInt(min, max) 
	{
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	<!---------------------initialize global scope variable-------------------------->
	var x = 0;
	var y = 0;
	
	<!-------------------------------------------object calling function--------------------->
	function objcall(){
	var obj = {};
	obj.width = "50px";
	obj.height = "50px";
	obj.background = "red";
	obj.position = "absolute";
	obj.left = 10;
	obj.top = 20;
	x= 10;
	y= 20;
	
	makeobj(obj);
	}
	
	
	function makeobj(obj1){		
	rect = document.createElement("div");
	rect.style.background = obj1.background;
	rect.style.width = obj1.width;
	rect.style.height = obj1.height;
	rect.style.position = obj1.position;
	rect.style.border = obj1.border;
	rect.style.left = obj1.left+ "px";
	rect.style.top = obj1.top + "px" ;
	rect.id = "rect1";
	
	div1.appendChild(rect);
	
}



<!-----------------------move starts here------------------------>
function Direction()
{
	this.horizontal = "";
	this.vertical = "";
}

var d1 = new Direction();
d1.horizontal = "right";
d1.vertical = "up"; 

function movecall()
{
	move(d1)
}


<!--------------------------------------function to move------------------------->
function move(dir)
{	
	if(dir.horizontal == "right" && dir.vertical == "down")
	{
	x = x+10;
	y = y +10;
	rect.style.left = x + "px";
	rect.style.top = y + "px";
		
	}
	if(dir.horizontal == "right" && dir.vertical == "up")
	{
	x = x+10;
	y = y -10;
	rect.style.left = x + "px";
	rect.style.top = y + "px";
	}
	
	if(dir.horizontal == "left" && dir.vertical == "down")
	{
	x = x-10;
	y = y +10;
	rect.style.left = x + "px";
	rect.style.top = y + "px";
	}
	
	if(dir.horizontal == "left" && dir.vertical == "up")
	{
	x = x-10;
	y = y -10;
	rect.style.left = x + "px";
	rect.style.top = y + "px";
	}
	
	if(dir.horizontal == "right" && dir.vertical == "down" && y >= 300)
	{
		d1.horizontal = "right";
		d1.vertical = "up";
	}
	if(dir.horizontal == "left" && dir.vertical == "down" && y >= 350)
	{
		d1.horizontal = "left";
		d1.vertical = "up";
	}
	
	if(dir.horizontal == "right" && dir.vertical == "up" && x > 750)
	{
		d1.horizontal = "left";
		d1.vertical = "up";
	}
	
	if(dir.horizontal == "right" && dir.vertical == "down" && x > 750)
	{
		d1.horizontal = "left";
		d1.vertical = "down";
	}
	
	if(dir.horizontal == "right" && dir.vertical == "up" && y < 0)
	{
		d1.horizontal = "right";
		d1.vertical = "down";
	}
	
	if(dir.horizontal == "left" && dir.vertical == "up" && y < 0)
	{
		d1.horizontal = "left";
		d1.vertical = "down";
	}
	
	if(dir.horizontal == "left" && dir.vertical == "down" && x < 0)
	{
		d1.horizontal = "right";
		d1.vertical = "down";
	}
	if(dir.horizontal == "left" && dir.vertical == "up" && x < 0)
	{
		d1.horizontal = "right";
		d1.vertical = "up";
	}
	
}

bd[0].appendChild(div1);
objcall();
setInterval(movecall,100);
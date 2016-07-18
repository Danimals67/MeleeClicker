var choice;
var unlock;
var owned;
var costText;
var count = 0;
var coins = 100000;
var clickAmount = 1;
var timer;
var cost;
var make;
var curMake;
var coinsSec = 0;
var canvasNum = 0;
var displayType = "inline";
var stageDisplayType = "inline";
var uWidth = 200;
var uHeight = 600;
var sWidth = 200;
var sHeight = 600;
var stageCost = 1000;

var characters = ["kirby", "bowser", "zelda", "ness", "pichu", "mewtwo", "roy", "gaw", "oldLink", "youngLink", "dk", "mario", "yoshi", "ganon", "luigi", "samus", "pikachu", "drMario", "falcon", "climbers", "puff", "peach", "sheik", "marth", "falco", "fox"];

//Unlock Prices
var fPrice = 11;
var bPrice = 1001;
var aPrice = 10001;
var sPrice = 100001;

//Upgrade Prices
var click2xPrice = 50;
var kirby2xPrice = 100;

var coinCanvas;
var coinCTX;

//Character amount variables
var kirby = 1;
var bowser = 1;
var ness = 1;
var zelda = 1;
var pichu = 1;
var oldLink = 1;
var youngLink = 1;
var mewtwo = 1;
var roy = 1;
var dk = 1;
var gaw = 1;
var mario = 1;
var samus = 1;
var yoshi = 1;
var pikachu = 1;
var ganon = 1;
var drMario = 1;
var luigi = 1;
var falcon = 1;
var sheik = 1;
var climbers = 1;
var marth = 1;
var puff = 1;
var falco = 1;
var peach = 1;
var fox = 1;

//Character Production amount variables
//F tier Characters
var kirbyMake = 0.15;
var bowserMake = 0.5;
var zeldaMake = 1.25;
var nessMake = 2.5;
//B tier Characters
var pichuMake = 5;
var mewtwoMake = 10;
var royMake = 15;
var gawMake = 30;
var oldLinkMake = 40;
var youngLinkMake = 45;
var dkMake = 55;
//A tier Characters
var marioMake = 100;
var yoshiMake = 110;
var ganonMake = 125;
var luigiMake = 140;
var samusMake = 150;
var pikachuMake = 160;
var drMarioMake = 170;
//S tier Characters
var falconMake = 250;
var climbersMake = 275;
var puffMake = 300;
var peachMake = 320;
var sheikMake = 340;
var marthMake = 360;
var falcoMake = 380;
var foxMake = 400;

//Character Cost variables
//F tier Characters
var kirbyCost = 10;
var bowserCost = 50;
var zeldaCost = 150;
var nessCost = 500;
//B tier Characters
var pichuCost = 1000;
var mewtwoCost = 1500;
var royCost = 2500;
var gawCost = 3000;
var oldLinkCost = 4000;
var youngLinkCost = 4500;
var dkCost = 5000;
//A tier Characters
var marioCost = 10000;
var yoshiCost = 12000;
var ganonCost = 15000;
var luigiCost = 20000;
var samusCost = 30000;
var pikachuCost = 40000;
var drMarioCost = 50000;
//S tier Characters
var falconCost = 100000;
var climbersCost = 125000;
var puffCost = 150000;
var peachCost = 200000;
var sheikCost = 250000;
var marthCost = 350000;
var falcoCost = 400000;
var foxCost = 500000;

//Character final production variables
var kirbyCurMake = 0;
var bowserCurMake = 0;
var zeldaCurMake = 0;
var nessCurMake = 0;
var pichuCurMake = 0;
var mewtwoCurMake = 0;
var royCurMake = 0;
var gawCurMake = 0;
var oldLinkCurMake = 0;
var youngLinkCurMake = 0;
var dkCurMake = 0;
var marioCurMake = 0;
var yoshiCurMake = 0;
var ganonCurMake = 0;
var luigiCurMake = 0;
var samusCurMake = 0;
var pikachuCurMake = 0;
var drMarioCurMake = 0;
var falconCurMake = 0;
var climbersCurMake = 0;
var puffCurMake = 0;
var peachCurMake = 0;
var sheikCurMake = 0;
var marthCurMake = 0;
var falcoCurMake = 0;
var foxCurMake = 0;

window.onload = function() {
    coinCanvas = document.getElementById("coinCanvas");
	coinCanvas.addEventListener("click", clickPos, false);
    ctx = coinCanvas.getContext("2d");
	document.getElementById("f").style.marginLeft = (window.innerWidth / 2) - 48;
	document.getElementById("b").style.marginLeft = (window.innerWidth / 2) - 48;
	document.getElementById("a").style.marginLeft = (window.innerWidth / 2) - 48;
	document.getElementById("s").style.marginLeft = (window.innerWidth / 2) - 48;
	document.getElementById("2xClickPrice").innerHTML = click2xPrice;
	document.getElementById("2xKirbyPrice").innerHTML = kirby2xPrice;
	var stagePrices = document.getElementsByClassName("stageCost");
	for(i = 0; i < stagePrices.length; i++){
		stagePrices[i].innerHTML = stageCost;
	}
}

function round(value, exp) {
  if (typeof exp === 'undefined' || +exp === 0)
    return Math.round(value);

  value = +value;
  exp = +exp;

  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
    return NaN;

  // Shift
  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}

function start(){
	var characterCost = [];
	var characterOwned = [];
	for(i = 0; i < characters.length; i++){
		characterCost[i] = characters[i] + "Cost";
		characterOwned[i] = characters[i] + "Owned";
	}
	for(i = 0; i < characterCost.length; i++){
		document.getElementById(characterCost[i]).innerHTML = window[characterCost[i]];
		document.getElementById(characterOwned[i]).innerHTML = count;
	}
	var fpix = document.getElementsByClassName("fPic");
	for(i = 0; i < fpix.length; i++){
		fpix[i].style.pointerEvents = 'none';
	}
	
	var bpix = document.getElementsByClassName("bPic");
	for(i = 0; i < bpix.length; i++){
		bpix[i].style.pointerEvents = 'none';
	}
	
	var apix = document.getElementsByClassName("aPic");
	for(i = 0; i < apix.length; i++){
		apix[i].style.pointerEvents = 'none';
	}
	
	var spix = document.getElementsByClassName("sPic");
	for(i = 0; i < spix.length; i++){
		spix[i].style.pointerEvents = 'none';
	}
	//try to figure out how to do all this dynamically
	//F Tier Characters
	/*document.getElementById("kirbyCost").innerHTML = kirbyCost;
	document.getElementById("bowserCost").innerHTML = bowserCost;
	document.getElementById("zeldaCost").innerHTML = zeldaCost;
	document.getElementById("nessCost").innerHTML = nessCost;
	document.getElementById("kirbyOwned").innerHTML = count;
	document.getElementById("bowserOwned").innerHTML = count;
	document.getElementById("zeldaOwned").innerHTML = count;
	document.getElementById("nessOwned").innerHTML = count;
	//B Tier Characters
	document.getElementById("pichuCost").innerHTML = pichuCost;
	document.getElementById("mewtwoCost").innerHTML = mewtwoCost;
	document.getElementById("royCost").innerHTML = royCost;
	document.getElementById("nessCost").innerHTML = nessCost;
	document.getElementById("kirbyOwned").innerHTML = count;
	document.getElementById("bowserOwned").innerHTML = count;
	document.getElementById("zeldaOwned").innerHTML = count;
	document.getElementById("nessOwned").innerHTML = count;*/
	Timer();
}

function add(){
	//id Selectors
	var cps = window["choice"] + "Produce";
	owned = window["choice"] + "Owned";
	
	//Variable cost, make, curMake
	var vCost = window['choice'] + "Cost";
	var vMake = window['choice'] + "Make";
	var vCurMake = window['choice'] + "CurMake";
	
	//adjust price variable
	cost = window[vCost];
	make = window[vMake];
	curMake = window[vCurMake];
	
	//Check if enough coins
	if(coins >= cost){
	count = window[choice]++;
	
	//Calculate Production Rate
	window[vCurMake] = window[vCurMake] + window[vMake];
	window[vCurMake] = round(window[vCurMake], 2);
	coinsSec = window[vCurMake];
	
	coins-=cost;
	
	//Calculate New Cost
	window[vCost] = window[vCost] * Math.pow(1.15, count);
	window[vCost] = round(window[vCost], 2);
	
	//Update Labels
	document.getElementById(owned).innerHTML = count;
	document.getElementById(cps).innerHTML = window[vCurMake];
	document.getElementById(vCost).innerHTML = window[vCost];
	document.getElementById("perSec").innerHTML = "Coins/s: " + addAll(coinsSec);
	}
}

function addAll(){
	//this didn't work for some reason
	/*var allCharacterMake = [];
	for(i = 0; i < characters.length; i++){
		allCharacterMake[i] = window[characters[i] + "CurMake"];
		coinsSec += allCharacterMake[i];
	}*/

	coinsSec = kirbyCurMake + bowserCurMake + zeldaCurMake + nessCurMake + pichuCurMake + mewtwoCurMake + royCurMake + gawCurMake + oldLinkCurMake + youngLinkCurMake + dkCurMake + marioCurMake + yoshiCurMake + ganonCurMake + luigiCurMake + samusCurMake + pikachuCurMake + drMarioCurMake + falconCurMake + climbersCurMake + puffCurMake + peachCurMake + sheikCurMake + marthCurMake + falcoCurMake + foxCurMake;
	coinsSec = round(coinsSec, 2);
	return coinsSec;
}

function test(){
	for(i = 0; i < 1000; i++){
	coins += 0.00015;
	}
	alert(coinsSec);
}

function basicClick(){
	coins = coins + clickAmount;
}


function coinUpdate(){
	//coins += (((kirby - 1) * kirbyMake) + ((bowser - 1) * bowserMake) + ((zelda - 1) * zeldaMake) + ((ness - 1) * nessMake)) / 100;
	coins += addAll(coinsSec) / 100;
	document.getElementById("total").innerHTML = "Coins: " + Math.floor(coins);
	document.getElementById("perClick").innerHTML = "Per Click: " + clickAmount;
}

function Timer(){
	timer = setInterval(coinUpdate, 10);
}

function clickPos(event){
	basicClick();
	
	var totalOffsetX   = 0;
    var totalOffsetY   = 0;
    var canvasX        = 0;
    var canvasY        = 0;
    var currentElement = this;
	var oppacity = 1;
	var up = 32;
	
	var coin = new Image();
	coin.src = "Images/Misc/Coin.png"

    do{
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while(currentElement = currentElement.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;
	//Coin Floater
	coin.onload = function(){
		ctx.clearRect(0, 0, 251, 266);
		var alpha = 1.0,   // full opacity
        interval = setInterval(function () {
            //Clears the canvas
			coinCanvas.width = coinCanvas.width;
			//sets opacity
			ctx.globalAlpha = alpha;
			//draw coin
            ctx.drawImage(coin, canvasX - 32, canvasY - up);
            //set new opacity
			alpha = alpha - 0.02;
			//move coin up
			up += 2;
			//checks if coin has disappeared yet
            if (alpha < 0) {
                coinCanvas.width = coinCanvas.width;
                clearInterval(interval);
            }
        }, 1); 
	}
}

function show(){
	var animationSpeed = 300;
	$("#upgrades").animate({
		height: 'toggle'
	}, animationSpeed);
	
	$("#upgradesPanel").animate({
		height: uHeight,
		width: uWidth
	}, animationSpeed);
	$("#show").toggleText("Show", "Hide");
	$("#stagesPanel").animate({
		"right":uWidth + 25
	}, animationSpeed);
	if(uHeight == 600){
		uHeight = 75;
		uWidth = 100;
	}
	else{
		uHeight = 600;
		uWidth = 200;
	}
	/*document.getElementById("upgrades").style.display = displayType;
	if(displayType == "inline"){
		displayType = "none";
		document.getElementById("show").innerHTML = "Hide";
		document.getElementById("upgradesPanel").style.height = "600px";
		document.getElementById("upgradesPanel").style.width = "200px";
		document.getElementById("stagesPanel").style.right = "225px";
	}
	else{
		displayType = "inline";
		document.getElementById("show").innerHTML = "Show";
		document.getElementById("upgradesPanel").style.height = "75px";
		document.getElementById("upgradesPanel").style.width = "100px";
		document.getElementById("stagesPanel").style.right = "125px";
	}*/
}

function stagesShow(){
	var animationSpeed = 300;
	$("#stages").animate({
		height: 'toggle'
	}, animationSpeed);
	
	$("#stagesPanel").animate({
		height: sHeight,
		width: sWidth
	}, animationSpeed);
	$("#stagesShow").toggleText("Show", "Hide");
	if(sHeight == 600){
		sHeight = 75;
		sWidth = 100;
	}
	else{
		sHeight = 600;
		sWidth = 200;
	}
	/*document.getElementById("stages").style.display = stageDisplayType;
	if(stageDisplayType == "inline"){
		stageDisplayType = "none";
		document.getElementById("stagesShow").innerHTML = "Hide";
		document.getElementById("stagesPanel").style.height = "600px";
		document.getElementById("stagesPanel").style.width = "200px";
	}
	else{
		stageDisplayType = "inline";
		document.getElementById("stagesShow").innerHTML = "Show";
		document.getElementById("stagesPanel").style.height = "75px";
		document.getElementById("stagesPanel").style.width = "100px";
	}*/
}

function Unlock(){
	//id and class selectors
	var lockID = window["unlock"] + "Lock";
	var unLockID = window["unlock"] + "Unlock";
	var titleID = window["unlock"] + "Title";
	var listClasses = window["unlock"] + "List";
	var pic = window["unlock"] + "Pic";
	var unlockPrice = window["unlock"] + "Price";
	
	var price = window[unlockPrice];
	
	if(coins >= price){
		coins-= price;
		document.getElementById(lockID).style.background = "rgba(0,0,0,0)";
		document.getElementById(unlock).style.display = "none";
		document.getElementById(titleID).style.color = "black";
		var list = document.getElementsByClassName(listClasses);
		var pix = document.getElementsByClassName(pic);
		for(i = 0; i < list.length; i++){
			list[i].style.color = "black";
		}
		for(i = 0; i < pix.length; i++){
			pix[i].style.opacity = 1;
			pix[i].style.pointerEvents = 'visible';
		}
	}
}

/*function fUnlock(){
	if(coins >= 11){
		coins-=11;
		document.getElementById("fLock").style.background = "rgba(0,0,0,0)";
		document.getElementById("fUnlock").style.display = "none";
		document.getElementById("fTitle").style.color = "black";
		var list = document.getElementsByClassName("fList");
		var pix = document.getElementsByClassName("fPic");
		for(i = 0; i < list.length; i++){
			list[i].style.color = "black";
		}
		for(i = 0; i < pix.length; i++){
			pix[i].style.opacity = 1;
			pix[i].style.pointerEvents = 'visible';
		}
	}
}*/

$(document).ready(function(){
	//2x Click Upgrade
    $("#2xClick").click(function(){
       if(coins >= click2xPrice){
       clickAmount = clickAmount * 2;
	   coins -= click2xPrice;
	   click2xPrice = click2xPrice * 10;
	   document.getElementById("2xClickPrice").innerHTML = click2xPrice;
		}
    });
	//2x kirby Upgrade
	$("#2xKirby").click(function(){
			if(coins >= kirby2xPrice){
				kirbyCurMake = kirbyCurMake * 2;
				kirbyMake = kirbyMake * 2;
				coins -= kirby2xPrice;
				document.getElementById("2xKirbyPrice").innerHTML = kirby2xPrice;
				document.getElementById("kirbyProduce").innerHTML = kirbyCurMake;
				document.getElementById("perSec").innerHTML = "Coins/s: " + addAll(coinsSec);
				$("#2xKirby").hide();
			}
	});
	
	//http://stackoverflow.com/questions/3452778/jquery-change-class-name
	//http://stackoverflow.com/questions/545978/finding-the-id-of-a-parent-div-using-jquery
	//Change purchases items to a purchased class and make sure they can't be repurchased DONE
	//Make text say purchased when purchased
	$(".stage").click(function(){
		var purchased = $(this).closest("div").attr("id");
		$(".stage").removeAttr('style');
		if(coins >= stageCost && purchased != "purchased"){
			coins -= stageCost;
			//stageCost = stageCost * 1.1;
			$(this).css({"border": "solid 3px #DE2F2F", "borderRadius": "23px"});
			$(".stageCost", "#" + $(this).closest("div").attr("id")).text("Purchased!");
			$(this).closest("class").attr("class", "bought");
			var stagePrices = document.getElementsByClassName("stageCost");
			$(this).closest("div").attr('id', 'purchased');
			
			/*for(i = 0; i < stagePrices.length; i++){
				if($(this).closest("div").attr("id") != "purchased"){
					stagePrices[i].innerHTML = stageCost;
				}
			}*/
		}
		/*if(purchased == "purchased"){
			$(this).css({"border": "solid 3px #DE2F2F", "borderRadius": "23px"});
			$(".stageCost", "#" + $(this).closest("div").attr("id")).text("Purchased!");
		}*/
	});
});

jQuery.fn.extend({
    toggleText: function (a, b){
        var that = this;
            if (that.text() != a && that.text() != b){
                that.text(a);
            }
            else
            if (that.text() == a){
                that.text(b);
            }
            else
            if (that.text() == b){
                that.text(a);
            }
        return this;
    }
});
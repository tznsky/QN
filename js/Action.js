function Attackt() {
	Monsterhuoli = document.getElementById("Monsterhuoli").innerHTML;
	Monstergongji = document.getElementById("Monstergongji").innerHTML;
	Monsterfangyu = document.getElementById("Monsterfangyu").innerHTML;
	huoli = document.getElementById("huoli").innerHTML;
	gongji = document.getElementById("gongji").innerHTML;
	fangyu = document.getElementById("fangyu").innerHTML;
//	alert("Monsterhuoli:"+Monsterhuoli+",Monstergongji:"+Monstergongji+"Monsterfangyu:"+Monsterfangyu);
	if(Monsterhuoli > 0) {
		Monsterhuoli = parseInt(Monsterhuoli) - parseInt(gongji) + parseInt(Monsterfangyu);
		document.getElementById("Monsterhuoli").innerHTML = Monsterhuoli;
	} else {
		alert("怪死了");
		checkMoney(1000);
		checkExp(10);
		checkLevel();
	}
}

function checkMoney(mValue){
	money = document.getElementById("money").innerHTML;
	money = parseInt(money)+parseInt(mValue);
	document.getElementById("money").innerHTML=money;
}
function checkExp(expValue){
	exp = document.getElementById("exp").innerHTML;
	exp = parseInt(exp) + parseInt(expValue);
	document.getElementById("exp").innerHTML=exp;
}
function checkLevel(){
	level = document.getElementById("level").innerHTML;
	if (level>1) {
		
	} else{
		if (parseInt(exp)>=100) {
			level = parseInt(level)+1;
			document.getElementById("exp").innerHTML=0;
			document.getElementById("level").innerHTML=level;
		}
	}
}

function FindMonster(){
	window.location.href='Action.html';
}

function RunOff(){
	window.location.href="index.html";
}

function Shoping(){
	window.location.href="Shop.html";
}

function buy(price){
	money = document.getElementById("money").innerHTML;
	if(money>=price){
		money=parseInt(money)-parseInt(price);
		document.getElementById("money").innerHTML;
		alert("购买成功！");
	}else{
		alert("您的余额已不足，请充值！");
	}
}

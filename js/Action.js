function Attackt() {
	Monsterhuoli = document.getElementById("Monsterhuoli").innerHTML;
	Monstergongji = document.getElementById("Monstergongji").innerHTML;
	Monsterfangyu = document.getElementById("Monsterfangyu").innerHTML;
	Monstername = document.getElementById("Monstername").innerHTML;
	huoli = document.getElementById("huoli").innerHTML;
	gongji = document.getElementById("gongji").innerHTML;
	fangyu = document.getElementById("fangyu").innerHTML;
	//	alert("Monsterhuoli:"+Monsterhuoli+",Monstergongji:"+Monstergongji+"Monsterfangyu:"+Monsterfangyu);
	if(Monsterhuoli > 0) {
		Monsterhuoli = parseInt(Monsterhuoli) - parseInt(gongji) + parseInt(Monsterfangyu);
		document.getElementById("Monsterhuoli").innerHTML = Monsterhuoli;
		var sum = parseInt(gongji) - parseInt(Monsterfangyu);
		var info = "攻击造成" + sum + "点伤害";
		document.getElementById("log-info").innerHTML = info;
	} else {
		checkMoney(1000);
		checkExp(10);
		checkLevel();
		document.getElementById("log-info").innerHTML = "战斗胜利";
		refreshMonster();
		localStorage.exp = document.getElementById("exp").innerHTML;
		localStorage.money = document.getElementById("money").innerHTML;
		localStorage.weapon = document.getElementById("weapon").innerHTML;
		localStorage.level = document.getElementById("level").innerHTML;
	}
}

function refreshMonster() {
	var monster = makeMonster();
	document.getElementById("Monsterhuoli").innerHTML = monster.huoli;
	document.getElementById("Monstergongji").innerHTML = monster.gongji;
	document.getElementById("Monsterfangyu").innerHTML = monster.fangyu;
	document.getElementById("Monstername").innerHTML = monster.name;
}

function makeMonster() {
	var monster = new Object;
	monster.name = "史莱姆";
	monster.huoli = "100";
	monster.gongji = "20";
	monster.fangyu = "20";
	monster.exp = "50";
	monster.money = "1000";
	return monster;
}

function checkMoney(mValue) {
	money = document.getElementById("money").innerHTML;
	money = parseInt(money) + parseInt(mValue);
	document.getElementById("money").innerHTML = money;
}

function checkExp(expValue) {
	exp = document.getElementById("exp").innerHTML;
	exp = parseInt(exp) + parseInt(expValue);
	document.getElementById("exp").innerHTML = exp;
}

function checkLevel() {
	level = document.getElementById("level").innerHTML;
	if(level > 1) {

	} else {
		if(parseInt(exp) >= 100) {
			level = parseInt(level) + 1;
			document.getElementById("exp").innerHTML = 0;
			document.getElementById("level").innerHTML = level;
		}
	}
}

function FindMonster() {
	window.location.href = 'Action.html';
}

function RunOff() {
	window.location.href = "index.html";

}

function Shoping() {
	window.location.href = "Shop.html";
}

function ChoiceMap(number) {
	switch(number) {
		case 1:
			window.location.href = "Map.html";
			break;
		case 2:
			window.location.href = "level1-10.html";
			break;
		case 3:
			window.location.href = "level11-20.html";
			break;
		default:
			window.location.href = "Map.html";
			break;
	}

}

function buy(price) {
	money = document.getElementById("money").innerHTML;
	if(money >= price) {
		money = parseInt(money) - parseInt(price);
		document.getElementById("money").innerHTML;
		alert("购买成功！");
	} else {
		alert("您的余额已不足，请充值！");
	}
}
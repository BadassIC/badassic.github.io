//TO DO: Conquest tab
var gold = 0
var goldPerSecond = 5
var netGPS = goldPerSecond - totalMaintenance

var soldiers = 0
var maxSoldiers = 10
var maintenance = 1
var totalMaintenance = 1
var soldierStats = {
	hp: 1,
	attack: 0.05
}
var battleHp = soldiers * soldierStats.hp
var initialBattleHp = battleHp
var battleSoldier = soldiers

var enemySoldiers = 0
var enemySoldierStats = {
	hp: 0,
	attack: 0
}
var enemyBattleHp = 0
var EnemyInitialBattleHp = enemyBattleHp
var enemyBattleSoldier = 0

var inCombat = false

var tab = "recruit"
var stage = 1

var fame = 0
var questLevel = 1
var questPage = 1
var initialQuestPage = 1

var glory = 0
var conquestLevel = 1
var conquestPage = 1
var initialQuestPage = 1

var quest1 = {
	name: "Capture a Pickpocketer",
	briefing: "A pickpocketer is on the loose. Kill him.",
	questRank: "C",
	goldReward: Math.round(25 * Math.pow(3, 0)),
	fameReward: 50,
	fameRequired: Math.round(250 * Math.pow(3, 0))
}

var quest2 = {
	name: "Capture Graveyard Robbers",
	briefing: "A few graveyard robbers have been digging up corpses without permission. Kill them.",
	questRank: "C",
	goldReward: Math.round(25 * Math.pow(3, 1)),
	fameReward: 100,
	fameRequired: Math.round(300 * Math.pow(3, 1))
}

var quest3 = {
	name: "Capture a Brawler",
	briefing: "A tough brawler has been causing trouble around town. Kill him.",
	questRank: "C",
	goldReward: Math.round(25 * Math.pow(3, 2)),
	fameReward: 200,
	fameRequired: Math.round(350 * Math.pow(3, 2))
}

var quest4 = {
	name: "Capture a Gang of Thugs",
	briefing: "A gang of thugs need to be taken care of. Kill them.",
	questRank: "B",
	goldReward: Math.round(25 * Math.pow(3, 3)),
	fameReward: 400,
	fameRequired: Math.ceil(400 * Math.pow(3, 3))
}

tabSelect(1)

setInterval(updateValues, 10)	
function updateValues(){
	totalMaintenance = soldiers * maintenance
	document.getElementById("goldDisplay").innerHTML = gold
	document.getElementById("soldierDisplay").innerHTML = soldiers
	document.getElementById("maxSoldierDisplay").innerHTML = maxSoldiers
	document.getElementById("maintenance").innerHTML = maintenance
	document.getElementById("totalMaintenance").innerHTML = totalMaintenance
	netGPS = goldPerSecond - totalMaintenance
	document.getElementById("netGPS").innerHTML = netGPS
	document.getElementById("fameDisplay").innerHTML = fame
	if (inCombat == true){
		document.getElementById("battleBox").style.display = "block"
	}else{
		document.getElementById("battleBox").style.display = "none"
	}
}

setInterval(tabUpdate, 10)
function tabUpdate(){
	if (stage == 1){
		document.getElementById("recruitButton").innerHTML = "Recruit"
		document.getElementById("questsButton").innerHTML = "???"
		document.getElementById("conquestButton").innerHTML = "???"
		document.getElementById("settlementButton").innerHTML = "???"
		document.getElementById("recruitButton").style.display = "block"
		document.getElementById("questsButton").style.display = "block"		
		document.getElementById("conquestButton").style.display = "none"
		document.getElementById("settlementButton").style.display = "none"
	}
	if (stage == 2){
		document.getElementById("recruitButton").innerHTML = "Recruit"
		document.getElementById("questsButton").innerHTML = "Quests"
		document.getElementById("conquestButton").innerHTML = "???"
		document.getElementById("settlementButton").innerHTML = "???"
		document.getElementById("recruitButton").style.display = "block"
		document.getElementById("questsButton").style.display = "block"		
		document.getElementById("conquestButton").style.display = "block"
		document.getElementById("settlementButton").style.display = "none"
	}
	if (stage == 3){
		document.getElementById("recruitButton").innerHTML = "Recruit"
		document.getElementById("questsButton").innerHTML = "Quests"
		document.getElementById("conquestButton").innerHTML = "Conquest"
		document.getElementById("settlementButton").innerHTML = "???"
		document.getElementById("recruitButton").style.display = "block"
		document.getElementById("questsButton").style.display = "block"		
		document.getElementById("conquestButton").style.display = "block"
		document.getElementById("settlementButton").style.display = "block"
	}
}


setInterval(buttonUpdate, 10)
function buttonUpdate(){
	if (gold < 50 || inCombat == true || soldiers >= maxSoldiers){
		document.getElementById("buySoldier").disabled = true
	}else{
		document.getElementById("buySoldier").disabled = false
	}
	if (soldiers <= 0 || inCombat == true){
		document.getElementById("fireSoldier").disabled = true
	}else{
		document.getElementById("fireSoldier").disabled = false
	}
	if (soldiers <= 0 || inCombat == true){
		document.getElementById("questAccept").disabled = true
	}else{
		document.getElementById("questAccept").disabled = false
	}
}

setInterval(fameUpdate, 10)
function fameUpdate(){
	if (fame >= 0 && fame < quest1.fameRequired){
		questLevel = 1
		document.getElementById("questFameRequired").innerHTML = quest1.fameRequired
	}else if (fame >= quest1.fameRequired && fame < quest2.fameRequired){
		questLevel = 2
		document.getElementById("questFameRequired").innerHTML = quest2.fameRequired	
	}else if (fame >= quest2.fameRequired && fame < quest3.fameRequired){
		questLevel = 3
		document.getElementById("questFameRequired").innerHTML = quest3.fameRequired
	}else if (fame >= quest3.fameRequired){
		questLevel = 4
		document.getElementById("questFameRequired").innerHTML = quest4.fameRequired
		if (stage == 2){
			stage = 3
			nodeCreate("It's time for world domination.")
		}
	} 
}


setInterval(prevnextUpdate, 10)
function prevnextUpdate(){
	if (questLevel == questPage){
		document.getElementById("questsNext").disabled = true
	}else{
		document.getElementById("questsNext").disabled = false
	}
	if (questPage == 1){
		document.getElementById("questsPrev").disabled = true
	}else{
		document.getElementById("questsPrev").disabled = false
	}
}

setInterval(questDetailsUpdate, 10)
function questDetailsUpdate(){
	if (questPage == 1){
		document.getElementById("questName").innerHTML = quest1.name
		document.getElementById("questBriefing").innerHTML = quest1.briefing
		document.getElementById("questRank").innerHTML = quest1.questRank
		document.getElementById("questGoldReward").innerHTML = quest1.goldReward
		document.getElementById("questFameReward").innerHTML = quest1.fameReward			
	}
	if (questPage == 2){
		document.getElementById("questName").innerHTML = quest2.name
		document.getElementById("questBriefing").innerHTML = quest2.briefing
		document.getElementById("questRank").innerHTML = quest2.questRank
		document.getElementById("questGoldReward").innerHTML = quest2.goldReward
		document.getElementById("questFameReward").innerHTML = quest2.fameReward		
	}
	if (questPage == 3){
		document.getElementById("questName").innerHTML = quest3.name
		document.getElementById("questBriefing").innerHTML = quest3.briefing
		document.getElementById("questRank").innerHTML = quest3.questRank
		document.getElementById("questGoldReward").innerHTML = quest3.goldReward
		document.getElementById("questFameReward").innerHTML = quest3.fameReward				
	}
	if (questPage == 4){
		document.getElementById("questName").innerHTML = quest4.name
		document.getElementById("questBriefing").innerHTML = quest4.briefing
		document.getElementById("questRank").innerHTML = quest4.questRank
		document.getElementById("questGoldReward").innerHTML = quest4.goldReward
		document.getElementById("questFameReward").innerHTML = quest4.fameReward				
	}	
}

setInterval(secondUpdate, 1000)
function secondUpdate(){
	gold += netGPS
	if (gold < 1){
		gold = 0
		soldiers = 0
		nodeCreate = ("You have gone bankrupt. All your soldiers have left you.")
	}
	document.getElementById("goldDisplay").innerHTML = gold
}

function nodeCreate(text){
	var para = document.createElement("p")
	var node = document.createTextNode(text)
	para.appendChild(node)

	var element = document.getElementById("statusBox")
	element.appendChild(para)
    element.scrollTop = element.scrollHeight
}

function tabSelect(tabNo){
	if (tabNo == 1 && stage >= 1){
		document.getElementById("recruitTab").style.display = "block"
		document.getElementById("questsTab").style.display = "none"
		document.getElementById("conquestTab").style.display = "none"
	}
	if (tabNo == 2 && stage >= 2){
		document.getElementById("recruitTab").style.display = "none"
		document.getElementById("questsTab").style.display = "block"
		document.getElementById("conquestTab").style.display = "none"
	}
	if (tabNo == 3 && stage >= 3){
		document.getElementById("recruitTab").style.display = "none"
		document.getElementById("questsTab").style.display = "none"
		document.getElementById("conquestTab").style.display = "block"
	}
}

function buySoldier(){
	if (gold >= 50 && soldiers < maxSoldiers){
		if (stage == 1){
			stage = 2
			nodeCreate("Maybe you should put your new soldier to some use...")
		}
		soldiers += 1
		gold -= 50
		updateValues()
	}
}

function fireSoldier(){
	if (soldiers > 0){
		soldiers -= 1;
		updateValues()
	}
}

function questsPrev(){
	questPage -= 1
}

function questsNext(){
	questPage += 1
}

function win(){
	if (initialQuestPage == 1){
		gold += quest1.goldReward
		fame += quest1.fameReward
		nodeCreate("You recieved a reward of " + quest1.goldReward + " gold and " + quest1.fameReward + " fame.")
	}
	if (initialQuestPage == 2){
		gold += quest2.goldReward
		fame += quest2.fameReward
		nodeCreate("You recieved a reward of " + quest2.goldReward + " gold and " + quest2.fameReward + " fame.")
	}
		if (initialQuestPage == 3){
		gold += quest3.goldReward
		fame += quest3.fameReward
		nodeCreate("You recieved a reward of " + quest3.goldReward + " gold and " + quest3.fameReward + " fame.")
	}
		if (initialQuestPage == 4){
		gold += quest4.goldReward
		fame += quest4.fameReward
		nodeCreate("You recieved a reward of " + quest4.goldReward + " gold and " + quest4.fameReward + " fame.")
	}
	inCombat = false
}

function lose(){
	nodeCreate("You have lost the battle.")
	soldiers = 0
	inCombat = false
}

function battle(){
	initialQuestPage = questPage
	inCombat = true
	battleHp = soldiers * soldierStats.hp
	initialBattleHp = battleHp
	soldiers = Math.ceil(battleHp / soldierStats.hp)
	document.getElementById("battleSoldierDisplay").innerHTML = soldiers
	document.getElementById("hpBar").style.width = ((battleHp / initialBattleHp) * 100) + "%"
	if (initialQuestPage == 1){
		enemySoldiers = 1
		enemySoldierStats.hp = 1
		enemySoldierStats.attack = 0.04
	}
	if (initialQuestPage == 2){
		enemySoldiers = 2
		enemySoldierStats.hp = 1
		enemySoldierStats.attack = 0.1
	}
	if (initialQuestPage == 3){
		enemySoldiers = 1
		enemySoldierStats.hp = 3
		enemySoldierStats.attack = 0.15
	}
	if (initialQuestPage == 4){
		enemySoldiers = 5
		enemySoldierStats.hp = 1.5
		enemySoldierStats.attack = 0.15
	}
	enemyBattleHp = enemySoldiers * enemySoldierStats.hp
	enemyInitialBattleHp = enemyBattleHp
	enemySoldiers = Math.ceil(enemyBattleHp / enemySoldierStats.hp)
	document.getElementById("enemyBattleSoldierDisplay").innerHTML = enemySoldiers
	document.getElementById("enemyHpBar").style.width = ((enemyBattleHp / enemyInitialBattleHp) * 100) + "%"
	var trigger = setInterval(battleMechanics, 1000)
	function battleMechanics(){
		if (inCombat == true){
			enemyBattleHp -= soldierStats.attack * soldiers
			enemySoldiers = Math.ceil(enemyBattleHp / enemySoldierStats.hp)
			document.getElementById("enemyBattleSoldierDisplay").innerHTML = enemySoldiers
			document.getElementById("enemyHpBar").style.width = ((enemyBattleHp / enemyInitialBattleHp) * 100) + "%"
			if (enemyBattleHp <= 0 && inCombat == true){
				win()
				clearInterval(trigger)			
			}
		}
		if (inCombat == true){
			battleHp -= enemySoldierStats.attack * enemySoldiers
			soldiers = Math.ceil(battleHp / soldierStats.hp)
			document.getElementById("battleSoldierDisplay").innerHTML = soldiers
			document.getElementById("hpBar").style.width = ((battleHp / initialBattleHp) * 100) + "%"
			if (battleHp <= 0 && inCombat == true){
				lose()
				clearInterval(trigger)		
			}	
		}				
	}
}
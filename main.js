//TO DO: Quest 5 and disable hire
var gold = 9999456462225252
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
var enemyInitialBattleHp = enemyBattleHp
var enemyBattleSoldier = 0

var inCombat = false

var tab = "recruit"
var stage = 1

var fame = 45645645645
var questLevel = 1
var questPage = 1
var initialQuestPage = 1

var glory = 0
var conquestLevel = 0
var conquestUnlocked = false
var conquestPage = 1
var initialConquestPage = 1

var battleType = "quest"

var land = 3
var landFree = 0
var landUsed = 0
var wood = 0
var stone = 0
var wps = 0
var sps = 0
var lumberjacks = {
	count: 0,
	maintenance: 3,
	efficiency: 1
}
var miners = {
	count: 0,
	maintenance: 3,
	efficiency: 1
}
var tents = {
	count: 0,
	population: 2
}

var quest1 = {
	name: "Capture a Pickpocketer",
	briefing: "A pickpocketer is roaming around town. Capture him.",
	questRank: "D-",
	goldReward: Math.round(25 * Math.pow(3, 0)),
	fameReward: 50,
	fameRequired: Math.round(250 * Math.pow(3, 0))
}

var quest2 = {
	name: "Capture Graveyard Robbers",
	briefing: "A few graveyard robbers have been digging up corpses without permission. Capture them.",
	questRank: "D",
	goldReward: Math.round(25 * Math.pow(3, 1)),
	fameReward: 100,
	fameRequired: Math.round(300 * Math.pow(3, 1))
}

var quest3 = {
	name: "Capture a Grizzly Bear",
	briefing: "A grizzy bear is on the loose. Capture it.",
	questRank: "D+",
	goldReward: Math.round(25 * Math.pow(3, 2)),
	fameReward: 200,
	fameRequired: Math.round(350 * Math.pow(3, 2))
}

var quest4 = {
	name: "Capture a Gang of Thugs",
	briefing: "A gang of thugs need to be taken care of. Capture them.",
	questRank: "C-",
	goldReward: Math.round(25 * Math.pow(3, 3)),
	fameReward: 400,
	fameRequired: Math.ceil(400 * Math.pow(3, 3))
}

var quest5 = {
	name: "Capture Rogue Soldiers",
	briefing: "A few rogue soldiers from a nearby town have been attacking civilians. Capture them.",
	questRank: "C",
	goldReward: Math.round(25 * Math.pow(3, 4)),
	fameReward: 800,
	fameRequired: Math.ceil(450 * Math.pow(3, 4))
}

var conquest1 = {
	name: "Raid Thorp",
	conquestDescription: "A very early civilization with neglible military power.",
	landReward: 1,
	gloryReward: 50,
	gloryRequired: Math.round(500 * Math.pow(3, 0)),
	gpsReward: 1
}

var conquest2 = {
	name: "Raid Hamlet",
	conquestDescription: "An early civilization with insignificant military power.",
	landReward: 3,
	gloryReward: 100,
	gloryRequired: Math.round(550 * Math.pow(3, 1)),
	gpsReward: 2
}

var conquest3 = {
	name: "Raid Small Village",
	conquestDescription: "A small village with noticeable military power.",
	landReward: 5,
	gloryReward: 200,
	gloryRequired: Math.round(600 * Math.pow(3, 2)),
	gpsReward: 3
}

tabSelect(1)
document.getElementById("goldDisplayBar").style.display = "none"
document.getElementById("soldierDisplayBar").style.display = "none"
document.getElementById("fameDisplayBar").style.display = "none"
document.getElementById("gloryDisplayBar").style.display = "none"
document.getElementById("landDisplayBar").style.display = "none"

setInterval(updateValues, 10)	
function updateValues(){
	totalMaintenance = (soldiers * maintenance)
	workerMaintenance = (lumberjacks.count * lumberjacks.maintenance) + (miners.count * miners.maintenance)
	netGPS = goldPerSecond - totalMaintenance - workerMaintenance
	wps = lumberjacks.count * lumberjacks.efficiency
	sps = miners.count * miners.efficiency
	landFree = land - landUsed
	maxSoldiers = 10 + (tents.population * tents.count)
	document.getElementById("goldDisplay").innerHTML = gold
	document.getElementById("soldierDisplay").innerHTML = soldiers
	document.getElementById("soldierDisplay2").innerHTML = soldiers
	document.getElementById("maxSoldierDisplay").innerHTML = maxSoldiers
	document.getElementById("maxSoldierDisplay2").innerHTML = maxSoldiers
	document.getElementById("maintenance").innerHTML = maintenance
	document.getElementById("totalMaintenance").innerHTML = totalMaintenance
	document.getElementById("netGPS").innerHTML = netGPS
	document.getElementById("fameDisplay").innerHTML = fame
	document.getElementById("fameDisplay2").innerHTML = fame
	document.getElementById("gloryDisplay").innerHTML = glory
	document.getElementById("gloryDisplay2").innerHTML = glory
	document.getElementById("landDisplay").innerHTML = landUsed
	document.getElementById("maxLandDisplay").innerHTML = land
	document.getElementById("landDisplay2").innerHTML = landUsed
	document.getElementById("maxLandDisplay2").innerHTML = land
	document.getElementById("woodDisplay").innerHTML = Math.floor(wood)
	document.getElementById("stoneDisplay").innerHTML = Math.floor(stone)
	document.getElementById("wps").innerHTML = wps
	document.getElementById("sps").innerHTML = sps
	document.getElementById("lumberjackDisplay").innerHTML = lumberjacks.count
	document.getElementById("minerDisplay").innerHTML = miners.count
	document.getElementById("workerMaintenanceCosts").innerHTML = workerMaintenance
	if (inCombat == true){
		document.getElementById("battleBox").style.display = "block"
	}else{
		document.getElementById("battleBox").style.display = "none"
	}
}

setInterval(tabUpdate, 10)
function tabUpdate(){
	if (stage == 1){
		document.getElementById("goldDisplayBar").style.display = "block"
		document.getElementById("soldierDisplayBar").style.display = "block"
		document.getElementById("fameDisplayBar").style.display = "none"
		document.getElementById("gloryDisplayBar").style.display = "none"
		document.getElementById("landDisplayBar").style.display = "none"
		document.getElementById("recruitButton").style.display = "block"
		document.getElementById("questsButton").style.display = "none"		
		document.getElementById("conquestButton").style.display = "none"
		document.getElementById("civilizationButton").style.display = "none"
		document.getElementById("blacksmithButton").style.display = "none"
	}
	if (stage == 2){
		document.getElementById("goldDisplayBar").style.display = "block"
		document.getElementById("soldierDisplayBar").style.display = "block"
		document.getElementById("fameDisplayBar").style.display = "block"
		document.getElementById("gloryDisplayBar").style.display = "none"
		document.getElementById("landDisplayBar").style.display = "none"
		document.getElementById("recruitButton").style.display = "block"
		document.getElementById("questsButton").style.display = "block"		
		document.getElementById("conquestButton").style.display = "none"
		document.getElementById("civilizationButton").style.display = "none"
		document.getElementById("blacksmithButton").style.display = "none"
	}
	if (stage == 3){
		document.getElementById("goldDisplayBar").style.display = "block"
		document.getElementById("soldierDisplayBar").style.display = "block"
		document.getElementById("fameDisplayBar").style.display = "block"
		if (conquestUnlocked == true){
			document.getElementById("gloryDisplayBar").style.display = "block"
		}
		document.getElementById("landDisplayBar").style.display = "none"
		document.getElementById("recruitButton").style.display = "block"
		document.getElementById("questsButton").style.display = "block"		
		document.getElementById("conquestButton").style.display = "block"
		document.getElementById("civilizationButton").style.display = "none"
		document.getElementById("blacksmithButton").style.display = "none"
	}
	if (stage == 4){
		document.getElementById("goldDisplayBar").style.display = "block"
		document.getElementById("soldierDisplayBar").style.display = "block"
		document.getElementById("fameDisplayBar").style.display = "block"
		document.getElementById("gloryDisplayBar").style.display = "block"
		document.getElementById("landDisplayBar").style.display = "block"
		document.getElementById("recruitButton").style.display = "block"
		document.getElementById("questsButton").style.display = "block"		
		document.getElementById("conquestButton").style.display = "block"
		document.getElementById("civilizationButton").style.display = "block"
		document.getElementById("blacksmithButton").style.display = "none"
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
		document.getElementById("conquestRaid").disabled = true
	}else{
		document.getElementById("questAccept").disabled = false
		document.getElementById("conquestRaid").disabled = false
	}
	if (gold < 2500 || inCombat == true){
		document.getElementById("buyBattleStandard").disabled = true
	}else{
		document.getElementById("buyBattleStandard").disabled = false
	}
	if (gold < 200){
		document.getElementById("hireLumberjack").disabled = true
		document.getElementById("hireMiner").disabled = true
	}else{
		document.getElementById("hireLumberjack").disabled = false
		document.getElementById("hireMiner").disabled = false
	}
	if (wood < 50 || stone < 50 || landFree < 2){
		document.getElementById("buildTent").disabled = true
	}else{
		document.getElementById("buildTent").disabled = false
	}
	if (lumberjacks.count <= 0){
		document.getElementById("fireLumberjack").disabled = true
	}else{
		document.getElementById("fireLumberjack").disabled = false
	}
	if (lumberjacks.count <= 0){
		document.getElementById("fireMiner").disabled = true
	}else{
		document.getElementById("fireMiner").disabled = false
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
	}else if (fame >= quest3.fameRequired && fame < quest4.fameRequired){
		questLevel = 4
		document.getElementById("questFameRequired").innerHTML = quest4.fameRequired
	}else if (fame >= quest4.fameRequired){
		questLevel = 5
		document.getElementById("questFameRequired").innerHTML = quest5.fameRequired
	}
	if (fame >= quest1.fameRequired && stage == 2){
			stage = 3
			nodeCreate("It's time for world domination.")
	}
}

setInterval(gloryUpdate, 10)
function gloryUpdate(){
	if (conquestUnlocked == true){
		document.getElementById("battleStandard").style.display = "none"
		document.getElementById("conquest").style.display = "block"
		if (glory >= 0 && glory < conquest1.gloryRequired){
			conquestLevel = 1
			document.getElementById("conquestGloryRequired").innerHTML = conquest1.gloryRequired
		}else if(glory >= conquest1.gloryRequired && glory < conquest2.gloryRequired){
			conquestLevel = 2
			document.getElementById("conquestGloryRequired").innerHTML = conquest2.gloryRequired			
		}else if(glory >= conquest2.gloryRequired){
			conquestLevel = 3
			document.getElementById("conquestGloryRequired").innerHTML = conquest3.gloryRequired	
		}
	}else{
		document.getElementById("battleStandard").style.display = "block"
		document.getElementById("conquest").style.display = "none"
		conquestLevel = 0
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
	if (conquestLevel == conquestPage){
		document.getElementById("conquestNext").disabled = true
	}else{
		document.getElementById("conquestNext").disabled = false
	}
	if (conquestPage == 1){
		document.getElementById("conquestPrev").disabled = true
	}else{
		document.getElementById("conquestPrev").disabled = false
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
	if (questPage == 5){
		document.getElementById("questName").innerHTML = quest5.name
		document.getElementById("questBriefing").innerHTML = quest5.briefing
		document.getElementById("questRank").innerHTML = quest5.questRank
		document.getElementById("questGoldReward").innerHTML = quest5.goldReward
		document.getElementById("questFameReward").innerHTML = quest5.fameReward				
	}	
}

setInterval(conquestDetailsUpdate, 10)
function conquestDetailsUpdate(){
	if (conquestPage == 1){
		document.getElementById("conquestName").innerHTML = conquest1.name
		document.getElementById("conquestDescription").innerHTML = conquest1.conquestDescription
		document.getElementById("landReward").innerHTML = conquest1.landReward
		document.getElementById("gloryReward").innerHTML = conquest1.gloryReward
		document.getElementById("gpsReward").innerHTML = conquest1.gpsReward
	}
	if (conquestPage == 2){
		document.getElementById("conquestName").innerHTML = conquest2.name
		document.getElementById("conquestDescription").innerHTML = conquest2.conquestDescription
		document.getElementById("landReward").innerHTML = conquest2.landReward
		document.getElementById("gloryReward").innerHTML = conquest2.gloryReward
		document.getElementById("gpsReward").innerHTML = conquest2.gpsReward
	}
	if (conquestPage == 3){
		document.getElementById("conquestName").innerHTML = conquest3.name
		document.getElementById("conquestDescription").innerHTML = conquest3.conquestDescription
		document.getElementById("landReward").innerHTML = conquest3.landReward
		document.getElementById("gloryReward").innerHTML = conquest3.gloryReward
		document.getElementById("gpsReward").innerHTML = conquest3.gpsReward
	}
}

setInterval(secondUpdate, 1000)
function secondUpdate(){
	gold += netGPS
	wood += wps
	stone += sps
	if (gold <= 0){
		gold = 0
		soldiers = 0
		lumberjacks.count = 0
		miners.count = 0
		nodeCreate("You have gone bankrupt. All of your people have left you.")
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
		document.getElementById("civilizationTab").style.display = "none"
	}
	if (tabNo == 2 && stage >= 2){
		document.getElementById("recruitTab").style.display = "none"
		document.getElementById("questsTab").style.display = "block"
		document.getElementById("conquestTab").style.display = "none"
		document.getElementById("civilizationTab").style.display = "none"
	}
	if (tabNo == 3 && stage >= 3){
		document.getElementById("recruitTab").style.display = "none"
		document.getElementById("questsTab").style.display = "none"
		document.getElementById("conquestTab").style.display = "block"
		document.getElementById("civilizationTab").style.display = "none"
	}
	if (tabNo == 4 && stage >= 4){
		document.getElementById("recruitTab").style.display = "none"
		document.getElementById("questsTab").style.display = "none"
		document.getElementById("conquestTab").style.display = "none"
		document.getElementById("civilizationTab").style.display = "block"
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

function hireLumberjack(){
	if (gold >= 200){
		lumberjacks.count += 1
		gold -= 200
		updateValues()
	}
}

function fireLumberjack(){
	if (lumberjacks.count > 0){
		lumberjacks.count -= 1
		updateValues()
	}
}

function hireMiner(){
	if (gold >= 200){
		miners.count += 1
		gold -= 200
		updateValues()
	}
}

function fireMiner(){
	if (miners.count > 0){
		miners.count -= 1
		updateValues()
	}
}

function buildTent(){
	if (wood >= 50 && stone >= 50 && landFree >= 2){
		wood -= 50
		stone -= 50
		landUsed += 2
		tents.count += 1
	}
}

function questsPrev(){
	questPage -= 1
}

function questsNext(){
	questPage += 1
}

function conquestPrev(){
	conquestPage -= 1
}

function conquestNext(){
	conquestPage += 1
}

function win(){
	if (battleType == "quest"){
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
		if (initialQuestPage == 5){
			gold += quest5.goldReward
			fame += quest5.fameReward
			nodeCreate("You recieved a reward of " + quest5.goldReward + " gold and " + quest5.fameReward + " fame.")
		}
		inCombat = false
	}
	if (battleType == "conquest"){
		if (initialConquestPage == 1){
			land += conquest1.landReward
			glory += conquest1.gloryReward
			nodeCreate("You have captured " + conquest1.landReward + " land and " + conquest1.gloryReward + " glory.")
			if (stage == 3){
				stage = 4
				nodeCreate("House more soldiers and expand your army.")
			}
		}
		if (initialConquestPage == 2){
			land += conquest2.landReward
			glory += conquest2.gloryReward
			nodeCreate("You have captured " + conquest2.landReward + " land and " + conquest2.gloryReward + " glory.")
		}
		if (initialConquestPage == 3){
			land += conquest3.landReward
			glory += conquest3.gloryReward
			nodeCreate("You have captured " + conquest3.landReward + " land and " + conquest3.gloryReward + " glory.")
		}
		inCombat = false
	}
}

function lose(){
	nodeCreate("You have lost the battle.")
	soldiers = 0
	inCombat = false
}

function battle(type){
	if (type == 1){
		initialQuestPage = questPage
		battleType = "quest"
		if (initialQuestPage == 1){
			enemySoldiers = 1
			enemySoldierStats.hp = 1
			enemySoldierStats.attack = 0.04
		}
		if (initialQuestPage == 2){
			enemySoldiers = 2
			enemySoldierStats.hp = 1
			enemySoldierStats.attack = 0.06
		}
		if (initialQuestPage == 3){
			enemySoldiers = 1
			enemySoldierStats.hp = 3
			enemySoldierStats.attack = 0.2
		}
		if (initialQuestPage == 4){
			enemySoldiers = 5
			enemySoldierStats.hp = 1.3
			enemySoldierStats.attack = 0.15
		}
		if (initialQuestPage == 5){
			enemySoldiers = 2
			enemySoldiers = 10
			enemySoldierStats.attack = 0.2
		}
	}
	if (type == 2){
		initialConquestPage = conquestPage
		battleType = "conquest"
		if (initialConquestPage == 1){
			enemySoldiers = 10
			enemySoldierStats.hp = 1
			enemySoldierStats.attack = 0.04
		}
		if (initialConquestPage == 2){
			enemySoldiers = 30
			enemySoldierStats.hp = 2
			enemySoldierStats.attack = 0.1
		}
		if (initialConquestPage == 3){
			enemySoldiers = 100
			enemySoldierStats.hp = 5
			enemySoldierStats.attack = 0.3
		}
	}				
	inCombat = true
	battleHp = soldiers * soldierStats.hp
	initialBattleHp = battleHp
	soldiers = Math.ceil(battleHp / soldierStats.hp)
	document.getElementById("battleSoldierDisplay").innerHTML = soldiers
	document.getElementById("hpBar").style.width = ((battleHp / initialBattleHp) * 100) + "%"
	
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

function buyBattleStandard(){
	if (gold >= 2500){
		gold -= 2500
		conquestUnlocked = true
	}
}
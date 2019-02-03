//TO DO: New fish tier (Check saving too)
money = 0

line = "cast"
baited = false
rodQuality = 0
fishChance = 0
fishingSite = 1
fishingPower
place = "Hedgefield"
reelStatus = 1
castStatus = 1
fishBarValue = 0
fishBarDirection = 1
fishBarBonus = 0
fishBarText = ""
fishBarTextHide = false

questChance = 0
questObj = 1
questReq = 0
questReward = 0
questTimer = 0
questObjMet = 0
questCurrent = ""

level = 1
xp = 0
xpMax = 10
sp = 0

enroled = false

net = {
	installed: false,
	catchRate: 0,
	size: 0,
	quantity: 0,
	max: 5,
	price: 0,
	level: 0
}

neg = {
	level: 0,
	cost: 1,
	multiplier: 1
}

patience = {
	level: 0,
	cost: 1,
	multiplier: 1
}

string = {
	level: 1,
	price: 10
}

hook = {
	level: 1,
	price: 20
}

reel = {
	level: 1,
	price: 30
}

pole = {
	level: 1,
	price: 40
}

boat = {
	level: 0,
	price: 100
}

tinCan = {
	quantity: 0,
	value: Math.round(1 * neg.multiplier),
	net: 0 
}

rubberDuck = {
	quantity: 0,
	value: Math.round(3 * neg.multiplier),
	net: 0
}

oldBoot = {
	quantity: 0,
	value: Math.round(5 * neg.multiplier),
	net: 0
}

bass = {
	quantity: 0,
	value: Math.round(10 * neg.multiplier),
	net: 0
}

tuna = {
	quantity: 0,
	value: Math.round(30 * neg.multiplier),
	net: 0
}

salmon = {
	quantity: 0,
	value: Math.round(50 * neg.multiplier),
	net: 0
}

pike = {
	quantity: 0,
	value: Math.round(100 * neg.multiplier),
	net: 0
}

swordfish = {
	quantity: 0,
	value: Math.round(300 * neg.multiplier),
	net: 0
}

clownfish = {
	quantity: 0,
	value: Math.round(500 * neg.multiplier),
	net: 0
}

eel = {
	quantity:  0,
	value: Math.round(1000 * neg.multiplier),
	net: 0
}

anglerfish = {
	quantity: 0,
	value: Math.round(3000 * neg.multiplier),
	net: 0
}

squid = {
	quantity: 0,
	value: Math.round(5000 * neg.multiplier),
	net: 0
}

function save(){
	var save = {
		money: money,
		fishingSite: fishingSite,
		questObj: questObj,
		questReq: questReq,
		questReward: questReward,
		questTimer: questTimer,
		questObjMet: questObjMet,
		questCurrent: questCurrent,
		level: level,
		xp: xp,
		xpMax: xpMax,
		sp: sp,
		enroled: enroled,
		net: net,
		neg: neg,
		patience: patience,
		string: string,
		hook: hook,
		reel: reel,
		pole: pole,
		boat: boat,
		tinCan: tinCan,
		rubberDuck: rubberDuck,
		oldBoot: oldBoot,
		bass: bass,
		tuna: tuna,
		salmon: salmon,
		pike: pike,
		swordfish:swordfish,
		clownfish: clownfish,
		eel: eel,
		anglerfish: anglerfish,
		squid: squid,
	}
	localStorage.setItem("save",JSON.stringify(save))
}

function load(){
	var savegame = JSON.parse(localStorage.getItem("save"))
	if (typeof savegame.money !== "undefined") money = savegame.money
	if (typeof savegame.fishingSite !== "undefined") fishingSite = savegame.fishingSite
	if (typeof savegame.questObj !== "undefined") questObj = savegame.questObj
	if (typeof savegame.questReq !== "undefined") questReq = savegame.questReq
	if (typeof savegame.questReward !== "undefined") questReward = savegame.questReward
	if (typeof savegame.questTimer !== "undefined") questTimer = savegame.questTimer
	if (typeof savegame.questObjMet !== "undefined") questObjMet = savegame.questObjMet
	if (typeof savegame.questCurrent !== "undefined") questCurrent = savegame.questCurrent
	if (typeof savegame.level !== "undefined") level = savegame.level
	if (typeof savegame.xp !== "undefined") xp = savegame.xp
	if (typeof savegame.xpMax !== "undefined") xpMax = savegame.xpMax
	if (typeof savegame.sp !== "undefined") sp = savegame.sp
	if (typeof savegame.enroled !== "undefined") enroled = savegame.enroled
	if (typeof savegame.net !== "undefined") net = savegame.net
	if (typeof savegame.neg !== "undefined") neg = savegame.neg
	if (typeof savegame.patience !== "undefined") patience = savegame.patience
	if (typeof savegame.string !== "undefined") string = savegame.string
	if (typeof savegame.hook !== "undefined") hook = savegame.hook
	if (typeof savegame.reel !== "undefined") reel = savegame.reel
	if (typeof savegame.pole !== "undefined") pole = savegame.pole
	if (typeof savegame.boat !== "undefined") boat = savegame.boat
	if (typeof savegame.tinCan !== "undefined") tinCan = savegame.tinCan
	if (typeof savegame.rubberDuck !== "undefined") rubberDuck = savegame.rubberDuck
	if (typeof savegame.oldBoot !== "undefined") oldBoot = savegame.oldBoot
	if (typeof savegame.bass !== "undefined") bass = savegame.bass
	if (typeof savegame.tuna !== "undefined") tuna = savegame.tuna
	if (typeof savegame.salmon !== "undefined") salmon = savegame.salmon
	if (typeof savegame.pike !== "undefined") pike = savegame.pike
	if (typeof savegame.swordfish !== "undefined") swordfish = savegame.swordfish
	if (typeof savegame.clownfish !== "undefined") clownfish = savegame.clownfish
	if (typeof savegame.eel !== "undefined") eel = savegame.eel
	if (typeof savegame.anglerfish !== "undefined") anglerfish = savegame.anglerfish
	if (typeof savegame.squid !== "undefined") squid = savegame.squid
}

setTimeout(function(){
	load()
	if (boat.level >= 1){
		questCountdown()
	}
}, 200)


/*/

/*/

setInterval(function(){
	save()
}, 3000)

setInterval(function(){
	if (tinCan.quantity > 0){
		document.getElementById("tinCanRow").style.display = "block"
		document.getElementById("tinCanSell").style.display = "block"
	}else{
		document.getElementById("tinCanRow").style.display = "none"
		document.getElementById("tinCanSell").style.display = "none"
	}
	if (rubberDuck.quantity > 0){
		document.getElementById("rubberDuckRow").style.display = "block"
		document.getElementById("rubberDuckSell").style.display = "block"
	}else{
		document.getElementById("rubberDuckRow").style.display = "none"
		document.getElementById("rubberDuckSell").style.display = "none"
	}
	if (oldBoot.quantity > 0){
		document.getElementById("oldBootRow").style.display = "block"
		document.getElementById("oldBootSell").style.display = "block"
	}else{
		document.getElementById("oldBootRow").style.display = "none"
		document.getElementById("oldBootSell").style.display = "none"
	}
	if (bass.quantity > 0){
		document.getElementById("bassRow").style.display = "block"
		document.getElementById("bassSell").style.display = "block"
	}else{
		document.getElementById("bassRow").style.display = "none"
		document.getElementById("bassSell").style.display = "none"
	}
	if (tuna.quantity > 0){
		document.getElementById("tunaRow").style.display = "block"
		document.getElementById("tunaSell").style.display = "block"
	}else{
		document.getElementById("tunaRow").style.display = "none"
		document.getElementById("tunaSell").style.display = "none"
	}
	if (salmon.quantity > 0){
		document.getElementById("salmonRow").style.display = "block"
		document.getElementById("salmonSell").style.display = "block"
	}else{
		document.getElementById("salmonRow").style.display = "none"
		document.getElementById("salmonSell").style.display = "none"
	}
	if (pike.quantity > 0){
		document.getElementById("pikeRow").style.display = "block"
		document.getElementById("pikeSell").style.display = "block"
	}else{
		document.getElementById("pikeRow").style.display = "none"
		document.getElementById("pikeSell").style.display = "none"
	}
	if (swordfish.quantity > 0){
		document.getElementById("swordfishRow").style.display = "block"
		document.getElementById("swordfishSell").style.display = "block"
	}else{
		document.getElementById("swordfishRow").style.display = "none"
		document.getElementById("swordfishSell").style.display = "none"
	}
	if (clownfish.quantity > 0){
		document.getElementById("clownfishRow").style.display = "block"
		document.getElementById("clownfishSell").style.display = "block"
	}else{
		document.getElementById("clownfishRow").style.display = "none"
		document.getElementById("clownfishSell").style.display = "none"
	}
	if (eel.quantity > 0){
		document.getElementById("eelRow").style.display = "block"
		document.getElementById("eelSell").style.display = "block"
	}else{
		document.getElementById("eelRow").style.display = "none"
		document.getElementById("eelSell").style.display = "none"
	}
	if (anglerfish.quantity > 0){
		document.getElementById("anglerfishRow").style.display = "block"
		document.getElementById("anglerfishSell").style.display = "block"
	}else{
		document.getElementById("anglerfishRow").style.display = "none"
		document.getElementById("anglerfishSell").style.display = "none"
	}
	if (squid.quantity > 0){
		document.getElementById("squidRow").style.display = "block"
		document.getElementById("squidSell").style.display = "block"
	}else{
		document.getElementById("squidRow").style.display = "none"
		document.getElementById("squidSell").style.display = "none"
	}

	if (money >= string.price){
		document.getElementById("stringDisabled").disabled = false
	}else{
		document.getElementById("stringDisabled").disabled = true
	}
	if (money >= hook.price){
		document.getElementById("hookDisabled").disabled = false
	}else{
		document.getElementById("hookDisabled").disabled = true
	}
	if (money >= reel.price){
		document.getElementById("reelDisabled").disabled = false
	}else{
		document.getElementById("reelDisabled").disabled = true
	}
	if (money >= pole.price){
		document.getElementById("poleDisabled").disabled = false
	}else{
		document.getElementById("poleDisabled").disabled = true
	}
	if (money >= boat.price){
		document.getElementById("boatDisabled").disabled = false
	}else{
		document.getElementById("boatDisabled").disabled = true
	}
	
	tinCan.value = Math.round(1 * neg.multiplier)
	rubberDuck.value = Math.round(3 * neg.multiplier)
	oldBoot.value = Math.round(5 * neg.multiplier)
	bass.value = Math.round(10 * neg.multiplier)
	tuna.value = Math.round(30 * neg.multiplier)
	salmon.value = Math.round(50 * neg.multiplier)
	pike.value = Math.round(100 * neg.multiplier)
	swordfish.value = Math.round(300 * neg.multiplier)
	clownfish.value = Math.round(500 * neg.multiplier)
	eel.value = Math.round(1000 * neg.multiplier)
	anglerfish.value = Math.round(3000 * neg.multiplier)
	squid.value = Math.round(5000 * neg.multiplier)
	
	if (fishingSite == 1){
		place = "Hedgefield"
		document.getElementById("travel1Disabled").disabled = true
		document.getElementById("travel2Disabled").disabled = false
		document.getElementById("travel3Disabled").disabled = false
		if (string.level <= 1){
			document.getElementById("stringUpgrade").style.display = "block"
		}else{
			document.getElementById("stringUpgrade").style.display = "none"
		}
		if (hook.level <= 1){
			document.getElementById("hookUpgrade").style.display = "block"
		}else{
			document.getElementById("hookUpgrade").style.display = "none"
		}
		if (reel.level <= 1){
			document.getElementById("reelUpgrade").style.display = "block"
		}else{
			document.getElementById("reelUpgrade").style.display = "none"
		}
		if (pole.level <= 1){
			document.getElementById("poleUpgrade").style.display = "block"
		}else{
			document.getElementById("poleUpgrade").style.display = "none"
		}
		if (boat.level <= 0 && rodQuality >= 1){
			document.getElementById("boatUpgrade").style.display = "block"
		}else{
			document.getElementById("boatUpgrade").style.display = "none"
		}
	}
	if (fishingSite == 2){
		place = "Lochsummer"
		document.getElementById("travel1Disabled").disabled = false
		document.getElementById("travel2Disabled").disabled = true
		document.getElementById("travel3Disabled").disabled = false
		if (string.level <= 2){
			document.getElementById("stringUpgrade").style.display = "block"
		}else{
			document.getElementById("stringUpgrade").style.display = "none"
		}
		if (hook.level <= 2){
			document.getElementById("hookUpgrade").style.display = "block"
		}else{
			document.getElementById("hookUpgrade").style.display = "none"
		}
		if (reel.level <= 2){
			document.getElementById("reelUpgrade").style.display = "block"
		}else{
			document.getElementById("reelUpgrade").style.display = "none"
		}
		if (pole.level <= 2){
			document.getElementById("poleUpgrade").style.display = "block"
		}else{
			document.getElementById("poleUpgrade").style.display = "none"
		}
		if (boat.level <= 1){
			document.getElementById("boatUpgrade").style.display = "block"
		}else{
			document.getElementById("boatUpgrade").style.display = "none"
		}
	}
	
	if (fishingSite == 3){
		place = "Whiteshore"
		document.getElementById("travel1Disabled").disabled = false
		document.getElementById("travel2Disabled").disabled = false
		document.getElementById("travel3Disabled").disabled = true
		if (string.level <= 3){
			document.getElementById("stringUpgrade").style.display = "block"
		}else{
			document.getElementById("stringUpgrade").style.display = "none"
		}
		if (hook.level <= 3){
			document.getElementById("hookUpgrade").style.display = "block"
		}else{
			document.getElementById("hookUpgrade").style.display = "none"
		}
		if (reel.level <= 3){
			document.getElementById("reelUpgrade").style.display = "block"
		}else{
			document.getElementById("reelUpgrade").style.display = "none"
		}
		if (pole.level <= 3){
			document.getElementById("poleUpgrade").style.display = "block"
		}else{
			document.getElementById("poleUpgrade").style.display = "none"
		}
		/*/
		if (boat.level <= 2){
			document.getElementById("boatUpgrade").style.display = "block"
		}else{
			document.getElementById("boatUpgrade").style.display = "none"
		}
		/*/
	}
	
	
	if (boat.level >= 1){
		document.getElementById("boatBought").style.display = "block"
	}else{
		document.getElementById("boatBought").style.display = "none"
	}
	
	if (boat.level == 1){
		document.getElementById("travel1Disabled").style.display = "block"
		document.getElementById("travel2Disabled").style.display = "block"
		document.getElementById("travel3Disabled").style.display = "none"
	}else if (boat.level == 2){
		document.getElementById("travel1Disabled").style.display = "block"
		document.getElementById("travel2Disabled").style.display = "block"
		document.getElementById("travel3Disabled").style.display = "block"
	}
	
	if (string.level == 1){
		string.price = 10
	}else if (string.level == 2){
		string.price = 450
	}else if (string.level == 3){
		string.price = 5000
	}
	
	if (hook.level == 1){
		hook.price = 40
	}else if (hook.level == 2){
		hook.price = 1350
	}else if (hook.level == 3){
		hook.price = 28000
	}
	
	if (reel.level == 1){
		reel.price = 90
	}else if (reel.level == 2){
		reel.price = 2850
	}else if (reel.level == 3){
		reel.price = 58000
	}
	
	if (pole.level == 1){
		pole.price = 160
	}else if (pole.level == 2){
		pole.price = 4950
	}else if (pole.level == 3){
		pole.price = 100000
	}
	
	if (boat.level == 0){
		boat.price = 250
	}else if (boat.level == 1){
		boat.price = 7650
	}else if (boat.level == 2){
		boat.price = 154000
	}
	
	if (net.level == 1){
		net.price = 2850
	}else if (net.level == 2){
		net.price = 58000
	}else if (net.level == 3){
		net.price = "Max"
	}
	
	if (fishingSite == 1){
		document.getElementById("anglerBar").style.display = "none"
		document.getElementById("schoolBar").style.display = "none"
	}else if(fishingSite == 2){
		document.getElementById("anglerBar").style.display = "block"
		document.getElementById("schoolBar").style.display = "none"
	}else if(fishingSite == 3){
		document.getElementById("anglerBar").style.display = "none"
		document.getElementById("schoolBar").style.display = "block"
	}
	
	if (xp >= xpMax){
		level += 1
		sp += 1
		xp = 0
		xpMax = Math.round(xpMax * 1.3)
		document.getElementById("levelNotif").style.color = "#00ff00"
		setTimeout(function(){
			document.getElementById("levelNotif").style.color = "white"
		}, 300)
	}
	
	if (enroled == false){
		document.getElementById("enroled").style.display = "none"
		document.getElementById("enrolMain").style.display = "block"
	}else if (enroled == true){
		document.getElementById("enroled").style.display = "block"
		document.getElementById("enrolMain").style.display = "none"
	}
	
	if (money < 1000){
		document.getElementById("enrolButton").disabled = true
	}else{
		document.getElementById("enrolButton").disabled = false
	}
	
	if (sp < neg.cost){
		document.getElementById("negButton").disabled = true
	}else{
		document.getElementById("negButton").disabled = false
	}
	
	if (sp < patience.cost){
		document.getElementById("patienceButton").disabled = true
	}else{
		document.getElementById("patienceButton").disabled = false
	}
	
	rodQuality = (string.level / 4) + (hook.level / 4) + (reel.level / 4) + (pole.level / 4) - 1
	fishingPower = string.level * hook.level * reel.level * pole.level
	
	neg.cost = neg.level + 1
	patience.cost = (patience.level * 2) + 1
	
	neg.multiplier = 1 + (neg.level / 10)
	patience.multiplier = patience.level / 10
	
	document.getElementById("money").innerHTML = money
	document.getElementById("tinCanQuantity").innerHTML = tinCan.quantity
	document.getElementById("rubberDuckQuantity").innerHTML = rubberDuck.quantity
	document.getElementById("oldBootQuantity").innerHTML = oldBoot.quantity
	document.getElementById("bassQuantity").innerHTML = bass.quantity
	document.getElementById("tunaQuantity").innerHTML = tuna.quantity
	document.getElementById("salmonQuantity").innerHTML = salmon.quantity
	document.getElementById("pikeQuantity").innerHTML = pike.quantity
	document.getElementById("swordfishQuantity").innerHTML = swordfish.quantity
	document.getElementById("clownfishQuantity").innerHTML = clownfish.quantity
	document.getElementById("eelQuantity").innerHTML = eel.quantity
	document.getElementById("anglerfishQuantity").innerHTML = anglerfish.quantity
	document.getElementById("squidQuantity").innerHTML = squid.quantity
	
	document.getElementById("stringLevel").innerHTML = string.level + 1
	document.getElementById("hookLevel").innerHTML = hook.level + 1
	document.getElementById("reelLevel").innerHTML = reel.level + 1
	document.getElementById("poleLevel").innerHTML = pole.level + 1
	document.getElementById("boatLevel").innerHTML = boat.level + 1
	
	document.getElementById("stringPrice").innerHTML = string.price
	document.getElementById("hookPrice").innerHTML = hook.price
	document.getElementById("reelPrice").innerHTML = reel.price
	document.getElementById("polePrice").innerHTML = pole.price
	document.getElementById("boatPrice").innerHTML = boat.price
	
	document.getElementById("lakeName").innerHTML = place
	document.getElementById("storeName").innerHTML = place
	
	document.getElementById("tinCanValue").innerHTML = tinCan.value * tinCan.quantity
	document.getElementById("rubberDuckValue").innerHTML = rubberDuck.value * rubberDuck.quantity
	document.getElementById("oldBootValue").innerHTML = oldBoot.value * oldBoot.quantity
	document.getElementById("bassValue").innerHTML = bass.value * bass.quantity
	document.getElementById("tunaValue").innerHTML = tuna.value * tuna.quantity
	document.getElementById("salmonValue").innerHTML = salmon.value * salmon.quantity
	document.getElementById("pikeValue").innerHTML = pike.value * pike.quantity
	document.getElementById("swordfishValue").innerHTML = swordfish.value * swordfish.quantity
	document.getElementById("clownfishValue").innerHTML = clownfish.value * clownfish.quantity
	document.getElementById("eelValue").innerHTML = eel.value * eel.quantity
	document.getElementById("anglerfishValue").innerHTML = anglerfish.value * anglerfish.quantity
	document.getElementById("squidValue").innerHTML = squid.value * squid.quantity
	
	document.getElementById("questReq").innerHTML = questReq
	document.getElementById("questReward").innerHTML = questReward
	document.getElementById("questObj").innerHTML = questObj
	document.getElementById("questTimer").innerHTML = questTimer
	
	document.getElementById("fishingPower").innerHTML = fishingPower
	
	document.getElementById("level").innerHTML = level
	document.getElementById("xp").innerHTML = xp
	document.getElementById("xpMax").innerHTML = xpMax
	document.getElementById("sp").innerHTML = sp
	document.getElementById("xpBar").style.width = ((xp / xpMax) * 100) + "%"
	
	document.getElementById("negPrice").innerHTML = neg.cost
	document.getElementById("patiencePrice").innerHTML = patience.cost
	
	document.getElementById("negEffect").innerHTML = Math.round((neg.multiplier - 1) * 100)
	document.getElementById("patienceEffect").innerHTML = Math.round(patience.multiplier * 100)
	
	document.getElementById("negLevel").innerHTML = neg.level + 1
	document.getElementById("patienceLevel").innerHTML = patience.level + 1
	
	document.getElementById("level2").innerHTML = level
	document.getElementById("levelPercentage").innerHTML = Math.round((xp/xpMax) * 100)
	
	document.getElementById("questTimer2").innerHTML = questTimer
	document.getElementById("questObj2").innerHTML = questObj
	document.getElementById("questMax").innerHTML = questReq
	document.getElementById("questCurrent").innerHTML = questCurrent
	
	if (questObj == "bass"){
		questCurrent = bass.quantity
	}
	if (questObj == "tuna"){
		questCurrent = tuna.quantity
	}
	if (questObj == "salmon"){
		questCurrent = salmon.quantity
	}
	if (questObj == "pike"){
		questCurrent = pike.quantity
	}
	if (questObj == "swordfish"){
		questCurrent = swordfish.quantity
	}
	if (questObj == "clownfish"){
		questCurrent = clownfish.quantity
	}
	if (questObj == "eel"){
		questCurrent = eel.quantity
	}
	if (questObj == "anglerfish"){
		questCurrent = anglerfish.quantity
	}
	if (questObj == "squid"){
		questCurrent = squid.quantity
	}
	
	if (enroled == true){
		document.getElementById("levelNotif").style.display ="block"
	}else{
		document.getElementById("levelNotif").style.display ="none"
	}
	
	if (boat.level >= 1){
		document.getElementById("questNotif").style.display ="block"
	}else{
		document.getElementById("questNotif").style.display ="none"
	}
	
	if (castStatus == 1){
		document.getElementById("castLineButton").innerHTML = "Set up cast"
	} else{
		document.getElementById("castLineButton").innerHTML = "Cast line"
	}
	
	if (questObj == "bass"){
		console.log("helol")
		if (bass.quantity >= questReq){
			questObjMet = 1
		}
	}
	if (questObj == "tuna"){
		if (tuna.quantity >= questReq){
			questObjMet = 1
		}
	}
	if (questObj == "salmon"){
		if (salmon.quantity >= questReq){
			questObjMet = 1
		}
	}
	if (questObj == "pike"){
		if (pike.quantity >= questReq){
			questObjMet = 1
		}
	}
	if (questObj == "swordfish"){
		if (swordfish.quantity >= questReq){
			questObjMet = 1
		}
	}
	if (questObj == "clownfish"){
		if (clownfish.quantity >= questReq){
			questObjMet = 1
		}
	}
	if (questObj == "eel"){
		if (eel.quantity >= questReq){
			questObjMet = 1
		}
	}
	if (questObj == "anglerfish"){
		if (anglerfish.quantity >= questReq){
			questObjMet = 1
		}
	}
	if (questObj == "squid"){
		if (squid.quantity >= questReq){
			questObjMet = 1
		}
	}
	
	if (questObjMet == 1){
		document.getElementById("questNotif").style.color = "#00ff00"
	}else{
		document.getElementById("questNotif").style.color = "white"
	}
	
	document.getElementById("fishBar").style.width = fishBarValue + "%"
	document.getElementById("fishBarText").innerHTML = fishBarText
	
	if (fishBarTextHide == true){
		document.getElementById("fishBarText").style.display = "none"
	}else{
		document.getElementById("fishBarText").style.display = "block"
	}
	
	if (net.installed ==  true){
		document.getElementById("installNet").style.display = "none"
		document.getElementById("netContent").style.display = "block"
		document.getElementById("netCapacityShow").style.display = "block"
	}else{
		document.getElementById("installNet").style.display = "block"
		document.getElementById("netContent").style.display = "none"
		document.getElementById("netCapacityShow").style.display = "none"
	}
	
	document.getElementById("netQuantity").innerHTML = net.quantity
	document.getElementById("netMax").innerHTML = net.max
	document.getElementById("netCapacity2").innerHTML = "Net capacity: "
	
	net.quantity = tinCan.net + rubberDuck.net + oldBoot.net + bass.net + tuna.net + salmon.net + pike.net + swordfish.net + clownfish.net + eel.net + anglerfish.net + squid.net
	
	document.getElementById("netLevel").innerHTML = net.level
	document.getElementById("netPrice").innerHTML = net.price
	
	if (net.level == 1){
		net.max = 5
	}
	if (net.level == 2){
		net.max = 10
	}
	if (net.level == 3){
		net.max = 15
	}
	
	if (money < net.price){
		document.getElementById("upgradeNet").disabled = true
	}else{
		document.getElementById("upgradeNet").disabled = false
	}
	
	if (money < 100){
		document.getElementById("installNet").disabled = true
	}else{
		document.getElementById("installNet").disabled = false
	}
	
	if (net.installed == true && net.level == 0){
		net.level = 1
	}
	
	if (questChance > 1 && questChance <= 1.34){
		questObj = "bass"
		questReward = bass.value * questReq * 2
	}
	if (questChance > 1.34 && questChance <= 1.67){
		questObj = "tuna"
		questReward = tuna.value * questReq * 2
	}
	if (questChance > 1.67 && questChance <= 2){
		questObj = "salmon"
		questReward = salmon.value * questReq * 2
	}
	if (questChance > 2 && questChance <= 2.34){
		questObj = "pike"
		questReward = pike.value * questReq * 2
	}
	if (questChance > 2.34 && questChance <= 2.67){
		questObj = "swordfish"
		questReward = swordfish.value * questReq * 2
	}
	if (questChance > 2.67 && questChance <= 3){
		questObj = "clownfish"
		questReward = clownfish.value * questReq * 2
	}
	if (questChance > 3 && questChance <= 3.34){
		questObj = "eel"
		questReward = eel.value * questReq * 2
	}
	if (questChance > 3.34 && questChance <= 3.67){
		questObj = "anglerfish"
		questReward = anglerfish.value * questReq * 2
	}
	if (questChance > 3.67 && questChance <= 4){
		questObj = "squid"
		questReward = squid.value * questReq * 2
	}
	
}, 10)

document.getElementById("castLineButton").disabled = false
document.getElementById("reelLineButton").disabled = true

function castLine(){
	if (castStatus == 1){
		fishBarInterval = setInterval(function(){
			if (fishBarValue >= 100){
				fishBarDirection = 2
			}
			if (fishBarValue <= 0){
				fishBarDirection = 1
			}
			if (fishBarDirection == 1){
				fishBarValue += 5	
			}
			if (fishBarDirection == 2){
				fishBarValue -= 5
				console.log("2")
			}
		}, 5)
		castStatus = 2
	} else if(castStatus == 2){
		setTimeout(function(){
			fishBarTextHide = true
		}, 1000)
		fishBarTextHide = false
		if (fishBarValue >= 100){
			fishBarBonus = 0.5
			fishBarText = "Perfect cast!"
		} else if (fishBarValue >= 90){
			fishBarBonus = 0.4
			fishBarText = "Great cast!"
		} else if (fishBarValue >= 75){
			fishBarBonus = 0.3
			fishBarText = "Good cast"
		} else if (fishBarValue >= 60){
			fishBarBonus = 0.2
			fishBarText = "OK cast"
		} else if (fishBarValue >= 50){
			fishBarBonus = 0.1
			fishBarText = "Bad cast"
		} else if (fishBarValue < 50){
			fishBarBonus = 0
			fishBarText = "Terrible cast..."
		}
		clearInterval(fishBarInterval)
		line = "reel"
		baited = false
		document.getElementById("castLineButton").disabled = true
		document.getElementById("reelLineButton").disabled = false
		flash1 = setTimeout(function(){
		baited = true
		reelStatus = 1
		flash2 = setInterval(function(){
			if (reelStatus == 1){
				document.getElementById("reelLineButton").style.color = "black"
				document.getElementById("reelLineButton").style.fontSize = "100%"
				reelStatus = 2
			}else if (reelStatus == 2){
				document.getElementById("reelLineButton").style.color = "red"
				document.getElementById("reelLineButton").style.fontSize = "110%" 
				reelStatus = 1
			}
		}, 125)
		}, (3000 + 4000 * Math.random()) * (1 - patience.multiplier))
	}
}

function reelLine(){
	line = "cast"
	fishBarValue = 0
	fishBarText = ""
	if (baited == true){
		fishCatch()
		clearInterval(flash2)
	}
	clearInterval(flash1)
	document.getElementById("reelLineButton").disabled = true
	document.getElementById("castLineButton").disabled = false
	document.getElementById("reelLineButton").style.color = "black"
	document.getElementById("reelLineButton").style.fontSize = "100%" 
	castStatus = 1
}

function fishCatch(){
	fishChance = rodQuality + Math.random() - 0.5 + fishBarBonus
	if (fishingSite == 1 && fishChance > 2){
		fishChance = 2
	}else if (fishingSite == 2 && fishChance > 3){
		fishChance = 3
	}else if (fishingSite == 3 && fishChance > 4){
		fishChance = 4
	}
	if (fishChance < 0){
		fishChance = 0
	}
	if (fishChance >= 0 && fishChance <= 0.34){
		tinCan.quantity += 1
	}
	if (fishChance > 0.34 && fishChance <= 0.67){
		rubberDuck.quantity += 1
	}
	if (fishChance > 0.67 && fishChance <= 1){
		oldBoot.quantity += 1
	}
	if (fishChance > 1 && fishChance <= 1.34){
		bass.quantity += 1
	}
	if (fishChance > 1.34 && fishChance <= 1.67){
		tuna.quantity += 1
	}
	if (fishChance > 1.67 && fishChance <= 2){
		salmon.quantity += 1
	}
	if (fishChance > 2 && fishChance <= 2.34){
		pike.quantity += 1
	}
	if (fishChance > 2.34 && fishChance <= 2.67){
		swordfish.quantity += 1
	}
	if (fishChance > 2.67 && fishChance <= 3){
		clownfish.quantity += 1
	}
	if (fishChance > 3 && fishChance <= 3.34){
		eel.quantity += 1
	}
	if (fishChance > 3.34 && fishChance <= 3.67){
		anglerfish.quantity += 1
	}
	if (fishChance > 3.67 && fishChance <= 4){
		squid.quantity += 1
	}
	if (enroled == true){
		xp += 1 + Math.round(Math.random() * 4)
	}
}

go(1)
function go(place){
	if (place == 1){
		document.getElementById("area").style.display = "block"
		document.getElementById("store").style.display = "none"
		document.getElementById("fishingBoat").style.display = "none"
		document.getElementById("angler").style.display = "none"
		document.getElementById("school").style.display = "none"
	}else if (place == 2){
		document.getElementById("area").style.display = "none"
		document.getElementById("store").style.display = "block"
		document.getElementById("fishingBoat").style.display = "none"
		document.getElementById("angler").style.display = "none"
		document.getElementById("school").style.display = "none"
	}else if (place == 3){
		document.getElementById("area").style.display = "none"
		document.getElementById("store").style.display = "none"
		document.getElementById("fishingBoat").style.display = "block"
		document.getElementById("angler").style.display = "none"
		document.getElementById("school").style.display = "none"
	}else if (place == 4){
		document.getElementById("area").style.display = "none"
		document.getElementById("store").style.display = "none"
		document.getElementById("fishingBoat").style.display = "none"
		document.getElementById("angler").style.display = "block"
		document.getElementById("school").style.display = "none"
	}else if (place == 5){
		document.getElementById("area").style.display = "none"
		document.getElementById("store").style.display = "none"
		document.getElementById("fishingBoat").style.display = "none"
		document.getElementById("angler").style.display = "none"
		document.getElementById("school").style.display = "block"
	}
}

function sell(fish){
	if (fish == 1 && tinCan.quantity > 0){
		money += tinCan.value * tinCan.quantity
		tinCan.quantity = 0
	}
	if (fish == 2 && rubberDuck.quantity > 0){
		money += rubberDuck.value * rubberDuck.quantity
		rubberDuck.quantity = 0
	}
	if (fish == 3 && oldBoot.quantity > 0){
		money += oldBoot.value * oldBoot.quantity
		oldBoot.quantity = 0
	}
	if (fish == 4 && bass.quantity > 0){
		money += bass.value * bass.quantity
		bass.quantity = 0
	}
	if (fish == 5 && tuna.quantity > 0){
		money += tuna.value * tuna.quantity
		tuna.quantity = 0
	}
	if (fish == 6 && salmon.quantity > 0){
		money += salmon.value * salmon.quantity
		salmon.quantity = 0
	}
	if (fish == 7 && pike.quantity > 0){
		money += pike.value * pike.quantity
		pike.quantity = 0
	}
	if (fish == 8 && swordfish.quantity > 0){
		money += swordfish.value * swordfish.quantity
		swordfish.quantity = 0
	}
	if (fish == 9 && clownfish.quantity > 0){
		money += clownfish.value * clownfish.quantity
		clownfish.quantity = 0
	}
	if (fish == 10 && eel.quantity > 0){
		money += eel.value * eel.quantity
		eel.quantity = 0
	}
	if (fish == 11 && anglerfish.quantity > 0){
		money += anglerfish.value * anglerfish.quantity
		anglerfish.quantity = 0
	}
	if (fish == 12 && squid.quantity > 0){
		money += squid.value * squid.quantity
		squid.quantity = 0
	}
}

function buy(upgrade){
	if (upgrade == 1 && money >= string.price){
		string.level += 1
		money -= string.price
	}
	if (upgrade == 2 && money >= hook.price){
		hook.level += 1
		money -= hook.price
	}
	if (upgrade == 3 && money >= reel.price){
		reel.level += 1
		money -= reel.price
	}
	if (upgrade == 4 && money >= pole.price){
		pole.level += 1
		money -= pole.price
	}
	if (upgrade == 5 && money >= boat.price){
		boat.level += 1
		if (boat.level == 1){
			questSet()
		}
		money -= boat.price
	}
}

function travel(site){
	if (site == 1){
		fishingSite = 1
	}
	if (site == 2){
		fishingSite = 2
	}
	if (site == 3){
		fishingSite = 3
	}
}

function questSet(){
	questObjMet = 0
	questTimer = 100
	questCountdown()
	questReq = 3 + Math.round(2 * Math.random())
	questChance = rodQuality + Math.random()
	console.log(questChance)
	if (questChance > 1 && questChance <= 1.34){
		questObj = "bass"
		questReward = bass.value * questReq * 2
	}
	if (questChance > 1.34 && questChance <= 1.67){
		questObj = "tuna"
		questReward = tuna.value * questReq * 2
	}
	if (questChance > 1.67 && questChance <= 2){
		questObj = "salmon"
		questReward = salmon.value * questReq * 2
	}
	if (questChance > 2 && questChance <= 2.34){
		questObj = "pike"
		questReward = pike.value * questReq * 2
	}
	if (questChance > 2.34 && questChance <= 2.67){
		questObj = "swordfish"
		questReward = swordfish.value * questReq * 2
	}
	if (questChance > 2.67 && questChance <= 3){
		questObj = "clownfish"
		questReward = clownfish.value * questReq * 2
	}
	if (questChance > 3 && questChance <= 3.34){
		questObj = "eel"
		questReward = eel.value * questReq * 2
	}
	if (questChance > 3.34 && questChance <= 3.67){
		questObj = "anglerfish"
		questReward = anglerfish.value * questReq * 2
	}
	if (questChance > 3.67 && questChance <= 4){
		questObj = "squid"
		questReward = squid.value * questReq * 2
	}
}

function questRedeem(){
	if (questObj == "bass"){
		if (bass.quantity >= questReq){
			bass.quantity -= questReq
			money += questReward
			questSet()
			clearInterval(questInterval)
			questObjMet = 0
		}
	}
	if (questObj == "tuna"){
		if (tuna.quantity >= questReq){
			tuna.quantity -= questReq
			money += questReward
			questSet()
			clearInterval(questInterval)
			questObjMet = 0
		}
	}
	if (questObj == "salmon"){
		if (salmon.quantity >= questReq){
			salmon.quantity -= questReq
			money += questReward
			questSet()
			clearInterval(questInterval)
			questObjMet = 0
		}
	}
	if (questObj == "pike"){
		if (pike.quantity >= questReq){
			pike.quantity -= questReq
			money += questReward
			questSet()
			clearInterval(questInterval)
			questObjMet = 0
		}
	}
	if (questObj == "swordfish"){
		if (swordfish.quantity >= questReq){
			swordfish.quantity -= questReq
			money += questReward
			questSet()
			clearInterval(questInterval)
			questObjMet = 0
		}
	}
	if (questObj == "clownfish"){
		if (clownfish.quantity >= questReq){
			clownfish.quantity -= questReq
			money += questReward
			questSet()
			clearInterval(questInterval)
			questObjMet = 0
		}
	}
	if (questObj == "eel"){
		if (eel.quantity >= questReq){
			eel.quantity -= questReq
			money += questReward
			questSet()
			clearInterval(questInterval)
			questObjMet = 0
		}
	}
	if (questObj == "anglerfish"){
		if (anglerfish.quantity >= questReq){
			anglerfish.quantity -= questReq
			money += questReward
			questSet()
			clearInterval(questInterval)
			questObjMet = 0
		}
	}
	if (questObj == "squid"){
		if (squid.quantity >= questReq){
			squid.quantity -= questReq
			money += questReward
			questSet()
			clearInterval(questInterval)
			questObjMet = 0
		}
	}
}


function questCountdown(){
	questInterval = setInterval(function(){
		if (questTimer > 0){
			questTimer -= 1
		}else{
			questSet()
			clearInterval(questInterval)
		}
	}, 1000)
}

function enrol(){
	if (money >= 1000){
		money -= 1000
		enroled = true
	}
}

function negLearn(){
	sp -= neg.cost
	neg.level += 1
}

function patienceLearn(){
	sp -= patience.cost
	patience.level += 1
}

function installNet(){
	if (money >= 100){
		money -= 100
		net.installed = true
	}
}

setInterval(function(){
	if (net.installed == true && net.quantity < net.max){
		fishChance = rodQuality + Math.random() - 0.25
		if (fishingSite == 1 && fishChance > 2){
			fishChance = 2
		}else if (fishingSite == 2 && fishChance > 3){
			fishChance = 3
		}else if (fishingSite == 3 && fishChance > 4){
			fishChance = 4
		}
		if (fishChance < 0){
			fishChance = 0
		}
		if (fishChance >= 0 && fishChance <= 0.34){
			tinCan.net += 1
			console.log("tinCan")
		}
		if (fishChance > 0.34 && fishChance <= 0.67){
			rubberDuck.net += 1
			console.log("rubberDuck")
		}
		if (fishChance > 0.67 && fishChance <= 1){
			oldBoot.net += 1
			console.log("oldBoot")
		}
		if (fishChance > 1 && fishChance <= 1.34){
			bass.net += 1
			console.log("bass")
		}
		if (fishChance > 1.34 && fishChance <= 1.67){
			tuna.net += 1
			console.log("tuna")
		}
		if (fishChance > 1.67 && fishChance <= 2){
			salmon.net += 1
			console.log("salmon")
		}
		if (fishChance > 2 && fishChance <= 2.34){
			pike.net += 1
			console.log("pike")
		}
		if (fishChance > 2.34 && fishChance <= 2.67){
			swordfish.net += 1
			console.log("swordfish")
		}
		if (fishChance > 2.67 && fishChance <= 3){
			clownfish.net += 1
			console.log("clownfish")
		}
		if (fishChance > 3 && fishChance <= 3.34){
			eel.net += 1
			console.log("eel")
		}
		if (fishChance > 3.34 && fishChance <= 3.67){
			anglerfish.net += 1
			console.log("anglerfish")
		}
		if (fishChance > 3.67 && fishChance <= 4){
			squid.net += 1
			console.log("squid")
		}
	}
}, 15000)

function emptyNet(){
	tinCan.quantity += tinCan.net
	tinCan.net = 0
	rubberDuck.quantity += rubberDuck.net
	rubberDuck.net = 0
	oldBoot.quantity += oldBoot.net
	oldBoot.net = 0
	bass.quantity += bass.net
	bass.net = 0
	tuna.quantity += tuna.net
	tuna.net = 0
	salmon.quantity += salmon.net
	salmon.net = 0
	pike.quantity += pike.net
	pike.net = 0
	swordfish.quantity += swordfish.net
	swordfish.net = 0
	clownfish.quantity += clownfish.net
	clownfish.net = 0
	eel.quantity += eel.net
	eel.net = 0
	anglerfish.quantity += anglerfish.net
	anglerfish.net = 0
	squid.quantity += squid.net
	squid.net = 0
}

function upgradeNet(){
	if (money >= net.price){
		money -= net.price
		net.level += 1
	}
}

function resetGame(){
	localStorage.removeItem("save")
	location.reload()
}

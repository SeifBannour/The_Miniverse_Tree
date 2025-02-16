function hasUpgrade(layer, id) {
	return ((player[layer].upgrades.includes(toNumber(id)) || player[layer].upgrades.includes(id.toString())) && !tmp[layer].deactivated)
}

function hasMilestone(layer, id) {
	return ((player[layer].milestones.includes(toNumber(id)) || player[layer].milestones.includes(id.toString())) && !tmp[layer].deactivated)
}

function hasAchievement(layer, id) {
	return ((player[layer].achievements.includes(toNumber(id)) || player[layer].achievements.includes(id.toString())) && !tmp[layer].deactivated)
}

function hasChallenge(layer, id) {
	return ((player[layer].challenges[id]) && !tmp[layer].deactivated)
}

function maxedChallenge(layer, id) {
	return ((player[layer].challenges[id] >= tmp[layer].challenges[id].completionLimit) && !tmp[layer].deactivated)
}

function challengeCompletions(layer, id) {
	return (player[layer].challenges[id])
}


function getBuyableAmount(layer, id) {
	return (player[layer].buyables[id])
}

function isBuyableMaxed(layer, id) {
	return (new Decimal(tmp[layer].buyables[id].purchaseLimit).lte(getBuyableAmount(layer, id)))
}

function isAllBuyablesMaxed(layer, ids = [11]) {
	for(let i = 0; i < ids.length; i++) {
		if(!isBuyableMaxed(layer, ids[i])) return false 
	}
	return true
}

function setBuyableAmount(layer, id, amt) {
	player[layer].buyables[id] = amt
}

function addBuyables(layer, id, amt) {
	player[layer].buyables[id] = player[layer].buyables[id].add(amt)
}

function getClickableState(layer, id) {
	return (player[layer].clickables[id])
}

function setClickableState(layer, id, state) {
	player[layer].clickables[id] = state
}

function getGridData(layer, id) {
	return (player[layer].grid[id])
}

function setGridData(layer, id, data) {
	player[layer].grid[id] = data
}

function upgradeEffect(layer, id) {
	return (tmp[layer].upgrades[id].effect)
}

function challengeEffect(layer, id) {
	return (tmp[layer].challenges[id].rewardEffect)
}

function buyableEffect(layer, id) {
	return (tmp[layer].buyables[id].effect)
}

function clickableEffect(layer, id) {
	return (tmp[layer].clickables[id].effect)
}

function achievementEffect(layer, id) {
	return (tmp[layer].achievements[id].effect)
}

function gridEffect(layer, id) {
	return (gridRun(layer, 'getEffect', player[layer].grid[id], id))
}

Primes = [0, 0, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 6, 6, 6, 6, 6, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9,
	9, 10, 10, 11, 11, 11, 11, 11, 13, 13, 13, 13, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 17, 
	17, 17, 17, 17, 17, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 21, 21, 21, 21, 21, 21, 21, 21,
	23, 23, 23, 23, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 27, 27, 27, 27, 27, 28, 28,
	28, 28, 28, 28, 29, 29, 29, 29, 30, 30, 31, 31, 31, 31, 31, 31, 31, 31, 33, 33, 33, 33, 33,
	33, 34, 34, 34, 34, 35, 35, 36, 36, 36, 36, 36, 36, 36, 36, 37, 37, 38, 38, 38, 38, 38, 40,
	40, 40, 40, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 43, 43, 43, 43, 43, 43, 43, 43, 44, 44,
	45, 45, 45, 45, 46, 46, 46, 46, 46, 46, 47, 47, 47, 47, 49, 49, 49, 49, 49, 49, 49, 49, 50,
	50, 50, 50, 51, 51, 51, 51, 51, 51, 51, 51, 52, 52, 52, 52, 52, 52, 52, 52, 54, 54, 54, 54,
	54, 54, 54, 54, 55, 55, 55, 55, 56, 56, 56, 56, 57, 57, 57, 57, 57, 57, 57, 57, 58, 58, 58,
	58, 58, 58, 59, 59, 59, 59, 60, 60, 61, 61, 61, 61, 61, 61, 61, 61, 62, 62, 62, 62, 63, 63,
	63, 63, 64, 64, 64, 64, 64, 64, 65, 65, 65, 65, 66, 66, 67, 67, 67, 67, 67, 67, 67, 67, 69,
	69, 69, 69, 69, 69, 70, 70, 70, 70, 71, 71, 72, 72, 72, 72, 72, 72, 72, 72, 73, 73, 73, 73,
	74, 74, 75, 75, 75, 75, 75, 75, 75, 75, 76, 76, 76, 76, 77, 77, 77, 77, 78, 78, 78, 78, 78, 78];
  

function PrimeSmallerthan(n) {
	return Primes[n]
}

//Plague Tree
function getUndulatingColor(period = Math.sqrt(10)){
	let t = new Date().getTime()
	let a = Math.sin(t / 1e3 / period * 2 * Math.PI + 0) 
	let b = Math.sin(t / 1e3 / period * 2 * Math.PI + 2)
	let c = Math.sin(t / 1e3 / period * 2 * Math.PI + 4)
	a = convertToB16(Math.floor(a*128) + 128)
	b = convertToB16(Math.floor(b*128) + 128)
	c = convertToB16(Math.floor(c*128) + 128)
	return "#"+String(a) + String(b) + String(c)
}

function convertToB16(n){
    let codes = {
            0: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "A",
            11: "B",
            12: "C",
            13: "D",
            14: "E",
            15: "F",
    }
    let x = n % 16
    return codes[(n-x)/16] + codes[x]
}
////////////////////////////7


  
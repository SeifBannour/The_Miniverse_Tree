let modInfo = {
	name: "The Miniverse Tree",
	id: "tminit",
	author: "SomeRandomGuy",
	pointsName: "Verses",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.01",
	name: "Under Constuction",
}


let changelog = `<h1>Changelog:</h1><br><br><br>
		<h2>v0.01</h2><br>
	<h3>!Released the game!</h3><br><br>
	<h3>Added </h3><h3 style='color:#2c74ff;text-shadow:0px 0px 5px ;'>Mini Points</h3> <h3>layer</h3><br>
	<h4>5 Upgrades</h4>
	<h4>3 Buyables</h4>
	<h4>2 Challenges</h4>
	<h4>7 Milestones</h4>
	<h4>1 Milestone Effect</h4>


	`

let winText = `<h1>Go touch grass</h1><br><br>`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return false
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
	beforeStart: true,
	paused: false,
	dev: {
		noCooldown: false,
		CanMileReset: true,
		tools: false,
	},
}}

// Display extra things at the top of the page
var displayThings = [
	"<br><h1 style='color: #ff4545'>!!Under Heavy Construction!!</h1>"
]

// Determines when the game "ends"
function isEndgame() {
	return false
}

function repeat_br(n){
	let res = ""
	for (let index = 0; index < n; index++) {
		res += "<br>"
	}
	return res
}

// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}
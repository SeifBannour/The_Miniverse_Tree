var br = "<br>"
var br2 = br+br

function MiniMainDisplay() {
    let wholeN = 20;
    let p = player.mg.points.gte(wholeN) || player.mg.points.eq(0) ? formatWhole(player.mg.points) : commaFormat(player.mg.points, 5)
    let be = player.mg.best.gte(wholeN) || player.mg.best.eq(0) ? formatWhole(player.mg.best) :  format(player.mg.best, 4)
    let rg = tmp.mg.getResetGain.gte(wholeN) || tmp.mg.getResetGain.eq(0) ? formatWhole(tmp.mg.getResetGain) : ctrlDown ? commaFormat(tmp.mg.getResetGain, 7) : commaFormat(tmp.mg.getResetGain, 5)
    let rgs = tmp.mg.getResetGain.gte(wholeN) || tmp.mg.getResetGain.eq(0) ? formatWhole(tmp.mg.getResetGain.div(10)) : ctrlDown ? commaFormat(tmp.mg.getResetGain.div(10), 7) : commaFormat(tmp.mg.getResetGain.div(10), 5)
    let da = formatWhole(player.mg.divisorAdder)
    //let lim = player.mg.limit.gte(20) ? formatWhole(player.mg.limit) : format(player.mg.limit, 4)

    let co = player.mg.points.gte(player.mg.softcap) ? "#ee2233" : tmp.mg.color
    let a = "You have " + colorText("h2" , tmp.mg.color , p) + " Mini Points"
    aa = ""
    let b = "You are getting " + rg + " Mini Points per second"
    let c = "Your best Mini Points is " + be

    if(player.mg.points.gte(player.mg.softcap)) { 
        a = "You have " + colorText("h2" , tmp.mg.color , p, "#aaf3") + " Tiny Mini Points"; 
        aa = "Mini Points are starting to feel less... mini. You're now gaining /10 Mini Points per second."
    }

    let d = "Formula : (Base x Multipliers) / Divisor"
    let e = "(" + format(tmp.mg.getBaseMini, 3) + " x " + format(tmp.mg.getGainMult, 3) + ") / " + (da == 0 ? formatWhole(tmp.mg.getGainDiv) : "("  + formatWhole(tmp.mg.getGainDiv) +  " + " + da + ")")
    let f = "First softcap start at: " + commaFormat(player.mg.softcap, 4) + " Points (Based on 'M' cost if not maxed)"
    let ff = "Second softcap start at: " + commaFormat(player.mg.hardcap, 4) + " Points"

    let s = "<spann style='font-size:10px'>Press Shift for more details and Crtl for more accuracy</span>"
    return shiftDown ? br + a + br2 + d + br + e + br + f + br + ff: br + a + br + aa + br + b + br + c + br + s
}

function DisplayMilestonesEffects() {
    if(!player.mg.Is_mileEffectsUnlocked) return

    let a = "<h3>You have Unlocked</h3> " + colorText("h2 class='gradient-text'", tmp.mg.color, formatWhole(player.mg.unlockedMileEffects)) + " <h3>" + plural("Effect", player.mg.unlockedMileEffects) + " that's also producing Effect Points.</h3>"

    let b = "<h3>You have " + colorText("h2", tmp.mg.color, commaFormat(player.mg.mileEffectPoints, 2)) + " Effect Points (" + commaFormat(tmp.mg.getMileEffectPointsPerSecond, 2) + "/s)</h3>"

    mileEffects = [commaFormat(tmp.mg.MileEffect_1, 2), format(tmp.mg.MileEffect_2, 0), format(tmp.mg.MileEffect_3, 2)]
    mileAntiEffects = [formatWhole(tmp.mg.MileAntiEffect_1)]
    mileEffectsDesc = ["<div><h3>•Milestones add to Mini Points base by </h3><h2 class='gradient-text'>+"+ mileEffects[0] +"</h2></div>   &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <div><h3>•Milestones requirements are</h3><h2 class='negative-gradient-text'> "+ mileAntiEffects[0] +"%</h2><h3> higher and 'M' second effect is boosted by 'i'</h3></div>",                  
                       "<div><h3>•Mini Points per second make milestones 1-4 requirement cheaper by </h3><h2 class='gradient-text'>-"+ mileEffects[1] +"%</h2></div> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <div><h3>•Milestones requirements are</h3><h2 class='negative-gradient-text'> "+ mileAntiEffects[0] +"%</h2><h3> higher and 'M' second effect is boosted by 'i' </h3></div>",
                       "<div><h3>•Milestones add to Mini Points base by </h3><h2 class='gradient-text'>+"+ mileEffects[0] +"</h2></div>   &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <div><h3>•Milestones requirements are</h3><h2 class='negative-gradient-text'> "+ mileAntiEffects[0] +"%</h2><h3> higher and 'M' second effect is boosted by 'i'</h3></div>",                  
                       "<div><h3>•Mini Points per second make milestones 1-4 requirement cheaper by </h3><h2 class='gradient-text'>-"+ mileEffects[1] +"%</h2></div> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <div><h3>•Milestones requirements are</h3><h2 class='negative-gradient-text'> "+ mileAntiEffects[0] +"%</h2><h3> higher and 'M' second effect is boosted by 'i' </h3></div>",
                       "<div><h3>•Milestones add to Mini Points base by </h3><h2 class='gradient-text'>+"+ mileEffects[0] +"</h2></div>   &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <div><h3>•Milestones requirements are</h3><h2 class='negative-gradient-text'> "+ mileAntiEffects[0] +"%</h2><h3> higher and 'M' second effect is boosted by 'i'</h3></div>",                  
                       "<div><h3>•Mini Points per second make milestones 1-4 requirement cheaper by </h3><h2 class='gradient-text'>-"+ mileEffects[1] +"%</h2></div> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <div><h3>•Milestones requirements are</h3><h2 class='negative-gradient-text'> "+ mileAntiEffects[0] +"%</h2><h3> higher and 'M' second effect is boosted by 'i' </h3></div>",
                      ]
    mileEffectsFormula = ["<div><h3>[Milestones x 0.01] &emsp;&emsp;</div> &emsp;&emsp; <div>[(Unlocked effects x 10) + Milestones]</h3></div>",                  
                          "<h3>Second Effect: (Mini Poinst/s + 0.0001) x 0.5</h3>",
                          "","","","",
                         ]           

    let res = "<div style='display: block'>"
    for (i = 0; i < player.mg.unlockedMileEffects; i++){
        res = res + "<div style='display: flex'>" + mileEffectsDesc[i] + "</div>" 
        if(shiftDown) {
            res = res  + "<div style='display: flex'>" +  mileEffectsFormula[i] + "</div>" + br
        }
        else {
            res = res + br
        }
    }

    return a + br + b + br2 + res + "</div>"
}

function SubtabsStyle(id) {
    let IsCurrentSubtab = {'transform': 'translate(2px, 2px)', 'box-shadow': 'var(--hover-box-shadow)'}
    let NotCurrentsubtab = {"text-shadow": ".1em .1em 0 hsl(200 50% 30%)"}
    return currentSubtab("mini") == id ? IsCurrentSubtab : NotCurrentsubtab
}

function UpgradeStyle(id) {
    let upgradeBought = {
        'background-color' : "#1764dd",
    }



    return hasUpgrade("mg", id) ? upgradeBought : (canAffordUpgrade("mg", id) ? {'background-color' : "#2c74ff"} : {'background-color' : "#1a3e8c"})
}

function MilestoneStyle(id) { 
    let milestoneNotCompleted = {
        "background-color" : "#1a3e8c",
        "color" : "hsl(200, 18%, 7%)",
        "font-size" : "small",
        "border" : "transparent",
    } 

    let milestoneCompleted = {
        'background-color' : "#2c74ffee",
        "color" : "hsl(200, 8%, 5%)",
        "font-size" : "small",
    }

    return hasMilestone("mg", id) ? milestoneCompleted : milestoneNotCompleted
}

function ChallenegStyle(id) { 
    let color = {"color" : "hsl(200, 8%, 4%)", "height":"400px"}

    let outofChallenge = {
        'background-color' : "#1a3e8c",
        "border-color":"rgba(194, 206, 235, 0.5)",
    } 

    let canCompleteChallenge = {
        'background-color' : "#2c74ff",
        "border-color":"rgba(194, 206, 235, 0.5)",
    }

    let maxChallenge = {
        'background-color' : "#1a3e8c",
        "border-color": "hsla(59, 95%, 45%, 0.7)",
    }

    if(maxedChallenge("mg", id)) return Object.assign({}, maxChallenge, color)

    return tmp.mg.challenges[id].canComplete ? Object.assign({}, canCompleteChallenge, color): Object.assign({}, outofChallenge, color)
}

function AchStyle(id) {
    return {'border':"transparent", "border-radius":"4px","background-color" : "#2c74ff77", "color": "#111", "height":"150px", "width":"150px"}
}


/*function SmallMainDisplay() {
    let a = "You have " + colorText("h2" , tmp.mg.color , format(tmp.mg.small.points)) + " Small Points" + br
    let b = "You are gaining " + format(tmp.mg.small.getResetGain) + " Small Points per second" + br 
    let c = "Your best Small Points is " + format(tmp.mg.small.best) + br2
    return a + c
}*/

function resetMiniBuyables(layer, n = null) {
    let ids = [11,12,13,21,22,23,31,32,33]
    for (let i = 0; i < 9; i++) {
        if(n!=null && n<i) return 
        setBuyableAmount(layer, ids[i], decimalZero)
    }
}

function buyablesAmount(layer) {
    let ids = [11,12,13,21,22,23,31,32,33]
    let res = decimalZero
    for (let i = 0; i < 9; i++) {
        res = res.add(getBuyableAmount(layer, ids[i]))
    }
    return res
}

function resetMiniChallenges(layer, reduceOneChall) {
    let ids = [11,12,13,21,22,23,31,32,33]
    for (let i = 0; i < 9; i++) {
        if(player[layer].challenges[ids[i]] !== undefined && tmp[layer].challenges[ids[i]].unlocked) {
            if(reduceOneChall && player[layer].challenges[ids[i]]) {
                player[layer].challenges[ids[i]] -=1
                //console.log("reduced 1 chall")
            }
            else {
                player[layer].challenges[ids[i]] = 0 
                //console.log("Reset chall")
            }  
        } 
    }
}

function MilestoneReset(keepChall = false, reduceOneChall = true) {
    if(!player.mg.canMileRest) return
    let Upgradeskeep = []
    let data = player.mg

    data.points = decimalZero
    data.best = decimalZero
    data.divisorAdder = decimalZero
    data.upgrades = Upgradeskeep

    data.milesTimetook[data.milestones.length] = data.time

    data.time = decimalZero
    resetMiniBuyables("mg")
    if(!keepChall) resetMiniChallenges("mg", reduceOneChall)
}

function MilestoneEffectsReset() {
    player.mg.milestones = []
    MilestoneReset(false, false)
    player.mg.unlockedMileEffects++;
    player.mg.unlockedMileEffects = new Decimal(player.mg.unlockedMileEffects).min(player.mg.mileEffectsReq.length)
}

function guessingGameReset() {
    player.mg.Is_gridRowOneUnlocked = false,
    player.mg.gridCurrentRow = 304
    player.mg.rowsResults = [["rgba(0,0,0,0)", "rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)"],
                             ["rgba(0,0,0,0)", "rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)"],
                             ["rgba(0,0,0,0)", "rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)"],
                             ["rgba(0,0,0,0)", "rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)"],
                             ["rgba(0,0,0,0)", "rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)"]]
    player.mg.grid = getStartGrid("mg")
    let arr = randomValues(8)
    setGridData("mg", 101, arr[0])
    setGridData("mg", 102, arr[1])
    setGridData("mg", 103, arr[2])
    setGridData("mg", 104, arr[3])
}

function collatz(n) {
    n = Math.abs(n)
    return n % 2 == 0 ? n/2 : 3*n + 1
}

function collatzN(n) {
    let r = collatz(n)
    let s = 1
    while(!(r == 1)) {
        s += 1
        r = collatz(r)
    }
    return s
}

function percentage(num, per) {
    return new Decimal((num / 100) * per) 
}

function roundAvoid(value, places) {
    scale = Math.pow(10, places);
    return Math.round(value * scale) / scale;
}

function currentSubtab(sub) {
    return player.subtabs["mg"][sub]
}

function plural(name, point) {
    return point == 1 ? name + "s" : name
}

function randomValues(colors) {
    var arr = [];
    while(arr.length < 4){
        var r = Math.floor(Math.random() * colors) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr
}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
}

addLayer("mg", {
    name: "MiniGame", 
    symbol: "MG", 
    position: 2,
    row: 0, 

    startData() { return {                  
        unlocked: true,    
        MilestonesTabUnlocked: false,           
        points: decimalZero,
        best: decimalZero, 
        time: decimalZero,
        canMileRest: true,
        divisorAdder: decimalZero,
        milesTimetook: [0, 0, 0, 0, 0, 0, 0, 0],

        Is_mileEffectsUnlocked: false, // Milestones Effects trigger.
        unlockedMileEffects: 0,
        mileEffectsReq: [new Decimal(0.00034)], // <--- Requirements length IS the max Effects you can have
        mileEffectPoints: decimalZero,

        barProgress: new Decimal(1),

        Is_gridRowOneUnlocked: false,
        gridCurrentRow: 204,
        rowsResults: [["rgba(0,0,0,0)", "rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)"],
                      ["rgba(0,0,0,0)", "rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)"],
                      ["rgba(0,0,0,0)", "rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)"],
                      ["rgba(0,0,0,0)", "rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)"],
                      ["rgba(0,0,0,0)", "rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0)"]],

        softcap: new Decimal(0.04),
        hardcap: new Decimal(0.1),
    }},

    tooltip() {
        return layerText("h3","mg",format(player.mg.points)) + " Mini Points"
    },

    
    color: "#2c74ff", //"#2570e8",//"#87CEEB",      //"#2ce89d",// small color                 
    resource: "Mini Points",
    requires: decimalZero,                
    baseResource: "verses",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.points },  // A function to return the current amount of baseResource.
    type: "none",                         // Determines the formula used for calculating prestige currency.


    microtabs: {
        // obli: {
        //     "Tree":{
        //         id: 'Tree',
        //         unlocked: true,   
        //         buttonStyle() {
        //             let IsCurrentSubtab = {'transform': 'translate(2px, 2px)', 'box-shadow': 'var(--hover-box-shadow)'}
        //             let NotCurrentsubtab = {"text-shadow": ".1em .1em 0 hsl(200 50% 30%)"}
        //             return currentSubtab("Tree") == id ? IsCurrentSubtab : NotCurrentsubtab 
        //         },
        //     },
        // },
        mini: {
            "Upgrades": {
                id: 'Upgrades',
                content: [
                    ["display-text", function(){return MiniMainDisplay()}], "blank","blank",
                    ["h-line", "500px"],"blank","blank",
                    "upgrades",
                    ["clickables", [1]],
                    "blank", "blank",
                    //["bar", "progressBar"],
                ],
                unlocked() {return true},
                shouldNotify() {
                    let ids = [11,12,13,14,15,21,22,23,24,25]
                    let res = false
                    for (let i = 0; i < ids.length; i++) {
                        if(!(tmp.mg.upgrades[ids[i]] === undefined) && tmp.mg.upgrades[ids[i]].unlocked == true && canAffordUpgrade("mg", ids[i]) && !hasUpgrade("mg", ids[i])) 
                            res = true
                    }   
                    return res
                },
                buttonStyle() {return SubtabsStyle(this.id)},
            },
            "Buyables":{
                id: 'Buyables',
                content: [
                    ["display-text",function(){return MiniMainDisplay()}], "blank","blank",
                    ["h-line", "500px"],"blank","blank",
                    ["buyables", [1, 2, 3]], "blank", "blank", "blank",
                    ["clickables", [3]],
                    "blank", "blank",
                    //["bar", "progressBar"],
                ],
                unlocked() {return hasMilestone("mg", 3)},
                shouldNotify() {
                    let ids = [11,12,13,21,22,23,31,32,33]
                    let res = false
                    for (let i = 0; i < ids.length; i++) {
                        if(!(tmp.mg.buyables[ids[i]] == undefined) && tmp.mg.buyables[ids[i]].unlocked && tmp.mg.buyables[ids[i]].canAfford == true && !isBuyableMaxed("mg", ids[i])) {
                            res = true
                        }     
                    }
                    return res
                },
                buttonStyle() {return SubtabsStyle(this.id)},
            },
            "Challenges": {
                id: 'Challenges',
                content: [
                    ["display-text",function(){return MiniMainDisplay()}], "blank","blank",
                    ["h-line", "500px"], "blank","blank",
                    ["display-text", "Challenegs's completions are reduced by 1 when getting a Milestone."],
                    ["display-text", "Entering or Exiting a challenge will trigger a milestone resets."], "blank",
                    "challenges",
                    "blank", "blank", "blank", "blank",
                    //["bar", "progressBar"],
                ],
                shouldNotify() {
                    return (tmp.mg.challenges[11].canComplete && inChallenge("mg", 11))
                },
                unlocked() {return hasMilestone("mg", 5)},
                buttonStyle() {return SubtabsStyle(this.id)},
            },
            "Milestones": {
                id: 'Milestones',
                content: [
                    ["display-text",function(){return MiniMainDisplay()}], "blank","blank",
                    ["h-line", "500px"], "blank",
                    ["microtabs", "m_mile"],
                    "blank", "blank", "blank", "blank",
                    //["bar", "progressBar"],
                ],
                unlocked() { return player.mg.MilestonesTabUnlocked},
                shouldNotify() { return tmp.mg.clickables[61].canClick && player.mg.Is_mileEffectsUnlocked},
                buttonStyle() { return currentSubtab("mini") == this.id ? {'transform': 'translate(2px, 2px)', 'box-shadow': 'var(--hover-box-shadow)', "background-color": "#2c74ff", "color": "#111", "border-color":"#2c74ff"} : {"background-color": "#2c74ff", "color": "#111", "border-color":"#2c74ff", "text-shadow":".1em .1em 0 hsl(200 80% 30%)"}},
                //buttonStyle: {"background-color": "hsl(200 100% 50%)", "color": "#111", "border-color":"hsl(200 100% 50%)", "text-shadow":".1em .1em 0 hsl(200 50% 75%)"},
            },
            "Mini-Mini Game": {
                id: 'Mini-Mini Game',
                content: [
                    ["display-text",function(){return MiniMainDisplay()}], "blank","blank",
                    ["h-line", "500px"], "blank","blank",
                    ["row", [
                        "grid","blank","blank",
                        ["column",[
                        ["display-text", function(){
                            let a = "<h2>Mini-Mini Game<h2><br><h3>Guess the hidden colors.</h3><br><h3>Colors shouldn't repeat in a single row.</h3><br><br>"
                            //let s = "<detail>hello</details>"
                            let r = "<h3 style='color:#850310; text-shadow: .1em .1em 5px black;'>Red border:</h3><h3> It doesn't exist</h3><br>"
                            let o = "<h3 style='color:#c97704; text-shadow: .1em .1em 5px black;'>Orange border:</h3><h3> It exists but Wrong place</h3><br>"
                            let g = "<h3 style='color:#219903; text-shadow: .1em .1em 5px black;'>Green border:</h3><h3> Correct Place</h3>"
                            return a + r + o + g 
                        }],
                        "blank","blank",
                        ["clickables", [7]]
                        ]]
                    ]],
                    "blank","blank","blank","blank",
                ],
                // shouldNotify() {
                //     return (tmp.mg.challenges[11].canComplete && inChallenge("mg", 11))
                // },
                unlocked() {return true},
                buttonStyle() {return SubtabsStyle(this.id)},
            },
            "Tasks": {
                id: 'Perks',
                content: [
                    ["display-text",function(){return MiniMainDisplay()}], "blank","blank",
                    ["bar", "progressBar"], "blank","blank",
                    ["display-text", function() {return "You have " + colorText("h2" , tmp.mg.color , player.mg.achievements.length) + " Perks"}],
                    ["display-text", "Getting a Perk resets the last milestone progress."], "blank", "blank",
                    "achievements", "blank",
                    ["clickables", [5]],
                    "blank", "blank", "blank", "blank",
                    //["bar", "progressBar"],
                ],
                unlocked() {return false},
                buttonStyle() {return SubtabsStyle(this.id)},
                //buttonStyle() { return currentSubtab("mini") == this.id ? {'transform': 'translate(2px, 2px)', 'box-shadow': 'var(--hover-box-shadow)'} : {"text-shadow": ".1em .1em 0 hsl(200 50% 30%)"}},
            },
            "3n+1": {
                content: [
                    ["display-text","<h1>F(n) = n/2 when n is even else 3n+1</h1>"],
                    "blank", "blank",
                    ["display-text","Find n (0 < n < 10)"],
                    ["text-input", "t",  {
                        color: 'var(--color)',
                        'text-shadow':'0px 0px 10px',
                        width: "200px",
                        "font-size": "24px",
                        border: "2px solid #87CEEB30",
                        background: "var(--background)",
                    }],
                    "blank", "blank",
                    ["display-text",function() {return "collatz(n)"}],
                ],
                unlocked() {return false}
            },
        },
        m_mile:{ //Mini Milestones
            "Main": {
                id: 'Main',
                content: [
                    "blank",
                    ["display-text", function() { return "You have " + colorText("h2" , tmp.mg.color , player.mg.milestones.length) + " Milestones"}],
                    ["display-text", function() { return "You have spent " + formatTime(player.mg.time) + " in this run"}], "blank",
                    ["clickables", [4]],
                    ["display-text", "Getting a milestone resets all previous progress"],
                    ["milestones", [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]], "blank",
                    //"blank","blank", ["display-text", "Milestone progress"], ["bar", "bigBar"], "blank","blank",
                ],
                buttonStyle() { return currentSubtab("m_mile") == this.id ? {'transform': 'translate(2px, 2px)', 'box-shadow': 'var(--hover-box-shadow)'} : {"text-shadow": ".1em .1em 0 hsl(200 50% 30%)"}},
            },
            "Effects": {
                id: 'Effects',
                content: [
                    "blank",
                    ["clickables", [6]], "blank",
                    ["display-text", function() {return DisplayMilestonesEffects()}],  
                ],
                unlocked() {return player.mg.Is_mileEffectsUnlocked},
                shouldNotify() { return tmp.mg.clickables[61].canClick && player.mg.Is_mileEffectsUnlocked},
                buttonStyle() { return currentSubtab("m_mile") == this.id ?
                    {
                        background: "transparent", 
                        //backgroundImage: "linear-gradient(45deg, hsl(200 100% 50%), #87CEEB)", 
                        backgroundImage: "linear-gradient(45deg, hsl(200 100% 50%), #2c74ffbb)",
                        backgroundSize: "400% 25%", 
                        animation: "gradientAnimation 3s ease infinite", 
                        color: "#111",
                        border: "transparent",
                        padding: "7px 32px",
                        transform: 'translate(2px, 2px)', 
                        'box-shadow': 'var(--hover-box-shadow)'
                    }:
                    {
                        background: "transparent", 
                        //backgroundImage: "linear-gradient(45deg, hsl(200 100% 50%), #87CEEB)", 
                        backgroundImage: "linear-gradient(45deg, hsl(200 100% 50%), #2c74ffbb)",
                        backgroundSize: "400% 25%", 
                        animation: "gradientAnimation 3s ease infinite", 
                        color: "#111",
                        border: "transparent",
                        padding: "7px 32px",
                        "text-shadow":".1em .1em 0 hsl(200 80% 30%)"
                    }
                },
            },
            "milestones²": {
                id: 'milestones²',
                content: [
                    "blank",
                    ["display-text", function() { return "You have " + colorText("h2" , tmp.mg.color , player.mg.milestones.length) + " Super Milestones"}],
                    //["display-text", function() { return "You have spent " + formatTime(player.mg.time) + " in this run"}], "blank",
                    ["display-text", "<b style='font-size:10px'>*Getting a milestone resets all previous progress*</b>"],
                    ["milestones", [1010, 1009, 1008, 1007, 1006, 1005, 1004, 1003, 1002, 1001]],
                    ["clickables", [2]],
                    ["clickables", [4]],
                    //"blank","blank", ["display-text", "Milestone progress"], ["bar", "bigBar"], "blank","blank",
                ],
                unlocked() {return false},
                buttonStyle() { return currentSubtab("m_mile") == this.id ? {'transform': 'translate(2px, 2px)', 'box-shadow': 'var(--hover-box-shadow)'} : {"text-shadow": ".1em .1em 0 hsl(200 50% 30%)"}},
            },
        },
        small:{
            "Upgrades": {
                content: [
                    
                ],
                buttonStyle: {"border-color": "#2ce89d", "text-shadow": ".1em .1em 0 hsl(150 50% 30%)"},
            },
            "Buyables":{
                content: [
                    
                ],
                unlocked() {return true},
                buttonStyle: {"border-color": "#2ce89d"},
            },
            "Challenges": {
                content: [
                    
                ],
                
                buttonStyle: {"border-color": "#2ce89d"},
                unlocked() {return true}
            },
            "Milestones": {
                content: [
                    
                ],
                buttonStyle: {"background-color": "#2ce89d", "border-color": "#2ce89d", "color": "#000"},
            },
            "Upgrade Tree": {
                content: [
                    
                ],
                buttonStyle: {"border-color": "#2ce89d"},
            },
        },
        big:{
            "Upgrades":{

            }
        }
    },

    

    tabFormat: {
        // "Oblivion": {
        //     id: 'Oblivion',
        //     content:[
        //         ["microtabs", "obli"]
        //     ],
        //     buttonStyle() { return player.subtabs["mg"].mainTabs == this.id ? {'transform': 'translate(2px, 2px)', 'box-shadow': 'var(--hover-box-shadow)', "background-color": "#F4FDFF", "color": "#111", "border-color":"#F4FDFF"} : {"background-color": "#F4FDFF", "color": "#111", "border-color":"#F4FDFF", "text-shadow":".1em .1em 4px hsl(200 0% 30%)"}},
        //     //buttonStyle: {"background-color": "#2c74ff77", "color":"#2c74ff", "border": "transparent"},
        //     //buttonStyle: {"background-color": "#2c74ff", "color":"#111", "border": "transparent", "text-shadow":".1em .1em 0 hsl(200 80% 30%)"},
        //     //buttonStyle: {"color": "#2c74ff", "text-shadow": ".1em .1em 0 hsl(200 80% 20%)", "border-color": "#2c74ffbb"},
        //     unlocked() {return true},
        //     style(){
        //         return {
        //             "background":"#d4d2d2",
        //         }
        //     }
        // },
        "Mini Points": {
            id: 'Mini Points',
            content:[
                ["microtabs", "mini"],
                ["bar", "progressBar"],
            ],
            buttonStyle() { return player.subtabs["mg"].mainTabs == this.id ? {'transform': 'translate(2px, 2px)', 'box-shadow': 'var(--hover-box-shadow)', "background-color": "#2c74ff", "color": "#111", "border-color":"#2c74ff"} : {"background-color": "#2c74ff", "color": "#111", "border-color":"#2c74ff", "text-shadow":".1em .1em 0 hsl(200 80% 30%)"}},
            //buttonStyle: {"background-color": "#2c74ff77", "color":"#2c74ff", "border": "transparent"},
            //buttonStyle: {"background-color": "#2c74ff", "color":"#111", "border": "transparent", "text-shadow":".1em .1em 0 hsl(200 80% 30%)"},
            //buttonStyle: {"color": "#2c74ff", "text-shadow": ".1em .1em 0 hsl(200 80% 20%)", "border-color": "#2c74ffbb"},
            unlocked() {return true},
            // style(){
            //     return {
            //         "background":"#001f3f",
            //     }
            // }
            
        },
        "Small Points":{
            content:[
                ["microtabs", "small"]
            ],
            buttonStyle: {"color": "#2ce89d", "text-shadow": ".1em .1em 0 hsl(150 80% 20%)", "border-color": "#2ce89dbb"},
            unlocked() {return false},
            style(){
                return {
                    "background":"#003f21",
                }
            }
        },
        "Big Points":{
            content:[
                ["microtabs", "big"]
            ],
            buttonStyle: {"color": "#a45f63", "text-shadow": ".1em .1em 0 hsl(15 80% 20%)", "border-color": "#a45f63bb"},
            //buttonStyle: {"border-color": "#a45f63" ,"color": "#a45f63"},
            unlocked() {return false},
            style(){
                return {
                    "background":"#3f000e",
                }
            }
        }
    },


    getResetGainFormula() {
        return new Decimal(tmp.mg.getBaseMini.times(tmp.mg.getGainMult)).div(tmp.mg.getGainDiv)
    },
    

    getResetGain() {
        if(!hasUpgrade("mg",11)) return decimalZero
        let gain = new Decimal(tmp.mg.getBaseMini.times(tmp.mg.getGainMult)).div(tmp.mg.getGainDiv)

        return gain
    },


    getBaseMini() {
        let base = new Decimal(1)

        if(player.mg.Is_mileEffectsUnlocked == true && player.mg.unlockedMileEffects >= 1) base = base.add(tmp.mg.MileEffect_1)
        base = base.add(buyableEffect("mg", 11))
        if(hasUpgrade("mg",14)) base = base.times(upgradeEffect("mg",14))
        
        return base
    },

    getGainMult() {                            
        let mult = decimalOne
        
        if(hasUpgrade("mg",12) && !inChallenge("mg", 11)) mult = mult.times(upgradeEffect("mg",12))
        if(hasUpgrade("mg",13)) mult = mult.times(upgradeEffect("mg",13))

        return mult           
    },

    getGainDiv() {
        let divisor = new Decimal(10000)

        divisor = divisor.add(tmp.mg.buyables[11].effect2)
        if(hasUpgrade("mg", 15)) divisor = divisor.sub(upgradeEffect("mg", 15))

        return divisor.max(10000)
    },

    getDivisorAdderPerSecond() {
        let das = decimalZero //Divisor Adder per second

        if (false) {
            das = new Decimal(2)
        }

        return das
    },

    getNextAt() {
        return Infinity
    },



    getMileEffectPointsPerSecond() {
        let gain = new Decimal(player.mg.unlockedMileEffects * 0.01)

        return gain
    },

    MileEffect_1() {
        let eff = new Decimal(player.mg.milestones.length * 0.01)

        //eff = eff.add(player.mg.points/10)

        return eff
    },

    MileAntiEffect_1() {
        let eff = new Decimal((player.mg.unlockedMileEffects * 5)) 

        return eff
    },

    MileEffect_2() {
        let eff = new Decimal(player.mg.milestones.length).add(1);

        //eff = eff.add(player.mg.points/10)

        return eff
    },

    MileEffect_3() {
        let eff = new Decimal((player.mg.points + 1 ) * 0.1)

        //eff = eff.add(player.mg.points/10)

        return eff
    },

    // <<<<<<<<<< Keep it for a challenge >>>>>>>>>>>
    // updateLimit() {
    //     let res = 0.003
    //     if(hasMilestone("mg", 1)) res = res * new Decimal(3).pow(player.mg.milestones.length)

    //     player.mg.limit = res
    // },
    
    update(diff) {
        //tmp.mg.updateLimit
        let data = player.mg

        data.time = data.time.add(diff)

        !isBuyableMaxed("mg", 11) && hasMilestone("mg", 3) ? data.softcap = new Decimal(tmp.mg.buyables[11].cost).times(2) : data.softcap = new Decimal(0.04)
        
        //data.divisorAdder = data.divisorAdder.add(tmp.mg.getDivisorAdderPerSecond.times(diff)) // keep it for challange
        data.mileEffectPoints = data.mileEffectPoints.add(tmp.mg.getMileEffectPointsPerSecond.times(diff))
        data.points.gte(data.softcap) ? data.points.gte(data.hardcap) ? data.points = data.points.add(tmp.mg.getResetGain.div(100).times(diff)) : data.points = data.points.add(tmp.mg.getResetGain.div(10).times(diff)) : data.points = data.points.add(tmp.mg.getResetGain.times(diff)) 
        data.best = data.best.max(data.points)
        //autobuyUpgrades("mg")
        //buyBuyable("mg", 11)    

        if(hasMilestone("mg", 7)) data.Is_mileEffectsUnlocked = true
        if(hasUpgrade("mg", 11)) data.MilestonesTabUnlocked = true
        

        //console.log(tmp.mg.getResetGain.mag)
        //console.log(tmp.mg.getResetGainFormula.mag)
        //console.log(tmp.mg.getGainMult.mag)
        //console.log(tmp.mg.getGainDiv.mag)
    },

    prestigeButtonText(){
        return ""
    },

    canReset() { return false },

    layerShown() { return true },      

    upgrades: {
        11: {
            title: "<span style='color:hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>Mini I</span>",
            description() {
                return "Start generating 0.0001 Mini Points/s" /*+ " and 2 divisor Adder/s." + br2 + "currently: +" + formatWhole(player.mg.divisorAdder) + " (" + formatWhole(tmp.mg.getDivisorAdderPerSecond) + "/s)"*/
            },
            cost: new Decimal(0),
            unlocked(){
                return true
            },
            style() {return UpgradeStyle(this.id)},
        },
        12: {
            title: "<span style='color:hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>Mini II</span>",
            description() { 
                let a = "Multiply Mini Points gain by upgrades<sup>"+ format(this.power(), 2) +"</sup>"
                let b = "<br><h3 style='color:hsl(0 80% 55%); text-shadow: .1em .1em 5px black;'>Req: 10 M's</h3>"
                return this.canAfford() ? a : b
            },
            cost: new Decimal(0.003),
            canAfford() {return !hasUpgrade("mg", this.id) ? hasMilestone("mg", 3) && !inChallenge("mg", 11) ? (getBuyableAmount("mg", 11) >= 10 ? true : false) : true : true},
            power() {
                let p = new Decimal(0.3)
                
                p = p.add(challengeEffect("mg", 11))

                return p
            },
            effect() {
                let eff = new Decimal.pow(player.mg.upgrades.length , this.power())
                
                return eff
            },
            effectDisplay() {
                return (inChallenge("mg", 11) ? "<s>" : "") + "<span style='color:hsl(220 50% 90%)'>x"+format(this.effect(),2)+"</span></s>"
            },
            unlocked(){
                return hasMilestone("mg",1) && hasUpgrade("mg", 11)
            }, 
            style() {return UpgradeStyle(this.id)},
        },
        13: {
            title: "<span style='color:hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>Mini III</span>",
            description() {
                let base = 10
                let p = "Mini Points"
                //if(hasMilestone) p = "Best Mini Points"
                let u = ""
                //if(hasMilestone("mg",2)) u = "Upgrades * "

                let req = (this.canAfford()) ? "" : br + "<br><h3 style='color:hsl(0 80% 55%);'>Req: 5 i's</h3>"

                //return  "log<sub>" + base + "</sub>[" + u + p + " + 10] x 1.1 multiplies Mini Points" + req
                return this.canAfford() ? "(Mini Points x 5)<sup>0.9</sup>+ 1 multiplies Mini Points" : "<br><h3 style='color : #db0c0c;'>Req: 10 i's</h3>"
            },
            canAfford() {return !hasUpgrade("mg", this.id) ? hasMilestone("mg", 4) && !inChallenge("mg", 11) ? (getBuyableAmount("mg", 12) >= 5 ? true : false) : true : true},
            cost: new Decimal(0.0075),
            effect() {
                let base = 10
                let offset = tmp.mg.getGainDiv
                let softcap = new Decimal(10000)
                let p = player.mg.points
                //if(hasMilestone) p = player.mg.best

                //let eff = new Decimal(p.times(10000).add(4).log(base).div(new Decimal("1e8").log(base))).add(1)
                let eff = p.times(5).pow(0.9).add(1)

                return eff.min(2)
            },
            effectDisplay() {
                return "x"+format(this.effect(),2)
            },
            unlocked(){
                return hasMilestone("mg", 2) && hasUpgrade("mg", 12)
            },
            style() {return UpgradeStyle(this.id)},
        },
        14: {
            title: "<span style='color:hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>Mini IV</span>",
            description() {
                return "Buyables amount<sup>0.05</sup> boost Mini Points Base."
            },
            effect() {
                eff = buyablesAmount("mg")

                //d=(sqrt(a b c))^(a*((1)/(a+b)))
                
                eff = new Decimal.pow(eff + 1, 0.05)

                return eff
            },
            effectDisplay() {
                return "x"+format(this.effect())
            },
            cost: new Decimal(0.0500),
            unlocked(){
                return hasMilestone("mg", 6) && hasUpgrade("mg", 13)
            },
            style() {return UpgradeStyle(this.id)},
        },
        15: {
            title: "<span style='color:hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>Mini V</span>",
            description() {
                return "Mini Points reduce the divisor."
            },
            effect() {
                eff = player.mg.points
                
                eff = eff.times(1500)

                return Math.floor(eff)
            },
            effectDisplay() {
                return "-"+formatWhole(this.effect())
            },
            cost: new Decimal(0),
            unlocked(){
                return false//hasMilestone("mg", 4)
            },
            style() {return UpgradeStyle(this.id)},
        },
        // 21: {
        //     title: "Mini VI",
        //     description() {
        //         return ""
        //     },
        //     cost: new Decimal(200),
        //     unlocked(){
        //         return false
        //     },
        // },
        // 22: {
        //     title: "Mini VI",
        //     description() {
        //         return "'Mini III' ln becomes log2"
        //     },
        //     cost: new Decimal(1200),
        //     unlocked(){
        //         return hasUpgrade("mg",21)
        //     },
        // },
        // 25: {
        //     title: "Mini X",
        //     description() {
        //         let a = "Per upgrade add 0.01 to Mini Points base"
        //         let b = " and unlock Small"
        //         return tmp.mg.small.best.gte(0) ? a : a + b
        //     },
        //     cost: new Decimal(1e6),
        //     effect() {
        //         let eff = tmp.mg.upgrades.length * 0.01
        //         return eff
        //     },
        //     effectDisplay() {
        //         return "+"+format(this.effect())
        //     },
        //     unlocked(){
        //         return hasUpgrade("mg",24)
        //     },
        // },
    },
    
    milestones: {
        1: {
            requirementDescription() { return format(this.req(), 4) + " Mini Points"},
            effectDescription() {return hasMilestone("mg", this.id) ? "Unlock the second upgrade." + br + "Completed in: " + formatTime(player.mg.milesTimetook[this.id]) : "Locked"},
            done() { return player.mg.points.gte(this.req())}, 
            req() {
                let r = new Decimal(0.003)
                r = r.add(percentage(r, tmp.mg.MileAntiEffect_1) * (player.mg.unlockedMileEffects > 0)).max(0)
                return roundAvoid(r, 4)
            },
            onComplete() {
                MilestoneReset()
            },
            style() { return MilestoneStyle(this.id)},
        },
        2: {
            requirementDescription() {return format(this.req(), 4) + " Mini Points and 'Mini II'"},
            effectDescription() { return hasMilestone("mg", this.id) ? "Unlock the third upgrade." + br + "Completed in: " + formatTime(player.mg.milesTimetook[this.id]) : "Locked"},
            done() { return player.mg.points.gte(this.req()) && hasUpgrade("mg", 12) && hasMilestone(this.layer, this.id - 1) }, 
            req() {
                let r = new Decimal(0.006)
                r = r.add(percentage(r, tmp.mg.MileAntiEffect_1) * (player.mg.unlockedMileEffects > 0)).max(0)
                return roundAvoid(r, 4)
            },
            onComplete() {
                MilestoneReset()
            },
            style() { return MilestoneStyle(this.id)},
            unlocked() { return hasMilestone(this.layer, this.id - 1) }
        },
        3: {
            requirementDescription() { return format(this.req(), 5) + " MP/s and 'Mini III'"},
            effectDescription() { return hasMilestone("mg", this.id) ? "Unlock the first buyable." + br + "Completed in: " + formatTime(player.mg.milesTimetook[this.id]) : "Locked"},
            done() { return tmp.mg.getResetGain.gte(this.req()) && hasUpgrade("mg", 13) && hasMilestone(this.layer, this.id - 1)}, 
            req() {
                let r = new Decimal(0.00017)
                r = r.add(percentage(r, tmp.mg.MileAntiEffect_1) * (player.mg.unlockedMileEffects > 0)).max(0)
                return roundAvoid(r, 5)
            },
            onComplete() {
                MilestoneReset()
            },
            style() { return MilestoneStyle(this.id)},
            unlocked() { return hasMilestone(this.layer, this.id - 1) }
        },
        4: {
            requirementDescription() { return format(this.req(), 5) + " MP/s and Maxed buyables"},
            effectDescription() { return hasMilestone("mg", this.id) ? "Unlock the second buyable." + br + "Completed in: " + formatTime(player.mg.milesTimetook[this.id]) : "Locked"},
            done() { return isAllBuyablesMaxed("mg", [11]) && tmp.mg.getResetGainFormula.gte(this.req()) && hasMilestone(this.layer, this.id - 1)}, 
            req() {
                let r = new Decimal(0.00020)
                r = r.add(percentage(r, tmp.mg.MileAntiEffect_1) * (player.mg.unlockedMileEffects > 0)).max(0)
                return roundAvoid(r, 5)
            },
            onComplete() {
                MilestoneReset()
            },
            style() { return MilestoneStyle(this.id)},
            unlocked() { return hasMilestone(this.layer, this.id - 1) }
        },
        5: {
            requirementDescription() { return format(this.req(), 5) + " MP/s and Maxed buyables"},
            effectDescription() { return hasMilestone("mg", this.id) ? "Unlock the first challenge." + br + "Completed in: " + formatTime(player.mg.milesTimetook[this.id]) : "Locked"},
            done() { return isAllBuyablesMaxed("mg", [11, 12]) && tmp.mg.getResetGainFormula.gte(this.req()) && hasMilestone(this.layer, this.id - 1)}, 
            req() {
                let r = new Decimal(0.00022)
                r = r.add(percentage(r, tmp.mg.MileAntiEffect_1) * (player.mg.unlockedMileEffects > 0)).max(0)
                return roundAvoid(r, 5)
            },
            onComplete() {
                MilestoneReset()
            },
            style() { return MilestoneStyle(this.id)},
            unlocked() { return hasMilestone(this.layer, this.id - 1) }
        },
        6: {
            requirementDescription() { return format(this.req(), 5) + " MP/s, Maxed buyables and 1 'mini P' completion"},
            effectDescription() { return "'M' is a little cheaper and unlock the fourth upgrade."},
            done() { return isAllBuyablesMaxed("mg", [11, 12]) && challengeCompletions("mg", 11) >= 1 && tmp.mg.getResetGainFormula.gte(this.req()) && hasMilestone(this.layer, this.id - 1)}, 
            req() {
                let r = new Decimal(0.00023)
                r = r.add(percentage(r, tmp.mg.MileAntiEffect_1) * (player.mg.unlockedMileEffects > 0)).max(0)
                return roundAvoid(r, 5)
            },
            onComplete() {
                MilestoneReset()
            },
            style() { return MilestoneStyle(this.id)},
            unlocked() { return hasMilestone(this.layer, this.id - 1) }
        },
        7: {
            requirementDescription() { return format(this.req(), 5) + " MP/s, Maxed buyables and 2 'mini P' completion"},
            effectDescription() { return "Unlock the fourth upgrade and Milestone Effects"},
            done() { return isAllBuyablesMaxed("mg", [11, 12]) && challengeCompletions("mg", 11) >= 2 && tmp.mg.getResetGainFormula.gte(this.req()) && hasMilestone(this.layer, this.id - 1)}, 
            req() {
                let r = new Decimal(0.00041)
                r = r.add(percentage(r, tmp.mg.MileAntiEffect_1) * (player.mg.unlockedMileEffects > 0)).max(0)
                return roundAvoid(r, 5)
            },
            onComplete() {
                MilestoneReset()
            },
            style() { return MilestoneStyle(this.id)},
            unlocked() { return hasMilestone(this.layer, this.id - 1) }
        },
        8: {
            requirementDescription() { return " Place holder"},
            effectDescription() { return ""},
            done() { return isAllBuyablesMaxed("mg", [11, 12]) && challengeCompletions("mg", 11) >= 2 && tmp.mg.getResetGainFormula.gte(this.req()) && hasMilestone(this.layer, this.id - 1)}, 
            req() {
                let r = new Decimal(99999999)
                r = r.add(percentage(r, tmp.mg.MileAntiEffect_1) * (player.mg.unlockedMileEffects > 0)).max(0)
                return roundAvoid(r, 5)
            },
            onComplete() {
                MilestoneReset()
            },
            style() { return MilestoneStyle(this.id)},
            unlocked() { return hasMilestone(this.layer, this.id - 1) }
        },  

        1001: {
            requirementDescription() { return format(this.req(), 5) + "MP/S, 10 Milestones, 3 Effects"},
            effectDescription() { return !hasMilestone("mg", this.id) ? " Mini Points's first softcap is +... later." + br + "Mini Points gain is 10% better in challenges." + br + "First effect and Anti-Effect are 25% stronger." : "Locked"},
            done() { return tmp.mg.getResetGain.gte(this.req()) && hasUpgrade("mg", 13) && hasMilestone(this.layer, this.id - 1)}, 
            req() {
                let r = new Decimal(0.00222)
                //r = r.add(percentage(r, tmp.mg.MileAntiEffect_1) * (player.mg.unlockedMileEffects > 0)).max(0)
                return roundAvoid(r, 5)
            },
            onComplete() {
                MilestoneReset(false, false)
            },
            style() { return MilestoneStyle(this.id)},
            unlocked() { return true }
        },
    },
    
    buyables: {
        11: {
            title() { 
                return "<h1 style='color:hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>M</h1>" + br
            },
            cost() {
                let amt = getBuyableAmount(this.layer, this.id)
                let base1 = new Decimal(0.0001)
                let base2 = this.b2()

                if(this.Is_scaled()) base2 = base2.add(this.scaling())

                let cost = base1.times(amt.add(2)).times(base2)

                return cost
            },
            b2() {
                if(inChallenge("mg", 11)) return new Decimal(1.1)
                return new Decimal(0.4)
            },
            scale() {
                s = new Decimal(15)
                return s
            },
            Is_scaled() {
                return false
                return this.scale().lte(getBuyableAmount("mg", this.id)) ? true : false
            },
            scaling() {
                let s = new Decimal(this.purchaseLimit()-10).times(0.005).add(1)
                return this.Is_scaled() ? s : decimalOne
            },
            display() {
                let desc1 = "<h2 style='font-size:13px'>Add </h2>"
                let desc2 = "<h2 style='font-size:14px; color:hsl(200 50% 90%)'>" + ((this.baseEffect() > 0.01 ) ?  commaFormat(this.baseEffect(), 3) : commaFormat(this.baseEffect(), 2)) + "</h2>"
                let desc3 = "<h2 style='font-size:13px'> to MP's base<br> But Add </h2>"
                let desc4 = "<h2 style='font-size:14px; color:hsl(200 50% 90%)'>" + formatWhole(this.baseEffect2(), 3) + "</h2>"
                let desc5 = "<h2 style='font-size:13px'> to the Devisor</h2><br>"
                let desc = desc1 + desc2 + desc3 + desc4 + desc5

                let effect = "<br><h2 style='font-size:13px'>Currently: </h2><h2 style='font-size:15px;'>+" + ((this.effect() % 1 == 0) ? formatWhole(this.effect()) : commaFormat(this.effect(), 2)) + " / +" + formatWhole(this.effect2()) + "</h2>"

                let cost = "<br><h2 style='font-size:13px'>Cost: </h2><h2 style='font-size:15px;'>" + format(this.cost(), 5) + " MP</h2>" + (this.Is_scaled() && !isBuyableMaxed("mg", this.id) ? "<h3 style='color:#9b0c0c'> (scaled)</h3>" : "")

                let maxed = "<br><h2 style='color:hsl(220 50% 90%)'>Maxed</h2>"

                cost = isBuyableMaxed("mg", this.id) ? maxed : cost

                let amt = "<br><h2 style='font-size:13px'>Amount:</h2> <h2 style='font-size:15px'>" + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(this.purchaseLimit()) + "</h2>"

                return  shiftDown ? this.costDisplay() : desc + effect + cost + amt + br
            },
            costDisplay() {
                let a = "<h3>Cost Formula:</h3>"
                let b = "<h2>0.0001 x amt x " + this.b2() + "</h2>"
                let c = ""
                if(this.Is_scaled()){
                    b += "<sup style='color:#9b0c0c'>"+ commaFormat(this.scaling(), 3) +"</sup>"
                    c = "<h2>Scaling Formula:</h2><br><h3> ((Limit - 10) x 0.005) + 1</h3>"
                }
                return a + br + b + br2 + c
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            baseEffect(){
                let base = new Decimal(0.01)

                base = base.add(tmp.mg.buyables[13].effect)

                return base
            },
            baseEffect2() {
                let base = new Decimal(1)

                base = base.add(tmp.mg.buyables[13].effect2)

                return base
            },
            effect() {
                let x = getBuyableAmount(this.layer, this.id)
                let eff = this.baseEffect()
                return eff.times(x)
            },
            effect2() {
                let x = getBuyableAmount(this.layer, this.id)
                let eff = this.baseEffect2()
                return eff.times(x)
            },
            purchaseLimit() {
                let limit = 10
                if(inChallenge("mg", 11)) limit = tmp.mg.challenges[11].buyablesLimit
                limit = new Decimal(limit).add(buyableEffect("mg", 12))
                return limit
            },
            unlocked() { return hasMilestone("mg", 3) },
            style() { return !isBuyableMaxed("mg", this.id) && this.canAfford() ? {"background-color" : "#2c74ff"} : {"background-color" : "#1a3e8c"}}
        },

        12: {
            title() { 
                return "<h1 style='color:hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>i</h1>" + br
            },
            cost() {
                let amt = getBuyableAmount(this.layer, this.id)
                let base1 = new Decimal(0.0001)
                let base2 = this.b2()

                if(this.scale().lte(getBuyableAmount("mg", this.id))) base2 = base2.add(this.scaling())

                let cost = base1.times(base2).times(amt.add(3).pow(this.scaling()))

                return cost
            },
            b2() {
                return new Decimal(1.1)
            },
            scale() {
                s = new Decimal(15)
                return s
            },
            Is_scaled() {
                return false
                return this.scale().lte(getBuyableAmount("mg", this.id)) ? true : false
            },
            scaling() {
                let s = new Decimal(this.purchaseLimit()-10).times(0.005).add(1)
                return this.Is_scaled() ? s : decimalOne
            },
            display() {
                let desc1 = "<h2 style='font-size:15px'>Add </h2>"
                let desc2 = "<h2 style='font-size:16px; color:hsl(200 50% 90%)'>" + formatWhole(this.baseEffect()) + "</h2>"
                let desc3 = "<h2 style='font-size:15px'> to 'M' Limit</h2><br>"
                let desc = desc1 + desc2 + desc3

                let effect = "<br><h2 style='font-size:13px'>Currently: </h2><h2 style='font-size:15px;'>+" + ((this.effect() % 1 == 0) ? formatWhole(this.effect()) : format(this.effect(), 1))

                let cost = "<br><h2 style='font-size:13px'>Cost: </h2><h2 style='font-size:15px;'>" + format(this.cost(), 4) + " MP</h2>" + (this.Is_scaled() && !isBuyableMaxed("mg", this.id) ? "<h3 style='color:#9b0c0c'> (scaled)</h3>" : "")

                let maxed = "<br><h2 style='color:hsl(220 50% 90%)'>Maxed</h2>"

                cost = isBuyableMaxed("mg", this.id) ? maxed : cost

                let amt = "<br><br><h2 style='font-size:13px'>Amount:</h2> <h2 style='font-size:15px'>" + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(this.purchaseLimit()) + "</h2>"

                return  shiftDown ? this.costDisplay() : desc + effect + cost + amt + br
            },
            costDisplay() {
                let a = "<h3>Cost Formula:</h3>"
                let b = "<h2>0.0001 x amt x " + this.b2() + "</h2>"
                let c = ""
                if(this.Is_scaled()){
                    b += "<sup style='color:#9b0c0c'>"+ commaFormat(this.scaling(), 3) +"</sup>"
                    c = "<h2>Scaling Formula:</h2><br><h3> ((Limit - 10) x 0.005) + 1</h3>"
                }
                return a + br + b + br2 + c
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            baseEffect(){
                let base = new Decimal(1)

                return base
            },
            effect() {
                let x = getBuyableAmount(this.layer, this.id)
                let eff = this.baseEffect()
                return eff.times(x)
            },
            purchaseLimit() {
                let limit = 10
                if(inChallenge("mg", 11)) limit = tmp.mg.challenges[11].buyablesLimit
                return limit
            },
            unlocked() {return hasMilestone("mg", 4)},
            //unlocked() { return hasMilestone("mg", 4) ? (inChallenge("mg", 11) ? tmp.mg.challenges[11].buyablesLimit.lt(getBuyableAmount("mg", 11)) : getBuyableAmount("mg", 11) >= 10) : false },
            style() { return !isBuyableMaxed("mg", this.id) && this.canAfford() ? {"background-color" : "#2c74ff"} : {"background-color" : "#1a3e8c"}}
        },

        13: {
            title() { 
                return "<h1 style='color:hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>n</h1>" + br
            },
            cost() {
                let amt = getBuyableAmount(this.layer, this.id)
                let base1 = new Decimal(0.0001)
                let base2 = this.b2()

                if(this.scale().lte(getBuyableAmount("mg", this.id))) base2 = base2.add(this.scaling())

                let cost = base1.times(base2).times(amt.add(1).pow(this.scaling()))

                return cost
            },
            b2() {
                return new Decimal(2)
            },
            scale() {
                s = new Decimal(15)
                return s
            },
            Is_scaled() {
                return false
                return this.scale().lte(getBuyableAmount("mg", this.id)) ? true : false
            },
            scaling() {
                let s = new Decimal(this.purchaseLimit()-10).times(0.005).add(1)
                return this.Is_scaled() ? s : decimalOne
            },
            display() {
                let desc1 = "<h2 style='font-size:12px'>Reset Previous buyables but<br>Add </h2>"
                let desc2 = "<h2 style='font-size:14px; color:hsl(200 50% 90%)'>" + ((this.baseEffect() % 1 == 0) ?  formatWhole(this.baseEffect()) : commaFormat(this.baseEffect(), 3)) + "</h2>"
                let desc3 = "<h2 style='font-size:12px'> to 'M' first effect base and </h2>"
                let desc4 = "<h2 style='font-size:14px; color:hsl(200 50% 90%)'>" + formatWhole(this.baseEffect2()) + "</h2>"
                let desc5 = "<h2 style='font-size:12px'> to it's second effect base</h2><br>"
                let desc = desc1 + desc2 + desc3 + desc4 + desc5

                let effect = "<br><h2 style='font-size:13px'>Currently: </h2><h2 style='font-size:15px;'>+" +  commaFormat(this.effect(), 3) + "/ +" + formatWhole(this.effect2())

                let cost = "<br><h2 style='font-size:13px'>Cost: </h2><h2 style='font-size:15px;'>" + format(this.cost(), 4) + " MP</h2>" + (this.Is_scaled() && !isBuyableMaxed("mg", this.id) ? "<h3 style='color:#9b0c0c'> (scaled)</h3>" : "")

                let maxed = "<br><h2 style='color:hsl(220 50% 90%)'>Maxed</h2>"

                cost = isBuyableMaxed("mg", this.id) ? maxed : cost

                let amt = "<br><br><h2 style='font-size:13px'>Amount:</h2> <h2 style='font-size:15px'>" + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(this.purchaseLimit()) + "</h2>"

                return  shiftDown ? this.costDisplay() : desc + effect + cost + amt + br
            },
            costDisplay() {
                let a = "<h3>Cost Formula:</h3>"
                let b = "<h2>0.01 x amt x " + this.b2() + "</h2>"
                let c = ""
                if(this.Is_scaled()){
                    b += "<sup style='color:#9b0c0c'>"+ commaFormat(this.scaling(), 3) +"</sup>"
                    c = "<h2>Scaling Formula:</h2><br><h3> ((Limit - 10) x 0.005) + 1</h3>"
                }
                return a + br + b + br2 + c
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                resetMiniBuyables("mg", 1)
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            baseEffect(){
                let base = new Decimal(0.001)

                return base
            },
            baseEffect2(){
                let base = new Decimal(1)

                return base
            },
            effect() {
                let x = getBuyableAmount(this.layer, this.id)
                let eff = this.baseEffect()
                return eff.times(x)
            },
            effect2() {
                let x = getBuyableAmount(this.layer, this.id)
                let eff = this.baseEffect2()
                return eff.times(x)
            },
            purchaseLimit() {
                let limit = 3
                //if(inChallenge("mg", 11)) limit = tmp.mg.challenges[11].buyablesLimit
                return limit
            },
            unlocked() {return hasMilestone("mg", 4)},
            //unlocked() { return hasMilestone("mg", 4) ? (inChallenge("mg", 11) ? tmp.mg.challenges[12].buyablesLimit.lt(getBuyableAmount("mg", 11)) : getBuyableAmount("mg", 12) >= 10) : false },
            style() { return !isBuyableMaxed("mg", this.id) && this.canAfford() ? {"background-color" : "#2c74ff"} : {"background-color" : "#1a3e8c"}}
        },

        // 21: {
        //     title() { 
        //         return "<h1 style='color:hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>i²</h1>" + br
        //     },
        //     cost() {
        //         let amt = getBuyableAmount(this.layer, this.id)
        //         let base1 = new Decimal(0.0001)
        //         let base2 = this.b2()

        //         if(this.scale().lte(getBuyableAmount("mg", this.id))) base2 = base2.add(this.scaling())

        //         let cost = base1.times(base2).times(amt.add(3).pow(this.scaling()))

        //         return cost
        //     },
        //     b2() {
        //         return new Decimal(1.1)
        //     },
        //     scale() {
        //         s = new Decimal(15)
        //         return s
        //     },
        //     Is_scaled() {
        //         return false
        //         return this.scale().lte(getBuyableAmount("mg", this.id)) ? true : false
        //     },
        //     scaling() {
        //         let s = new Decimal(this.purchaseLimit()-10).times(0.005).add(1)
        //         return this.Is_scaled() ? s : decimalOne
        //     },
        //     display() {
        //         let desc1 = "<h2 style='font-size:13px'>Add </h2>"
        //         let desc2 = "<h2 style='font-size:14px; color:hsl(200 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>" + ((this.baseEffect() % 1 == 0) ?  formatWhole(this.baseEffect()) : commaFormat(this.baseEffect(), 2)) + "</h2>"
        //         let desc3 = "<h2 style='font-size:13px'> to MP's base</h2><br>"
        //         let desc = desc1 + desc2 + desc3

        //         let effect = "<br><h2 style='font-size:13px'>Currently: </h2><h2 style='font-size:15px;'>+" + ((this.effect() % 1 == 0) ? formatWhole(this.effect()) : commaFormat(this.effect(), 2)) + "</h2> <h2 style='font-size:13px'>"

        //         let cost = "<br><h2 style='font-size:13px'>Cost: </h2><h2 style='font-size:15px;'>" + format(this.cost(), 4) + " MP</h2>" + (this.Is_scaled() && !isBuyableMaxed("mg", this.id) ? "<h3 style='color:#9b0c0c'> (scaled)</h3>" : "")

        //         let maxed = "<br><h2 style='color:hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>Maxed</h2>"

        //         cost = isBuyableMaxed("mg", this.id) ? maxed : cost

        //         let amt = "<br><br><h2 style='font-size:13px'>Amount:</h2> <h2 style='font-size:15px'>" + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(this.purchaseLimit()) + "</h2>"

        //         return  shiftDown ? this.costDisplay() : desc + effect + cost + amt + br
        //     },
        //     costDisplay() {
        //         let a = "<h2>Cost Formula:</h2>"
        //         let b = "<h3>0.0001 x " + this.b2() + " x amt</h3>"
        //         let c = ""
        //         if(this.Is_scaled()){
        //             b += "<sup style='color:#9b0c0c'>"+ commaFormat(this.scaling(), 3) +"</sup>"
        //             c = "<h2>Scaling Formula:</h2><br><h3> ((Limit - 10) x 0.005) + 1</h3>"
        //         }
        //         return a + br + b + br2 + c
        //     },
        //     canAfford() { return player[this.layer].points.gte(this.cost()) },
        //     buy() {
        //         player[this.layer].points = player[this.layer].points.sub(this.cost())
        //         setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        //     },
        //     baseEffect(){
        //         let base = new Decimal(0.01)

        //         return base
        //     },
        //     effect() {
        //         let x = getBuyableAmount(this.layer, this.id)
        //         let eff = this.baseEffect()
        //         return eff.times(x)
        //     },
        //     purchaseLimit() {
        //         limit = 15
        //         if(inChallenge("mg", 11)) return 5
        //         if(hasMilestone("mg", 4)) limit = limit + ((player.mg.milestones.length - 3) * 5)
        //         return limit
        //     },
        //     unlocked() { return true },
        //     style() { return isBuyableMaxed("mg", this.id) ? {"background-color" : "#2c74ffbb"} : this.canAfford() ? {"background-color" : "#2c74ff"} : {"background-color" : "#2c74ff77"}}
        // },

        // 22: {
        //     title() { 
        //         return "<h1 style='color:hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>P</h1>" + br
        //     },
        //     cost() {
        //         let amt = getBuyableAmount(this.layer, this.id)
        //         let base1 = new Decimal(0.0001)
        //         let base2 = this.b2()

        //         if(this.scale().lte(getBuyableAmount("mg", this.id))) base2 = base2.add(this.scaling())

        //         let cost = base1.times(base2).times(amt.add(3).pow(this.scaling()))

        //         return cost
        //     },
        //     b2() {
        //         return new Decimal(1.1)
        //     },
        //     scale() {
        //         s = new Decimal(15)
        //         return s
        //     },
        //     Is_scaled() {
        //         return false
        //         return this.scale().lte(getBuyableAmount("mg", this.id)) ? true : false
        //     },
        //     scaling() {
        //         let s = new Decimal(this.purchaseLimit()-10).times(0.005).add(1)
        //         return this.Is_scaled() ? s : decimalOne
        //     },
        //     display() {
        //         let desc1 = "<h2 style='font-size:13px'>Add </h2>"
        //         let desc2 = "<h2 style='font-size:14px; color:hsl(200 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>" + ((this.baseEffect() % 1 == 0) ?  formatWhole(this.baseEffect()) : commaFormat(this.baseEffect(), 2)) + "</h2>"
        //         let desc3 = "<h2 style='font-size:13px'> to MP's base</h2><br>"
        //         let desc = desc1 + desc2 + desc3

        //         let effect = "<br><h2 style='font-size:13px'>Currently: </h2><h2 style='font-size:15px;'>+" + ((this.effect() % 1 == 0) ? formatWhole(this.effect()) : commaFormat(this.effect(), 2)) + "</h2> <h2 style='font-size:13px'>"

        //         let cost = "<br><h2 style='font-size:13px'>Cost: </h2><h2 style='font-size:15px;'>" + format(this.cost(), 4) + " MP</h2>" + (this.Is_scaled() && !isBuyableMaxed("mg", this.id) ? "<h3 style='color:#9b0c0c'> (scaled)</h3>" : "")

        //         let maxed = "<br><h2 style='color:hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>Maxed</h2>"

        //         cost = isBuyableMaxed("mg", this.id) ? maxed : cost

        //         let amt = "<br><br><h2 style='font-size:13px'>Amount:</h2> <h2 style='font-size:15px'>" + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(this.purchaseLimit()) + "</h2>"

        //         return  shiftDown ? this.costDisplay() : desc + effect + cost + amt + br
        //     },
        //     costDisplay() {
        //         let a = "<h2>Cost Formula:</h2>"
        //         let b = "<h3>0.0001 x " + this.b2() + " x amt</h3>"
        //         let c = ""
        //         if(this.Is_scaled()){
        //             b += "<sup style='color:#9b0c0c'>"+ commaFormat(this.scaling(), 3) +"</sup>"
        //             c = "<h2>Scaling Formula:</h2><br><h3> ((Limit - 10) x 0.005) + 1</h3>"
        //         }
        //         return a + br + b + br2 + c
        //     },
        //     canAfford() { return player[this.layer].points.gte(this.cost()) },
        //     buy() {
        //         player[this.layer].points = player[this.layer].points.sub(this.cost())
        //         setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        //     },
        //     baseEffect(){
        //         let base = new Decimal(0.01)

        //         return base
        //     },
        //     effect() {
        //         let x = getBuyableAmount(this.layer, this.id)
        //         let eff = this.baseEffect()
        //         return eff.times(x)
        //     },
        //     purchaseLimit() {
        //         limit = 15
        //         if(inChallenge("mg", 11)) return 5
        //         if(hasMilestone("mg", 4)) limit = limit + ((player.mg.milestones.length - 3) * 5)
        //         return limit
        //     },
        //     unlocked() { return true },
        //     style() { return isBuyableMaxed("mg", this.id) ? {"background-color" : "#2c74ffbb"} : this.canAfford() ? {"background-color" : "#2c74ff"} : {"background-color" : "#2c74ff77"}}
        // },

        // 23: {
        //     title() { 
        //         return "<h1 style='color:hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>o</h1>" + br
        //     },
        //     cost() {
        //         let amt = getBuyableAmount(this.layer, this.id)
        //         let base1 = new Decimal(0.0001)
        //         let base2 = this.b2()

        //         if(this.scale().lte(getBuyableAmount("mg", this.id))) base2 = base2.add(this.scaling())

        //         let cost = base1.times(base2).times(amt.add(3).pow(this.scaling()))

        //         return cost
        //     },
        //     b2() {
        //         return new Decimal(1.1)
        //     },
        //     scale() {
        //         s = new Decimal(15)
        //         return s
        //     },
        //     Is_scaled() {
        //         return false
        //         return this.scale().lte(getBuyableAmount("mg", this.id)) ? true : false
        //     },
        //     scaling() {
        //         let s = new Decimal(this.purchaseLimit()-10).times(0.005).add(1)
        //         return this.Is_scaled() ? s : decimalOne
        //     },
        //     display() {
        //         let desc1 = "<h2 style='font-size:13px'>Add </h2>"
        //         let desc2 = "<h2 style='font-size:14px; color:hsl(200 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>" + ((this.baseEffect() % 1 == 0) ?  formatWhole(this.baseEffect()) : commaFormat(this.baseEffect(), 2)) + "</h2>"
        //         let desc3 = "<h2 style='font-size:13px'> to MP's base</h2><br>"
        //         let desc = desc1 + desc2 + desc3

        //         let effect = "<br><h2 style='font-size:13px'>Currently: </h2><h2 style='font-size:15px;'>+" + ((this.effect() % 1 == 0) ? formatWhole(this.effect()) : commaFormat(this.effect(), 2)) + "</h2> <h2 style='font-size:13px'>"

        //         let cost = "<br><h2 style='font-size:13px'>Cost: </h2><h2 style='font-size:15px;'>" + format(this.cost(), 4) + " MP</h2>" + (this.Is_scaled() && !isBuyableMaxed("mg", this.id) ? "<h3 style='color:#9b0c0c'> (scaled)</h3>" : "")

        //         let maxed = "<br><h2 style='color:hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>Maxed</h2>"

        //         cost = isBuyableMaxed("mg", this.id) ? maxed : cost

        //         let amt = "<br><br><h2 style='font-size:13px'>Amount:</h2> <h2 style='font-size:15px'>" + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(this.purchaseLimit()) + "</h2>"

        //         return  shiftDown ? this.costDisplay() : desc + effect + cost + amt + br
        //     },
        //     costDisplay() {
        //         let a = "<h2>Cost Formula:</h2>"
        //         let b = "<h3>0.0001 x " + this.b2() + " x amt</h3>"
        //         let c = ""
        //         if(this.Is_scaled()){
        //             b += "<sup style='color:#9b0c0c'>"+ commaFormat(this.scaling(), 3) +"</sup>"
        //             c = "<h2>Scaling Formula:</h2><br><h3> ((Limit - 10) x 0.005) + 1</h3>"
        //         }
        //         return a + br + b + br2 + c
        //     },
        //     canAfford() { return player[this.layer].points.gte(this.cost()) },
        //     buy() {
        //         player[this.layer].points = player[this.layer].points.sub(this.cost())
        //         setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        //     },
        //     baseEffect(){
        //         let base = new Decimal(0.01)

        //         return base
        //     },
        //     effect() {
        //         let x = getBuyableAmount(this.layer, this.id)
        //         let eff = this.baseEffect()
        //         return eff.times(x)
        //     },
        //     purchaseLimit() {
        //         limit = 15
        //         if(inChallenge("mg", 11)) return 5
        //         if(hasMilestone("mg", 4)) limit = limit + ((player.mg.milestones.length - 3) * 5)
        //         return limit
        //     },
        //     unlocked() { return true },
        //     style() { return isBuyableMaxed("mg", this.id) ? {"background-color" : "#2c74ffbb"} : this.canAfford() ? {"background-color" : "#2c74ff"} : {"background-color" : "#2c74ff77"}}
        // },

        // 31: {
        //     title() { 
        //         return "<h1 style='color:hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>i³</h1>" + br
        //     },
        //     cost() {
        //         let amt = getBuyableAmount(this.layer, this.id)
        //         let base1 = new Decimal(0.0001)
        //         let base2 = this.b2()

        //         if(this.scale().lte(getBuyableAmount("mg", this.id))) base2 = base2.add(this.scaling())

        //         let cost = base1.times(base2).times(amt.add(3).pow(this.scaling()))

        //         return cost
        //     },
        //     b2() {
        //         return new Decimal(1.1)
        //     },
        //     scale() {
        //         s = new Decimal(15)
        //         return s
        //     },
        //     Is_scaled() {
        //         return false
        //         return this.scale().lte(getBuyableAmount("mg", this.id)) ? true : false
        //     },
        //     scaling() {
        //         let s = new Decimal(this.purchaseLimit()-10).times(0.005).add(1)
        //         return this.Is_scaled() ? s : decimalOne
        //     },
        //     display() {
        //         let desc1 = "<h2 style='font-size:13px'>Add </h2>"
        //         let desc2 = "<h2 style='font-size:14px; color:hsl(200 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>" + ((this.baseEffect() % 1 == 0) ?  formatWhole(this.baseEffect()) : commaFormat(this.baseEffect(), 2)) + "</h2>"
        //         let desc3 = "<h2 style='font-size:13px'> to MP's base</h2><br>"
        //         let desc = desc1 + desc2 + desc3

        //         let effect = "<br><h2 style='font-size:13px'>Currently: </h2><h2 style='font-size:15px;'>+" + ((this.effect() % 1 == 0) ? formatWhole(this.effect()) : commaFormat(this.effect(), 2)) + "</h2> <h2 style='font-size:13px'>"

        //         let cost = "<br><h2 style='font-size:13px'>Cost: </h2><h2 style='font-size:15px;'>" + format(this.cost(), 4) + " MP</h2>" + (this.Is_scaled() && !isBuyableMaxed("mg", this.id) ? "<h3 style='color:#9b0c0c'> (scaled)</h3>" : "")

        //         let maxed = "<br><h2 style='color:hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>Maxed</h2>"

        //         cost = isBuyableMaxed("mg", this.id) ? maxed : cost

        //         let amt = "<br><br><h2 style='font-size:13px'>Amount:</h2> <h2 style='font-size:15px'>" + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(this.purchaseLimit()) + "</h2>"

        //         return  shiftDown ? this.costDisplay() : desc + effect + cost + amt + br
        //     },
        //     costDisplay() {
        //         let a = "<h2>Cost Formula:</h2>"
        //         let b = "<h3>0.0001 x " + this.b2() + " x amt</h3>"
        //         let c = ""
        //         if(this.Is_scaled()){
        //             b += "<sup style='color:#9b0c0c'>"+ commaFormat(this.scaling(), 3) +"</sup>"
        //             c = "<h2>Scaling Formula:</h2><br><h3> ((Limit - 10) x 0.005) + 1</h3>"
        //         }
        //         return a + br + b + br2 + c
        //     },
        //     canAfford() { return player[this.layer].points.gte(this.cost()) },
        //     buy() {
        //         player[this.layer].points = player[this.layer].points.sub(this.cost())
        //         setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        //     },
        //     baseEffect(){
        //         let base = new Decimal(0.01)

        //         return base
        //     },
        //     effect() {
        //         let x = getBuyableAmount(this.layer, this.id)
        //         let eff = this.baseEffect()
        //         return eff.times(x)
        //     },
        //     purchaseLimit() {
        //         limit = 15
        //         if(inChallenge("mg", 11)) return 5
        //         if(hasMilestone("mg", 4)) limit = limit + ((player.mg.milestones.length - 3) * 5)
        //         return limit
        //     },
        //     unlocked() { return true },
        //     style() { return isBuyableMaxed("mg", this.id) ? {"background-color" : "#2c74ffbb"} : this.canAfford() ? {"background-color" : "#2c74ff"} : {"background-color" : "#2c74ff77"}}
        // },

        // 32: {
        //     title() { 
        //         return "<h1 style='color:hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>n</h1>" + br
        //     },
        //     cost() {
        //         let amt = getBuyableAmount(this.layer, this.id)
        //         let base1 = new Decimal(0.0001)
        //         let base2 = this.b2()

        //         if(this.scale().lte(getBuyableAmount("mg", this.id))) base2 = base2.add(this.scaling())

        //         let cost = base1.times(base2).times(amt.add(3).pow(this.scaling()))

        //         return cost
        //     },
        //     b2() {
        //         return new Decimal(1.1)
        //     },
        //     scale() {
        //         s = new Decimal(15)
        //         return s
        //     },
        //     Is_scaled() {
        //         return false
        //         return this.scale().lte(getBuyableAmount("mg", this.id)) ? true : false
        //     },
        //     scaling() {
        //         let s = new Decimal(this.purchaseLimit()-10).times(0.005).add(1)
        //         return this.Is_scaled() ? s : decimalOne
        //     },
        //     display() {
        //         let desc1 = "<h2 style='font-size:13px'>Add </h2>"
        //         let desc2 = "<h2 style='font-size:14px; color:hsl(200 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>" + ((this.baseEffect() % 1 == 0) ?  formatWhole(this.baseEffect()) : commaFormat(this.baseEffect(), 2)) + "</h2>"
        //         let desc3 = "<h2 style='font-size:13px'> to MP's base</h2><br>"
        //         let desc = desc1 + desc2 + desc3

        //         let effect = "<br><h2 style='font-size:13px'>Currently: </h2><h2 style='font-size:15px;'>+" + ((this.effect() % 1 == 0) ? formatWhole(this.effect()) : commaFormat(this.effect(), 2)) + "</h2> <h2 style='font-size:13px'>"

        //         let cost = "<br><h2 style='font-size:13px'>Cost: </h2><h2 style='font-size:15px;'>" + format(this.cost(), 4) + " MP</h2>" + (this.Is_scaled() && !isBuyableMaxed("mg", this.id) ? "<h3 style='color:#9b0c0c'> (scaled)</h3>" : "")

        //         let maxed = "<br><h2 style='color:hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>Maxed</h2>"

        //         cost = isBuyableMaxed("mg", this.id) ? maxed : cost

        //         let amt = "<br><br><h2 style='font-size:13px'>Amount:</h2> <h2 style='font-size:15px'>" + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(this.purchaseLimit()) + "</h2>"

        //         return  shiftDown ? this.costDisplay() : desc + effect + cost + amt + br
        //     },
        //     costDisplay() {
        //         let a = "<h2>Cost Formula:</h2>"
        //         let b = "<h3>0.0001 x " + this.b2() + " x amt</h3>"
        //         let c = ""
        //         if(this.Is_scaled()){
        //             b += "<sup style='color:#9b0c0c'>"+ commaFormat(this.scaling(), 3) +"</sup>"
        //             c = "<h2>Scaling Formula:</h2><br><h3> ((Limit - 10) x 0.005) + 1</h3>"
        //         }
        //         return a + br + b + br2 + c
        //     },
        //     canAfford() { return player[this.layer].points.gte(this.cost()) },
        //     buy() {
        //         player[this.layer].points = player[this.layer].points.sub(this.cost())
        //         setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        //     },
        //     baseEffect(){
        //         let base = new Decimal(0.01)

        //         return base
        //     },
        //     effect() {
        //         let x = getBuyableAmount(this.layer, this.id)
        //         let eff = this.baseEffect()
        //         return eff.times(x)
        //     },
        //     purchaseLimit() {
        //         limit = 15
        //         if(inChallenge("mg", 11)) return 5
        //         if(hasMilestone("mg", 4)) limit = limit + ((player.mg.milestones.length - 3) * 5)
        //         return limit
        //     },
        //     unlocked() { return true },
        //     style() { return isBuyableMaxed("mg", this.id) ? {"background-color" : "#2c74ffbb"} : this.canAfford() ? {"background-color" : "#2c74ff"} : {"background-color" : "#2c74ff77"}}
        // },

        // 33: {   
        //     title() { 
        //         return "<h1 style='color:hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>t</h1>" + br
        //     },
        //     cost() {
        //         let amt = getBuyableAmount(this.layer, this.id)
        //         let base1 = new Decimal(0.0001)
        //         let base2 = this.b2()

        //         if(this.scale().lte(getBuyableAmount("mg", this.id))) base2 = base2.add(this.scaling())

        //         let cost = base1.times(base2).times(amt.add(3).pow(this.scaling()))

        //         return cost
        //     },
        //     b2() {
        //         return new Decimal(1.1)
        //     },
        //     scale() {
        //         s = new Decimal(15)
        //         return s
        //     },
        //     Is_scaled() {
        //         return false
        //         return this.scale().lte(getBuyableAmount("mg", this.id)) ? true : false
        //     },
        //     scaling() {
        //         let s = new Decimal(this.purchaseLimit()-10).times(0.005).add(1)
        //         return this.Is_scaled() ? s : decimalOne
        //     },
        //     display() {
        //         let desc1 = "<h2 style='font-size:13px'>Add </h2>"
        //         let desc2 = "<h2 style='font-size:14px; color:hsl(200 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>" + ((this.baseEffect() % 1 == 0) ?  formatWhole(this.baseEffect()) : commaFormat(this.baseEffect(), 2)) + "</h2>"
        //         let desc3 = "<h2 style='font-size:13px'> to MP's base</h2><br>"
        //         let desc = desc1 + desc2 + desc3

        //         let effect = "<br><h2 style='font-size:13px'>Currently: </h2><h2 style='font-size:15px;'>+" + ((this.effect() % 1 == 0) ? formatWhole(this.effect()) : commaFormat(this.effect(), 2)) + "</h2> <h2 style='font-size:13px'>"

        //         let cost = "<br><h2 style='font-size:13px'>Cost: </h2><h2 style='font-size:15px;'>" + format(this.cost(), 4) + " MP</h2>" + (this.Is_scaled() && !isBuyableMaxed("mg", this.id) ? "<h3 style='color:#9b0c0c'> (scaled)</h3>" : "")

        //         let maxed = "<br><h2 style='color:hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>Maxed</h2>"

        //         cost = isBuyableMaxed("mg", this.id) ? maxed : cost

        //         let amt = "<br><br><h2 style='font-size:13px'>Amount:</h2> <h2 style='font-size:15px'>" + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(this.purchaseLimit()) + "</h2>"

        //         return  shiftDown ? this.costDisplay() : desc + effect + cost + amt + br
        //     },
        //     costDisplay() {
        //         let a = "<h2>Cost Formula:</h2>"
        //         let b = "<h3>0.0001 x " + this.b2() + " x amt</h3>"
        //         let c = ""
        //         if(this.Is_scaled()){
        //             b += "<sup style='color:#9b0c0c'>"+ commaFormat(this.scaling(), 3) +"</sup>"
        //             c = "<h2>Scaling Formula:</h2><br><h3> ((Limit - 10) x 0.005) + 1</h3>"
        //         }
        //         return a + br + b + br2 + c
        //     },
        //     canAfford() { return player[this.layer].points.gte(this.cost()) },
        //     buy() {
        //         player[this.layer].points = player[this.layer].points.sub(this.cost())
        //         setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        //     },
        //     baseEffect(){
        //         let base = new Decimal(0.01)

        //         return base
        //     },
        //     effect() {
        //         let x = getBuyableAmount(this.layer, this.id)
        //         let eff = this.baseEffect()
        //         return eff.times(x)
        //     },
        //     purchaseLimit() {
        //         limit = 15
        //         if(inChallenge("mg", 11)) return 5
        //         if(hasMilestone("mg", 4)) limit = limit + ((player.mg.milestones.length - 3) * 5)
        //         return limit
        //     },
        //     unlocked() { return true },
        //     style() { return isBuyableMaxed("mg", this.id) ? {"background-color" : "#2c74ffbb"} : this.canAfford() ? {"background-color" : "#2c74ff"} : {"background-color" : "#2c74ff77"}}
        // },

        41: {
            display() { 
                let a = "<h1>Keep 'Mini I' on milestone resets</h1>"
                return  a
            },
            canAfford() { return false },
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                doPopup(type = "none", text = "<h3>Keep 'Mini I' on milestone resets</h3>", title = "Perk Gotten!", timer = 10, color = "#2c74ff")
            },
            purchaseLimit() {
                limit = 1
                return limit
            },
            unlocked() { return true }
        }
    },
    
    //   Enhanced challenges: completed one more time (or more) for bonus reward 
    challenges: {
        11: {   
            name() { return "<h2 style='color:hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>Mini P</h2>"},
            completionLimit: 5,
            // fullDisplay() {
            //     return this.challengeDescription()
            // },
            challengeDescription() {
                let c11 = "<span style='color:hsl(220 50% 90%);'>Mini II</span> is disabled," + br + "Buyables are more expensive and they're limited to <span style='color:hsl(220 50% 90%);'>" + formatWhole(this.buyablesLimit()) + "</span>"
                
                return c11 + br
            },
            goalDescription(){
                return tmp.mg.challenges[this.id].goal + " Mini Points/s"
            },
            goal(){
                let id = player.mg.challenges[this.id]
                if(player.mg.unlockedMileEffects >= 1) return [ 0.00013, 0.00014, 0.00015, 0.00016, 0.00017 ][id]
                return new Decimal([ 0.00012, 0.00013, 0.00014, 0.00015, 0.00016 ][id])
            },
            canComplete() {return inChallenge("mg", this.id) && tmp.mg.getResetGain.gte(tmp.mg.challenges[this.id].goal)},
            rewardDescription(){
                let a = "Per completion add 0.01" + br + "to 'Mini II' expopent." + br + "Currently: +" + commaFormat(this.rewardEffect(),2) // per completion add 0.05 to 'Mini III' exponent!!!
                a += br2 + "On 3rd completion unlock the second challenge."
                a += br2 + "<span style='color:hsl(220 50% 90%);'>[Completions: " + (maxedChallenge("mg", this.id) ? "Maxed" : challengeCompletions("mg", this.id) + "/" + tmp.mg.challenges[this.id].completionLimit) + "]</span>"
                return a
            }, 
            rewardEffect() {
                let eff = new Decimal(0.01)

                eff = eff.times(challengeCompletions("mg", this.id))

                return eff
            },
            buyablesLimit() {
                if(challengeCompletions("mg", this.id) < 1) return new Decimal(5)
                if(challengeCompletions("mg", this.id) < 2) return new Decimal(9)
                if(challengeCompletions("mg", this.id) < 3) return new Decimal(13)
                if(challengeCompletions("mg", this.id) < 4) return new Decimal(17)
                return new Decimal(21)
            },
            onEnter(){
                if(!maxedChallenge("mg", this.id)) MilestoneReset(true)
            },
            onExit(){
                if(!maxedChallenge("mg", this.id)) MilestoneReset(true)
            },
            unlocked(){
                return true
            },
            style() {return ChallenegStyle(this.id)},
            buttonStyle() { return this.canComplete() ? {"background-color":"rgba(240, 243, 46, 0.801)"} : {} }
            //rgba(240, 243, 46, 0.801)
            //style() { return player.mg.challenges[this.id] == 5 ? {'background-color':"#2c74ff", "color":"hsl(200, 18%, 10%)"} : {'background-color':"#2c74ff77", "color":"hsl(200, 18%, 10%)"}},
        }, 

        12: {   
            name() { return "<h2 style='color:hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>Small P</h2>"},
            completionLimit: 5,
            // fullDisplay() {
            //     return this.challengeDescription()
            // },
            challengeDescription() {
                let c11 = "<span style='color:hsl(220 50% 90%);'>Mini II</span> is disabled," + br + "Buyables are more expensive and they're limited to <span style='color:hsl(220 50% 90%);'>" + formatWhole(this.buyablesLimit()) + "</span>"
                
                return c11 + br
            },
            goalDescription(){
                return tmp.mg.challenges[this.id].goal + " Mini Points/s"
            },
            goal(){
                let id = player.mg.challenges[this.id]
                if(player.mg.unlockedMileEffects >= 1) return [ 0.00013, 0.00014, 0.00015, 0.00016, 0.00017 ][id]
                return new Decimal([ 0.00012, 0.00013, 0.00014, 0.00015, 0.00016 ][id])
            },
            canComplete() {return inChallenge("mg", this.id) && tmp.mg.getResetGain.gte(tmp.mg.challenges[this.id].goal)},
            rewardDescription(){
                let a = "Per completion add 0.01" + br + "to 'Mini II' expopent." + br + "Currently: +" + commaFormat(this.rewardEffect(),2) // per completion add 0.05 to 'Mini III' exponent!!!
                a += br2 + "On 3rd completion unlock the second challenge."
                a += br2 + "<span style='color:hsl(220 50% 90%);'>[Completions: " + (maxedChallenge("mg", this.id) ? "Maxed" : challengeCompletions("mg",this.id) + "/" + tmp.mg.challenges[this.id].completionLimit) + "]</span>"
                return a
            }, 
            rewardEffect() {
                let eff = new Decimal(0.01)

                eff = eff.times(challengeCompletions("mg", this.id))

                return eff
            },
            buyablesLimit() {
                if(challengeCompletions("mg", this.id) < 1) return new Decimal(5)
                if(challengeCompletions("mg", this.id) < 2) return new Decimal(9)
                if(challengeCompletions("mg", this.id) < 3) return new Decimal(13)
                if(challengeCompletions("mg", this.id) < 4) return new Decimal(17)
                return new Decimal(21)
            },
            onEnter(){
                if(!maxedChallenge("mg", this.id)) MilestoneReset(true)
            },
            onExit(){
                if(!maxedChallenge("mg", this.id)) MilestoneReset(true)
            },
            unlocked(){
                return challengeCompletions("mg", 11) >= 3 || false
            },
            style() {return ChallenegStyle(this.id)},
            buttonStyle() { return this.canComplete() ? {"background-color":"hsla(58, 80%, 50%, 0.9)"} : {} }
            //style() { return player.mg.challenges[this.id] == 5 ? {'background-color':"#2c74ff", "color":"hsl(200, 18%, 10%)"} : {'background-color':"#2c74ff77", "color":"hsl(200, 18%, 10%)"}},
        }, 
    },

    grid: {
        rows: 6, // If these are dynamic make sure to have a max value as well!
        cols: 4,
        avalableColors: ["rgb(196, 192, 192)", "hsl(206, 80%, 50%)", "hsl(243, 80%, 50%)", "hsl(119, 80%, 50%)", "hsl(137, 80%, 30%)", "hsl(360, 80%, 50%)", "hsl(50, 80%, 50%)", "hsl(300, 80%, 50%)", "hsl(272, 80%, 50%)"],
        getColor(id) {
            return this.avalableColors[getGridData("mg", id)]
        },
        getStartData(id) {
            if(id > 200) return 0
        },
        getUnlocked(id) {
            if(id > 200 && id <300) return false
            return true
        },
        getCanClick(data, id) {
            if(player.mg.Is_gridRowOneUnlocked) return false
            if(id < player.mg.gridCurrentRow-4 || id > player.mg.gridCurrentRow) return false
            return true
        },
        onClick(data, id) { 
            player[this.layer].grid[id]++
            if(player[this.layer].grid[id] >= this.avalableColors.length) player[this.layer].grid[id] = 1
        },
        getDisplay(data, id) {
            if(id < 200) return player.mg.Is_gridRowOneUnlocked ? "" : "<h1 style='filter:grayscale(100%); font-size:25px'>🔒</h1>"
            return ""
        },
        getStyle(data, id) {
            if(id < 200) return player.mg.Is_gridRowOneUnlocked ? {"background-color":this.getColor(id)} : {"background-color":"#111"}
            return id <= player.mg.gridCurrentRow ? {"background-color":this.getColor(id), "border-color":player.mg.rowsResults[Math.floor(id / 100)-3][Math.floor(id % 100)-1]} : {"background-color":"#222e"}
        }
    },

    achievements: {
        rows: 10,
        cols: 3,
        11: {
            name() { 
                let title = "<h3 style='color : hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>Keep 'Mini I' on milestone resets</h3>"
                let line = br+ "<hr style='width:130px; border-color:hsl(200 50% 90%)'>" + br2
                let req = "<h3>Get 0.001 MP/s without buyables</h3>"
                return title + line + req
            },
            done() { return false},
            style() { return AchStyle()},
            onComplete() {/* MilestoneReset();  remove last milestone */}
        },
        21: {
            name() { 
                let title = "<h3 style='color : hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>Keep 'Mini II' on milestone resets</h3>"
                let line = br+ "<hr style='width:130px; border-color:hsl(200 50% 90%)'>" + br2
                let req = "<h3>Get 0.001 MP/s without buyables</h3>"
                return title + line + req
            },
            done() { return false},
            style() { return AchStyle()},
            onComplete() {/* MilestoneReset();  remove last milestone */}
        },
        31: {
            name() { 
                let title = "<h3 style='color : hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>Keep 'Mini III' on milestone resets</h3>"
                let line = br+ "<hr style='width:130px; border-color:hsl(200 50% 90%)'>" + br2
                let req = "<h3>Get 0.001 MP/s without buyables</h3>"
                return title + line + req
            },
            done() { return false},
            style() { return AchStyle()},
            onComplete() {/* MilestoneReset();  remove last milestone */}
        },
        41: {
            name() { 
                let title = "<h3 style='color : hsl(220 50% 90%); text-shadow: .1em .1em 0 hsl(200 50% 30%);'>Keep 'Mini IV' on milestone resets</h3>"
                let line = br+ "<hr style='width:130px; border-color:hsl(200 50% 90%)'>" + br2
                let req = "<h3>Get 0.001 MP/s without buyables</h3>"
                return title + line + req
            },
            done() { return false},
            style() { return AchStyle()},
            onComplete() {/* MilestoneReset();  remove last milestone */}
        },
        // Exiting a challenge won't rest anything
        // Keep 'Mini II' on Milestone reset
        // Keep 'Mini III' on Milestone reset
        // Keep 'Mini VI' on Milestone reset
        // Keep 'Mini V' on Milestone reset
        // Perks won't reduse a milestone anymore
    },

    bars: {
        progressBar: {
            direction: RIGHT,
            width: 99,
            height: 30,
            progress() { 
                if(player.mg.activeChallenge != null) {
                    let id = player.mg.activeChallenge
                    return new Decimal(tmp.mg.getResetGain).div(tmp.mg.challenges[id].goal)
                } else if(player.mg.Is_mileEffectsUnlocked && hasMilestone("mg", 2) && player.mg.mileEffectsReq[player.mg.unlockedMileEffects] < tmp.mg.milestones[player.mg.milestones.length+1].req) {
                    return new Decimal(tmp.mg.getResetGain).div(player.mg.mileEffectsReq[player.mg.unlockedMileEffects])
                } else {  
                    let currency = player.mg.points
                    if(hasMilestone("mg", 2)) currency = tmp.mg.getResetGain
                    return tmp.mg.milestones[player.mg.milestones.length+1] !== undefined ? new Decimal(currency.add(1).log(10)).div(new Decimal(tmp.mg.milestones[player.mg.milestones.length+1].req).add(1).log(10)) : decimalOne 
                }
            },
            display() { 
                if(player.mg.activeChallenge != null) {
                    let id = player.mg.activeChallenge
                    return "<span style='color:hsl(0 0% 80%)'>In challenge " + tmp.mg.challenges[id].name + "  —  Progress " + format(new Decimal(this.progress()).times(100).min(100), 1) + "%  —  Goal: " +  tmp.mg.challenges[id].goalDescription + "</span>"
                } else if(player.mg.Is_mileEffectsUnlocked && hasMilestone("mg", 2) && player.mg.mileEffectsReq[player.mg.unlockedMileEffects] < tmp.mg.milestones[player.mg.milestones.length+1].req) {
                    return "<span style='color:hsl(0 0% 80%)'>Next Effect: " + format(new Decimal(this.progress()).times(100).min(100), 1) + "%</span>"
                } else {  
                    if(tmp.mg.milestones[player.mg.milestones.length+1] == undefined) return "No more Milestones"
                    let a = "Milestone <h3 style='color:#2c74ff'>" + formatWhole(player.mg.milestones.length+1) + "</h3> Progress: " + format(new Decimal(this.progress()).times(100).min(100), 1) + "%"
                    let b = this.progress() >= 1 && tmp.mg.milestones[player.mg.milestones.length+1] !== undefined ? " You're missing something..." : ""
                    let c = "  —  Requirement: " + tmp.mg.milestones[player.mg.milestones.length+1].requirementDescription
                    return "<span style='color:hsl(0 0% 80%);'>" + a + b + c + "</span>" 
                } 
            },
            borderStyle: {"border":"transparent", "border-radius":"4px"},
            baseStyle: {'background-color' : "#000a"},
            fillStyle() { return this.progress() > 1 ? {'background-color' : "#9b0c0c88"} : {'background-color' : "#2c74ff88"}},
            unlocked: true,
        },
    },

    clickables: {
        11: {
            display() {
                let a = "<b style='font-size:17px'>Hard Reset MiniGame</b>"
                return a
            },
            canClick() {return true},
            onClick() {
                //if (!confirm("Are you sure you want to do this? You will lose all your MiniGame progress!")) return
                layerDataReset('mg')
            },
            unlocked() {return player.dev.tools},
        },
        12: {
            display() {
                let a = "<b style='font-size:17px'>-100 divisor adder</b>"
                return a
            },
            canClick() {return true},
            onClick() {
                player.mg.divisorAdder = player.mg.divisorAdder.sub(100).max(0)
            },
            unlocked: false,
        },
        21: {
            display() {
                let a = "<h2 style='color:hsl(200, 8%, 7%);'>Reset current Run (keep challenges)</h2>"
                return a
            },
            canClick() {return true},
            onClick() {
                if (!confirm("Are you sure you want reset run? It will trigger a milestone reset!")) return
                MilestoneReset(true);
            },
            unlocked: false,
            style() { 
                return {"min-height":"0px", "height":"30px", "width":"400px", "border-radius":"2px"} 
            },
        },
        31: {
            display() {
                let a = "<b style='font-size:17px'>Reset Buyables</b>"
                return a
            },
            canClick() { return true},
            onClick() {
                resetMiniBuyables("mg")
            },
            unlocked() {return player.dev.tools},
            style() {
                return {"min-height":"0px", "height":"80px", "width":"100px",}
            }
        },
        41: {
            display() {
                let a = "<span style='font-size:17px'>Milestones do reset progress!<span>"
                if(!player.mg.canMileRest) a = "<span style='font-size:17px'>Milestones won't reset progress<span>"
                return a
            },
            canClick() {return true},
            onClick() {
                player.mg.canMileRest = !player.mg.canMileRest;
            },
            unlocked() {return player.dev.tools},
            style() { return player.mg.canMileRest ? { "background-color": "#1a3e8c" , "min-height":"0px", "height":"80px"} : { "background-color": "#2c74ff" , "min-height":"0px", "height":"80px"} },
        },
        42: {
            display() {
                let a = "<b style='font-size:17px'>DevSpeed<br>x1</b>"
                return a
            },
            canClick() {return player.devSpeed > 1},
            onClick() {
                player.devSpeed = 1;
            },
            unlocked() {return player.dev.tools},
            style() { return this.canClick() ? { "background-color": "#2c74ff" , "min-height":"0px", "height":"80px"} : { "background-color": "#1a3e8c" , "min-height":"0px", "height":"80px"} },
        },
        43: {
            display() {
                let a = "<b style='font-size:17px'>DevSpeed<br>x10</b>"
                return a
            },
            canClick() {return player.devSpeed < 10 || player.devSpeed == undefined},
            onClick() {
                player.devSpeed = 10;
            },
            unlocked() {return player.dev.tools},
            style() { return this.canClick() ? { "background-color": "#2c74ff" , "min-height":"0px", "height":"80px"} : { "background-color": "#1a3e8c" , "min-height":"0px", "height":"80px"} },
        },
        44: {
            display() {
                let a = "<b style='font-size:17px'>Get a Milestone</b>"
                return a
            },
            canClick() {return true},
            onClick() {
                MilestoneReset(true);
                player.mg.milestones.push(player.mg.milestones.length+1);
            },
            unlocked() {return player.dev.tools},
            style() { return {"min-height":"0px", "height":"80px"} },
        },
        45: {
            display() {
                let a = "<b style='font-size:17px'>Remove a Milestone</b>"
                return a
            },
            canClick() {return player.mg.milestones.length > 0},
            onClick() {
                MilestoneReset(true);
                player.mg.milestones.pop();
            },
            unlocked() {return player.dev.tools},
            style() { return this.canClick() ? {"min-height":"0px", "height":"80px"} : {"background-color": "#1a3e8c" ,"min-height":"0px", "height":"80px"} },
        },
        51: {
            display() {
                let a = "<b style='font-size:17px'>Get a Perk</b>"
                return a
            },
            canClick() {return true},
            onClick() {
                tmp.mg.buyables[111].buy()
            },
            unlocked() {return player.dev.tools},
        },
        61: {
            display() {
                let a = "<h2>Reset EVERYTHING For a new effect and an Anti-effect</h2>" 
                let b = "<h2>You need" + br + format(player.mg.mileEffectsReq[player.mg.unlockedMileEffects], 5) + " / " + format(tmp.mg.getResetGain, 5) + " MP/s" + br + "to reset for a new effect and an Anti-effect</h2>"
                let c = "<h2>No more Effects for now "/* + br + "¯\\_(ツ)_/¯*/+"</h2>"

                let sym = ["_", "/", "¯¯", "\\"]

                let d = ""
                for (let i = 0; i < 25; i++){
                    d += sym[Math.floor((player.time/130+i) % 4)]
                }

                return this.canClick() ? a : player.mg.unlockedMileEffects < player.mg.mileEffectsReq.length ? b : c + br2 + d
            },
            canClick() {
                res = false
                if(tmp.mg.getResetGain.gte(player.mg.mileEffectsReq[player.mg.unlockedMileEffects]) && player.mg.unlockedMileEffects < player.mg.mileEffectsReq.length) {
                    res = true
                }
                return res
            },
            onClick() {
                if (!confirm("Are you sure you want to reset For an Effect? it will reset Challenges too!")) return
                MilestoneEffectsReset();
                player.devSpeed = 1;
            },
            unlocked() {
                return player.mg.Is_mileEffectsUnlocked
            },
            style() {
                return this.canClick() ?
                {
                    background: "transparent", /* Keep the background transparent */
                    backgroundImage: "linear-gradient(45deg, #2c74ff, #87CEEB)", /* Default gradient */
                    backgroundSize: "55% 55%", /* Large background for smooth animation */
                    animation: "gradientAnimation 3s ease infinite", /* Apply the animation */
                    color: "#000",
                    height: "80px",
                    width : "300px",
                    border: "2px solid",
                    "border-radius": "7px",
                    "border-color": "#2c74ffbb",
                    "font-size" : "13px",
                } : 

                {
                    "background-color": "#1a3e8c",
                    height: "80px",
                    width : "300px",
                    border: "2px solid",
                    "border-radius": "7px",
                    "border-color": "#2c74ffbb",
                    "font-size" : "13px",
                }
            },
        },
        71: {
            display() {
                let a = "<h2 style='font-size:17px'>Check</h2>"
                return a
            },
            canClick() {return !player.mg.Is_gridRowOneUnlocked && player.mg.gridCurrentRow > 300},
            onClick() {
                let r1 = [player.mg.grid[101], player.mg.grid[102], player.mg.grid[103], player.mg.grid[104]]
                let r2 = [player.mg.grid[player.mg.gridCurrentRow-3], player.mg.grid[player.mg.gridCurrentRow-2], player.mg.grid[player.mg.gridCurrentRow-1], player.mg.grid[player.mg.gridCurrentRow]]
                if(r2.includes(0)) return;

                for (let i = 0; i < 4; i++) {
                    let a = r1.indexOf(r2[i])

                    if(r2[i] == r1[i]) {
                        player.mg.rowsResults[Math.floor(player.mg.gridCurrentRow / 100)-3][i] = "#219903" //green
                    } else if(a == -1) {
                        player.mg.rowsResults[Math.floor(player.mg.gridCurrentRow / 100)-3][i] = "#850310"//red
                    } else if(a != i) {
                        player.mg.rowsResults[Math.floor(player.mg.gridCurrentRow / 100)-3][i] = "#c97704"//orange
                    }
                    
                }

                if(arraysEqual(r1, r2)){
                    player.mg.Is_gridRowOneUnlocked = true
                } else if(player.mg.gridCurrentRow == 604) {
                    player.mg.gridCurrentRow += 100
                    player.mg.Is_gridRowOneUnlocked = true
                } else {
                    player.mg.gridCurrentRow += 100
                }
                
            },
            unlocked() {return true},
            style() { return this.canClick() ? { "background-color": "#2c74ff" , "min-height":"0px", "height":"60px"} : { "background-color": "#1a3e8c" , "min-height":"0px", "height":"60px"} },
        },
        72: {
            display() {
                let a = "<h2 style='font-size:17px'>New Game</h2>"
                return a
            },
            canClick() {return true},
            onClick() {
                guessingGameReset()  
            },
            unlocked() {return true},
            style() { return this.canClick() ? { "background-color": "#2c74ff" , "min-height":"0px", "height":"60px"} : { "background-color": "#1a3e8c" , "min-height":"0px", "height":"60px"} },
        }
    },

    hotkeys: [
        {key: "ArrowLeft", description: "Left Arrow: Move one tab to the left", 
            onPress(){
                let l = player.tab
                if (layers[l] == undefined) return
                player.subtabs[l]["mini"] = getNextLeftTab(l, "mini")
            }
        },
        {key: "ArrowRight", description: "Right Arrow: Move one tab to the right", 
            onPress(){
                let l = player.tab
                if (layers[l] == undefined) return
                player.subtabs[l]["mini"] = getNextRightTab(l, "mini")
            }
        },
        {key: "ArrowUp", description: "Up Arrow: Move one subtab to the right", 
            onPress(){
                let l = player.tab
                if (layers[l] == undefined) return
                player.subtabs[l]["m_mile"] = getNextDownTab(l, "m_mile")
            }
        },
        {key: "ArrowDown", description: "Down Arrow: Move one subtab to the left", 
            onPress(){
                let l = player.tab
                if (layers[l] == undefined) return
                player.subtabs[l]["m_mile"] = getNextUpTab(l, "m_mile")
            }
        },
    ],
})

function getUnlockedSubtabs(layer, subtab){
	let l = Object.keys(layers[layer].microtabs[subtab])
    
	let n = []
	for (i in l) {
		j = l[i]
		let tempportion = tmp[layer].microtabs[subtab][j].unlocked
		if (tempportion || layers[layer].microtabs[subtab][j].unlocked == undefined) n.push(j)
	}
	return n
}

function getNextLeftTab(layer, subtab){
	let l = getUnlockedSubtabs(layer, subtab)
	let id = l.indexOf(player.subtabs[layer][subtab])
	if (id == -1) return l[0]
	if (id == 0) return l[l.length-1]
	return l[id - 1]
}


function getNextRightTab(layer, subtab){
	let l = getUnlockedSubtabs(layer, subtab)
	let id = l.indexOf(player.subtabs[layer][subtab])
	if (id == -1) return l[0]
	if (id == l.length-1) return l[0]
	return l[id + 1]
}

function getNextUpTab(layer, subtab){
	let l = getUnlockedSubtabs(layer, subtab)
	let id = l.indexOf(player.subtabs[layer][subtab])
	if (id == -1) return l[0]
	if (id == 0) return l[l.length-1]
	return l[id - 1]
}


function getNextDownTab(layer, subtab){
	let l = getUnlockedSubtabs(layer, subtab)
	let id = l.indexOf(player.subtabs[layer][subtab])
	if (id == -1) return l[0]
	if (id == l.length-1) return l[0]
	return l[id + 1]
}

function createCircularMenu(tile, n) {
    const circleMenu = tile.querySelector('.circle-menu');
    const radius = 50; // Radius for button placement
  
    // Clear any existing buttons
    circleMenu.innerHTML = '';
  
    for (let i = 0; i < n; i++) {
      const angle = (i / n) * 2 * Math.PI; // Calculate angle for each button
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
  
      // Create a button element
      const button = document.createElement('button');
      button.style.transform = `translate(${x}px, ${y}px)`;
      button.textContent = i + 1; // Label buttons with numbers or any text
  
      // Add button to the circle menu
      circleMenu.appendChild(button);
    }
}
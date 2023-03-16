//  // Game 1
//  var game1 = "";
//  var gm1Picks = 9;
//  var colost1 = 0;
//  var mich1 = 0;
//  if (gm1==="colost") {
//      colost1 = participants/gm1Picks;
//  }
//  else if (gm1==="mich"){
//      mich1 = participants/(participants-gm1Picks);
//  }
//  else {
//      colost1 = 0;
//      mich1 = 0;
//  }

//  console.log(mich1);

const participants = 19;

let gm1 = {
    team1:"01s",
    team2:"16s",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm2 = {
    team1:"08s",
    team2:"09s",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm3 = {
    team1:"05s",
    team2:"12s",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm4 = {
    team1:"04s",
    team2:"13s",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm5 = {
    team1:"06s",
    team2:"11s",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm6 = {
    team1:"03s",
    team2:"14s",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm7 = {
    team1:"07s",
    team2:"10s",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm8 = {
    team1:"02s",
    team2:"15s",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm9 = {
    team1:"01e",
    team2:"16e",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm10 = {
    team1:"08e",
    team2:"09e",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm11 = {
    team1:"05e",
    team2:"12e",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm12 = {
    team1:"04e",
    team2:"13e",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm13 = {
    team1:"06e",
    team2:"11e",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm14 = {
    team1:"03e",
    team2:"14e",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm15 = {
    team1:"07e",
    team2:"10e",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm16 = {
    team1:"02e",
    team2:"15e",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm17 = {
    team1:"01m",
    team2:"16m",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm18 = {
    team1:"08m",
    team2:"09m",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm19 = {
    team1:"05m",
    team2:"12m",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm20 = {
    team1:"04m",
    team2:"13m",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm21 = {
    team1:"06m",
    team2:"11m",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm22 = {
    team1:"03m",
    team2:"14m",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm23 = {
    team1:"07m",
    team2:"10m",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm24 = {
    team1:"02m",
    team2:"15m",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm25 = {
    team1:"01w",
    team2:"16w",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm26 = {
    team1:"08w",
    team2:"09w",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm27 = {
    team1:"05w",
    team2:"12w",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm28 = {
    team1:"04w",
    team2:"13w",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm29 = {
    team1:"06w",
    team2:"11w",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm30 = {
    team1:"03w",
    team2:"14w",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let g31 = {
    team1:"07w",
    team2:"10w",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let gm32 = {
    team1:"02w",
    team2:"15w",
    winner: "",
    fav:[],
    und:[],
    score:0
}

let games = [
    gm1,gm2,gm3,gm4,gm5,gm6,gm7,gm8,
    gm9,gm10,gm11,gm12,gm13,gm14,gm15,gm16,
    gm17,gm18,gm19,gm20,gm21,gm22,gm23,gm24,
    gm25,gm26,gm27,gm28,gm29,gm30,gm31,gm32
];

for (let i=0; i<players.length; i++) {
    for (let j=1; j<=games.length; j++) {
        if (players[i].picks.game[j] === gm[j].team1) {
            gm[j].fav.push(player[i]);
        } else if (players[i].picks.game[j] === gm[j].team2) {
            gm[j].und.push(player[i]);
        }
    }
}

// Scores Set to Game

for (let j=1; j<=games.length; j++) {
    if (gm[j].winner === gm[j].team1) {
        gm[j].score = (participants/gm[j].fav.length);
    } else if (gm[j].winner === gm[j].team2) {
        gm[j].score = (participants/gm[j].und.length);
    }
}

// Scores Set to Player

for (let i=0; i<players.length; i++) {
    for (let j=1; j<=games.length; j++) {
        if (players[i].picks.game[j] === gm[j].winner) {
            players[i].score = gm[j].score;
        }
    }
}

players.sort(players.score);

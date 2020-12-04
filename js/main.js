var createGov = function(name, partyColor) {

    var gov = {};
    gov.name = name;

    gov.electionResults = null;
    gov.totalVotes = 0;

    gov.partyColor = partyColor;

    gov.tallyVotes = function() {

        this.totalVotes = 0;

        for (var i = 0; i < this.electionResults.length; i++) {
            this.totalVotes = this.totalVotes + this.electionResults[i];

        }
    };

    return gov;
}

var sj = createGov("Sleepy Joe", [245, 141, 136]);
var dt = createGov("Don Tron", [132, 17, 11]);

sj.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
dt.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

sj.electionResults = [9] = 1;
dt.electionResults = [9] = 28;

sj.electionResults[4] = 17;
dt.electionResults[4] = 38;

sj.electionResults[43] = 11;
dt.electionResults[43] = 27;

var setStateResults = function(state) {

    theStates[state].winner = null;

    if (sj.electionResults[state] < dt.electionResults[state]) {
        theStates[state].winner = sj;
    } else if (dt.electionResults[state] < sj.electionResults[state]) {
        theStates[state].winner = jane;
    }

    var stateWinner = theStates[state].winner;

    if (stateWinner !== null) {
        theStates[state].rgbColor = stateWinner.partyColor;
    } else {
        theSteates[state].rgbColor = [11, 32, 57];
    }

    stateName.innerText = theStates[state].nameFull;
    abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";
    candidate1Name.innerText = sj.name;
    candidate2Name.innerText = dt.name;
    candidate1Results.innerText = sj.electionResults[state];
    candidate2Results.innerText = dt.electionResults[state];

    if (theStates[state].winner === null) {
        winnersName.innerText = "DRAW";
    } else {
        winnersName.innerText = theStates[state].winner.name;
    }
};

sj.tallyVotes();
dt.tallyVotes();

console.log(sj.totalVotes);
console.log(dt.totalVotes);

var winner = "???";

if (sj.totalVotes > dt.totalVotes) {
    winner = sj.name;
} else if (sj.totalVotes < dt.totalVotes) {
    winner = dt.name;
} else {
    winner = "DRAW."
}

console.log("AND THE WINNER IS ..." + winner + "!!!");

var countryTable = document.getElementById('countryResults');
var row = countryTable.children[0].children[0];

row.children[0].innerText = sj.name;
row.children[1].innerText = sj.totalVotes;
row.children[2].innerText = dt.name;
row.children[3].innerText = dt.totalVotes;
row.children[5].innerText = winner;

var stateTable = document.getElementById('stateResults');
var header = stateTable.children[0]
var body = stateTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];
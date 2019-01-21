var statistics = function(){}

statistics.getPercent = function (amount, total, decimalPlace) {
    if ( typeof decimalPlace === 'undefined') { 
        decimalPlace = 2; 
    }
    
    var percent = (amount / total) * 100;
    if ( isNaN(percent) )
        return 0 + "%";
    else
        return percent.toFixed(decimalPlace) + "%";
}

/* Gets all casual type matches in matches */
statistics.getCasualMatches = function (allMatches) {
    var casualMatches = [];
    for ( var i = 0; i < allMatches.length; i++ ) {
        if ( allMatches[i].mode == "3") {
            //A gauntlet match
            if ( allMatches[i].gauntletType == "5" 
                || allMatches[i].gauntletType == "10"
                || allMatches[i].gauntletType == "11" ) 
            {
                casualMatches.push(allMatches[i]);
            }
        }  else if (allMatches[i].mode == "2" ) {
            // if is a normal matchmaking game
            casualMatches.push(allMatches[i]);
        }
    }
    return casualMatches;
}

/* Gets all expert type matches in matches */
statistics.getExpertMatches = function (allMatches) {
    var expertMatches = [];
    for ( var i = 0; i < allMatches.length; i++ ) {
        if ( allMatches[i].mode == "3") {
            //A gauntlet match
            if ( allMatches[i].gauntletType == "7" 
                || allMatches[i].gauntletType == "8"
                || allMatches[i].gauntletType == "9" ) 
            {
                expertMatches.push(allMatches[i]);
            }
        }
    }
    return expertMatches;
}

/* Gets win rate for every game*/
statistics.getTotalWinRate = function (matches) {
    var wonMatches = 0;
    for(var i = 0;i < matches.length; i++){
        if( matches[i].outcome == matches[i].team) {
            wonMatches++;
        }
    }
    return statistics.getPercent(wonMatches, matches.length);
}


statistics.getMatchTypeGames = function (matches, typeNumber) {
    var allMatchingGames = [ ];
    for(var i = 0;i < matches.length; i++) {
        if ( matches[i].mode == typeNumber ) {
            allMatchingGames.push(matches[i]);
        }
    }
    return allMatchingGames;
}

statistics.getMatchTypeWinRate = function (matches, typeNumber) {
    var matchCount = 0;
    var wonMatches = 0;
    for(var i = 0;i < matches.length; i++) {
        if ( matches[i].mode == typeNumber ){
            matchCount++;
            if( matches[i].outcome == matches[i].team) {
                wonMatches++;
            }
        }
    }
    return statistics.getPercent(wonMatches, matchCount);
}

statistics.getTeamGames = function (matches, team) {
    var teamGames = [];
    for( var i = 0; i < matches.length; i++ ) {
        if ( matches[i].team == team ) {
            teamGames.push(matches[i]);
        }
    }
    return teamGames;
}
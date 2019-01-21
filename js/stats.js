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
    for(var i = 0; i < matches.length; i++) {
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

/* Goes through every hero and gets the highest picked hero and it's amount */
statistics.getMostPickedHero = function (matches) {
    var dict = {};

    for( var i = 0; i < matches.length; i++ ) {
        if ( dict.hasOwnProperty(matches[i].hero1) ) {
            dict[matches[i].hero1]++;
        } else {
            dict[matches[i].hero1] = 1;
        }

        if ( dict.hasOwnProperty(matches[i].hero2) ) {
            dict[matches[i].hero2]++;
        } else {
            dict[matches[i].hero2] = 1;
        }

        if ( dict.hasOwnProperty(matches[i].hero3) ) {
            dict[matches[i].hero3]++;
        } else {
            dict[matches[i].hero3] = 1;
        }

        if ( dict.hasOwnProperty(matches[i].hero4) ) {
            dict[matches[i].hero4]++;
        } else {
            dict[matches[i].hero4] = 1;
        }

        if ( dict.hasOwnProperty(matches[i].hero5) ) {
            dict[matches[i].hero5]++;
        } else {
            dict[matches[i].hero5] = 1;
        }
    }

    var mph  = "Unknown";
    var highestPickCount = -1;
    for ( var key in dict ) {
        if ( dict[key] > highestPickCount ) {
            mph = key;
            highestPickCount = dict[key];
        }
    }
    
    var r = new Object();
    r.hero  = decodeURI( mph );
    r.pickAmount = highestPickCount;
    return r;
}

statistics.getMostTurns = function (matches) {
    var mostTurnsGame = null;
    for ( var i = 0; i < matches.length; i++ ) { 
        if ( mostTurnsGame === null  
            || (mostTurnsGame != null && matches[i].totalTurns > mostTurnsGame.turns)) {
                mostTurnsGame = new Object();
                mostTurnsGame.turns = matches[i].totalTurns;
                mostTurnsGame.id = matches[i].id
        }
    }
    // If the object is null, give a default
    if( mostTurnsGame === null ) { 
        mostTurnsGame = new Object();
        mostTurnsGame.turns = "Unknown";
        mostTurnsGame.id = "0";
    }
    return mostTurnsGame;
}

statistics.getShortestGame = function (matches) {
    var sg = null;
    for ( var i = 0; i < matches.length; i++ ) { 
        if ( sg === null 
            || (sg != null && matches[i].duration < sg.time ))
            {
                sg = new Object();
                sg.time = matches[i].duration;
                sg.id = matches[i].id;
            }
    }
    // If the object is null, give a default
    if( sg === null ) { 
        sg = new Object();
        sg.time = "Unknown";
        sg.id = "0";
    }
    return sg;
}

statistics.getLongestGame = function (matches) {
    var lg = null;
    for ( var i = 0; i < matches.length; i++ ) { 
        if ( lg === null 
            || (lg != null && matches[i].duration > lg.time ))
            {
                lg = new Object();
                lg.time = matches[i].duration;
                lg.id = matches[i].id;
            }
    }
    // If the object is null, give a default
    if( lg === null ) { 
        lg = new Object();
        lg.time = "Unknown";
        lg.id = "0";
    }
    return lg;   
}

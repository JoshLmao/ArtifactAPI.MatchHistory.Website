$(() => {
    /*Select all script text when selecting text area*/
    $("#script_box").click(() => {
        $("#script_box").select();
    });

    let filter_outcome = "all";
    let filter_matchType = "all";
    let allMatches = [];

    const setStat = (statId, stat) => {
        $(statId).text(stat);
    }

    const setGlobalStats = (currentMatches) => {
        var totalMatchesWinRate = statistics.getTotalWinRate(currentMatches);
        setStat("#life_totalGames", currentMatches.length);
        setStat("#life_totalGamesWR", totalMatchesWinRate);

        var totalMMGames = statistics.getMatchTypeGames(currentMatches, "2");
        var totalMMWonGames = statistics.getMatchTypeWinRate(currentMatches, "2");
        setStat("#life_totalMM", totalMMGames.length);
        setStat("#life_totalMMWR", totalMMWonGames);

        var allGauntlets = statistics.getMatchTypeGames(currentMatches, "3");
        var totalGauntletWR = statistics.getMatchTypeWinRate(currentMatches, "3");
        setStat("#life_totalGau", allGauntlets.length);
        setStat("#life_totalGauWR", totalGauntletWR);

        var allBots = statistics.getMatchTypeGames(currentMatches, "8");
        var allBotsWR = statistics.getMatchTypeWinRate(allBots, "8");
        setStat("#life_totalBM", allBots.length);
        setStat("#life_totalBMWR", allBotsWR);
    }

    const setSharedStats = (matches, prefix) => {
        var totalWR = statistics.getTotalWinRate(matches);
        setStat(`#${prefix}_totalGames`, matches.length);
        setStat(`#${prefix}_totalWR`, totalWR);

        var allRadiant = statistics.getTeamGames(matches, "0");
        var rWR = statistics.getTotalWinRate(allRadiant);
        setStat(`#${prefix}_rGames`, allRadiant.length);
        setStat(`#${prefix}_rWR`, rWR);

        var allDire = statistics.getTeamGames(matches, "1");
        var dWR = statistics.getTotalWinRate(allDire);
        setStat(`#${prefix}_dGames`, allDire.length);
        setStat(`#${prefix}_dWR`, dWR);

        var mostPickedHero = statistics.getMostPickedHero(matches);
        setStat(`#${prefix}_mph`, mostPickedHero.hero);
        setStat(`#${prefix}_mphpa`, mostPickedHero.pickAmount);

        var mostTurns = statistics.getMostTurns(matches);
        setStat(`#${prefix}_rec_turns_val`, mostTurns.turns);
        setStat(`#${prefix}_rec_turns_id`, mostTurns.id);

        var shortestGame = statistics.getShortestGame(matches);
        setStat(`#${prefix}_rec_SG_Time`, shortestGame.time);
        setStat(`#${prefix}_rec_SG_ID`, shortestGame.id);

        var longestGame = statistics.getLongestGame(matches);
        setStat(`#${prefix}_rec_LG_Time`, longestGame.time);
        setStat(`#${prefix}_rec_LG_ID`, longestGame.id);
    }

    const setStats = (currentMatches) => {
        if( currentMatches.length == 0 ) {
            return;
        }

        setGlobalStats(currentMatches);

        var casualMatches = statistics.getCasualMatches(currentMatches);
        setSharedStats(casualMatches, "cas");

        var expertMatches = statistics.getExpertMatches(currentMatches);
        setSharedStats(expertMatches, "exp");
    }

    const regenerate_style = () => {
        let style_text = ".match_row { display: none; } ";
        if (filter_outcome === "win") 
        {
            if( filter_matchType == "matchmaking" ) {
                style_text += `.outcome_win.match_matchmaking { display: table-row; } `;
            } else if ( filter_matchType == "botMatch") {
                style_text += `.outcome_win.match_bots { display: table-row; } `;
            } else if ( filter_matchType == "callToArms" ) {
                style_text += `.outcome_win.match_callToArms { display: table-row; } `;
            } else if ( filter_matchType == "expConstructed" ) {
                style_text += `.outcome_win.match_expertC { display: table-row; } `;
            } else if ( filter_matchType == "exppd" ) {
                style_text += `.outcome_win.match_expertPD { display: table-row; } `;
            } else if ( filter_matchType == "expkd" ) {
                style_text += `.outcome_win.match_expertKD { display: table-row; } `;
            } else if ( filter_matchType == "constructed" ) {
                style_text += `.outcome_win.match_contructed { display: table-row; } `;
            } else if ( filter_matchType == "pd" ) {
                style_text += `.outcome_win.match_phantomDraft { display: table-row; } `;
            } 
        } 
        else if (filter_outcome === "lose") 
        {
            if( filter_matchType == "matchmaking" ) {
                style_text += `.outcome_lose.match_matchmaking { display: table-row; } `;
            } else if ( filter_matchType == "botMatch") {
                style_text += `.outcome_lose.match_bots { display: table-row; } `;
            } else if ( filter_matchType == "callToArms" ) {
                style_text += `.outcome_lose.match_callToArms { display: table-row; } `;
            } else if ( filter_matchType == "expConstructed" ) {
                style_text += `.outcome_lose.match_expertC { display: table-row; } `;
            } else if ( filter_matchType == "exppd" ) {
                style_text += `.outcome_lose.match_expertPD { display: table-row; } `;
            } else if ( filter_matchType == "expkd" ) {
                style_text += `.outcome_lose.match_expertKD { display: table-row; } `;
            } else if ( filter_matchType == "constructed" ) {
                style_text += `.outcome_lose.match_contructed { display: table-row; } `;
            } else if ( filter_matchType == "pd" ) {
                style_text += `.outcome_lose.match_phantomDraft { display: table-row; } `;
            }
        } 
        else 
        {
            if( filter_matchType == "matchmaking" ) {
                style_text += `.match_matchmaking { display: table-row; } `;
            } else if ( filter_matchType == "botMatch") {
                style_text += `.match_bots { display: table-row; } `;
            } else if ( filter_matchType == "callToArms" ) {
                style_text += `.match_callToArms { display: table-row; } `;
            } else if ( filter_matchType == "expConstructed" ) {
                style_text += `.match_expertC { display: table-row; } `;
            } else if ( filter_matchType == "exppd" ) {
                style_text += `.match_expertPD { display: table-row; } `;
            } else if ( filter_matchType == "expkd" ) {
                style_text += `.match_expertKD { display: table-row; } `;
            } else if ( filter_matchType == "constructed" ) {
                style_text += `.match_contructed { display: table-row; } `;
            } else if ( filter_matchType == "pd" ) {
                style_text += `.match_phantomDraft { display: table-row; } `;
            }    
            else {
                style_text += `.match_matchmaking { display: table-row; } `;
                style_text += `.match_bots { display: table-row; } `;
                style_text += `.match_unknown { display: table-row; } `;
                style_text += `.match_callToArms { display: table-row; } `;
                style_text += `.match_expertC { display: table-row; } `;
                style_text += `.match_expertPD { display: table-row; } `;
                style_text += `.match_expertKD { display: table-row; } `;
                style_text += `.match_contructed { display: table-row; } `;
                style_text += `.match_phantomDraft { display: table-row; } `;
            }     
        }

        $("#filter_style").text(style_text);
        setStats(allMatches);
    };
    regenerate_style();

    /* Sort for Wins/Losses */
    $("input[name=filter_outcome]").click(function () {
        const val = $(this).val();
        filter_outcome = val;
        $(this).parent().parent().children().removeClass("active");
        $(this).parent().addClass("active");
        regenerate_style();
    });

    $("input[name=filter_matchType]").click(function () {
        const val = $(this).val();
        filter_matchType = val;
        console.log(filter_matchType);
        $(this).parent().parent().children().removeClass("active");
        $(this).parent().addClass("active");
        regenerate_style();
    });

    if (location.hash && location.hash !== "#") 
    {
        const $output = $("#output");
        $(".hideondata").hide();
        $output.show();
        const raw_data = location.hash.substring(1);
        const data = raw_data.split(",");
        const decoded = decodeURI(data[0]);
        const name = decoded.split('|')[1];
        $("#output_title").append(`<h2>${name}'s game history</h2>`);
        const $table = $(`<table class="table table-striped table-sm"></table>`);
        const $tbody = $(`<tbody></table>`);
        $("#output_data").append($table);
        $table.append($tbody);

        let last_row_id = "";

        const modeToDisplayName = (mode) => {
            switch(mode){
                case "2":
                    return "Matchmaking";
                case "3":
                    return "Gauntlet";
                case "8":
                    return "Bot Match"
                default:
                    return "Unknown";
            }
        }

        const getTowerImg = (towerHealth) => {
            return towerHealth === "0" ? "images/tower_destroyed.png" :"images/tower.png";
        }

        const getHeroIcon = (heroName) => {
            if(heroName === ""){
                return "images/unknown_hero.png";
            } else {
                return "images/unknown_hero.png";
            }
        }

        const getGauntletMode = (gauntletType) => {
            switch(gauntletType){
                case "0":
                    return null;
                case "5":
                    return "Call to Arms";
                case "7":
                    return "Expert Constructed";
                case "8":
                    return "Expert Phantom's Draft";
                case "9":
                    return "Expert Keeper's Draft";
                case "10":
                    return "Constructed";
                case "11":
                    return "Casual Phantom Draft";
                default:
                    return null;
            }
        }

        const getFlagsToName = (flags) => {
            switch(flags){
                case "0":
                    return null;
                case "1":
                    return "Surrendered";
                case "2":
                    return "Abandoned";
                default:
                    return null;
            }
        }

        const teamToName = (team) => {
            switch(team)
            {
                case "0":
                    return "Radiant";
                case "1":
                    return "Dire";
                default:
                    return null;
            }
        }

        const timeToDisplay = (totalSeconds) => {
            let tSeconds = parseInt(totalSeconds);
            if(tSeconds == 0)
                return "0 seconds";
            
            let minutesDiv = Math.floor(tSeconds / 60);
            tSeconds -= (minutesDiv * 60);

            return `${minutesDiv} min(s) ${tSeconds} sec(s)`;
        }

        // Populate a row with the data
        const create_row = (data) => {
            const {
                match_id,
                account_id,
                match_mode,
                duration,
                server_version,
                match_outcome,
                total_turns,
                start_time,
                cluster_id,
                team,
                flags,
                tower1,
                tower2,
                tower3,
                ancient,
                game_clock,
                hero_1,
                hero_2,
                hero_3,
                hero_4,
                hero_5,
                gauntlet_type,
                deck_code,
            } = data;
            
            // If last match matches current, skip data
            if(last_row_id === match_id){
                return;
            }

            var match = new Object();
            match.id = match_id;
            match.mode = match_mode;
            match.startTime = start_time;
            match.duration = duration;
            match.serverVersion = server_version;
            match.outcome = match_outcome;
            match.totalTurns = total_turns;
            match.startTime = start_time;
            match.team = team;
            match.flags = flags;
            match.tower1 = tower1;
            match.tower2 = tower2;
            match.tower3 = tower3;
            match.ancient = ancient;
            match.gameClock = game_clock;
            match.hero1 = hero_1;
            match.hero2 = hero_2;
            match.hero3 = hero_3;
            match.hero4 = hero_4;
            match.hero5 = hero_5;
            match.gauntletType = gauntlet_type;
            match.deckCode = deck_code;

            /*Add to list*/
            allMatches.push(match);

            let accountName = decodeURI(account_id);
            let matchMode = modeToDisplayName(match_mode);
            let startTime = decodeURI(start_time);
            
            /* Set win or loss*/
            let outcomeClass = match_outcome == team ? "winDiv" : "loseDiv";
            
            /*Get Gauntlet Mode display name & HTML*/
            let gauntletMode = getGauntletMode(gauntlet_type);
            let gauntletModeHtml = gauntletMode != null ? `<div>${gauntletMode}</div>` : "";
            
            /*Determine if game was surrendered or not*/
            let flagsDisplayName = getFlagsToName(flags);
            let flagsHtml = flagsDisplayName != null ? `<div style="color:red;">${flagsDisplayName}</div>` : "";

            /* Set the right images for towers and ancient*/
            let towerOneImg = getTowerImg(tower1);
            let towerTwoImg = getTowerImg(tower2);
            let towerThreeImg = getTowerImg(tower3);
            let ancientImg = ancient === "0" ? "images/ancient_destroyed.png" : "images/ancient.png";

            /* Get hero icons for heroes*/
            let heroOneIcon = getHeroIcon(hero_1);
            let heroTwoIcon = getHeroIcon(hero_2);
            let heroThreeIcon = getHeroIcon(hero_3);
            let heroFourIcon = getHeroIcon(hero_4);
            let heroFiveIcon = getHeroIcon(hero_5);

            let teamName = teamToName(team);
            let totalTime = timeToDisplay(game_clock);

            const col1 = (`<td class="align-middle"><div class="${outcomeClass}"/></td>`);
            const col2 = (`<td class="align-middle"><div class="text-left"><div>${match_id}</div><div>${matchMode}</div>${gauntletModeHtml}</div></td>`);
            /*Correctly align the first section if there's the flag text*/
            let col3align = flagsDisplayName != null ? "vertical-align:0%;" : "vertical-align:50%;";
            const col3 = (`<td class="align-middle">
            <div class="buildingContainer">
            <div class="element text-left" style="margin-right:5px;${col3align}">
                ${accountName}
                <br/> 
                ${startTime}
                ${flagsHtml}
            </div>
            <div class="element text-left" style="margin-right:5px;vertical-align:50%;">
                Team: ${teamName}
                <br/>
                Duration: ${duration}
            </div>
            <div class="element text-left" style="margin-right:5px;vertical-align:50%;">
                Turns: ${total_turns}
                <br/>
                Turn Time Left: ${totalTime}
            </div>
            </div>
            
          </td>`);

            const col4 = (`<td class="align-middle"><div class="buildingContainer text-center align-middle"><div class="element "><img src="${towerOneImg}" id="bElement" /> <p id="bElementText">${tower1}</p> </div> <div class="element"> <img src="${towerTwoImg}" id="bElement" /> <p id="bElementText">${tower2}</p> </div> <div class="element"> <img src="${towerThreeImg}" id="bElement" /> <p id="bElementText">${tower3}</p> </div> <div class="element"> <img src="${ancientImg}" id="bElement" /> <p id="bElementText">${ancient}</p> </div></div></td>`);
            const col5 = (`<td class="align-middle"><div class="buildingContainer text-center align-middle"><img src="${heroOneIcon}" id="heroIcon"/> <img src="${heroTwoIcon}" id="heroIcon"/> <img src="${heroThreeIcon}" id="heroIcon"/> <img src="${heroFourIcon}" id="heroIcon"/> <img src="${heroFiveIcon}" id="heroIcon" /></div></td>`);
            let summary_list = [];
            
            let summary = summary_list.join("<br />");

            let class1 = "outcome_unknown";
            if (match_outcome == team) {
                class1 = "outcome_win";
            } else if (match_outcome != team){
                class1 = "outcome_lose";
            }

            let class2 = "match_unknown";
            if ( match_mode == 2 ) {
                class2 = "match_matchmaking";
            } else if ( match_mode == 8 ) {
                class2 = "match_bots";
            } else if ( match_mode == 3 ) {
                if ( gauntlet_type == 5 ) {
                    class2 = "match_callToArms";
                } else if ( gauntlet_type == 7 ) {
                    class2 = "match_expertC";
                } else if ( gauntlet_type == 8 ) {
                    class2 = "match_expertPD";
                } else if ( gauntlet_type == 9 ) {
                    class2 = "match_expertKD";
                } else if( gauntlet_type == 10 ) {
                    class2 = "match_contructed";
                } else if ( gauntlet_type == 11 ) {
                    class2 = "match_phantomDraft";
                }
            }

            const $tr = $(`<tr class="match_row ${class1} ${class2}"></tr>`);
            const $col1 = $(col1);
            const $col2 = $(col2);
            const $col3 = $(col3);
            const $col4 = $(col4);
            const $col5 = $(col5);

            $tr.append($col1);
            $tr.append($col2);
            $tr.append($col3);
            $tr.append($col4);
            $tr.append($col5);

            last_row_id = match_id;
            last_row_elem = $tr;
            $tbody.append($tr);
        };

        const formatDuration = (seconds) => {
            let leftover = seconds;
            let output = "";
            if (leftover > 3600) {
                output += Math.floor(leftover / 3600) + ":";
                leftover = leftover % 3600;
            }
            let minute = Math.floor(leftover / 60);
            let second = leftover % 60;
            if (minute < 10) minute = `0${minute}`;
            if (second < 10) second = `0${second}`;
            output += `${minute}:${second}`;
            return output;
        };

        const processHistory = (row, i) => 
        {
            if (!row) 
            {
                if (i < data.length - 1) 
                {
                    setTimeout(() => {
                        processHistory(data[i + 1], i + 1);
                    }, 1); // throttle to 1 request/sec
                } 
                else 
                {
                    $("#loading").hide();
                }
                return;
            }

            /*Parse a row of data into vars*/
            const parsed_row = row.split("|");
            const match_id = parsed_row[0];
            const account_id = parsed_row[1];
            const match_mode = parsed_row[2];
            const duration = parsed_row[3];
            const server_version = parsed_row[4];
            const match_outcome = parsed_row[5];
            const total_turns = parsed_row[6];
            const start_time = parsed_row[7];
            const cluster_id = parsed_row[8];
            const team = parsed_row[9];
            const flags = parsed_row[10];
            const tower1 = parsed_row[11];
            const tower2 = parsed_row[12];
            const tower3 = parsed_row[13];
            const ancient = parsed_row[14];
            const game_clock = parsed_row[15];
            const hero_1 = parsed_row[16];
            const hero_2 = parsed_row[17];
            const hero_3 = parsed_row[18];
            const hero_4 = parsed_row[19];
            const hero_5 = parsed_row[20];
            const gauntlet_type = parsed_row[21];
            const deck_code = parsed_row[22];

            if (isNaN(parseInt(match_id))) {
                return;
            }

            create_row({
                    match_id,
                    account_id,
                    match_mode,
                    duration,
                    server_version,
                    match_outcome,
                    total_turns,
                    start_time,
                    cluster_id,
                    team,
                    flags,
                    tower1,
                    tower2,
                    tower3,
                    ancient,
                    game_clock,
                    hero_1,
                    hero_2,
                    hero_3,
                    hero_4,
                    hero_5,
                    gauntlet_type,
                    deck_code,
                });
        }

        const processData = (data) => {
            for(var i = 0; i < data.length; i++){
                processHistory(data[i], i);
            }
        }

        processData(data);
        /*Regen style and stats after finished*/
        regenerate_style();
    }
});
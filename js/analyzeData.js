$(() => {
    /*Select all script text when selecting text area*/
    $("#script_box").click(() => {
        $("#script_box").select();
    });

    $("#btnExampleData").click(() => {
        var data = "212256|JoshLmao|8|00:14:00|250|-1|4|23/01/2019 12:04:56|155|0|0|0|0|16|5|734|Legion Commander|Pugna|Axe|Meepo|Crystal Maiden|7|ADCJbIGJ7kCwgSNScMFeF0CrN0BhmQBpQEmAQNBEiMBjbEBoAGtAUtCIEVjb24_,599661|JoshLmao|3|00:23:00|250|1|6|23/01/2019 12:04:58|155|0|0|0|0|24|78|687|Abaddon|Ogre Magi|Mazzie|Earthshaker|Magnus|10|ADCJbIGJ7kCwgSNScMFeF0CrN0BhmQBpQEmAQNBEiMBjbEBoAGtAUtCIEVjb24_,371883|JoshLmao|3|00:12:00|250|-1|3|23/01/2019 12:05:10|155|0|0|0|0|6|15|740|Viper|Storm Spirit|Crystal Maiden|Abaddon|Luna|5|ADCJbIGJ7kCwgSNScMFeF0CrN0BhmQBpQEmAQNBEiMBjbEBoAGtAUtCIEVjb24_,917283|JoshLmao|2|00:20:00|250|0|3|23/01/2019 12:05:26|155|0|0|38|35|31|80|450|Bloodseeker|Chen|Mazzie|Enchantress|Farvhan the Dreamer|5|ADCJbIGJ7kCwgSNScMFeF0CrN0BhmQBpQEmAQNBEiMBjbEBoAGtAUtCIEVjb24_,279439|JoshLmao|8|00:20:00|250|-1|0|23/01/2019 12:05:26|155|0|0|0|0|24|37|568|Earthshaker|Keefe the Bold|Sven|Sorla Khan|Prellex|0|ADCJbIGJ7kCwgSNScMFeF0CrN0BhmQBpQEmAQNBEiMBjbEBoAGtAUtCIEVjb24_,395706|JoshLmao|8|00:10:00|250|0|6|23/01/2019 12:05:26|155|0|0|4|39|16|80|797|Timbersaw|Dark Seer|Ursa|Chen|Crystal Maiden|11|ADCJbIGJ7kCwgSNScMFeF0CrN0BhmQBpQEmAQNBEiMBjbEBoAGtAUtCIEVjb24_,667821|JoshLmao|8|00:12:00|250|1|2|23/01/2019 12:05:26|155|0|0|0|0|4|36|680|Tinker|Sorla Khan|Dark Seer|Winter Wyvern|Farvhan the Dreamer|10|ADCJbIGJ7kCwgSNScMFeF0CrN0BhmQBpQEmAQNBEiMBjbEBoAGtAUtCIEVjb24_,163111|JoshLmao|8|00:27:00|250|0|7|23/01/2019 12:05:26|155|0|0|8|23|37|80|469|Lion|Axe|Sniper|Drow Ranger|Drow Ranger|9|ADCJbIGJ7kCwgSNScMFeF0CrN0BhmQBpQEmAQNBEiMBjbEBoAGtAUtCIEVjb24_,53104|JoshLmao|2|00:25:00|250|0|6|23/01/2019 12:05:26|155|0|0|0|4|8|17|105|Bounty Hunter|Debbi the Cunning|Axe|Storm Spirit|Kanna|10|ADCJbIGJ7kCwgSNScMFeF0CrN0BhmQBpQEmAQNBEiMBjbEBoAGtAUtCIEVjb24_,165634|JoshLmao|2|00:20:00|250|0|1|23/01/2019 12:05:26|155|0|0|33|12|12|80|412|Skywrath Mage|Treant Protector|Tinker|Crystal Maiden|Luna|11|ADCJbIGJ7kCwgSNScMFeF0CrN0BhmQBpQEmAQNBEiMBjbEBoAGtAUtCIEVjb24_,85726|JoshLmao|2|00:15:00|250|1|6|23/01/2019 12:05:26|155|0|0|0|0|26|24|18|Venomancer|Axe|Zeus|Bounty Hunter|Lion|10|ADCJbIGJ7kCwgSNScMFeF0CrN0BhmQBpQEmAQNBEiMBjbEBoAGtAUtCIEVjb24_,925975|JoshLmao|2|00:05:00|250|-1|8|23/01/2019 12:05:26|155|0|0|0|0|4|66|668|Lich|Drow Ranger|Axe|Bristleback|Skywrath Mage|5|ADCJbIGJ7kCwgSNScMFeF0CrN0BhmQBpQEmAQNBEiMBjbEBoAGtAUtCIEVjb24_,182876|JoshLmao|2|00:05:00|250|-1|9|23/01/2019 12:05:26|155|0|0|0|0|10|40|422|Skywrath Mage|Sniper|Meepo|Ogre Magi|Beastmaster|0|ADCJbIGJ7kCwgSNScMFeF0CrN0BhmQBpQEmAQNBEiMBjbEBoAGtAUtCIEVjb24_,682753|JoshLmao|2|00:25:00|250|0|6|23/01/2019 12:05:26|155|0|0|6|0|17|53|666|Kanna|Sniper|Viper|Skywrath Mage|Lycan|10|ADCJbIGJ7kCwgSNScMFeF0CrN0BhmQBpQEmAQNBEiMBjbEBoAGtAUtCIEVjb24_,72378|JoshLmao|8|00:04:00|250|-1|8|23/01/2019 12:05:26|155|0|0|0|0|36|37|263|J'Muy the Wise|Kanna|Storm Spirit|Bloodseeker|Viper|8|ADCJbIGJ7kCwgSNScMFeF0CrN0BhmQBpQEmAQNBEiMBjbEBoAGtAUtCIEVjb24_";
        window.location = window.location + "#" + data;
        refreshData();
    })

    $("#btnResetData").click(() => {
        window.location.href = "https://artifacthistory.joshlmao.com";
    });

    let filter_outcome = "all";
    let filter_matchType = "all";
    let allMatches = [];
    let last_row_id = "";
    const $tbody = $(`<tbody></table>`);;

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

        var allCTA = statistics.getGauntletTypeGames(currentMatches, "5");
        var allCTAwr = statistics.getGauntletTypeWinRate(allCTA, "5");
        setStat("#life_totalCTA", allCTA.length);
        setStat("#life_totalCTAWR", allCTAwr);

        var allConst = statistics.getGauntletTypeGames(currentMatches, "10");
        var allConstwr = statistics.getGauntletTypeWinRate(allConst, "10");
        setStat("#life_totalConst", allConst.length);
        setStat("#life_totalConstWR", allConstwr);

        var allPD = statistics.getGauntletTypeGames(currentMatches, "11");
        var allPDwr = statistics.getGauntletTypeWinRate(allPD, "11");
        setStat("#life_totalPD", allPD.length);
        setStat("#life_totalPDWR", allPDwr);

        var allEConst = statistics.getGauntletTypeGames(currentMatches, "7");
        var allEConstWR = statistics.getGauntletTypeWinRate(allEConst, "7");
        setStat("#life_totalEConst", allEConst.length);
        setStat("#life_totalEConstWR", allEConstWR);

        var allEPD = statistics.getGauntletTypeGames(currentMatches, "8");
        var allEPDWR = statistics.getGauntletTypeWinRate(allEPD, "8");
        setStat("#life_totalEPD", allEPD.length);
        setStat("#life_totalEPDWR", allEPDWR);

        var allKD = statistics.getGauntletTypeGames(currentMatches, "9");
        var allKDWR = statistics.getGauntletTypeWinRate(allKD, "9");
        setStat("#life_totalKD", allKD.length);
        setStat("#life_totalKDWR", allKDWR);

        var allRadiant = statistics.getTeamGames(currentMatches, "0");
        var rWR = statistics.getTotalWinRate(allRadiant);
        setStat(`#life_rGames`, allRadiant.length);
        setStat(`#life_rWR`, rWR);

        var allDire = statistics.getTeamGames(currentMatches, "1");
        var dWR = statistics.getTotalWinRate(allDire);
        setStat(`#life_dGames`, allDire.length);
        setStat(`#life_dWR`, dWR); 
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
            } else {
                style_text += `.outcome_win.match_matchmaking { display: table-row; } `;
                style_text += `.outcome_win.match_bots { display: table-row; } `;
                style_text += `.outcome_win.match_unknown { display: table-row; } `;
                style_text += `.outcome_win.match_callToArms { display: table-row; } `;
                style_text += `.outcome_win.match_expertC { display: table-row; } `;
                style_text += `.outcome_win.match_expertPD { display: table-row; } `;
                style_text += `.outcome_win.match_expertKD { display: table-row; } `;
                style_text += `.outcome_win.match_contructed { display: table-row; } `;
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
            } else {
                style_text += `.outcome_lose.match_matchmaking { display: table-row; } `;
                style_text += `.outcome_lose.match_bots { display: table-row; } `;
                style_text += `.outcome_lose.match_unknown { display: table-row; } `;
                style_text += `.outcome_lose.match_callToArms { display: table-row; } `;
                style_text += `.outcome_lose.match_expertC { display: table-row; } `;
                style_text += `.outcome_lose.match_expertPD { display: table-row; } `;
                style_text += `.outcome_lose.match_expertKD { display: table-row; } `;
                style_text += `.outcome_lose.match_contructed { display: table-row; } `;
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
            } else {
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
        $(this).parent().parent().children().removeClass("active");
        $(this).parent().addClass("active");
        regenerate_style();
    });

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
        return towerHealth === "0" ? "images/tower_destroyed.png" : "images/tower.png";
    }

    const getHeroIcon = (heroName) => {
        if(heroName == "" || heroName == 0 || heroName === null || !heroName || heroName == undefined){
            return "images/unknown_hero.png";
        } else {
            var clean = heroName.replace(/%20/g, ' ');
            for ( var i = 0; i < heroesMap.heroesMap.length; i++ ) {
                if ( heroesMap.heroesMap[i].HeroName === clean ) {
                    return heroesMap.heroesMap[i].Url;
                }
            }
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
        let gauntletModeHtml = gauntletMode != null && match_mode == 3 ? `<div >${gauntletMode}</div>` : "";
        
        /*Determine if game was surrendered or not*/
        let flagsDisplayName = getFlagsToName(flags);
        let flagsHtml = flagsDisplayName != null ? `<div style="color:red;">${flagsDisplayName}</div>` : "";

        /* Set the right images for towers and ancient*/
        let towerOneImg = getTowerImg(tower1);
        let towerTwoImg = getTowerImg(tower2);
        let towerThreeImg = getTowerImg(tower3);
        let ancientImg = ancient === "0" ? "images/ancient_destroyed.png" : "images/ancient.png";

        /* Get hero icons for heroes*/
        var heroOneIcon, heroTwoIcon, heroThreeIcon, heroFourIcon, heroFiveIcon;
        if(hero_1)
            heroOneIcon = getHeroIcon(hero_1);
        if(hero_2)
            heroTwoIcon = getHeroIcon(hero_2);
        if(hero_3)
            heroThreeIcon = getHeroIcon(hero_3);
        if(hero_4)
            heroFourIcon = getHeroIcon(hero_4);
        if(hero_5)
            heroFiveIcon = getHeroIcon(hero_5);

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

    const processHistory = (row, i) => 
    {
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

    const refreshData = () => {
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
            $("#output_data").append($table);
            $table.append($tbody);
    
            processData(data);
            /* Hide the loading text*/
            $("#loading").hide();
            /*Regen style and stats after finished*/
            regenerate_style();
        }
    }

    refreshData();
});
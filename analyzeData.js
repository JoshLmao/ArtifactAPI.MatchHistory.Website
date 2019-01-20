$(() => {
    /*Select all script text when selecting text area*/
    $("#script_box").click(() => {
        $("#script_box").select();
    });

    let filter_outcome = "all";

    const regenerate_style = () => {

        let style_text = ".match_row { display: none; } ";
        
        if (filter_outcome === "win") {
            style_text += `.outcome_win { display: table-row; } `;
        } else if (filter_outcome === "lose") {
            style_text += `.outcome_lose { display: table-row; } `;
        } else {
            style_text += `.data_unknown { display: table-row; } `;
            style_text += `.outcome_unknown { display: table-row; } `;
            style_text += `.outcome_win { display: table-row; } `;
            style_text += `.outcome_lose { display: table-row; } `;
        }
        
        $("#filter_style").text(style_text);
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

    // clear broken data
    for (let key in localStorage) {
        if (key.startsWith("match-")) localStorage.removeItem(key);
    }

    if (location.hash && location.hash !== "#") 
    {
        const $output = $("#output");
        $(".hideondata").hide();
        $output.show();
        const raw_data = location.hash.substring(1);
        const data = raw_data.split(",");
        const decoded = decodeURI(data[0]);
        const name = decoded.split('|')[1];
        $("#output_title").append(`<h2>${name}'s reported data</h2>`);
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

            const $tr = $(`<tr class="match_row ${class1}"></tr>`);
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
            last_row_summary = $col3;
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
                // debugger;
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

            setTimeout(() => { 
                processHistory(data[i + 1], i + 1); 
            }, 1);
        }

        // debugger;
        processHistory(data[0], 0);
    }
});
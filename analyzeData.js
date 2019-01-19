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
        let last_row_elem = null;
        let last_row_summary = null;

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

            const outcome_el = match_outcome == team ? '<span class="win ml-1 font-weight-bold">WIN</span>' : '<span class="lose ml-1 font-weight-bold">LOSE</span>';

            const col1 = (`<td class="match text-right"><a href="https://www.opendota.com/matches/${match_id}" target="_blank">${match_id}</a> ${outcome_el}<br /><span class="gamemode mr-1">${match_mode}</span><span class="duration mr-1">${duration}</span><a class="opendota" href="https://www.opendota.com/matches/${match_id}" target="_blank">&lt;/&gt;</a> <a class="dotabuff" href="https://www.dotabuff.com/matches/${match_id}" target="_blank">D</a> <a class="stratz" href="https://stratz.com/en-us/match/${match_id}" target="_blank">⇑</a><br />${start_time}</td>`);
            const col2 = (`<td class="icon pb-1 text-center"><img class="mb-1 mt-1" src="${hero_1}" height="30"><br /><span class="score_k">${tower1}</span><span class="kda_spacer">/</span><span class="score_d">${tower2}</span><span class="kda_spacer">/</span><span class="score_a">${tower3}</span></td>`);
            let summary_list = [];
            
            let summary = summary_list.join("<br />");
            const col3 = (`<td class="summary">${match_id}</td>`);

            let class1 = "outcome_unknown";
            if (match_outcome == team) {
                class1 = "outcome_win";
            } else if (match_outcome != team){
                class1 = "outcome_lose";
            }

            class2 = "data_unknown";

            if (false) {
                last_row_summary.append("<hr />");
                last_row_summary.append(summary);
                last_row_elem.addClass(class1);
                last_row_elem.addClass(class2);
            } else {
                const $tr = $(`<tr class="match_row ${class1} ${class2}"></tr>`);
                const $col1 = $(col1);
                const $col2 = $(col2);
                const $col3 = $(col3);
                $tr.append($col1);
                $tr.append($col2);
                $tr.append($col3);
                last_row_id = match_id;
                last_row_elem = $tr;
                last_row_summary = $col3;
                $tbody.append($tr);
            }
            
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
            const accountId = parsed_row[1];
            const matchMode = parsed_row[2];
            const duration = parsed_row[3];
            const serverVersion = parsed_row[4];
            const matchOutcome = parsed_row[5];
            const totalTurns = parsed_row[6];
            const startTime = parsed_row[7];
            const clusterId = parsed_row[8];
            const team = parsed_row[9];
            const flags = parsed_row[10];
            const tower1 = parsed_row[11];
            const tower2 = parsed_row[12];
            const tower3 = parsed_row[13];
            const ancient = parsed_row[14];
            const gameClock = parsed_row[15];
            const hero1 = parsed_row[16];
            const hero2 = parsed_row[17];
            const hero3 = parsed_row[18];
            const hero4 = parsed_row[19];
            const hero5 = parsed_row[20];
            const gauntletType = parsed_row[21];
            const deckCode = parsed_row[22];

            if (isNaN(parseInt(match_id))) {
                return;
            }

            create_row({
                    match_id,
                    matchMode,
                    duration,
                    serverVersion,
                    matchOutcome,
                    totalTurns,
                    startTime,
                    clusterId,
                    team,
                    flags,
                    tower1,
                    tower2,
                    tower3,
                    ancient,
                    gameClock,
                    hero1,
                    hero2,
                    hero3,
                    hero4,
                    hero5,
                    gauntletType,
                    deckCode,
                });

            setTimeout(() => { 
                processHistory(data[i + 1], i + 1); 
            }, 1);
        }

        // debugger;
        processHistory(data[0], 0);
    }
});
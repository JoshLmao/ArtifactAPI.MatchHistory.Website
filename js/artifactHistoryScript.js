﻿(() => {
    let matchIds = [];
    /*Modified script from https://illuminate.dotasphere.com/*/
    const read_data = () => {
        const player_name = document.getElementsByClassName("profile_small_header_name")[0].children[0].textContent;
        const row_list = document.getElementById("personaldata_elements_container").querySelectorAll("tr");
        let all_output = "";
        for (let i = 1; i < row_list.length; i++) {
            const col_list = row_list[i].querySelectorAll("td");
            let output = "";
            for (let j = 0; j < col_list.length; j++) {
                /*Skip adding duplicate match Id's*/
                if(j == 0){
                    if(!matchIds.includes(col_list[j].textContent)){
                        matchIds.push(col_list[j].textContent);
                    } else {
                        break;
                    }
                }
                output += col_list[j].textContent + (j == col_list.length - 1 ? "" : "|");
            }
            if(output != "")
                all_output += output + (i == row_list.length - 1 ? "" : ",");
        }
        window.location = "https://artifacthistory.joshlmao.com/#" + all_output;
    };
    const b1 = document.getElementById("load_more_button");
    const b2 = document.getElementById("inventory_history_loading");
    const has_more = () => {
        return (b1 && b1.style.display !== "none") || (b2 && b2.style.display !== "none");
    };
    const has_load_more = () => b1 && b1.style.display !== "none";
    const load_more = () => b1.click();
    const watch_load_more = () => {
        const interval = setInterval(() => {
            if (has_load_more()) {
                load_more();
            } else {
                if (!has_more()) {
                    clearInterval(interval);
                    console.log(`done`);
                    read_data();
                }
            }
        }, 100);
    };

    const b3 = document.getElementById("personaldata_elements_container");
    const h1 = document.createElement("h1");
    const h1text = document.createTextNode("Loading more data ");
    const h1spinner = document.createElement("img");
    h1spinner.src = "https://steamcommunity-a.akamaihd.net/public/images/login/throbber.gif";
    h1.appendChild(h1text);
    h1.appendChild(h1spinner);
    b3.insertBefore(h1, b3.childNodes[0]);
    watch_load_more();
})()

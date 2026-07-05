// ===============================
// World Cup Live - script.js
// ===============================

// Loading Animation
window.addEventListener("load", () => {

    document.querySelectorAll(".card").forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = "0.6s ease";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 150);

    });

});

// Demo Data
const matches = [

    {
        home: "Argentina",
        away: "Brazil",
        homeFlag: "https://flagcdn.com/w80/ar.png",
        awayFlag: "https://flagcdn.com/w80/br.png",
        status: "🔴 LIVE"
    },

    {
        home: "France",
        away: "Spain",
        homeFlag: "https://flagcdn.com/w80/fr.png",
        awayFlag: "https://flagcdn.com/w80/es.png",
        status: "Today 20:00"
    },

    {
        home: "England",
        away: "Germany",
        homeFlag: "https://flagcdn.com/w80/gb.png",
        awayFlag: "https://flagcdn.com/w80/de.png",
        status: "Tomorrow"
    }

];

const news = [

    "🏆 FIFA confirms the latest World Cup schedule.",

    "⚽ Teams continue preparing for the knockout stage.",

    "🔥 Fans expect exciting matches this week."

];

// Load Matches
function loadMatches(){

    const container = document.getElementById("matches");

    container.innerHTML = "";

    matches.forEach(match=>{

        container.innerHTML += `

        <div class="match-card">

            <div class="team">

                <img src="${match.homeFlag}">

                <span>${match.home}</span>

            </div>

            <div class="score">

                <h3>VS</h3>

                <p>${match.status}</p>

            </div>

            <div class="team">

                <img src="${match.awayFlag}">

                <span>${match.away}</span>

            </div>

        </div>

        `;

    });

}

// Load News
function loadNews(){

    const container = document.getElementById("news");

    container.innerHTML = "";

    news.forEach(item=>{

        container.innerHTML += `

        <div class="news-item">

            ${item}

        </div>

        `;

    });

}

// Start
loadMatches();

loadNews();

// Button
const button = document.querySelector(".btn");

if(button){

button.addEventListener("click",()=>{

document.querySelector(".cards").scrollIntoView({

behavior:"smooth"

});

});

}

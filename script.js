// Simple loading animation
window.addEventListener("load", () => {
  document.querySelectorAll(".card").forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
      card.style.transition = "0.6s";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 150);
  });
});

// Demo data (سنستبدلها لاحقًا بالـ API الحقيقي)
const matches = [
  {
    home: "Argentina",
    away: "Brazil",
    status: "LIVE • 67'"
  },
  {
    home: "France",
    away: "Spain",
    status: "Today • 20:00 UTC"
  }
];

const news = [
  "FIFA announces the latest World Cup updates.",
  "Teams continue preparations for the knockout stage.",
  "Top scorers race is getting more exciting."
];

function loadMatches() {
  const box = document.getElementById("matches");

  box.innerHTML = "";

  matches.forEach(match => {
    box.innerHTML += `
      <div class="match">
        <strong>${match.home}</strong>
        <span>vs</span>
        <strong>${match.away}</strong>
        <br>
        <small>${match.status}</small>
      </div>
    `;
  });
}

function loadNews() {
  const box = document.getElementById("news");

  box.innerHTML = "";

  news.forEach(item => {
    box.innerHTML += `
      <div class="news-item">
        📰 ${item}
      </div>
    `;
  });
}

loadMatches();
loadNews();

// زر الصفحة الرئيسية
document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".cards").scrollIntoView({
    behavior: "smooth"
  });
});

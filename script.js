// script.js
const fetchLiveScore = () => {
    const matchData = {
        title: "India vs Australia - 2nd T20",
        score: "India 178/4 (18.5 ov)",
        status: "Need 20 runs in 7 balls",
        batting: [
            { name: "Virat Kohli", r: 54, b: 35, fours: 6, sixes: 1 },
            { name: "Suryakumar Yadav", r: 28, b: 15, fours: 2, sixes: 2 }
        ],
        bowling: [
            { name: "Mitchell Starc", o: 3.5, m: 0, r: 38, w: 2 },
            { name: "Adam Zampa", o: 4, m: 0, r: 26, w: 1 }
        ]
    };

    document.getElementById("matchTitle").textContent = matchData.title;
    document.getElementById("score").textContent = matchData.score;
    document.getElementById("status").textContent = matchData.status;
    document.getElementById("updatedTime").textContent = new Date().toLocaleTimeString();

    const battingTbody = document.getElementById("batting");
    battingTbody.innerHTML = "";
    matchData.batting.forEach(player => {
        battingTbody.innerHTML += `
        <tr>
          <td>${player.name}</td>
          <td>${player.r}</td>
          <td>${player.b}</td>
          <td>${player.fours}</td>
          <td>${player.sixes}</td>
        </tr>
      `;
    });

    const bowlingTbody = document.getElementById("bowling");
    bowlingTbody.innerHTML = "";
    matchData.bowling.forEach(player => {
        bowlingTbody.innerHTML += `
        <tr>
          <td>${player.name}</td>
          <td>${player.o}</td>
          <td>${player.m}</td>
          <td>${player.r}</td>
          <td>${player.w}</td>
        </tr>
      `;
    });
};

// Simulate update every 15s
fetchLiveScore();
setInterval(fetchLiveScore, 15000);

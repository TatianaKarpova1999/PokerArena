const players = [
    { name: "DarkPhoenix", score: 1200 },
    { name: "IronClaw", score: 1150 },
    { name: "GhostRogue", score: 1100 },
    { name: "ThunderStrike", score: 1050 },
    { name: "FrostByte", score: 1000 }
];

function updateLeaderboard() {
    players.forEach(player => {
        player.score += Math.floor(Math.random() * 50); // Simulate score change
    });
    players.sort((a, b) => b.score - a.score);
    
    const leaderboard = document.getElementById("leaderboard");
    leaderboard.innerHTML = `
        <div class="leaderboard-item leaderboard-header">
            <span>Rank</span>
            <span>Player</span>
            <span>Score</span>
        </div>
    `;
    players.forEach((player, index) => {
        const row = `<div class="leaderboard-item"><span>${index + 1}</span><span>${player.name}</span><span>${player.score}</span></div>`;
        leaderboard.innerHTML += row;
    });
}

setInterval(updateLeaderboard, 2000); // Update every 2 seconds
updateLeaderboard();
// rank.js
function displayRanks(data) {
    const resultsTable = document.getElementById('resultsTable');
    const resultsBody = document.getElementById('resultsBody');

    if (resultsTable && resultsBody) { // 要素が取得できたか確認
        resultsBody.innerHTML = ''; // テーブルの中身をクリア

        const headerRow = resultsTable.insertRow();
        headerRow.innerHTML = `
            <th>順位</th>
            <th>チーム名</th>
            <th>試合数</th>
            <th>勝</th>
            <th>分</th>
            <th>負</th>
            <th>得点</th>
            <th>失点</th>
            <th>得失点</th>
            <th>勝ち点</th>
        `;

        data.forEach(item => {
            const row = resultsBody.insertRow();
            row.innerHTML = `
                <td>${item.RANK}</td>
                <td>${item.TEAM_NAME}</td>
                <td>${item.GAME}</td>
                <td>${item.WIN}</td>
                <td>${item.DRAW}</td>
                <td>${item.LOSE}</td>
                <td>${item.GF}</td>
                <td>${item.GA}</td>
                <td>${item.GD}</td>
                <td>${item.POINTS}</td>
            `;
        });
    } else {
        console.error('Results table or body element not found.');
    }
}
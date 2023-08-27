// goal.js
function displayGoal(data) {
    const resultsTable = document.getElementById('resultsTable');
    const resultsBody = document.getElementById('resultsBody');

    if (resultsTable && resultsBody) { // 要素が取得できたか確認
        resultsBody.innerHTML = ''; // テーブルの中身をクリア

        const headerRow = resultsTable.insertRow();
        headerRow.innerHTML = `
            <th>順位</th>
            <th>選手名</th>
            <th>チーム名</th>
            <th>得点数</th>
        `;

        data.forEach(item => {
            const row = resultsBody.insertRow();
            row.innerHTML = `
                <td>${item.RANK_G}</td>
                <td>${item.NAME_G}</td>
                <td>${item.TEAM_NAME_G}</td>
                <td>${item.GOAL_NUM}</td>
            `;
        });
    } else {
        console.error('Results table or body element not found.');
    }
}

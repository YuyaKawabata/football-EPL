// assist.js
function displayAssist(data) {
    const resultsTable = document.getElementById('resultsTable');
    const resultsBody = document.getElementById('resultsBody');

    if (resultsTable && resultsBody) { // 要素が取得できたか確認
        resultsBody.innerHTML = ''; // テーブルの中身をクリア

        const headerRow = resultsTable.insertRow();
        headerRow.innerHTML = `
            <th>順位</th>
            <th>選手名</th>
            <th>チーム名</th>
            <th>アシスト数</th>
        `;

        data.forEach(item => {
            const row = resultsBody.insertRow();
            row.innerHTML = `
                <td>${item.RANK_A}</td>
                <td>${item.NAME}</td>
                <td>${item.TEAM_NAME}</td>
                <td>${item.ASSIST_NUM}</td>
            `;
        });
    } else {
        console.error('Results table or body element not found.');
    }
}

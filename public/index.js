document.addEventListener("DOMContentLoaded", () => {
  const SeasonSelect = document.getElementById("SeasonSelect");
  const GradesSelect = document.getElementById("GradesSelect");
  const results = document.getElementById('results');

  // シーズンの選択
  for (var season = 20; season < 23; season++) {
    var optionElement = document.createElement("option");
    optionElement.value = season.toString().padStart(2, '0') + "-" + (parseInt(season) + 1).toString().padStart(2, '0');
    optionElement.textContent = season.toString().padStart(2, '0') + "-" + (parseInt(season) + 1).toString().padStart(2, '0') + "シーズン";
    SeasonSelect.appendChild(optionElement);
  }
    
  // 成績の選択肢の生成
  var gradesOptions = [
    { value: "順位表", label: "順位表" },
    { value: "得点王", label: "得点王" },
    { value: "アシスト王", label: "アシスト王" },
    { value: "最優秀GK賞", label: "最優秀GK賞" },
    { value: "年間MVP", label: "年間MVP" },
    { value: "年間最優秀若手選手賞", label: "年間最優秀若手選手賞" }
  ];
  gradesOptions.forEach((option) => {
    var optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.textContent = option.label;
    GradesSelect.appendChild(optionElement);
  });

  // ボタンがクリックされたときの処理
  document.getElementById('searchButton').addEventListener('click', async () => {
    const value1 = SeasonSelect.value;
    const value2 = GradesSelect.value;
    
    if (value1 && value2) {
      try {
        const response = await fetch(`/api/data?value1=${value1}&value2=${value2}`);
        const data = await response.json();

        // 取得したデータを表示
        results.innerHTML = '';
        data.forEach(item => {
          const itemDiv = document.createElement('div');
          itemDiv.textContent = `ID: ${item.ID}, Column1: ${item.COLUMN1}, Column2: ${item.COLUMN2}`;
          results.appendChild(itemDiv);
        });
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      // 選択項目が両方選択されていない場合の処理
      results.innerHTML = 'Please select both options.';
    }
  });
});
  
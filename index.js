// CSVデータの読み込み
function loadCSV(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "gradesdata.csv");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText);
    }
  };
  xhr.send();
}

// データの表示
function displayData(season, grade) {
  loadCSV(function(csvData) {
    var lines = csvData.split("\n");
    var header = lines[0].split(",");
    var seasonIndex = header.indexOf(season);
    var gradeIndex = header.indexOf(grade);

    if (seasonIndex !== -1 && gradeIndex !== -1) {
      var result = "";
      for (var i = 1; i < lines.length; i++) {
        var data = lines[i].split(",");
        result += data[seasonIndex] + " " + data[gradeIndex] + "<br>";
      }
      document.getElementById("result1").innerHTML = result;
    } else {
      document.getElementById("result1").innerHTML = "データが見つかりませんでした。";
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  var selectElement1 = document.getElementById("SeasonSelect");
  var selectElement2 = document.getElementById("GradesSelect");

  // シーズンの選択
  for (var season = 10; season < 23; season++) {
    var optionElement = document.createElement("option");
    optionElement.value = season;
    optionElement.textContent = season.toString().padStart(2, '0') + "-" + (parseInt(season) + 1).toString().padStart(2, '0') + "シーズン";
    selectElement1.appendChild(optionElement);
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
  gradesOptions.forEach(function(option) {
    var optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.textContent = option.label;
    selectElement2.appendChild(optionElement);
  });

  selectElement1.addEventListener("change", function() {
    var selectedSeason = selectElement1.value;
    var selectedGrade = selectElement2.value;
    displayData(selectedSeason, selectedGrade);
  });

  selectElement2.addEventListener("change", function() {
    var selectedSeason = selectElement1.value;
    var selectedGrade = selectElement2.value;
    displayData(selectedSeason, selectedGrade);
  });
});
  
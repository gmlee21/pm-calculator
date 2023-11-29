function handleFile() {
    var input = document.getElementById('excelInput');
    var file = input.files[0];

    if (file) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var data = e.target.result;
        var workbook = XLSX.read(data, { type: 'binary' });
        var sheetName = workbook.SheetNames[0];
        var sheet = workbook.Sheets[sheetName];

        var table = XLSX.utils.sheet_to_html(sheet);
        document.getElementById('tableContainer').innerHTML = table;
      };

      reader.readAsBinaryString(file);
    } else {
      alert('Please select an Excel file.');
    }
  }

function goBack() {
    window.history.back();
}
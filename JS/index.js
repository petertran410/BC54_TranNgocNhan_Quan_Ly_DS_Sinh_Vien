var dssv = [];

const dssvLocal = "dssvLocal";
var dssvInJsonData = localStorage.getItem(dssvLocal);
if (dssvInJsonData == null) {
  console.log("Chưa có data");
} else {
  dssv = JSON.parse(dssvInJsonData);
  renderInfoSV(dssv);
}

function addSV() {
  var sv = addInfoSV();

  dssv.push(sv);
  console.log(dssv);
  renderInfoSV(dssv);

  var dssvInJsonData = JSON.stringify(dssv);
  localStorage.setItem(dssvLocal, dssvInJsonData);
}

function xoaSV(id) {
  var index;
  for (var i = 0; i < dssv.length; i++) {
    if (dssv[0] == id) {
      index = i;
    }
    dssv.splice(index, 1);
    renderInfoSV(dssv);
  }
}

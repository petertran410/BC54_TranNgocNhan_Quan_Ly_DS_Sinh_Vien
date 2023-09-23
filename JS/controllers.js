function addInfoSV() {
  const getValueSV = (elementId) => document.getElementById(elementId).value;
  const mssv = getValueSV("MSSV");
  const tenSV = getValueSV("TenSV");
  const emailSV = getValueSV("EmailSV");
  const passSV = getValueSV("PassSV");
  const diemToanSV = parseFloat(getValueSV("DiemToanSV"));
  const diemLySV = parseFloat(getValueSV("DiemLySV"));
  const diemHoaSV = parseFloat(getValueSV("DiemHoaSV"));
  const tinhDTB = (diemToanSV + diemLySV + diemHoaSV) / 3;

  const sv = new createSinhVienForm(
    mssv,
    tenSV,
    emailSV,
    passSV,
    diemToanSV,
    diemLySV,
    diemHoaSV,
    tinhDTB
  );

  return sv;
}

class createSinhVienForm {
  constructor(
    mssv,
    tenSV,
    passSV,
    emailSV,
    diemToanSV,
    diemLySV,
    diemHoaSV,
    tinhDTB
  ) {
    this.mssv = mssv;
    this.tenSV = tenSV;
    this.emailSV = emailSV;
    this.passSV = passSV;
    this.diemToanSV = diemToanSV;
    this.diemLySV = diemLySV;
    this.diemHoaSV = diemHoaSV;
    this.tinhDTB = tinhDTB;
  }
}

function renderInfoSV(dssv) {
  const renderOut = document.querySelector("#rendeInfoSV");
  let renderHTML = "";

  dssv.forEach((sv) => {
    renderHTML += `
      <tr>
        <td>${sv.mssv}</td>
        <td>${sv.tenSV}</td>
        <td>${sv.emailSV}</td>
        <td>${sv.tinhDTB}</td>
        <td>
          <button onclick="xoaSV('${sv.mssv}')" class='btn btn-danger'>Xoá</button>
          <button onclick="suaSV('${sv.mssv}')" class='btn btn-warning'>Sửa</button>
        </td>
      </tr>`;
  });

  renderOut.innerHTML = renderHTML;
}

function layThongTinTuForm() {
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var matKhau = document.getElementById("txtPass").value;
  var email = document.getElementById("txtEmail").value;
  var toan = document.getElementById("txtDiemToan").value;
  var ly = document.getElementById("txtDiemLy").value;
  var hoa = document.getElementById("txtDiemHoa").value;
  var sv = new sinhVien(ma, ten, matKhau, email, toan, ly, hoa);

  return sv;
}

class sinhVien {
  constructor(ma, ten, matKhau, email, toan, ly, hoa) {
    this.ma = ma;
    this.ten = ten;
    this.matKhau = matKhau;
    this.email = email;
    this.toan = toan;
    this.ly = ly;
    this.hoa = hoa;
    this.tinhDTB = function () {
      var dtb = (this.toan + this.ly + this.hoa) / 4;
      return dtb;
    };
  }
}

function renderDSSV(dssv) {
  const tbody = document.querySelector("#tbodySinhVien");
  let contentHTML = "";

  dssv.forEach((sv) => {
    contentHTML += `
      <tr>
        <td>${sv.ma}</td>
        <td>${sv.ten}</td>
        <td>${sv.email}</td>
        <td>0</td>
        <td>
          <button onclick="xoaSV('${sv.ma}')" class='btn btn-danger'>Xoá</button>
          <button onclick="suaSV('${sv.ma}')" class='btn btn-warning'>Sửa</button>
        </td>
      </tr>`;
  });

  tbody.innerHTML = contentHTML;
}

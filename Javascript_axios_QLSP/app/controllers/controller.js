function renderProductsList(productList) {
  var content = "";
  for (var i = 0; i < productList.length; i++) {
    var product = productList[i];
    var contentTr = `
        <tr>
            <td>${product.id}</td>
            <td>${product.tenSP}</td>
            <td>${product.giaSP}</td>
            <td>
                <img style="width: 300px; height: 150px" src="${product.hinhAnh}" alt="">
            </td>
            <td>${product.moTa}</td>
            <td>
                <button onclick="editProduct(${product.id})" class="btn btn-warning">Edit</button>
                <button onclick="deleteProduct(${product.id})" class="btn btn-danger">Delete</button>
            </td>
        </tr>
        `;

    content += contentTr;
  }

  //in ra danh sách giao diện
  document.querySelector("#tblDanhSachSP").innerHTML = content;
}

function retrieveInfor() {
  var tenSP = document.querySelector("#TenSP").value;
  var giaSP = document.querySelector("#GiaSP").value;
  var hinhAnh = document.querySelector("#HinhSP").value;
  var moTa = document.querySelector("#loaiSP").value;

  return new Product("", tenSP, giaSP, hinhAnh, moTa);
}

function fetchProductList() {
  axios({
    url: "https://6500589818c34dee0cd4c004.mockapi.io/test",
    method: "GET",
  })
    .then(function (res) {
      renderProductsList(res.data);
    })
    .catch(function (err) {
      console.log(err);
    });
}
fetchProductList();

//xóa SP
function deleteProduct(id) {
  axios({
    url: `https://6500589818c34dee0cd4c004.mockapi.io/test/${id}`,
    method: "DELETE",
  })
    .then(function (res) {
      //gọi lại api lấy lại tất cả sp trên server về sau khi xóa thành công để render danh sách mới nhất
      fetchProductList();
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
}

//thêm SP
function addProduct() {
  var product = retrieveInfor();
  axios({
    url: "https://6500589818c34dee0cd4c004.mockapi.io/test",
    method: "POST",
    data: product,
  })
    .then(function (res) {
      //cú pháp tắt modal của bootstrap
      $("#myModal").modal("hide");
      fetchProductList();
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
}

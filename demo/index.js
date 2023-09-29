//promise: giải quyết vấn đề callback hell
// Promise có 3 trạng thái: pending, resolve và reject
var sum = 10;
const promiseA = new Promise(function (resolve, reject) {
  // thực thi các tác vụ bất đồng bộ
  setTimeout(function () {
    if (sum > 10) {
      reject("fail");
    }
    resolve("pass");
  }, 2000);
});

const promiseB = function (param) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (param === "fail") {
        reject("test fail");
      }

      resolve("test pass");
    }, 1000);
  });
};

//đối tượng promise cung cấp 2 phương thức then() và catch()
//khi promise chạy thành công: trả kết quả ở then
//khi promise chạy thất bại: trả lỗi vào catch
promiseA
  .then(function (response) {
    console.log(response);
  })
  .catch(function (err) {
    console.log(err);
  });

axios({
  url: "https://6500589818c34dee0cd4c004.mockapi.io/test",
  method: "GET",
})
  .then(function (res) {
    console.log(res.data);
  })
  .catch(function (err) {
    console.log(err);
  });

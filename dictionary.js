let engArr = [
  "apple",
  "banana",
  "grape",
  "dog",
  "cat",
  "pig",
  "chicken",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];
let vietArr = [
  "Táo",
  "Chuối",
  "Nho",
  "Chó",
  "Mèo",
  "Lợn",
  "Gà",
  "Một",
  "Hai",
  "Ba",
  "Bốn",
  "Năm",
  "Sáu",
  "Bảy",
  "Tám",
  "Chín",
  "Mười",
];
let viet_word = "";

function trans() {
  console.log("called");
  let eng_word = document.getElementById("eng_word").value;
  eng_word = eng_word.toLowerCase();
  let index = engArr.indexOf(eng_word);

  if (index > -1) {
    viet_word = vietArr[index];
  } else {
    viet_word =
      "<span style='color:red'>Không tìm thấy từ trong từ điển</span>";
  }

  document.getElementById("viet_word").innerHTML = viet_word;
}

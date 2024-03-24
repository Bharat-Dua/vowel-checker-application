document.addEventListener("DOMContentLoaded", function () {
  const countButton = document.getElementById("countButton");
  countButton.addEventListener("click", checkVowels);
});

function checkVowels() {
  const text = document.getElementById("inputText").value.toLowerCase();
  const vowelCount = countVowels(text);
  const result = document.getElementById("result");
  result.textContent = "Total Vowels: " + vowelCount;
}

function countVowels(text) {
  const vowels = ["a", "e", "i", "o", "u"];
  return text.split("").filter((char) => vowels.includes(char)).length;
}

let Hindi = document.getElementById("Hindi");
let English = document.getElementById("English");
let Maths = document.getElementById("Maths");
let Science = document.getElementById("Science");
let Art = document.getElementById("Art");
let Computer = document.getElementById("Computer");
let Total = document.getElementById("Total");
let Percentage = document.getElementById("Percentage");
let Grade = document.getElementById("Grade");
let calculate = document.getElementById("calculate");

calculate.addEventListener("click", function () {
  let hi = Number(Hindi.value);
  let en = Number(English.value);
  let ma = Number(Maths.value);
  let sc = Number(Science.value);
  let ar = Number(Art.value);
  let co = Number(Computer.value);

  let add = [hi, en, ma, sc, ar, co];

  let tal = 0;

  for (let i = 0; i < add.length; i++) {
    tal = tal + add[i];
  }
  Total.innerText = tal;
  let per = (tal / 600) * 100 + "%";
  Percentage.innerText = per;

  if (tal >= 540) {
    Grade.innerText = "A+";
  } else if (tal >= 480) {
    Grade.innerText = "A";
  } else if (tal >= 420) {
    Grade.innerText = "B";
  } else if (tal >= 360) {
    Grade.innerText = "B";
  } else if (tal >= 300) {
    Grade.innerText = "C";
  } else if (tal >= 240) {
    Grade.innerText = "D";
  } else {
    Grade.innerText = "F";
  }
});

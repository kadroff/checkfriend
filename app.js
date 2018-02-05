var test = [   
  {
  question: "Что для тебя самое главное?",
  answers: {
      "Деньги": false,
      "Любовь": false,
      "Дети": false,
    }
  },

  {
  question: "Какой телефон тебе больше нравится?",
  answers: {
      "Iphone": false,
      "Samsung": false,
      "Xiaomi": false,
      }
  },

  {
  question: "Какой цвет тебе нравится?",
  answers: {
      "Белый": false,
      "Черный": false,
      "Синий": false,
      }
  }

]

var form = document.getElementById("#form");

for (var j = 0; j < 1; j++) {
  form.innerHTML += `<label>${test[j].question}</label><br>`;
  var answers = Object.keys(test[j].answers);

  for (var i = 0; i < answers.length; i++) {
    form.innerHTML += `<div><input type="radio" value=${test[j].answers[answers[i]]} name="question-${j}">${answers[i]}</div><br>`;
  }
}

document.getElementById("check").onclick = function() {
  
}
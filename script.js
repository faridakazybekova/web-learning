function checkTest(formId, answers) {
  const form = document.getElementById(formId);
  let score = 0;
  let total = answers.length;

  answers.forEach((_, index) => {
    const radios = form.elements['q' + (index + 1)];
    Array.from(radios).forEach(radio => radio.parentElement.classList.remove('correct','wrong'));
  });

  answers.forEach((answer, index) => {
    const radios = form.elements['q' + (index + 1)];
    let selected = Array.from(radios).find(r => r.checked)?.value;

    Array.from(radios).forEach(radio => {
      // Подсветка правильного ответа
      if (radio.value === answer) radio.parentElement.classList.add('correct');
    });

    // Подсветка неправильного ответа, если выбран неверный вариант
    if (selected && selected !== answer) {
      Array.from(radios).forEach(radio => {
        if (radio.value === selected) radio.parentElement.classList.add('wrong');
      });
    }

    if (selected === answer) score++;
  });

  const resultEl = document.getElementById(formId + '-result');
  resultEl.classList.add('result');
  resultEl.innerText = Ваш результат: ${score} из ${total};
}
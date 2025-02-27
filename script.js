const ulList = document.getElementById('days');
const holidayBtn = document.getElementById('btn-holiday');
const fridayBtn = document.getElementById('btn-friday');
const holidayElements = document.querySelectorAll('.holiday');
const buttonAdd = document.getElementById('btn-add');
const inputText = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Escreva seu código abaixo.

const holidays = [24, 25, 31]; //dias de feriado
const fridays = [4, 11, 18, 25]; //dias que são sexta-feira

const createUlDays = () => {
  decemberDaysList.forEach((days, index) => {
    const daysList = document.createElement('li');
    daysList.innerText = decemberDaysList[index];
    ulList.appendChild(daysList);
    daysList.classList.add('day');

    if (holidays.includes(days)) {
      daysList.classList.add('holiday');
    }

    if (fridays.includes(days)) {
      daysList.classList.add('friday');
    }
  });
}
createUlDays();

holidayBtn.addEventListener('click', () => {
  const holidayElements = document.querySelectorAll('.holiday');
  holidayElements.forEach((element) => {
    if (!element.dataset.originalColor) {
      element.dataset.originalColor = element.style.backgroundColor || 'rgb(238, 238, 238)';
    }
    element.style.backgroundColor = element.style.backgroundColor === 'rgb(241, 91, 10)' ? element.dataset.originalColor : 'rgb(241, 91, 10)';
  });
});


fridayBtn.addEventListener('click', () => {
  const fridayElements = document.querySelectorAll('.friday');
  fridayElements.forEach((element) => {
    if (!element.dataset.originalText) {
      element.dataset.originalText = element.innerText;
    }
    element.innerText = element.innerText === 'Sextou!' ? element.dataset.originalText : 'Sextou!';
  });
});

ulList.addEventListener('mouseover', (event) => {
  event.target.style.fontSize = '30px';
  })

  ulList.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
  })

  const handleChangeSelected = (event) => {
    const taskElement = document.querySelectorAll('.task');
    taskElement.forEach((element) => {
      element.addEventListener('click', (event) => {
        if (event.target.classList.contains('selected')) {
        const selected = document.querySelector('.selected');
        selected.classList.remove('selected');
        } else {
          event.target.classList.add('selected');
        }
      })
    })
  }
  handleChangeSelected();

  const addTaskOnDate = () => {
    const daysElement = document.querySelectorAll('.day');
    daysElement.forEach((element) => {
      element.addEventListener('click', (event) => {
        const selectedElement = document.querySelector('.selected');
        if (event.target.style.color === selectedElement.style.backgroundColor) {
          event.target.style.color = 'rgb(119, 119, 119)';
        } else {
          event.target.style.color = selectedElement.style.backgroundColor;
        }
      })
    })
  }
  addTaskOnDate();

  buttonAdd.addEventListener('click', (event) => {
    if (inputText.value === '') {
      window.alert('Erro');
    } else {
      let newListItem = document.createElement('li');
      newListItem.innerText = inputText.value;
      taskList.appendChild(newListItem);
      inputText.value = '';
    }
  });

  inputText.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      if (inputText.value === '') {
        window.alert('Erro');
      } else {
        let newListItem = document.createElement('li');
        newListItem.innerText = inputText.value;
        taskList.appendChild(newListItem);
        inputText.value = '';
      }
    }
  })
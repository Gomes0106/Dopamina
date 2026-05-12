const notifications = [
  'Novo vídeo recomendado!',
  'Você recebeu uma curtida!',
  'Só mais um vídeo...',
  'Nova tendência disponível!',
  'O São Paulo Perdeu denovo',
  'Nova notificação recebida!'
];

function createNotification(){

  const container = document.querySelector('.notifications');

  const notification = document.createElement('div');

  notification.classList.add('notification');

  notification.innerText =
  notifications[Math.floor(Math.random() * notifications.length)];

  container.appendChild(notification);

  setTimeout(()=>{
    notification.remove();
  },3000);

}

setInterval(createNotification,2500);

let currentQuestion = 0;
let score = 0;

const questions = document.querySelectorAll('.question');

function nextQuestion(value){

  score += value;

  questions[currentQuestion].classList.remove('active');

  currentQuestion++;

  if(currentQuestion < questions.length){
    questions[currentQuestion].classList.add('active');
  }

  else{
    showResult();
  }

}

function showResult(){

  const result = document.getElementById('result');

  if(score <= 1){
    result.innerHTML =
    'Você parece ter um bom controle sobre os estímulos digitais.';
  }

  else if(score <= 3){
    result.innerHTML =
    'Você apresenta sinais moderados de dependência digital.';
  }

  else{
    result.innerHTML =
    'Seu cérebro pode estar preso no ciclo da dopamina instantânea.';
  }

}

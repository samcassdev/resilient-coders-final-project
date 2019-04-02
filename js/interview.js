let interviewQuestions = [
    'Can you tell me a little about yourself?',
    'How did you hear about the position?',
    'What do you know about the company?',
    'Why do you want this job?',
    'Why should we hire you?',
    'What are your greatest professional strengths?',
    'What do you consider to be your weaknesses?',
    'What is your greatest professional achievement?',
    'Tell me about a challenge or conflict you\'ve faced at work, and how you dealt with it',
    'Where do you see yourself in five years?',
    'What other companies are you interviewing with?',
    'Why are you leaving your current job? (Please write "N/A" if not applicable)',
    'What are you looking for in a new position?',
    'What type of work environment do you prefer?',
    'Describe a time where you exercised leadership?',
    'Has there ever been a time where you disagreed with a decision that was made at work?',
    'How would your boss and co-workers describe you? (Please write "N/A" if not applicable)',
    'How do you deal with pressure or stressful situations?',
    'What are your salary requirements?',
    'Do you have any questions for us?'
];

let num = 0;

let inputBox = document.querySelector("#ans");
let output = document.querySelector("#result");
output.innerHTML = interviewQuestions[num];

function showResponse() {
  let input = inputBox.value;
  if(inputBox.value == "") {

  }else {
  if(num == 0) {
    output.innerHTML = `Hii ${input}`;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Submitting your response...");
    ++num;
    setTimeout(changeQuestion, 2000);
  } else if(num == 1) {
    output.innerHTML = `${input} must be a good place`;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Submitting your response...");
    ++num;
    setTimeout(changeQuestion, 2000);
  } else if(num == 2) {
    output.innerHTML = `So you are ${2017 - input} born`;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Submitting your response...");
    ++num;
    setTimeout(changeQuestion, 2000);
  } else if(num == 3) {
    output.innerHTML = `Awesome ${input}`;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Submitting your response...");
    ++num;
    setTimeout(changeQuestion, 2000);
  }
  }
}

function changeQuestion() {
  inputBox.setAttribute("placeholder", "Enter your response");
  output.innerHTML = questions[num];
  if(num == 4) {
    inputBox.style.display = "none";
  }
}

$(document).on('keypress', function(e) {
  if(e.which == 13) {
    showResponse();
  }
})

$( "#ans" ).focus();

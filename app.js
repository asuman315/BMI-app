const enteredHeight = document.getElementById('height');
const enteredWeight = document.getElementById('weight');
const result = document.querySelector('.result');
const calculateBMI = document.querySelector('.calc');

calculateBMI.addEventListener('click', () => {
 const weight = enteredWeight.value;
 const height = enteredHeight.value;

 let  bmi = weight / (height * height);
 bmi = Math.round(bmi);
 
const category = () => {
 if (bmi <= 18.5) {
  return 'UnderWeight'
 } else if (bmi > 18.5 && bmi <= 24.9) {
   return 'NormalWeight'
 } else if (bmi >= 25 && bmi <= 29.9) {
   return 'OverWeight';
 } else {
   return 'Obese';
 }
}

console.log(bmi);
 console.log(category());
 
 result.innerHTML = `Your BMI is <span>${bmi}</span>. That means you're <span>${category()}</span>!`

});

const title = document.querySelector('.title');
const guide = document.querySelector('.guide');
const img = document.querySelector('.img')
const instruction = document.querySelector('.instruction');

title.addEventListener('click', () => {
   guide.classList.toggle('show');
   img.classList.toggle('arrow-up');
   instruction.classList.toggle('change-color');
});

/*day = 'morning';

const greetings = (greeting) => {
 if (day === 'morning') {
  return  'Good morning';
 } else {
  return 'Good evening'
 }

}*/

//console.log(`${greetings()} Sir`);



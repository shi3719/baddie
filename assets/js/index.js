const btn = document.querySelector('.btn');
const cat = document.querySelector('.cat');
const section1 = document.querySelector('.section1');
const textbox = document.getElementById("textbox");

var arr = ['shit', 'fuck', 'damn', 'bitch', 'crap', 'piss', 'dick', 'darn', 'cock', 'pussy', 'asshole', 'fag', 'bastard', 'slut', 'douche'];

const letter1 = document.querySelector('.letter1');
const letter2 = document.querySelector('.letter2');

const randumletter = () => {
  const randumNum2 = Math.floor(Math.random() * 14);
  letter1.innerHTML = arr[randumNum2];
}

const randumletter2 = () => {
  const randumNum2 = Math.floor(Math.random() * 14);
  letter2.innerHTML = arr[randumNum2];
}

const randumimg = () => {
  const randumNum = Math.floor(Math.random() * 8);
  cat.style.backgroundImage = `url(/assets/images/cat${randumNum}.png)`
}

btn.addEventListener('click', () =>{
  if(textbox.value === ''){
    section1.style.opacity = '1';
    letter1.innerHTML = '편지써!!!!!!';
  }else{
    textbox.value='';
    randumimg();
    section1.style.opacity = '1';
    randumletter();
    randumletter2();
  }
})
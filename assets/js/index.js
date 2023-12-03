const btn = document.querySelector('.btn');
const cat = document.querySelector('.cat');

const randumimg = () => {
  const randumNum = Math.floor(Math.random() * 8);
  cat.style.backgroundImage = `url(/assets/images/cat${randumNum}.png)`
}

btn.addEventListener('click', () =>{
  document.getElementById("textbox").value='';
  randumimg();
})
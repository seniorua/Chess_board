// находим все єлементы: 
const inp_x = document.querySelector('.inp-x');
const inp_y = document.querySelector('.inp-y');
const button = document.querySelector('.button');
// const container_block = document.querySelector('.container-block');

let x = inp_x.value;
let y = inp_y.value; // переменные для проверки содержимого полей ввода
(x && x>0 && x<=10 && y && y>0 && y<=10) ? button.removeAttribute('disabled') : button.setAttribute('disabled', null);
inp_x.addEventListener('keyup', ()=>{
  x = inp_x.value;
  y = inp_y.value;
  (x && x>0 && x<=10 && y && y>0 && y<=10) ? button.removeAttribute('disabled') : button.setAttribute('disabled', null);
});
inp_y.addEventListener('keyup', ()=>{
  x = inp_x.value;
  y = inp_y.value;
  (x && x>0 && x<=10 && y && y>0 && y<=10) ? button.removeAttribute('disabled') : button.setAttribute('disabled', null);
});

// сначала очищаем от ранее отрисованного блока:
button.addEventListener('click', ()=>{
  const del = document.querySelector('.container-block');
  del.remove();
});

button.addEventListener('click', () => {
  setLocalStorage();
  const container_block = document.createElement('div');
  container_block.classList.add('container-block');
  document.body.append(container_block);

  let color1 = 1; // первая переменная для цвета
  for(let i = 0; i < y; i++){
    const row_block = document.createElement('div')
    row_block.classList.add('row-block');
    container_block.append(row_block);
    let color2 = color1; // вторая переменная для цвета
    for(let i = 0; i < x; i++){
      const insert_block = document.createElement('div');
      row_block.classList.add('row-block');
      insert_block.classList.add('insert-block');
      if ( color2%2 == 0 ){
        insert_block.classList.add('white');
      } 
      color2++;
      row_block.append(insert_block);
      // console.log('i: ' + (i + 1))
    }
    color1--;
  }

  container_block.addEventListener('click', () => {
    // alert('Change!');
    const change = document.querySelectorAll('.insert-block');
    for(let i = 0; i<change.length; i++){
      change[i].classList.toggle('white');
    }
  })
// элемент.classList.toggle(класс);
});

function setLocalStorage(){
  localStorage.setItem('inp_x', inp_x.value);
  localStorage.setItem('inp_y', inp_y.value);
}

(function fromLocalField(){
  const localX = localStorage.getItem('inp_x');
  const localY = localStorage.getItem('inp_y');
  console.log(localX, localY);
})()
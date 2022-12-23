const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

const shadowbox = document.querySelector('.shadow');
const closebtn = document.querySelector('.icon');
const body = document.querySelector('body');

const pic1 = document.querySelector('.pic1');
const pic2 = document.querySelector('.pic2');
const pic3 = document.querySelector('.pic3');
const pic4 = document.querySelector('.pic4');


btn1.addEventListener('click', ()=>{
    img1.style.display = 'block';
    img2.style.display = 'none';
    img3.style.display = 'none';
    img4.style.display = 'none';

    btn1.style.border = '3px dotted lightblue';
    btn2.style.border = 'none';
    btn3.style.border = 'none';
    btn4.style.border = 'none';

    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');


})

btn2.addEventListener('click', ()=>{
    img1.style.display = 'none';
    img2.style.display = 'block';
    img3.style.display = 'none';
    img4.style.display = 'none';

    btn1.style.border = 'none';
    btn2.style.border = '3px dotted lightblue';
    btn3.style.border = 'none';
    btn4.style.border = 'none';

    btn1.classList.remove('active');
    btn2.classList.add('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');


})

btn3.addEventListener('click', ()=>{
    img1.style.display = 'none';
    img2.style.display = 'none';
    img3.style.display = 'block';
    img4.style.display = 'none';

    btn1.style.border = 'none';
    btn2.style.border = 'none';
    btn3.style.border = '3px dotted lightblue';
    btn4.style.border = 'none';

    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.add('active');
    btn4.classList.remove('active');

   


})

btn4.addEventListener('click', ()=>{
    img1.style.display = 'none';
    img2.style.display = 'none';
    img3.style.display = 'none';
    img4.style.display = 'block';

    btn1.style.border = 'none';
    btn2.style.border = 'none';
    btn3.style.border = 'none';
    btn4.style.border = '3px dotted lightblue';

    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.add('active');

    
})
// END OF BUTTON DESIGN


img1.addEventListener('click', ()=>{
    shadowbox.style.display = 'block';
    body.style.overflow = 'hidden';
    pic1.style.display = 'block';
})

img2.addEventListener('click', ()=>{
    shadowbox.style.display = 'block';
    body.style.overflow = 'hidden';
    pic2.style.display = 'block';
})

img3.addEventListener('click', ()=>{
    shadowbox.style.display = 'block';
    body.style.overflow = 'hidden';
    pic3.style.display = 'block';
})

img4.addEventListener('click', ()=>{
    shadowbox.style.display = 'block';
    body.style.overflow = 'hidden';
    pic4.style.display = 'block';
})

closebtn.addEventListener('click', ()=>{
    shadowbox.style.display = 'none';
    body.style.overflow = 'scroll';
})

//END OF OPEN CLOSE BTN

const img = document.querySelectorAll('.img');
const right = document.getElementById('right');
const left = document.getElementById('left');
let count = 0;


right.addEventListener('click',(e)=>{
    img[count].style.display = 'none';
    count++;
    img[count].style.display = 'block';
    if(count===3){
        right.disabled = true;
        right.style.cursor = 'not-allowed';
        right.style.backgroundColor = 'transparent';
    }
    left.disabled = false;
    left.style.cursor = 'pointer';
    left.style.backgroundColor = '#dfe6e9';    
});

left.addEventListener('click',(e)=>{
    img[count].style.display = 'none';
    count--;
    img[count].style.display = 'block';
    if(count===0){
        left.disabled = true;
        left.style.cursor = 'not-allowed';
        left.style.backgroundColor = 'transparent';
    }
    right.disabled = false;
    right.style.cursor = 'pointer';
    right.style.backgroundColor = '#dfe6e9';
});

    



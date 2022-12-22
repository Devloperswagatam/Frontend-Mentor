const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');


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
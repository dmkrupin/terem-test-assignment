const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const block1 = document.querySelector('.block-1');
const block2 = document.querySelector('.block-2');
const block3 = document.querySelector('.block-3');

const onBtn1Click = () => {
    if (block1.style.opacity === '0') {
        block1.style.opacity = '1';
    }
    else {
        block1.style.opacity = '0';
    }
}

const onBtn2Click = () => {
    block2.classList.toggle('block-2--swapped');
    block3.classList.toggle('block-3--swapped');
}

window.onload = function() {
    alert('Привет, мир!');
};

btn1.addEventListener('click', onBtn1Click);
btn2.addEventListener('click', onBtn2Click);
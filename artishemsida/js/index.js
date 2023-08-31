let count = 0;

const counter = document.getElementById('counter');
document.getElementById('add-animation').addEventListener('click', event => {
    const cl = counter.classList;
    const c = 'animated-counter';
    count++;

    counter.innerText = count;
    cl.remove(c, cl.contains(c));
    setTimeout(() =>
     counter.classList.add('animated-counter')
     ,1)
})

let count1 = 0;

const counter1 = document.getElementById('counter');
document.getElementById('add-animation1').addEventListener('click', event => {
    const cl = counter.classList;
    const c = 'animated-counter';
    count++;

    counter.innerText = count;
    cl.remove(c, cl.contains(c));
    setTimeout(() =>
     counter.classList.add('animated-counter')
     ,1)
})

let count2 = 0;

const counter2 = document.getElementById('counter');
document.getElementById('add-animation2').addEventListener('click', event => {
    const cl = counter.classList;
    const c = 'animated-counter';
    count++;

    counter.innerText = count;
    cl.remove(c, cl.contains(c));
    setTimeout(() =>
     counter.classList.add('animated-counter')
     ,1)
})


let count3 = 0;

const counter3 = document.getElementById('counter');
document.getElementById('add-animation3').addEventListener('click', event => {
    const cl = counter.classList;
    const c = 'animated-counter';
    count++;

    counter.innerText = count;
    cl.remove(c, cl.contains(c));
    setTimeout(() =>
     counter.classList.add('animated-counter')
     ,1)
})






// searchFormBtn.addEventListener('click', () => {
//     location.hash = '#search='+ searchFormInput.value;
// })

window.addEventListener('hashchange', navigaitor)

function navigaitor(){
    const headerContainerList = document.getElementById('headerLsit-container');
    const itemNavNategories = document.getElementById('item-nav-categories');
 
    if (location.hash.startsWith('#categoriesList')) {
        itemNavNategories.classList.remove('hidden');
        headerContainerList.classList.add('hidden')
    } else {
        itemNavNategories.classList.add('hidden');
        headerContainerList.classList.remove('hidden');
    }
}


//slider con botones
const preview = document.getElementById('buttonPreview');
const next = document.getElementById('buttonNext');
const slider = document.getElementById('headerList');




// console.log(R1);
// funcionalidad botones


const botones = document.querySelectorAll('.input-radio');

function WhichBottomIsOn (signo) {
    // const visibleWidthSlider = slider.clientWidth;
    if (botones[0].style.background == 'white') {
        const visibleWidthSlider = slider.clientWidth;
        slider.scrollTo((1+signo)*visibleWidthSlider, 0);
        botones.forEach(item => item.style = 'hsla(0,0%,100%,.3)')
        botones[0+signo].style.background = 'white'
        preview.classList.remove('hidden');

 
    } else if (botones[1].style.background == 'white') {
        const visibleWidthSlider = slider.clientWidth;
        slider.scrollTo((2+signo)*visibleWidthSlider, 0);
        botones.forEach(item => item.style = 'hsla(0,0%,100%,.3)')
        botones[1+signo].style.background = 'white'
        if(signo < 0) {
            preview.classList.add('hidden')
            next.classList.remove('hidden')
        }
    } else if (botones[2].style.background == 'white') {
        const visibleWidthSlider = slider.clientWidth;
        slider.scrollTo((3+signo)*visibleWidthSlider, 0);
        botones.forEach(item => item.style = 'hsla(0,0%,100%,.3)')
        botones[2+signo].style.background = 'white'
    } else if (botones[3].style.background == 'white') {
        const visibleWidthSlider = slider.clientWidth;
        slider.scrollTo((4+signo)*visibleWidthSlider, 0);
        botones.forEach(item => item.style = 'hsla(0,0%,100%,.3)')
        botones[3+signo].style.background = 'white'
    } else if (botones[4].style.background == 'white') {
        const visibleWidthSlider = slider.clientWidth;
        slider.scrollTo((5+signo)*visibleWidthSlider, 0);
        botones.forEach(item => item.style = 'hsla(0,0%,100%,.3)')
        botones[4+signo].style.background = 'white'
    } else if (botones[5].style.background == 'white') {
        const visibleWidthSlider = slider.clientWidth;
        slider.scrollTo((6+signo)*visibleWidthSlider, 0);
        botones.forEach(item => item.style = 'hsla(0,0%,100%,.3)')
        botones[5+signo].style.background = 'white'
        if (signo > 0) {
            next.classList.add('hidden');
        }
    } else {
        const visibleWidthSlider = slider.clientWidth;
        slider.scrollTo((7+signo)*visibleWidthSlider, 0);
        botones.forEach(item => item.style = 'hsla(0,0%,100%,.3)')
        botones[6+signo].style.background = 'white';
        if(signo < 0) {
            next.classList.remove('hidden');
        }
    }

}

preview.addEventListener('click', () => {

    WhichBottomIsOn(-1);
});
next.addEventListener('click', () => {

    WhichBottomIsOn(1);
});


botones[0].addEventListener('click', () => {
    prueba(0);
});

function prueba(num) {
    const visibleWidthSlider = slider.clientWidth;
    slider.scrollTo(num*visibleWidthSlider, 0);
    botones.forEach(item => item.style = 'hsla(0,0%,100%,.3)')
    botones[num].style.background = 'white'
    if(num == 0){
        preview.classList.add('hidden')
        next.classList.remove('hidden')
    } else if (num ==6) {
        next.classList.add('hidden')
        preview.classList.remove('hidden')
    } else {
        next.classList.remove('hidden');
        preview.classList.remove('hidden')
    }

}

botones[1].addEventListener('click', () => {
    prueba(1)
});

botones[2].addEventListener('click', () => {
    prueba(2)
});

botones[3].addEventListener('click', () => {
    prueba(3)
});

botones[4].addEventListener('click', () => {
    prueba(4)
});
botones[5].addEventListener('click', () => {
    prueba(5);
});
botones[6].addEventListener('click', () => {
    prueba(6)
});




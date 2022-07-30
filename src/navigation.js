
// searchFormBtn.addEventListener('click', () => {
//     location.hash = '#search='+ searchFormInput.value;
// })

window.addEventListener('hashchange', navigaitor)

function navigaitor(){
    const headerContainer = document.getElementById('header-container');
    const itemNavNategories = document.getElementById('item-nav-categories');
 
    if (location.hash.startsWith('#categoriesList')) {
        itemNavNategories.classList.remove('hidden');
        headerContainer.classList.add('hidden')
    } else {
        itemNavNategories.classList.add('hidden');
        headerContainer.classList.remove('hidden');
    }
}


//slider con botones
const preview = document.getElementById('buttonPreview');
const next = document.getElementById('buttonNext');
const slider = document.getElementById('headerList');

preview.addEventListener('click', () => {
    slider.scrollLeft -= 600;
});
next.addEventListener('click', () => {
    slider.scrollLeft += 600
});
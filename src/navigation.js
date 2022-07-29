
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



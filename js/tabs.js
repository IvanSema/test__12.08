const grid = document.querySelector('.offer__grid'),
tabs = document.querySelectorAll('.offer__cell'),
tabsContent = document.querySelectorAll('.offer-tab');

function hideTabs(){
    tabs.forEach(elem => elem.classList.remove('active'))
    tabsContent.forEach(elem => elem.classList.remove('active'))
}

function showTab(i = 0){
    hideTabs()
    tabs[i].classList.add('active')
    tabsContent[i].classList.add('active')
}

showTab();


grid.addEventListener('click', (event) => {
    const target = event.target;
    console.log(target);
    
    tabs.forEach((elem, index) => {
        if(elem === target){
            showTab(index);
        }
    })
})
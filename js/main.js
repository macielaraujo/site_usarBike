const closeNav = document.getElementById('close-nav'),
navMenu = document.getElementById('mostraMenu');
const menu = document.getElementById('menuItem');


function fechaMenu(){
    if(closeNav){
        closeNav.addEventListener('click', ()=>{
            closeNav.classList.add('menuItem');
        })
    }
    menu.innerHTML(`style="opacity:0;"`)
}



function mostrarMenu(){
    if(navMenu){
        navMenu.addEventListener('click', ()=>{
            navMenu.classList.remove('menuItem');
        })
    }
    alert("entrou");
    let btn = document.getElementById('menuItem');
}


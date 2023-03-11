
function entrarApp(){
    window.location = 'https://wa.link/vag2cn'
}

function mostrar(){
    let botao = document.getElementById('menuItem');
    if(botao.style.display=='block'){
        botao.style.display='none'
    }else{botao.style.display='block'}
}

function mudaTamanho(){
    let botao = document.getElementById('menuItem');
    if(window.innerWidth>=760){
        botao.style.display='block'
    }else{botao.style.display='none'}
}
var res = document.getElementById('resultado');
var botao = document.getElementById('btnValidar');

botao.addEventListener('click', function(){
    var perfil = Number(document.getElementById('perfil').value);

    switch(perfil){
        case 1:
            res.innerHTML = 'ADMIN - ACESSO TOTAL';
            res.style.backgroundColor = 'green';
            res.style.color = 'white';
            break;
        case 2:
            res.innerHTML = 'USUARIO - ACESSO LIMITADO';
            res.style.backgroundColor = 'yellow';
            res.style.color = 'black';
            break;
        case 3:
            res.innerHTML = 'CONVIDADO - ACESSO RESTRITO';
            res.style.backgroundColor = 'red';
            res.style.color = 'white';
            break;
        default:
            res.innerHTML = 'Acesso negado';
            res.style.backgroundColor = 'black';
            res.style.color = 'white';
    }
});


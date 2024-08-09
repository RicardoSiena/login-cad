// VALIDAR ACESSO EM TELA DE LOGIN
 

// Obtém os valores dos campos de e-mail e senha do formulário de login
function acessar() {
    let loginEmail  = document.getElementById('loginEmail').value;
    let loginSenha  = document.getElementById('loginSenha').value;


    // Verifica se os campos de e-mail ou senha estão vazios, e envia um alert caso esteja
    if( !loginEmail || !loginSenha){
        alert("Favor preencher todos os campos");
    }

    // Se ambos os campos estiverem preenchidos, redireciona o usuário para a página de cadastro
    else{
        //alert("Campos preenchidos com sucesso");
        window.location.href = 'cadastro.html';
    }
}

// FUNÇÃO QUE ARMAZENA EM ARRAY NOME NA TELA DE CADASTRO

var dadosLista = [];

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
    
    if(nomeUser){
        dadosLista.push(nomeUser);
      //console.log(dadosLista);
      criarlista()
        document.getElementById('nomeUser').value = "";
    }else{
        alert('Favor informar o nome para cadastro');
    }
}

// FUNÇÃO PARA CRIAR LISTA

 // Inicia a tabela com os cabeçalhos de 'Nome Usuário' e 'Ações'
function criarlista(){
    let tabela = document.getElementById ('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>"
    
    for(let i = 0; i <= (dadosLista.length-1) ; i++){
        tabela += "<tr><td>" + dadosLista [i] + "</td><td><button type='button' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='excluir(this.parentNode.parentNode.rowIndex)'>excluir</button></td></tr>";
        // O  i É USADO PARA ACESSAR A POSIÇÃO DO ARRAY
        document.getElementById('tabela').innerHTML = tabela;
    }
}


// FUNÇÃO PARA EDITAR NOMES DA LISTA

function editar(i){
    // Coloca o nome do usuário selecionado no campo de input para edição
    document.getElementById('nomeUser').value = dadosLista[(i -1 )];
    // Remove o nome do array para ser substituído pela nova versão editada
    dadosLista.splice(dadosLista[(i - 1)], 1);}

//O MÉTODO splice() ALTERA O CONTEUDO DE UMA LISTA, ADICIONANDO NOVOS ELEMENTOS ENQUANTO REMOVE ELEMENTOS ANTIGOS.

//FUNÇÃO PARA EXCLUIR NOME DA LISTA
function excluir(i){
    dadosLista.splice((i-1), 1)
    // Remove o nome do array 'dadosLista' na posição selecionada
    document.getElementById('tabela').deleteRow(i);
    // Limpa o campo de nome do usuário após excluir
    document.getElementById('nomeUser').value = "";
}
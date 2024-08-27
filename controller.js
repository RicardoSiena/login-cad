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
var salvarEmail = [];

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
    let email = document.getElementById('emailUser').value;
    
    if(nomeUser && email){
        dadosLista.push(nomeUser);
        salvarEmail.push(email)
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
    let tabela = document.getElementById ('tabela').innerHTML = "<tr><th>Nome Usuário</th> <th>Email</th> </tr><th>Ações</th>"
    
    for(let i = 0; i <= (dadosLista.length-1) ; i++){
        tabela += "<tr><td>" + dadosLista [i] +  "<td></td>" + salvarEmail + "</td><td><button type='button' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='excluir(this.parentNode.parentNode.rowIndex)'>excluir</button></td></tr>";
        // O  i É USADO PARA ACESSAR A POSIÇÃO DO ARRAY
        document.getElementById('tabela').innerHTML = tabela;
    }
}


// FUNÇÃO PARA EDITAR NOMES DA LISTA

function editar(i){
    // Coloca o nome do usuário selecionado no campo de input para edição
    document.getElementById('nomeUser').value = dadosLista[(i -1 )];
    dadosLista.splice(dadosLista[(i - 1)], 1);}
    document.getElementById('emailUser').value = salvarEmail[(i -1 )];
    salvarEmail.splice(salvarEmail[(i - 1)], 1);
    // Remove o nome do array para ser substituído pela nova versão editada
    

//O MÉTODO splice() ALTERA O CONTEUDO DE UMA LISTA, ADICIONANDO NOVOS ELEMENTOS ENQUANTO REMOVE ELEMENTOS ANTIGOS.

//FUNÇÃO PARA EXCLUIR NOME DA LISTA
function excluir(i){
    dadosLista.splice((i-1), 1)
    // Remove o nome do array 'dadosLista' na posição selecionada
    document.getElementById('tabela').deleteRow(i);
    salvarEmail.splice((i - 1), 1);
    // Limpa o campo de nome do usuário após excluir
    document.getElementById('nomeUser').value = "";
}
function checarEmail(){
    if(document.forms[0].email.value == "" ||
       document.forms[0].email.value.indexOf("@") == -1 ||
       document.forms[0].email.value.indexOf(".") == -1)
       {
        alert("Por favor, informe um email válido");
        return false;
    }
}
// CÓDIGO DE VERIFICAÇÃO DE EMAIL DIGITADO
 
function verifica(){
    if(document.forms[0].email.value == 0){
        alert("Por favor, corno, informe um e-mail");
        document.frmEnvia.email.focus();
        return false;
    }
    return true;
}
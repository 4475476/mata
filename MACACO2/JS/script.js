function checarIdade(){
    idade=parseInt(document.getElementById('idade').value);
    mensagem='';

    if(idade>=18){
        mensagem='Bem vindo ao meu site!';
    }
    document.getElementById('resposta').innerHTML=mensagem;
}
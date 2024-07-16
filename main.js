/*window.document.addEventListener('DOMContentLoaded', function() {
    window.document.getElementById('btn-buscar-cep').addEventListener('click', function() {
        const xhttp = new XMLHttpRequest();
        const cep = window.document.getElementById('cep').value;
        const endPoint = `http://viacep.com.br/ws/${cep}/json`;
        xhttp.open('GET', endPoint);
        xhttp.send();
    });
 });*/

 $(Window.document).ready(function() {
    $('#cep').mask('00000-000');
    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endPoint =`http://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        /*$.ajax(endPoint).done(function(resposta) {
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#endereco').val(endereco);

            setTimeout(function() {
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
            }, 1000);
        });*/

        fetch(endPoint).then(function(resp) {
            return resp.json();
        })
        .then(function(json) {
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const endereco = `${logradouro}, ${bairro}, ${cidade}. ${estado}`;
            $('#endereco').val(endereco);
        });

        setTimeout(function() {
            $(botao).find('i').removeClass('d-none');
            $(botao).find('span').addClass('d-none');
        }, 1000);
    })
 });
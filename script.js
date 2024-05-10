function buscarCEP() {
    let cep = document.getElementById('cep').value;
    let url = `https://viacep.com.br/ws/${cep}/json`;

    fetch(url).then(function(response) {
        return response.json();
    })
    .then(function(data) {
        if(data.erro) {
            document.getElementById('resultado').innerHTML = `<p>CEP não encontrado! Por favor, digite um válido.</p>`;
            document.getElementById('cep').value = '';
        }else {
            let endereco = `<p>CEP: ${data.cep}</p>
                            <p>Rua: ${data.logradouro}</p>
                            <p>Bairro: ${data.bairro}</p>
                            <p>Cidade: ${data.localidade}</p>
                            <p>Estado: ${data.uf}</p>`;
            document.getElementById('resultado').innerHTML = endereco;
            document.getElementById('cep').value = '';
        }
    })
    .catch(function(error) {
        console.log(error);
    });
}

$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        mensagem: {
            required: true
        }
        
    },
    submitHandler: function (form) {
        alert('Sua mensagem foi enviada com sucesso, em breve entraremos em contato!');
        form.reset();
    },
    invalidHandler: function (form, validator) {
        alert('Por favor, preencha os campos antes de enviar a mensagem!');
    }
})
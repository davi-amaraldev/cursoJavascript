let contaBanco = {
    nomeTitular: 'Davi',
    id: 15,
    saldo: 1450.00
}

function depositarValor(valor){
    if (valor <= 0){
        throw new Error('Valor menor ou igual a zero.')
    }

    if (typeof valor !== 'number' || Number.isNaN(valor)){
        throw new TypeError('Tipo de valor inválido.')
    }
    
    let deposito = contaBanco.saldo + valor;
    contaBanco.saldo = deposito;
    return contaBanco.saldo;
}

function sacarValor(valor){
    if (valor <= 0){
        throw new Error('Valor menor ou igual a zero.')
    }

    if (typeof valor !== 'number' || Number.isNaN(valor)){
        throw new TypeError('Tipo de valor inválido.')
    }

    if (valor > contaBanco.saldo){
        throw new Error('Saldo insuficiente.')
    }

    let saque = contaBanco.saldo - valor;
    contaBanco.saldo = saque;

    return contaBanco.saldo;
}

try {
    depositarValor('10')
    console.log(`Olá ${contaBanco.nomeTitular}, você tem  R$ ${contaBanco.saldo}`);
} catch (err){
    console.log(err.message);
    console.log('Ops! Houve um erro na execução.');
} finally {
    console.log('PROGRAMA ENCERRADO');
}
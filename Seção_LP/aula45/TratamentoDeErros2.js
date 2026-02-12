try {
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo')
    // É executada quando não há erros
} catch (err) {
    console.log('Tratando o erro');
    // É executada quando há erros
} finally {
    console.log('Eu sempre sou executado');
    // Sempre
}
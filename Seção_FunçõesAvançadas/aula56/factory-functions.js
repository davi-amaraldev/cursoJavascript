// Factory Function (Função fábrica)

function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },
        altura,
        peso,
        // Getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return `${this.nomeCompleto} tem IMC igual à ${indice.toFixed(2)}`;
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80);
p1.nomeCompleto = 'Davi Dantas';
console.log(p1.nomeCompleto);
console.log(p1.sobrenome);
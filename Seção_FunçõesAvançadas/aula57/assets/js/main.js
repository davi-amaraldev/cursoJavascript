function createCalculator() {
    return {
        display: document.querySelector('.display'),

        init() {
            this.buttonClick();
            this.pressEnter();
        },
        pressEnter(){
            this.display.addEventListener('keypress', (e) => {
                if (e.keyCode === 13){
                    this.doCalc();
                }
            })
        },
        buttonClick() {
            // this -> calculadora
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnToDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')){
                    this.deleteChar();
                }

                if (el.classList.contains('btn-eq')){
                    this.doCalc();
                };
            });
        },
        btnToDisplay(value) {
            this.display.value += value;
        },
        clearDisplay(){
            this.display.value = ' ';
        },
        deleteChar(){
            this.display.value = this.display.value.slice(0, -1)
        },
        doCalc(){
            let conta = this.display.value;
            try{
                conta = eval(conta)

                if(!conta){
                    alert('Conta inválida')
                }

                this.display.value = conta;
            } catch(err){
                alert('Conta Inválida');
                return;
            }
        }
    };
}

const calculadora = createCalculator();
calculadora.init();
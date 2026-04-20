function Calculator() {
    this.display = document.querySelector('.display');

    this.init = () => {
        this.buttonClick();
        this.pressEnter();
    };
    this.pressEnter = () => {
        this.display.addEventListener('keypress', (e) => {
            if (e.keyCode === 13) {
                this.doCalc();
            }
        })
    };
    this.buttonClick = () => {
        // this -> calculadora
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.btnToDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                this.deleteChar();
            }

            if (el.classList.contains('btn-eq')) {
                this.doCalc();
            };
        });
    };
    this.btnToDisplay = (value) => {
        this.display.value += value;
    };
    this.clearDisplay = () => {
        this.display.value = ' ';
    };
    this.deleteChar = () => {
        this.display.value = this.display.value.slice(0, -1)
    };
    this.doCalc = () => {
        let conta = this.display.value;
        try {
            conta = eval(conta)

            if (!conta) {
                alert('Conta inválida')
            }

            this.display.value = conta;
        } catch (err) {
            alert('Conta Inválida');
            return;
        };
    };
};



const calculadora = new Calculator();
calculadora.init();
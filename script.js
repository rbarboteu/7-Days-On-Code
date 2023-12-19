const numeroSecreto = Math.floor(Math.random() * 11);


let tentativas = 3;

while (tentativas > 0) {
    let chute = parseInt(prompt("Digite um número entre 0 e 10:"));

    if (chute === numeroSecreto) {
        alert(`Parabéns! Você acertou! O número secreto era ${numeroSecreto}`);
        break;
    } else if (chute < numeroSecreto) {
        tentativas--;
        if (tentativas > 0) {
            alert(`Seu chute foi menor que o número secreto. Você ainda tem ${tentativas} tentativa(s)`);
        } else {
            alert(`Suas chances acabaram! O número secreto era ${numeroSecreto}`);
        }
    } else if (chute > numeroSecreto) {
        tentativas--;
        if (tentativas > 0) {
            alert(`Seu chute foi maior que o número secreto. Você ainda tem ${tentativas} tentativa(s)`);
        } else {
            alert(`Suas chances acabaram! O número secreto era ${numeroSecreto}`);
        }
    }
}

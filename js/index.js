var saldo = 100;
var numApostas = 0;

function startRace() {
    var carPositions = [0, 0, 0, 0, 0];
    var raceInterval = setInterval(moveCars, 50);
    var winner = null;
    

    function updateSaldoDisplay() {
        var saldoDisplay = document.getElementById('saldoDisplay');
        saldoDisplay.textContent = 'Saldo: R$' + saldo + ' | Apostas: ' + numApostas;
    }

    numApostas++;

    function moveCars() {
        for (var i = 0; i < carPositions.length; i++) {
            carPositions[i] += Math.random() * 10;
            document.getElementById('car' + (i + 1)).style.left = carPositions[i] + 'px';

            if (carPositions[i] >= 500 && winner === null) {
                winner = i + 1;
                clearInterval(raceInterval);
                announceResult();
            }
        }
    }

    function announceResult() {
        var betAmount = parseInt(document.getElementById('amount').value);
        var selectedPilot = parseInt(document.getElementById('pilot').value);
        var resultDiv = document.getElementById('result');
        if (selectedPilot === winner) {
            saldo += betAmount * 2;
            resultDiv.textContent = 'Congratulations! You win R$' + (betAmount * 2);
        } else {
            saldo -= betAmount;
            resultDiv.textContent = 'You lost the bet.';
        }
        updateSaldoDisplay();
    }

    updateSaldoDisplay();
    
}
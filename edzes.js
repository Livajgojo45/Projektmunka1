document.addEventListener('DOMContentLoaded', () => {

    const szinvalasztoInputok = document.querySelectorAll('.szinvalaszto');
    const szinidokozInput = document.getElementById('szinidokoz');
    const szininditasGomb = document.getElementById('szininditas');
    const szinmegallitasGomb = document.getElementById('szinmegallitas');

    let szinek = Array.from(szinvalasztoInputok).map(input => input.value);
    let index = 0;
    let timer = null;

    function valtogatSzin() {
        if (szinek.length === 0) return;
        document.body.style.backgroundColor = szinek[index];
        index = (index + 1) % szinek.length;
    }

    // Ha a felhasználó változtatja a színeket
    szinvalasztoInputok.forEach((input, i) => {
        input.addEventListener('input', () => {
            szinek[i] = input.value;
        });
    });

    // Indítás gomb
    szininditasGomb.addEventListener('click', () => {
        if (timer) clearInterval(timer);

        // Azonnal vált egyet, hogy ne kelljen várni az első intervallumra
        valtogatSzin();

        timer = setInterval(() => {
            // Biztosítsuk, hogy a szinidokoz szám legyen
            const idokoz = Number(szinidokozInput.value);
            if (!isNaN(idokoz) && idokoz > 0) {
                valtogatSzin();
            }
        }, szinidokozInput.value * 1000);
    });

    // Megállítás gomb
    szinmegallitasGomb.addEventListener('click', () => {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    });

});

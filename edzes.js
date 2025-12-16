document.addEventListener('DOMContentLoaded', () => {
    
    let percek = document.getElementById('percek');
    let masodpercek = document.getElementById('masodpercek');
    let visszaszamlalokijelzo = document.getElementById('visszaszamlalokijelzo');
    let inditas = document.getElementById('inditas');
    let szunet = document.getElementById('szunet');
    let alaphelyzet = document.getElementById('alaphelyzet');
    let visszaszamlalostatusz = document.getElementById('visszaszamlalostatusz');

    let visszaszamalloido = 0;
    let visszaszamlaloidozito = 0;

    inditas.addEventListener('click', () => {
        if (visszaszamlaloidozito) {
            clearInterval(visszaszamlaloidozito);
        }

        if (visszaszamalloido === 0) {
            let beirtPercek = percek.value;
            let beirtMasodpercek = masodpercek.value;
            beirtPercek = parseInt(beirtPercek);
            beirtMasodpercek = parseInt(beirtMasodpercek);
            visszaszamalloido = beirtPercek * 60 + beirtMasodpercek;
        }

        visszaszamlalokijelzo.textContent = visszaszamalloido;
        visszaszamlalostatusz.textContent = "Fut...";

        visszaszamlaloidozito = setInterval(() => {
            if (visszaszamalloido > 0) {
                visszaszamalloido = visszaszamalloido - 1;
                visszaszamlalokijelzo.textContent = visszaszamalloido;
            } else {
                clearInterval(visszaszamlaloidozito);
                visszaszamlaloidozito = 0;
                visszaszamlalostatusz.textContent = "Vége!";
            }
        }, 1000);
    });

    szunet.addEventListener('click', () => {
        if (visszaszamlaloidozito) {
            clearInterval(visszaszamlaloidozito);
            visszaszamlaloidozito = 0;
            visszaszamlalostatusz.textContent = "Szünet";
        }
    });

    alaphelyzet.addEventListener('click', () => {
        if (visszaszamlaloidozito) {
            clearInterval(visszaszamlaloidozito);
            visszaszamlaloidozito = 0;
        }
        visszaszamalloido = 0;
        visszaszamlalokijelzo.textContent = "0";
        visszaszamlalostatusz.textContent = "Készen";
    });
    
    let edzeskijelzo = document.getElementById('edzeskijelzo');
    let aktualisgyakorlatnev = document.getElementById('aktualisgyakorlatnev');
    let kovetkezoggyakorlat = document.getElementById('kovetkezogyakorlat');
    let edzesinditas = document.getElementById('edzesinditas');
    let edzesszunet = document.getElementById('edzesszunet');
    let edzesleallitas = document.getElementById('edzesleallitas');

    let gyakorlatok = [
        { nev: "Felkészüles", ido: 10 },
        { nev: "Gyakorlat 1", ido: 30 },
        { nev: "Pihenő 1", ido: 10 },
        { nev: "Gyakorlat 2", ido: 30 },
        { nev: "Pihenő 2", ido: 10 },
        { nev: "Gyakorlat 3", ido: 30 }
    ];

    let aktualisindex = 0;
    let edzesidozito = 0;
    let edzesido = 0;

    edzesinditas.addEventListener('click', () => {
        if (edzesidozito) {
            clearInterval(edzesidozito);
        }

        if (edzesido == 0) {
            aktualisindex = 0;
            edzesido = gyakorlatok[0].ido;
        }

        edzeskijelzo.textContent = edzesido;
        aktualisgyakorlatnev.textContent = gyakorlatok[aktualisindex].nev;

        edzesidozito = setInterval(() => {
            edzesido = edzesido - 1;

            if (edzesido > 0) {
                edzeskijelzo.textContent = edzesido;
            } else {
                aktualisindex = aktualisindex + 1;

                if (aktualisindex >= gyakorlatok.length) {
                    clearInterval(edzesidozito);
                    edzesidozito = 0;
                    kovetkezoggyakorlat.textContent = "Vége!";
                } else {
                    edzesido = gyakorlatok[aktualisindex].ido;
                    edzeskijelzo.textContent = edzesido;
                    aktualisgyakorlatnev.textContent = gyakorlatok[aktualisindex].nev;
                }
            }
        }, 1000);
    });

    edzesszunet.addEventListener('click', () => {
        if (edzesidozito) {
            clearInterval(edzesidozito);
            edzesidozito = 0;
        }
    });

    edzesleallitas.addEventListener('click', () => {
        if (edzesidozito) {
            clearInterval(edzesidozito);
            edzesidozito = 0;
        }
        aktualisindex = 0;
        edzesido = gyakorlatok[0].ido;
        edzeskijelzo.textContent = edzesido;
        aktualisgyakorlatnev.textContent = gyakorlatok[0].nev;
    });


    let szinvalasztoInputok = document.querySelectorAll('.szinvalaszto');
    let szinidokozInput = document.getElementById('szinidokoz');
    let szininditasGomb = document.getElementById('szininditas');
    let szinmegallitasGomb = document.getElementById('szinmegallitas');

    let szinek = [];
    let szinIndex = 0;
    let szinidozito = 0;

    for (let i = 0; i < szinvalasztoInputok.length; i++) {
        szinek[i] = szinvalasztoInputok[i].value;
    }

    function valtogatSzin() {
        document.body.style.backgroundColor = szinek[szinIndex];
        szinIndex = szinIndex + 1;
        
        if (szinIndex >= szinek.length) {
            szinIndex = 0;
        }
    }

    for (let i = 0; i < szinvalasztoInputok.length; i++) {
        szinvalasztoInputok[i].addEventListener('input', () => {
            szinek[i] = szinvalasztoInputok[i].value;
        });
    }

    szininditasGomb.addEventListener('click', () => {
        if (szinidozito) {
            clearInterval(szinidozito);
        }

        valtogatSzin();

        szinidozito = setInterval(() => {
            valtogatSzin();
        }, szinidokozInput.value * 1000);
    });

    szinmegallitasGomb.addEventListener('click', () => {
        if (szinidozito) {
            clearInterval(szinidozito);
            szinidozito = 0;
        }
    });
});
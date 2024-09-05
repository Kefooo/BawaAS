/*navngir inputboksene for export til html*/
const form = document.getElementById('form');
const fornavn = document.getElementById('fornavn');
const etternavn = document.getElementById('etternavn');
const mobilnummer = document.getElementById('mobilnummer');
const adresse = document.getElementById('adresse');
const alder = document.getElementById('alder');


form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});
/*definerer error og suksess*/
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')}
/*lager regler for input i de forskjellige inputboksene */
const validateInputs = () => {
    let ok = true;
    const fornavnValue = fornavn.value.trim();
    const etternavnValue = etternavn.value.trim();
    const adresseValue = adresse.value.trim();
    const alderValue = alder.value.trim();
    const mobilnummerValue = mobilnummer.value.trim();

    if(fornavnValue === '') {
        ok = false;
        setError(fornavn, 'Skriv inn fornavn');
    }
    else {setSuccess(fornavn);
    }

    if(etternavnValue === '') {
        ok = false;
        setError(etternavn, 'Skriv inn etternavn');
    }
         else { setSuccess(etternavn);
        }

    if(alderValue === '') {
        ok = false;
        setError(alder, 'Skriv inn din alder');
    }
        else if (alderValue < 0) {
        ok = false;
        setError(alder, 'Skriv inn en gyldig alder')
    }
        else if (alderValue > 150) {
        ok = false;
        setError(alder, 'Skriv inn en gyldig alder')
    }
        else {
        setSuccess(alder);
    }

    if(adresseValue === '') {
        ok = false;
        setError(adresse, 'Skriv inn adresse');
    }
        else {setSuccess(adresse);
    }


    if(mobilnummerValue === '') {
        ok = false;
        setError(mobilnummer, 'Skriv inn mobilnummer');
    }
        else if (mobilnummerValue < 10000000 ) {
        ok = false;
        setError(mobilnummer, 'Skriv inn et gyldig mobilnummer');
    }
        else if (mobilnummerValue > 99999999 ) {
        ok = false;
        setError(mobilnummer, 'Skriv inn et gyldig mobilnummer');
    }
        else {setSuccess(mobilnummer);}
    /*linker til bekreftelsessiden hvis alle data er gyldige*/
        if(ok){location.href="bekreft.html"
    }
};

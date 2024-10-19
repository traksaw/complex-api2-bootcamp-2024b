document.querySelector('#learnBtn').addEventListener('click', getMyWord)
function getMyWord() {
    const urlUno = `https://api.api-ninjas.com/v1/randomword`
    const options = {
        method: 'GET',
        headers: {
            'x-Api-key': 'EXyOyn6Z1ROLqILk1NbYYA==3uQH1TRzZMveYzWa',
        },
        contentType: 'application/json',
    };

    fetch(urlUno, options)
        .then(res => res.json())
        .then(data => {
            const randomWord = data.word[0]
            document.querySelector('#enWord').textContent = `English : ${randomWord}`

            const API_KEY = 'AIzaSyBBIWOfLS66A_xmW1y9uSgobGNLIvs2v_I';

            const sourceLang = 'en';

            const targetLang = 'es';

            const text = 'Hello, world!';

            const urlDos = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&source=${sourceLang}&target=${targetLang}&q=${randomWord}`;

            fetch(urlDos)

                .then(response => response.json())

                .then(data => {
            

                    const translatedText = data.data.translations[0].translatedText;

                    document.querySelector('#esWord').textContent = `Español : ${translatedText}`; // "Bonjour, le monde!"

                });

        });
}


// const API_KEY = 'AIzaSyBBIWOfLS66A_xmW1y9uSgobGNLIvs2v_I';

// const sourceLang = 'en';

// const targetLang = 'ar';

// const text = 'Hello, world!';

// const urlDos = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&source=${sourceLang}&target=${targetLang}&q=${randomWord}`;

// fetch(urlDos)

// .then(response => response.json())

// .then(data => {

// const translatedText = data.data.translations[0].translatedText;

// console.log(translatedText); // "Bonjour, le monde!"

// });
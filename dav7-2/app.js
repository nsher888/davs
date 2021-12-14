const url = 'https://api.quotable.io/random';
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const btn = document.querySelector('.btn');



async function quoteGenerator() {
    try {
        const response = await axios.get(url)
        quote.innerText = response.data.content;
        author.innerText = response.data.author;

    } catch (error) {
        const text = document.body;
        const p = document.createElement('p');
        p.textContent = error;
        text.appendChild(p);
        return error;
    }
}


btn.addEventListener('click', quoteGenerator)
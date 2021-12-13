const url1 = 'https://fakerapi.it/api/v1/images?_quantity=4&_type=kittens&_height=480'


async function magicKittens() {
    try {
        const response = await fetch(url1);
        const data = await response.json();
        const grid = document.querySelector('.grid');
        data.data.forEach(element => {
            const img = document.createElement('img');
            img.src = element.url;
            grid.appendChild(img);
        })

    } catch (error) {
        const text = document.body;
        const p = document.createElement('p');
        p.textContent = error;
        text.appendChild(p);
        return error;
    }
}


magicKittens();
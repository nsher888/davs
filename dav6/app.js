fetch('https://fakerapi.it/api/v1/images?_quantity=15&_type=kittens&_height=480')
    .then(response => {
        return response.json();
    })
    .then(returnedResponse => {
        if (returnedResponse.code === 200) {
            const grid = document.querySelector('.grid')
            returnedResponse.data.forEach(element => {
                const img = document.createElement('img');
                img.src = element.url;
                grid.appendChild(img);
            });
        } else {
            throw 'No kittens found :( Error code ' + returnedResponse.code;
        }
    })
    .catch(error => {
        const text = document.body;
        const p = document.createElement('p');
        p.textContent = error;
        text.appendChild(p);
        return error;
    })
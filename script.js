const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';

function buscarCocktail() {
    const coctelABuscar = document.getElementById('coctelInput').value;
    const url = `${apiUrl}s=${coctelABuscar}`;

    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error en la solicitud');
            }
        })
        .then((data) => {
            const resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = '';

            if (data.drinks && data.drinks.length > 0) {
                const coctelEncontrado = data.drinks[0];
                const nombre = coctelEncontrado.strDrink;
                const ingredientes = coctelEncontrado.strIngredients;
                const instrucciones = coctelEncontrado.strInstructions;

                const nombreElement = document.createElement('h2');
                nombreElement.textContent = `Nombre del cóctel: ${nombre}`;
                resultadoDiv.appendChild(nombreElement);

                const ingredientesElement = document.createElement('p');
                ingredientesElement.textContent = `Ingredientes: ${ingredientes}`;
                resultadoDiv.appendChild(ingredientesElement);

                const instruccionesElement = document.createElement('p');
                instruccionesElement.textContent = `Instrucciones: ${instrucciones}`;
                resultadoDiv.appendChild(instruccionesElement);
            } else {
                resultadoDiv.textContent = `No se encontraron cócteles con el nombre '${coctelABuscar}'.`;
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

const buscarBtn = document.getElementById('buscarBtn');
buscarBtn.addEventListener('click', buscarCocktail);

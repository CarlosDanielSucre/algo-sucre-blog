// IDs del input y contenedor de resultados
const searchInputId = 'search-input';
const searchResultsId = 'search-results';

// Crear contenedor para resultados si no existe
let resultsContainer = document.getElementById(searchResultsId);
if (!resultsContainer) {
    resultsContainer = document.createElement('div');
    resultsContainer.id = searchResultsId;
    resultsContainer.style.position = 'absolute';
    resultsContainer.style.backgroundColor = '#fff';
    resultsContainer.style.border = '1px solid #ddd';
    resultsContainer.style.maxHeight = '300px';
    resultsContainer.style.overflowY = 'auto';
    resultsContainer.style.width = '250px';
    resultsContainer.style.zIndex = '1000';

    const input = document.getElementById(searchInputId);
    input.parentNode.style.position = 'relative';
    input.parentNode.appendChild(resultsContainer);
}

let posts = [];

// Cargar JSON con todos los posts
fetch('/index.json')
    .then(response => response.json())
    .then(data => posts = data)
    .catch(err => console.error('Error cargando posts para búsqueda:', err));

// Función para renderizar resultados
function renderResults(results) {
    resultsContainer.innerHTML = '';
    if (results.length === 0) {
        resultsContainer.style.display = 'none';
        return;
    }
    resultsContainer.style.display = 'block';

    results.forEach(post => {
        const link = document.createElement('a');
        link.href = post.url;
        link.textContent = post.title;
        link.style.display = 'block';
        link.style.padding = '5px 10px';
        link.style.textDecoration = 'none';
        link.style.color = '#333';
        link.addEventListener('mouseover', () => link.style.backgroundColor = '#f0f0f0');
        link.addEventListener('mouseout', () => link.style.backgroundColor = '#fff');
        resultsContainer.appendChild(link);
    });
}

// Evento de búsqueda en tiempo real
document.getElementById(searchInputId).addEventListener('input', function() {
    const query = this.value.toLowerCase();
    if (!query) {
        resultsContainer.style.display = 'none';
        return;
    }

    const results = posts.filter(p =>
        p.title.toLowerCase().includes(query) ||
        (p.summary && p.summary.toLowerCase().includes(query))
    );

    renderResults(results);
});

let searchInput = document.getElementById('search-input');
let posts = [];

fetch('/index.json')
  .then(response => response.json())
  .then(data => posts = data);

searchInput.addEventListener('input', function() {
  let query = this.value.toLowerCase();
  let results = posts.filter(p => p.title.toLowerCase().includes(query) || p.summary.toLowerCase().includes(query));
  
  // Mostrar resultados en consola por ahora
  console.log(results);
});

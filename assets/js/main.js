const formulario = document.querySelector("form");
const keyApi = "422d08ad";
const inputPesquisar = document.querySelector(".pesquisar");
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const pesquisar = inputPesquisar.value;
  const select = event.target.categoria.value;

  if (pesquisar === "") {
    alert("Preencha o campo!");
    return;
  }
  if (select === "Selecione uma categoria") {
    alert("Selecione uma categoria!");
    return;
  }

  fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=${keyApi}&s=${pesquisar}&type=${select}`
  )
    .then((result) => result.json())
    .then((json) => carregaLista(json));
});

const carregaLista = (json) => {
  const lista = document.querySelector(".lista");
  lista.innerHTML = "";

  if (json.Response === "False") {
    alert("Nenhum filme foi encontrado!");
    return;
  }

  json.Search.forEach((element) => {
    console.log(element);
    const item = createDiv();
    item.classList.add("item");

    item.innerHTML = `<img src="${element.Poster}"/><h2>${element.Title}</h2>`;
    lista.appendChild(item);
  });
};

function createDiv() {
  const div = document.createElement("div");
  return div;
}

import './init-filter.scss'

// create button 
const createBtn = (name,label)=>{
  var btn = document.createElement('button');
  btn.className = name==='Sin servicio'? "btn btn-sm btn-light btn-filter checked":"btn btn-sm btn-light btn-filter";
  btn.setAttribute('type','button');
  btn.setAttribute('data-filter',label);
  btn.innerText = name;
  return btn
}

// create card
const createCard = (title,col) =>{
  var card = document.createElement('div');
  card.className = "card";
  col.appendChild(card);

  var cardb = document.createElement('div');
  cardb.className = "card-body";
  card.appendChild(cardb);

  var cardh = document.createElement('h5');
  cardh.className = "card-title";
  cardh.innerText = title;
  cardb.appendChild(cardh);

  var cardbtn = document.createElement('div');
  cardbtn.className = "btn-group";
  cardbtn.setAttribute('role','group');
  cardbtn.setAttribute('data-filter-group',title);
  cardbtn.setAttribute('aria-label',title)
  cardb.appendChild(cardbtn);

  cardbtn.appendChild(createBtn('Reportado','report'));
  cardbtn.appendChild(createBtn('Solución particular','partsolution'));
  cardbtn.appendChild(createBtn('Sin servicio','noservice'));

  return card;
}
// create responsive cards
const createFilterCard =(title) => {
  var filters = document.getElementById('filters_row');
  // create responsive div columns
  var col = document.createElement("div");
  // last card full width
  title==='Energia'?col.className = "col-lg-12 col-sm-12 mb-1":col.className = "col-lg-6 col-sm-12 mb-1";
  filters.appendChild(col);
  // create card
  col.appendChild(createCard(title,col));
}
// define cards
function initFilters(){
  createFilterCard('Acueducto');
  createFilterCard('Alcantarillado');
  createFilterCard('Aseo');
  createFilterCard('Gas');
  createFilterCard('Energia');
};

// on dom load, create filters
if( document.readyState !== 'loading' ) {
    initFilters();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        initFilters();
    });
}

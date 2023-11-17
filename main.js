// const suggest = [abaissa, abaissable, abaissai, abaissaient, abaissais, abaissait, abaissâmes, abaissant, abaissante, abaissantes, abaissants, abaissas, abaissasse, abaissassent, abaissasses, abaissassiez, abaissassions, abaissât, abaissâtes, abaisse, abaissé, abaissée, abaissées, abaisse-langue, abaissement, abaissements, abaissent, abaisser, abaissera];

const mots = [
  'chat', 'chien', 'maison', 'ordinateur', 'soleil', 'forêt', 'montagne', 'rivière', 'plage', 'étoile', 'aventure', 'pizza', 'livre', 'musique', 'voyage', 'famille', 'amour', 'jardin', 'sourire', 'courage', 'énergie', 'bonheur', 'rêve', 'arc-en-ciel', 'espoir', 'créativité', 'passion', 'calme', 'inspiration'
];

const div = document.querySelector('#suggest')

const input = document.querySelector('input');

input.addEventListener('input', (event) => {
  // console.log(event.data);
  // console.log(event.target.value);
  // console.log(input.value);

  const results = search(event.target.value, mots);
  console.log(results);

  let list = "";

  for(let i = 0; i < results.length; i++) {
    list += "<li>" + results[i] + "</li>";
  }
  div.innerHTML = list;
});

const search = (str, wordList) => {
  const results = [];
  if(str.length === 0) {
    return results;
  }

  for(let i = 0; i < wordList.length; i++) {
    const item = wordList[i];
    if(item.toUpperCase().startsWith(str.toUpperCase())) {
      results.push(item);
    }
  }
  return results;
}
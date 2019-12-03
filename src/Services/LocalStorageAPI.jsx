async function catchData(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export const getCategories=() => catchData(`https://api.mercadolibre.com/sites/MLB/categories`)
  .then((response)=>response)
  .catch((error)=>error);

export const getItensByTerm=(term) => catchData(`https://api.mercadolibre.com/sites/MLB/search?q=${term}`)
  .then((response)=>response)
  .catch((error)=>error);

export const getItensByCategoryId=(categoryId) => catchData(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)
  .then((response)=>response)
  .catch((error)=>error);

export const getItensByCategoryTerm=(categoryId, term) => catchData(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${term}`)
  .then((response)=>response)
  .catch((error)=>error);

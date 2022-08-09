const fetchProducts = async (computador) => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
 const response = await fetch(url);
 const { results } = await response.json();
 if (!computador) {
   throw new Error('You must provide an url');
  }
  return results;
};
fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

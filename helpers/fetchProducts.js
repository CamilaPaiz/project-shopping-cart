const fetchProducts = async (computador) => {
 try {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
} catch (error) {
  return new Error('You must provide an url');
}
};

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

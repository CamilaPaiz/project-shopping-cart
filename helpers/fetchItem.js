const fetchItem = async (id) => {
  try {
  const url = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(url);
  const responseApi = await response.json();
  return responseApi;
  } catch (error) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}

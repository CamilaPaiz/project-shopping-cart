const fetchItem = async (id) => {
  try {
  const url = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(url);
  const { item } = await response.json();
  return item;
  } catch (error) {
    return new Error('You must provide an url');
  }
};
console.log(fetchItem('MLB1341706310'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}

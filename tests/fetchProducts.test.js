require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Teste se fetchProducts é uma função',() => {
    expect((typeof fetchProducts)).toBe('function');
  });

  it('Teste se ao passar o parâmetro computador fetch é chamada',async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('Teste se ao passar o argumento computador a função fetch utiliza o endpoint correto', async () => {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=computador`;
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('Teste se o retorno da função com o argumento computador é igual ao objeto computadorSearch', async () => {
    const responseApi = await fetchProducts('computador');
    expect(responseApi).toEqual(computadorSearch.results)
  });

  it('Teste se, ao chamar a função sem argumento,retorna a mensagem -You must provide an url', async () => { 
    const failRequest = await fetchProducts();
    expect(failRequest).toEqual(new Error('You must provide an url'));
   });
});

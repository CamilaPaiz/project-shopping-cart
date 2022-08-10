require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Teste de fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  
  it('Teste se ao receber o argumento, MLB1615760527, fetch é chamada', async () =>{
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('Teste se ao chamar a função com o argumento,MLB1615760527, a função fetch utiliza o endpoint correto', async () =>{
    const url ='https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('Teste se o retorno da função fetchItem com argumento,MLB1615760527, é um objeto igual a item', async () => {
    const responseApi = await fetchItem('MLB1615760527');
    expect(responseApi).toEqual(item.results);
  });

  it('Teste se ao chamar a função sem argumento, retorna o erro, You must provide an url', async () => {
   const failRequest = await fetchItem();
    expect(failRequest).toEqual(new Error('You must provide an url'));
  });

});

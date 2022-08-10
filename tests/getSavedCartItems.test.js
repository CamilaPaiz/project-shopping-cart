const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Teste se ao executar a função o método localStorage.getItem é chamado',() =>{
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('Teste se ao executar a função o método localStorage.getItem é chamado com cartItems', () =>{
    getSavedCartItems('cartItems')
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
  
});

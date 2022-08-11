const productSection = document.querySelector('.items');
const productCartArea = document.querySelector('.cart__items');
const loadingMessageArea = document.querySelector('.container');
const buttonClean = document.querySelector('.empty-cart');
const textCounter = document.querySelector('.container-cartTitle');
const messageLoading = document.querySelector('.loading');

const selectedProduct = [];

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};
// https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/removeEventListener
const cartItemClickListener = (event) => {
 event.target.remove();
};

buttonClean.addEventListener('click', function () {
  productCartArea.innerHTML = '';
});

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const addProductInCart = async (event) => {
  const product = getSkuFromProductItem(event.target.parentElement);
  const fetchItems = await fetchItem(product);
  
    const info = { sku: fetchItems.id, name: fetchItems.title, salePrice: fetchItems.price };
    const addedProduct = createCartItemElement(info);
    console.log(addedProduct);
    productCartArea.appendChild(addedProduct);
    // const valor = event.target.salePrice;
    // console.log(valor)
    saveCartItems('cartItems', addedProduct.innerHTML);
  };

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  button.addEventListener('click', addProductInCart);
  section.appendChild(button);

  return section;
};

// requisito 9

// let counter =0;
// const showCounter = document.createElement ('h3')
// showCounter.className ='total-price';
// showCounter.innerHTML =`valor total dos produtos: `
// textCounter.appendChild(showCounter);
// função para calcular o valor do saldo total e mostrar no innerHTML,faz requisição da api do addProductIncart
// const counterPrice = async ()=> {

// }

function messageRender() {
  const message = document.createElement('h2');
  message.className = 'loading';
  message.innerHTML = 'carregando...';
  loadingMessageArea.appendChild(message);
  setTimeout(() => {
  loadingMessageArea.removeChild(message);
}, 1000);
  }

  // function removeMessage() {
  //  loadingMessageArea.removeChild(messageLoading)
   
  // }

const renderProducts = async () => {
  messageRender();

const fetchProduct = await fetchProducts('computador');

fetchProduct.forEach((computer) => {
  const infos = { sku: computer.id, name: computer.title, image: computer.thumbnail };
  const newProduct = createProductItemElement(infos);
 productSection.appendChild(newProduct);
});
};

window.onload = async () => {
 await renderProducts();
 getSavedCartItems('cartItems');
 };

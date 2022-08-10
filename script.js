const productSection = document.querySelector('.items');
const productCartArea = document.querySelector('.cart__items');
const buttonAddInCart = document.querySelector('.item__add');
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

const cartItemClickListener = (event) => {
 
};

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
console.log(fetchItems);
  
    const info = { sku: fetchItems.id, name: fetchItems.title, salePrice: fetchItems.price };
    const addedProduct = createCartItemElement(info);
    console.log(addedProduct);
    productCartArea.appendChild(addedProduct);
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

// requisito2

const renderProducts = async () => {
const fetchProduct = await fetchProducts('computador');

fetchProduct.forEach((computer) => {
  const infos = { sku: computer.id, name: computer.title, image: computer.thumbnail };
  const newProduct = createProductItemElement(infos);

  productSection.appendChild(newProduct);
});
};

window.onload = async () => {
 await renderProducts();
 };

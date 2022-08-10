const productSection = document.querySelector('.items');
const productCart = document.querySelector('.cart__items');
const productInCart = [];

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

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
// requisito4
const addCart = async (id) => {
  const fetchItems = await fetchItem(id);
  const info = { sku: computer.id, name: computer.title, salePrice: computer.price };
  const addedProduct = createCartItemElement(info);
  console.log(addedProduct);
  productCart.appendChild(addedProduct);
};

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

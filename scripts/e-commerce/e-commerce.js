// Carrito de compras

const btnAggCartList = document.querySelectorAll(".btnAggCart");
const displayData = document.querySelector("#displayData");
const totalDisplay = document.querySelector("#totalPrice");
let total = 0;

// Recuperar los artículos guardados en el LocalStorage
document.addEventListener("DOMContentLoaded", () => {
  let savedPhones = Object.keys(localStorage).filter(key => key.startsWith('phone-')).map(key => JSON.parse(localStorage.getItem(key)));
  for (let i = 0; i < savedPhones.length; i++) {
    const { id, model, price } = savedPhones[i];
    // Datos del carrito
    const phoneItem = document.createElement("div");
    // Esto se muestra en el carrito
    phoneItem.innerHTML = `
      <span>Modelo: ${model}</span>
      <br>
      <span>Precio: $${price.toFixed(2)}</span>
      <button class="removeBtn" data-phone-id="${id}">X</button>
    `;
    displayData.appendChild(phoneItem);
    total += price;
    totalDisplay.innerHTML = `Total: $${total.toFixed(2)}`;
  }
});

function searchPhones(id) {
  const phone = Phones.find((phone) => phone.id === id);
  if (phone) {
    const { id, model, price } = phone;

    // Verificar si ya hay 3 productos en el carrito
    const itemsInCart = displayData.querySelectorAll("div").length;
    if (itemsInCart >= 3) {
      alert("Solo se pueden agregar 3 productos. Si necesitas agregar otro, elimina alguno o haz otra compra después.");
      return;
    }

    const phoneItem = document.createElement("div");
    phoneItem.innerHTML = `
      <span>Modelo: ${model}</span>
      <br>
      <span>Precio: $${price.toFixed(2)}</span>
      <button class="removeBtn" data-phone-id="${id}">X</button>
    `;
    const confirmAdd = confirm("¿Seguro que quiere agregar al Carrito?");
    if (confirmAdd) {
      displayData.appendChild(phoneItem);
      total += price;
      totalDisplay.innerHTML = `Total: $${total.toFixed(2)}`;
      // Guardar el artículo en el LocalStorage
      const phoneInfo = {id, model, price};
      localStorage.setItem('phone-' + id, JSON.stringify(phoneInfo));
    }
  }
}

btnAggCartList.forEach((btnAggCart) => {
  btnAggCart.addEventListener("click", () => {
    const phoneId = btnAggCart.dataset.phoneId;
    searchPhones(parseInt(phoneId));
  });
});

// Eliminar producto
displayData.addEventListener("click", (event) => {
  if (event.target.classList.contains("removeBtn")) {
    const confirmRemove = confirm("¿Seguro que quiere eliminar este teléfono del Carrito?");
    if (confirmRemove) {
      const phoneId = event.target.dataset.phoneId;
      const phoneItem = event.target.parentNode;
      const phonePrice = Phones.find((phone) => phone.id === parseInt(phoneId)).price;
      total -= phonePrice;
      totalDisplay.innerHTML = `Total: $${total.toFixed(2)}`;
      phoneItem.parentNode.removeChild(phoneItem);
      // Eliminar el artículo del almacenamiento local
      localStorage.removeItem('phone-' + phoneId);
    }
  }
});
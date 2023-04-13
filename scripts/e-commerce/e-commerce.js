const btnAggCartList = document.querySelectorAll(".btnAggCart");
const displayData = document.querySelector("#displayData");
const totalDisplay = document.querySelector("#totalPrice");
let total = 0;

function searchPhones(id) {
  const phone = Phones.find((phone) => phone.id === id);
  if (phone) {
    const { id, model, price } = phone;
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
    }
  }
}

btnAggCartList.forEach((btnAggCart) => {
  btnAggCart.addEventListener("click", () => {
    const phoneId = btnAggCart.dataset.phoneId;
    searchPhones(parseInt(phoneId));
  });
});

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
    }
  }
});

const btnAggCartList = document.querySelectorAll(".btnAggCart");
const displayData = document.querySelector("#displayData");
const totalDisplay = document.querySelector("#totalPrice");
let total = 0;

function searchPhones(id) {
  const phone = Phones.find((phone) => phone.id === id);
  if (phone) {
    const { model, price } = phone;
    const phoneItem = document.createElement("div");
    phoneItem.innerHTML = `<span>Modelo: ${model}</span><br><span>Precio: $${price.toFixed(2)}</span>`;
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

const btnAggCartList = document.querySelectorAll('.btnAggCart');
const displayData = document.querySelector('#displayData');
const totalDisplay = document.querySelector('#totalPrice');
let total = 0;

function searchPhones(id) {
  const phone = Phones.find(phone => phone.id === id);
  if (phone) {
    const { model, price } = phone;
    const data = `Modelo: ${model}, Precio: $${price.toFixed(2)}`;
    displayData.innerHTML += data + "<br>";
    total += price;
    totalDisplay.innerHTML = `Total: $${total.toFixed(2)}`;
  } else {
    console.log(`No se encontró el teléfono con ID ${id}`);
  }
}

btnAggCartList.forEach(btnAggCart => {
  btnAggCart.addEventListener('click', () => {
    const phoneId = btnAggCart.dataset.phoneId;
    searchPhones(parseInt(phoneId));
  });
});

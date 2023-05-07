// Muestra de data de cada telefono

const phoneInfos = document.querySelectorAll('.phone-info'); // Buscamos todos los elementos con la clase 'phone-info'

phoneInfos.forEach(phoneInfo => { // Iteramos sobre cada elemento 'phone-info'
  const phoneId = Number(phoneInfo.getAttribute('phone-id')); // Obtenemos el ID del teléfono del atributo personalizado 'phone-id'
  const phone = Phones.find(p => p.id === phoneId); // Buscamos el objeto del teléfono correspondiente en el array 'Phones'

  if (phone) { // Si encontramos el objeto del teléfono
    phoneInfo.querySelector('p:nth-of-type(1)').textContent += ` ${phone.memory}`;
    phoneInfo.querySelector('p:nth-of-type(2)').textContent += ` ${phone.bateryUseful}`;
    phoneInfo.querySelector('p:nth-of-type(3)').textContent += ` ${phone.price}`;
  }
});
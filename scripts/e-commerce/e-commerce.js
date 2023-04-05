const cart = []

const descendingOrder = () => {
    Phones.sort((a, b) => b.price - a.price);
    listOrder();
};

const listOrder = () => {
    const listOrder = productos.map((phone) => {
        return "- " + phone.model + " $" + phone.price;
    });
    alert("Lista de Precios: " + "\n\n" + listOrder.join("\n"));
    comprarProductos(listOrder);
};

const buyPhone = (Phones) => {
    let model = document.querySelector(".btn_carrito")
    model.addEventListener("click", function (){
        if (cart) {
            
        }
    })
    let price = 0

    do {
        model = addEventListener("")
    } while (condition);
}

const addCart = (phone.id, phone.model, phone.price) => {

}
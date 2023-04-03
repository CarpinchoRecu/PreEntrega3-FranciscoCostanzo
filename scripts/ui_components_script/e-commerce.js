class Phone {
    mold(brand, model, memory, bateryUseful, price) {
        this.brand = brand;
        this.model = model;
        this.memory = memory;
        this.bateryUseful = bateryUseful;
        this.price = price;
    }
}

const phone1 = new Phone("Iphone", "6", "100gb", "100%", 650);
const phone2 = new Phone("Iphone", "7", "150gb", "92%", 710);
const phone3 = new Phone("Iphone", "8", "180gb", "86%", 790);
const phone4 = new Phone("Iphone", "14", "250gb", "98%", 1000);

console.log(phone2);


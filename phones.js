const phones = [
    {
        id: 1,
        name: "iPhone",
        maker: "Apple, Inc.",
        operatingSystem: "iOS",
        price: 900,
        weight: 1.2
    },
    {
        id: 2,
        name: "Galaxy",
        maker: "Samsung",
        operatingSystem: "Android",
        price: 600,
        weight: 1.4
    }
] 

const pixel = {
    name: "Pixel",
    maker: "Google",
    operatingSystem: "Android",
    price: 399,
    weight: 1.2
}

phones.push(pixel)


const addPhoneToInventory = (phoneObject) => {
    const lastIndex = phones.length - 1
    const currentLastPhone = phones[lastIndex]
    const maxId = currentLastPhone.id
    const idForNewPhone = maxId + 1

    phoneObject.id = 4
    phones.push(phoneObject)
}

addPhoneToInventory(pixel)

// Display all the phones
console.log(phones);
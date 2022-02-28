function addressmaker(address) {
    const newaddress = {
        city: address.city,
        state: address.state,
        country: "India"
    };
}
addressmaker({ city: 'austin', state: 'texas' })

function addressmaker(address) {
    const newaddress = {
        city: address.city,
        state: address.state,
        country: "India"
    };
    console.log(newaddress);

}
addressmaker({ city: 'hyd', state: 'ts' })

function addressmaker(address) {
    const { city, state } = address;
    const newaddress = {
        city,
        state,
        country: 'india'
    }
    console.log(`${newaddress.city} ${newaddress.state} ${newaddress.country}`)
}
addressmaker({ city: 'edo', state: 'kerala' }) 
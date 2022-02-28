//if the new object is having the same key as the old one no need to again initialize it
function addressmaker(city, state) {
    var newaddress = { newcity: city, newstate: state }
    var addr = { city, state }
    console.log(addr)
    console.log(newaddress)
}
addressmaker("hyderabad", "telangana");
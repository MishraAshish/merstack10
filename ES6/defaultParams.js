// default params - are the parameter values that we set as default at the time of function definition

// var name = undefined
// var price = undefined
// var brandValue = undefined

function GetVehicleDetails(name = "Default Vehicle", price = "$0", brandValue = "Default Normal") {
    console.log(`
        Name : ${name}
        Price : ${price}
        Brand Value : ${brandValue}    
    `)
}

GetVehicleDetails();
GetVehicleDetails("BMW", "$5000", "Amazing");
GetVehicleDetails("Toyota","$5000");


function Divide(param1 = 1, param2 = 1) {
    //return isNaN(param1/param2);
    return param1/param2;
}

console.log(Divide())

console.log(Divide(80, -80))
//We have a different type of functions that we can use to behave like class and this kind of function definition
//is termed as constructor function

var funcAsClass = function(name, age, address){
    //this : is the scope of function in which it executes (this - keyword)
    this.name = name;
    this.age = age;
    this.address = address;

    this.getUserDetails = function (isAdmin) {
        return {
            name : this.name,
            age : this.age
        }
    }
}

var objOfFuncConstructor = new funcAsClass("Toan", 19.6, "Somewhere on earth")

console.log(objOfFuncConstructor.address);
console.log(objOfFuncConstructor.getUserDetails())

//using protoype we can add properties in child class or object
//objOfFuncConstructor.__proto__.hobbies
objOfFuncConstructor.hobbies = "Reading, Playing Soccer";

objOfFuncConstructor.getHobbies = function (params) {
    console.log("Hobbies are "+ this.hobbies)
}

objOfFuncConstructor.getHobbies()
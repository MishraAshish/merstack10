// callback functions are the functions that we can pass as parameter to another function 
// the best part is call back function not just hold the definition, but also keep hold the scope

var someGlobalValue = 1500;

function Print(params) {
    console.log("We are printing "+someGlobalValue+" "+ params)
}

function PrintB(params) {
    console.log("We are printing B "+ params)
}


function GetUserName(PrintCallBk, username){
    //console.log(username)
    PrintCallBk(username)
}

function GetUserAge(PrintCallBk, userAge){
    //console.log(userAge)
    PrintCallBk(userAge)
}

// GetUserName("toan")
//GetUserAge(22)

GetUserName(Print, "toan")
GetUserAge(PrintB, 22)

//by using callback function print user details
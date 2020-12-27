var employee = {
    firstName: "",
    lastName: "",
    age: ""
};


function getValuesFromInputs(){
    var fName = document.getElementById("fNameInput").value;
    var lName = document.getElementById("lNameInput").value;
    var age = document.getElementById("ageInput").value;

    employee.firstName = fName;
    employee.lastName = lName;
    employee.age = age;
}



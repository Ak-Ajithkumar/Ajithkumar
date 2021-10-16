function company(employee){
    let salaryPackage = 25000;
    return function(){
        employee.salary = salaryPackage
        console.log(`${employee.name} salary is ${employee.salary}`);
    }
}
let employee1 = {
    name :"Ajith kumar",
    salary : undefined
}
company = company(employee1)
company()
var  employee = 	[
    {EmployeeID:10, EmployeeName: "jaswin", Proffession: "softwareEngineer"},
    {EmployeeID:20, EmployeeName: "Ankita", Proffession: "Student"},
    {EmployeeID:30, EmployeeName: "Anooradha", Proffession: "SoftwareEngineer"},
    {EmployeeID:40, EmployeeName: "Roopi", Proffession: "Student"},
    {EmployeeID:50, EmployeeName: "Asu", Proffession: "Doctor"}
    	
    	   
    
    	
];

exports.getEmp = function()
{
    return  employee;
}

exports.getEmps= function(n)
{
    var empObj  = employee.find( item  =>  item.EmployeeID== n );
    return  empObj;
}

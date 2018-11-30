// Perform CRUD Operations using Mongoose
var express = require('express');
var bodyParser = require("body-parser");
var empModel =  require("./Model/empModel");
var deptModel   =  require("./Model/deptModel");

var app=express(); 
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended : false}));

// Read All docs
	
console.log("-welcome mdule-");

app.get('/',function (req,res)
{			
	res.sendFile(__dirname + "/Welcome.html");
});

app.get('/Login',function (req,res)
{
	var fname  =  __dirname + "/Login.ejs";
	var obj = {str  : ""};

	res.render( fname, obj);	 
});

app.post('/Login',function (req,res)
{
	var uid  = req.body.t1;
	var pwd  = req.body.t2;

	var obj = {str  : ""};	
	if(uid == "admin"  && pwd =="admin123")
	{
		obj.str = "Welcome to Admin";
	}
	else
	{
	  obj.str  = "Invalid User Id or Password.";
	}

	var fname  =  __dirname + "/Login.ejs";
	res.render( fname, obj);	
});
/*app.get('/Depts',function (req,res)
{
	var fname  =  __dirname + "/Views/depts.ejs";
	var obj = {};
	obj.data  =  deptModel.getDepts();
	res.render( fname, obj);	 
});

/*app.get('/DeptDetails/:id',function (req,res)
{
	var fname  =  __dirname + "/Views/details.ejs"; 	 
	var obj = {};
	var  n = req.params.id;
	obj.deptObj  = deptModel.getDept(n);	 
	res.render( fname, obj);	 
});
*/
app.get('/Depts',function (req,res)
{
	var fname  =  __dirname + "/depts_view.ejs";

	var  depts = 	[
		{deptno:10, dname: "Accounts", loc: "Hyd"},
		{deptno:20, dname: "Sales", loc: "Pune"},
		{deptno:30,dname: "Marketing", loc:"Chennai"}, 
		{deptno:40,dname: "Operations", loc:"Mumbai"}, 
		{deptno:50,dname: "Finanace", loc:"Pune"}	
	];

	var obj = {};
	obj.data  =  depts;

	res.render( fname, obj);	 
});

app.get('/emp',function (req,res)


	{
	var fname  =  __dirname + "/Views/employee.ejs";
	//var obj = {};
	empModel.find({}, function(err, employee)
	{
		if(err)  {   console.log(err);   return;  }	 

		var obj = { data : employee  };
res.render( fname, obj);
	});
		 
});

// Read Sinlge docs

app.get('/EmpDetails/:id1',function (req,res)
{
	var fname  =  __dirname + "/Views/details1.ejs";
	
	var n=parseInt(req.params.id1);
	//obj.data  =  deptModel.getDept();
	empModel.findOne({employeeID:n},function(err,doc)
	{
var obj={empObj:doc};

console.log(doc);
res.render( fname, obj);
	});
		 
});

// Delete docs



app.get('/DeleteempDept/:id1',function (req,res)
{
	var fname  =  __dirname + "/Views/employee.ejs";
	//var obj = {};
	var n=parseInt(req.params.id1);
	//obj.data  =  deptModel.getDept();
	empModel.findOneAndRemove({employeeID:n},function(err,data)
	{
		if(err)	 {  console.log(err); return; }
		console.log("Record deleted from Database");
		res.redirect("/");


	});
		 
});

// Create New 




app.get('/Createempdept',function (req,res)
{
	var fname  =  __dirname + "/Views/Createempdept.ejs";	
	res.render( fname, null);	 
});

app.post('/Createempdept',function (req,res)
{
	
	var empObj  = new empModel({
	employeeID :parseInt( req.body.t1 ),
	EmployeeName :  req.body.t2,
	Proffession :  req.body.t3});
 
	empObj.save(function(err) 
	{
		if(err)	 {  console.log(err); return; }		
		console.log("Record inserted in Database");
		res.redirect("/");	
	});
	
});


//update department
app.get('/EditEmpDetails/:id1',function (req,res)
{
	var fname  =  __dirname + "/Views/EditEmpDetails.ejs"; 
	var n = parseInt(req.params.id1);	

	empModel.findOne({employeeID:n}, function(err, doc)
	{
		var obj = {empObj  :  doc};
	
		res.render( fname, obj);
	});		 
});

app.post('/EditEmpDetails',function (req,res)
{	
	var n  = parseInt(req.body.t1);

	var empObj  = {};	
	empObj.EmployeeName =   req.body.t2;
	empObj.Proffession =   req.body.t3;

	//console.log(n);
	//console.log(empObj);
	empModel.findOneAndUpdate({ employeeID: n }, empObj, function(err) 
	{
		if(err)	 {  console.log(err); return; }
		console.log("Record updated from Database");
		res.redirect("/");	
	});
	
});

var server=app.listen(3002,function() {});
console.log("Server Started. URL:http://localhost:3002");
// JavaScript source code

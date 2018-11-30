
var  depts = 	[
    {deptno:10, dname: "Accounts", loc: "Hyd"},
    {deptno:20, dname: "Sales", loc: "Pune"},
    {deptno:30,dname: "Marketing", loc:"Chennai"}, 
    {deptno:40,dname: "Operations", loc:"Mumbai"}, 
    {deptno:50,dname: "Finanace", loc:"Pune"}	
];
exports.getDepts = function () 


{
    return  depts;
}

exports.getDepts = function (n) 

{
    var deptObj  = depts.find( item  =>  item.deptno == n );
    return  deptObj;
}







/*var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongodb1', {useNewUrlParser:true});

//Define a schema
var Schema = mongoose.Schema;

var DeptModelSchema = new Schema(
    {   deptno: Number, 
        dname : String, 	
        loc  : String }, 
    { versionKey: false  } );

var DeptModel = mongoose.model('depts', DeptModelSchema );

module.exports = DeptModel;
*/
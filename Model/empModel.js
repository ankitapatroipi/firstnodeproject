var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/empdb', {useNewUrlParser:true});

//Define a schema
var Schema = mongoose.Schema;

var empModelSchema = new Schema(
    {   employeeID: Number, 
        EmployeeName : String, 	
        Proffession : String }, 
    { versionKey: false  } );

var empModel = mongoose.model('empdepts', empModelSchema );

module.exports = empModel;
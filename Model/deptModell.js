var  depts = 	[
    {deptno:10, dname: "Accounts", loc: "Hyd"},
    {deptno:20, dname: "Sales", loc: "Pune"},
    {deptno:30,dname: "Marketing", loc:"Chennai"}, 
    {deptno:40,dname: "Operations", loc:"Mumbai"}, 
    {deptno:50,dname: "Finanace", loc:"Pune"}	
];

exports.getDept= function()
{
    return  depts;
}

exports.getDepts= function(n)
{
    var deptObj  = depts.find( item  =>  item.deptno == n );
    return  deptObj;
}

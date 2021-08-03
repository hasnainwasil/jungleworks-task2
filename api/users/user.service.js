const pool = require("../../config/database");

module.exports = {
	create: (data,callBack) =>{
		pool.query(
			`insert into jtable1(FirstName,LastName,Email,Password,Phone)
			values(?,?,?,?,?)`,
			[
			data.firstname,
			data.lastname,
			data.email,
			data.password,
			data.phone
			],
			(error,results,fields) =>{
				if(error){
					return callBack(error);
				}
				return callBack(null,results);
			}
			);
	}
}
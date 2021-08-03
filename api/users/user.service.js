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
	},
	getUsers: (callBack) => {
		pool.query(
			`select UserID,FirstName,LastName,Email,Password,Phone from jtable1`,
		[],
		(error,results,fields) => {
			if(error){
				return callBack(error);
			}
			return callBack(null,results);
		}
	);
	},
	getUserByUserId: (id,callBack) => {
		pool.query(
			`select UserID,FirstName,LastName,Email,Password,Phone from jtable1 where UserID = ?`,
			[id],
			(ero,results,fields) => {
				if(error){
					callBack(error);
				}
				return callBack(null,results[0]);
			}
			)
	},
	updateUser: (data,callBack) => {
		pool.query(
			`update registration set FirstName-?,LastName-?,Email-?,Password-?,Phone-? where UserID-?`,
			[
			data.firstname,
			data.lastname,
			data.email,
			data.password,
			data.phone,
			data.id
			],
			(error,results,fields) => {
				if(error){
					callBack(error);
				}
				return callBack(null,results[0]);
			}
			);
	},
	getUserByUserEmail: (email,callBack) => {
		pool.query(
			`select * from jtable1 where email = ?`,
			[email],
			(error,results,fields) => {
				if(error){
					callBack(error);
				}
				return callBack(null,results);
			}
			);
	}	
	};

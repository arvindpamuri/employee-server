var pool = require('./pool');


async function getEmployees(empid=-1) {

    return new Promise((resolve, reject)=>{

        if(empid == -1) {
            pool.query('SELECT * FROM employees ',  (error, elements)=>{
                if(error){
                    return reject(error);
                }
                return resolve(elements);
            });
        }

        else {
            let query = "SELECT * FROM employees where employee_id=" + empid ;   
            pool.query(query,  (error, elements)=>{
                if(error){
                    return reject(error);
                }
                return resolve(elements);
            });
        }
    });
};

async function insertEmployee(body) {

    return new Promise((resolve, reject)=>{

        var q = pool.query('insert into employees set ?', body, (error, elements)=>{
            if(error){
                console.log("sql query", q.sql)
                return reject(error);
            }
            console.log("sql query", q.sql)
            return resolve(elements);
        });

    });
};

async function updateEmployee(body, empid) {

    return new Promise((resolve, reject)=>{

        var q = pool.query('update employees set ? where employee_id=?', [body, empid], (error, elements)=>{
            if(error){
                console.log("sql query", q.sql)
                return reject(error);
            }
            console.log("sql query", q.sql)
            return resolve(elements);
        });

    });
};

async function deleteEmployee(empid) {

    return new Promise((resolve, reject)=>{

        var q = pool.query('delete from employees where employee_id=?', empid, (error, elements)=>{
            if(error){
                console.log("sql query", q.sql)
                return reject(error);
            }
            console.log("sql query", q.sql)
            return resolve(elements);
        });

    });
};


module.exports = {getEmployees, insertEmployee, updateEmployee, deleteEmployee};
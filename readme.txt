Leave Management System

This is a portal where employees will apply for leave and manager will approve/reject the leaves.

Technology Stack Used :
1) Backednd : NodeJS,
2) Database : Mongodb
3) FrontEnd : JS, Html, css
4) Framework : Express


How to run?
1) The database is hosted at mlab.com, so no need to create the database in your local machine.
2) pull the code, and run npm install.
3) Thats all to run the code.
4) Now run the server by going to the directory from terminal, and running 'node bin/www'
5) Hit localhost:3000.
6) You will see the login screen.
7) Before logging in, create manager (create manager before employee, because while creating employee it asks for the manager of that employee)
8) create manager.
9) Create employee, select from dropdown which manager is required while creating employee.
10) Now login through 'employee credentials you entered'.
11) Apply leave and submit.
12) You can see the status of your leave in 'Leave history tab'.
13) Logout from employee account.
14) Now login through manager account.
15) You will see the leaves of employee who reports to this manager.
16) You can approve or reject the leave. In case of rejection you need to give the reason for rejection.
17) Now logout from managers account.
18) Login through the employee account, you will see the leave status changed.
















Ignore Following

database name : LeavePortal

collection
1) employee
2) manager



db.employee.insert({
                      "emp_name":"Rohi Bhalke",
                      "emp_email":"rohitbhalke@gmail.com",
                      "emp_id":1234,
                      "password" : "rohitbhalke@gmail.com",
                      "emp_managerName":"Test",
                      "emp_managerEmail": "Test@gmail.com",
                   "emp_leaves":[
                         {
                            "leaveId":234,
                            "startDate": "Tue Oct 25 2016 23:12:37 GMT+0530 (IST)",
                            "endDate" : "Tue Oct 25 2016 23:12:37 GMT+0530 (IST)",
                            "status":"Approved",
                            "reason":null
                         },
                         {
                            "leaveId":44234,
                            "startDate":"Tue Oct 25 2016 23:00:05 GMT+0530 (IST)",
                             "endDate" : "Tue Oct 25 2016 23:02:58 GMT+0530 (IST)",
                            "status":"Rejected",
                            "reason":"To much leaves"
                         }
                      ]
                   })



db.employee.insert({
                      "emp_name":"test",
                      "emp_email":"test@gmail.com",
                      "emp_id":1234,
                      "password" : "test@gmail.com",
                      "emp_managerName":"Test",
                      "emp_managerEmail": "Test@gmail.com",
                   "emp_leaves":[]
                   })




use LeavePortal

db.manager.find({}).pretty()
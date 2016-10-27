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
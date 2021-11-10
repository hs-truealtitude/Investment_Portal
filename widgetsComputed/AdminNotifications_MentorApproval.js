let rows = []

rows = $getGrid('mentors').filter(row => row.isApproved != true && row.name != null && row.secondName != null && row.adminRejected != true && row.submitPressed == true)  

return rows
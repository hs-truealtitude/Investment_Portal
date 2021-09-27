let rows = []

rows = $getGrid('applications').filter(row => row.isComplete == true && row.$applicationStatus$display == "Approved" && row.name == 'Mentor->CompanyUser' && row.adminViewed != true)  

return rows
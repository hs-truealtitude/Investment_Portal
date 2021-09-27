let rows = []

rows = $getGrid('sessions').filter(row => row.isBooked == true && row.$status$display == "Accepted" && row.direction == "Mentor->CompanyUser" && row.adminViewed != true)  

return rows
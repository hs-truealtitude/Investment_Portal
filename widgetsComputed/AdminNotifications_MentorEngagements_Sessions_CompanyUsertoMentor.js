let rows = []

rows = $getGrid('sessions').filter(row => row.isBooked == true && row.$status$display == "Accepted" && row.direction == "CompanyUser->Mentor" && row.adminViewed != true)  

return rows
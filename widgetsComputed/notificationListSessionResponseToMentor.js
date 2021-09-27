let rows = []

rows = $getGrid('sessions').filter(row => row.owner == fbUser.uid && row.isBooked == true && row.notifComplete != true && row.$status$display == "Accept" && row.direction == "Mentor->CompanyUser")  

return rows
let rows = []

rows = $getGrid('sessions').filter(row => row.owner == fbUser.uid && row.isBooked == true && row.notifComplete != true && row.$status$display == "Accept")  

return rows
let rows = []

rows = $getGrid('sessions').filter(row => row.owner == fbUser.uid && row.isBooked != true && row.$status$display == "Pending" && row.direction == "Mentor->SME")  

return rows
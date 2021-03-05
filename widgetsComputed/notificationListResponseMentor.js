let rows = []

rows = $getGrid('applications').filter(row => row.owner == fbUser.uid && row.name == 'SME->Mentor' && row.responseOpened != true && row.$applicationStatus$display == "Approved")  

return rows
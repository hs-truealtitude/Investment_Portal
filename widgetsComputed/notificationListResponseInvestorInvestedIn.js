let rows = []

rows = $getGrid('investorAcceptedcompanyProfiles').filter(row => row.owner == fbUser.uid && row.responseOpened != true && row.$status$display != "Approved")  

return rows
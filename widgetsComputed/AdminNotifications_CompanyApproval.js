let rows = []

    rows = $getGrid('companyProfiles').filter(row => row.$access$display == "Private" && row.name != null && row.adminRejected != true)  

return rows
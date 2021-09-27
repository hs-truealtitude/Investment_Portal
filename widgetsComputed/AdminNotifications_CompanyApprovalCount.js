let companyTotal = 0

    companyTotal = $getGrid('companyProfiles').filter(row => row.$access$display == "Private" && row.name != null && row.adminRejected != true).length

return companyTotal
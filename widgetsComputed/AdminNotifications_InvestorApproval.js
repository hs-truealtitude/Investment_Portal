let rows = []

rows = $getGrid('investorProfiles').filter(row => row.isApproved != true && row.name != null && row.secondName != null && row.adminRejected != true)  

return rows
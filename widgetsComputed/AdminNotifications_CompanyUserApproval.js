let rows = []

rows = $getGrid('companyUserProfiles').filter(row => row.isApproved != true && row.name != null && row.secondName != null && row.adminRejected != true)  

return rows
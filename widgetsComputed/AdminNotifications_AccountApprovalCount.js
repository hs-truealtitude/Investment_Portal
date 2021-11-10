let countTotal = 0

investorCount = $getGrid('investorProfiles').filter(row => row.isApproved != true && row.name != null && row.secondName != null && row.adminRejected != true && row.submitPressed == true).length    
mentorCount = $getGrid('mentors').filter(row => row.isApproved != true && row.name != null && row.secondName != null && row.adminRejected != true && row.submitPressed == true).length  
ppCount = $getGrid('programmePartnerProfiles').filter(row => row.isApproved != true && row.name != null && row.secondName != null && row.adminRejected != true && row.submitPressed == true).length  
companyUserCount = $getGrid('companyUserProfiles').filter(row => row.isApproved != true && row.name != null && row.secondName != null && row.adminRejected != true && row.submitPressed == true).length    


countTotal = investorCount + mentorCount + ppCount + companyUserCount

return countTotal
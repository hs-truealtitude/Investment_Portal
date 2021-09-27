let rows = []

rows = $getGrid('applications').filter(row => row.owner == fbUser.uid && row.name == 'CompanyUser->Mentor(inCohort)' && row.responseOpened != true && row.$applicationStatus$display == "Approved")  

return rows
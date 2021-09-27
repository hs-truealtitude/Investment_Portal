let rows = []

rows = $getGrid('applications').filter(row => row.owner == fbUser.uid && row.name == 'ProgrammePartner->Mentor(Programme)' && row.responseOpened != true && row.$applicationStatus$display == "Approved")  

return rows
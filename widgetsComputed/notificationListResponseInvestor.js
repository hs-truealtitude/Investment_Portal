let rows = []

rows = $getGrid('applications').filter(row => row.owner == fbUser.uid && (row.name == 'Mentor->Investor' || row.name == 'ProgrammePartner->Investor') && row.responseOpened != true && row.$applicationStatus$display == "Approved")  

return rows
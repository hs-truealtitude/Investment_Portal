let rows = []

rows = $getGrid('applications').filter(row => row.owner == fbUser.uid && row.isComplete != true && row.$applicationStatus$display == "Pending")  

/*let accountType = $getUser('accountType')

if (accountType == 'Mentor')
{
    rows = $getGrid('applications').filter(row => row.name == 'CompanyUser->Mentor' && row.applicationStatus != 'Complete')  
}

if (accountType == 'Investor')
{
    rows = $getGrid('applications').filter(row => row.name == 'Investor->CompanyUser' && row.applicationStatus != 'Complete')  
}

if (accountType == 'CompanyUser' )
{
    rows = $getGrid('applications').filter(row => row.name == 'Mentor->CompanyUser' && row.applicationStatus != 'Complete')  
}*/ 

return rows
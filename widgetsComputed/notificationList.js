let rows = []

rows = $getGrid('applications').filter(row => row.owner == fbUser.uid && row.isComplete != true && row.$applicationStatus$display == "Pending")  

/*let accountType = $getUser('accountType')

if (accountType == 'Mentor')
{
    rows = $getGrid('applications').filter(row => row.name == 'SME->Mentor' && row.applicationStatus != 'Complete')  
}

if (accountType == 'Investor')
{
    rows = $getGrid('applications').filter(row => row.name == 'Investor->SME' && row.applicationStatus != 'Complete')  
}

if (accountType == 'SME' )
{
    rows = $getGrid('applications').filter(row => row.name == 'Mentor->SME' && row.applicationStatus != 'Complete')  
}*/ 

return rows
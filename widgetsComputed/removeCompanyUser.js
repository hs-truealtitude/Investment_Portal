return async function  (applicationRowKey, AcompanyUser, Acompany, cohortRowKey) {

var r = confirm("Are you sure you want to remove this Company from your cohort?");
if (r==true){
    $dgRemoveRow('applications', applicationRowKey)

    //Remove company from cohort table
    $dgRemoveLookUpItem({
    gridId: 'cohortData',
    rowKey: cohortRowKey,
    cellKey: 'companies',
    target: Acompany
    })

    var s = confirm("Would you like to remove the Company Representative user as well? Don't do this is this company user has other companies in this cohort!");
    if (s==true){
        //Remove user from cohort table
        $dgRemoveLookUpItem({
        gridId: 'cohortData',
        rowKey: cohortRowKey,
        cellKey: 'companyUsers',
        target: AcompanyUser
    })
       
    
}
    
} else {
   
}
    return null;
}

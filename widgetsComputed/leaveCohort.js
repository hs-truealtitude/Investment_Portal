return async function  (cohortRowKey) {

let accountType = $getUser('accountType')

var r = confirm("Are you sure you want to leave this cohort?");

if (r==true){
    
    if(accountType == 'CompanyUser'){
        //Remove companies from cohort in applications table
        const allRows = _.filter($getGrid("applications"), {
        cohort: cohortRowKey,
        companyUser: $getUser('profileID')
        });
        for (let row of allRows) {
        $dgRemoveRow('applications', row.rowKey)
        }

        //Remove user from cohort table
        $dgRemoveLookUpItem({
        gridId: 'cohortData',
        rowKey: cohortRowKey,
        cellKey: 'companyUsers',
        target: $getUser("profileID")
        })
    }

    if(accountType == 'Investor'){

        //Remove user from cohort table
        $dgRemoveLookUpItem({
        gridId: 'cohortData',
        rowKey: cohortRowKey,
        cellKey: 'investors',
        target: $getUser("profileID")
        })
    }

    if(accountType == 'Mentor'){

        const allRows = _.filter($getGrid("applications"), {
        cohort: cohortRowKey,
        mentor: $getUser('profileID')
        });
        for (let row of allRows) {
        $dgRemoveRow('applications', row.rowKey)
        }

        //Remove user from cohort table
        $dgRemoveLookUpItem({
        gridId: 'cohortData',
        rowKey: cohortRowKey,
        cellKey: 'mentors',
        target: $getUser("profileID")
        })
    }

}

}
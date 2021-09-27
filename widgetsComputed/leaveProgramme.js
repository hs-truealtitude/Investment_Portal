return async function  (programmeRowKey) {

let accountType = $getUser('accountType')

var r = confirm("Are you sure you want to leave this programme?");

if (r==true){
    
    if(accountType == 'CompanyUser'){
        //Remove companies from programme in applications table
        const allRows = _.filter($getGrid("applications"), {
        programme: programmeRowKey,
        companyUser: $getUser('profileID')
        });
        for (let row of allRows) {
        $dgRemoveRow('applications', row.rowKey)
        }

        //Remove user from programme table
        $dgRemoveLookUpItem({
        gridId: 'programmeData',
        rowKey: programmeRowKey,
        cellKey: 'companyUsers',
        target: $getUser("profileID")
        })
    }

    if(accountType == 'Investor'){

        //Remove user from programme table
        $dgRemoveLookUpItem({
        gridId: 'programmeData',
        rowKey: programmeRowKey,
        cellKey: 'investors',
        target: $getUser("profileID")
        })
    }

    if(accountType == 'Mentor'){

        const allRows = _.filter($getGrid("applications"), {
        programme: programmeRowKey,
        mentor: $getUser('profileID')
        });
        for (let row of allRows) {
        $dgRemoveRow('applications', row.rowKey)
        }

        //Remove user from programme table
        $dgRemoveLookUpItem({
        gridId: 'programmeData',
        rowKey: programmeRowKey,
        cellKey: 'mentors',
        target: $getUser("profileID")
        })
    }

}

}
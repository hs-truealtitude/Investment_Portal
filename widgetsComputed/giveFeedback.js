return async function  () {
    
    let accountType = $getUser('accountType')
     
        if(accountType == 'ProgrammePartner'){
            let feedbackRow = await $dgAddRow('bugsAndIssues', {programmePartner: $getUser('profileID')})
            $dgShowEditRowModal('bugsAndIssues', feedbackRow)
        }
        if(accountType == 'CompanyUser'){
            let feedbackRow = await $dgAddRow('bugsAndIssues', {companyUser: $getUser('profileID')})
                        $dgShowEditRowModal('bugsAndIssues', feedbackRow)

        }
        if(accountType == 'Mentor'){
            let feedbackRow = await $dgAddRow('bugsAndIssues', {mentor: $getUser('profileID')})
                        $dgShowEditRowModal('bugsAndIssues', feedbackRow)

        }
        if(accountType == 'Investor'){
            let feedbackRow = await $dgAddRow('bugsAndIssues', {investor: $getUser('profileID')})
                        $dgShowEditRowModal('bugsAndIssues', feedbackRow)

        }



}

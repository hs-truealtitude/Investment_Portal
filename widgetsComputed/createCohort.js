return async function(accountType, companyUser, mentorUser, investorUser, ppUser){

    console.log(accountType + " has created a cohort.")
    let cohortRow = await $dgAddRow('cohortData', {cohortOwnerType: accountType, mentorOwner: mentorUser, investorOwner: investorUser, programmePartnerOwner: ppUser})
    
    $dgShowEditRowModal('cohortData', cohortRow)
}
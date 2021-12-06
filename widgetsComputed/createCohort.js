return async function(accountType, companyUser, mentorUser, investorUser, ppUser){

    console.log(accountType + " has created a cohort.")
    let cohortRow = await $dgAddRow('cohortData', {cohortOwnerType: accountType, mentorOwner: mentorUser, investorOwner: investorUser, programmePartnerOwner: ppUser})
    
    let cohortInvestorCountRow =  $dgAddRow('userCountChartTable', {cohort: cohortRow, grouping: "Investors"})
    let cohortMentorCountRow =  $dgAddRow('userCountChartTable', {cohort: cohortRow, grouping: "Indirect Investors/Mentors"})
    let cohortCompanyCountRow =  $dgAddRow('userCountChartTable', {cohort: cohortRow, grouping: "Companies"})

    $dgShowEditRowModal('cohortData', cohortRow)

}


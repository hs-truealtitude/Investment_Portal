return async function  () {
    
    let accountType = $getUser('accountType')
    let profileRowKey = $getUser('profileID')

    if(accountType == 'Investor'){
        $setDataGridVal('investorProfiles',profileRowKey + '.submitPressed',true)
    }

    if(accountType == 'Mentor'){
        $setDataGridVal('mentors',profileRowKey + '.submitPressed',true)
    }

    if(accountType == 'CompanyUser'){
        $setDataGridVal('companyUserProfiles',profileRowKey + '.submitPressed',true)
    }

    if(accountType == 'ProgrammePartner'){
        $setDataGridVal('programmePartnerProfiles',profileRowKey + '.submitPressed',true)
    }

}
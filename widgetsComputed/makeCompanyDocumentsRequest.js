return async function  (selectedCompany) {
    
    let accountType = $getUser('accountType')
     
        if(accountType == 'Mentor'){
            let requestRow = await $dgAddRow('documentRequests', {mentor: $getUser('profileID'), companyProfiles: selectedCompany})
            $dgShowEditRowModal('documentRequests', requestRow)
        }
        if(accountType == 'Investor'){
            let requestRow = await $dgAddRow('documentRequests', {investor: $getUser('profileID'), companyProfiles: selectedCompany})
            $dgShowEditRowModal('documentRequests', requestRow)
        }
        else{
            return null;
        }
}
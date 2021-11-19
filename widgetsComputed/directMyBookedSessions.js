return function(){

    let accountType = $getUser('accountType')

    if(accountType == 'Mentor'){
        $setCurrentSubTab('-MW49Z1H3IKgqYwA-yLg','-MJq8S1suwASZ84EkCd5')
    }

    if(accountType == 'CompanyUser'){
        $setCurrentSubTab('-MW45ehLM2LrwcrP_xZ7','-MJq8S1suwASZ84EkCd5')
    }

    return null
}
return function (cohortRowKey) {

    $setUser('activeCohort', cohortRowKey)

    if($getUser('accountType') == "Mentor"){
        $setCurrentSubTab('-MfhaiqMuDL6hpwfmFrj','-MJq8S1suwASZ84EkCd5')
    }
    else if($getUser('accountType') == "ProgrammePartner"){
        $setCurrentSubTab('-MgA3DdbDWB2wWtITJze','-MJq8S1suwASZ84EkCd5')
    }
}
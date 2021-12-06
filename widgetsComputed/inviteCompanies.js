return function (cohortRowKey) {

    $setUser('activeCohort', cohortRowKey)

    if($getUser('accountType') == "Mentor"){
        $setCurrentSubTab('-MfqvAtNITsH2JS_uN5w','-MJq8S1suwASZ84EkCd5')
    }
    else if($getUser('accountType') == "ProgrammePartner"){
    $setCurrentSubTab('-MgA2AZaCIOf6X0Jev7x','-MJq8S1suwASZ84EkCd5')
    }

}
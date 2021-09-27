return function (cohortRowKey) {

    $setUser('activeCohort', cohortRowKey)

if($getUser('accountType') == "Mentor"){
    $setCurrentSubTab('-MfqlAEgE0Vl1aiolRsK','-MJq8S1suwASZ84EkCd5')
}
else if($getUser('accountType') == "ProgrammePartner"){
    $setCurrentSubTab('-MgA23Bmejg-BpTYIUvt','-MJq8S1suwASZ84EkCd5')
}

}
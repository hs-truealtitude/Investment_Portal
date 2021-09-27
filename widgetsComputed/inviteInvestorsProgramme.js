return function (programmeRowKey) {

    $setUser('activeProgramme', programmeRowKey)

    if($getUser('accountType') == "ProgrammePartner"){
        $setCurrentSubTab('-MhSwY7XiPKLbP2GyWXy','-MJq8S1suwASZ84EkCd5')
    }

}
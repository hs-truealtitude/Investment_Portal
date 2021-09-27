return function (programmeRowKey) {

    $setUser('activeProgramme', programmeRowKey)

    if($getUser('accountType') == "ProgrammePartner"){
        $setCurrentSubTab('-MhSwIVbJmWyCcP4doK9','-MJq8S1suwASZ84EkCd5')
    }

}
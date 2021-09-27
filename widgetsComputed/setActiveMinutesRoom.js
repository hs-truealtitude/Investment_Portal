return function  (minutes, companyName) {

    $setUser('activeMinutesRoom', minutes)
    $setUser('activeCompanyName', companyName)

}

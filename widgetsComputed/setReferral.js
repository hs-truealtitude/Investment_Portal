return function  (profileRowKey, accountType) {

    $setUser('referralRowKey', profileRowKey)
    $setUser('referralAccountType', accountType)

    return null
    
}

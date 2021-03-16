return async function  () {

        let newRow = await $dgAddRow('investorProfiles', {_created: true})
        $setUser('profileID', newRow)
        $setUser('accountType', 'Investor')

        $setCurrentSubTab('-MVGPWkCqsquh0_f0Xb1','-MVGOMA1-ifNurWKHxUf')
        

}
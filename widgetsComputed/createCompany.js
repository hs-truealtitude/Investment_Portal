return async function  () {

        //console.log('create company called')
        let newRow = await $dgAddRow('companyProfiles', {_created: true})
        $setUser('activecompanyProfile', newRow)
        //console.log('new profile id is '+ newRow)
        $setCurrentSubTab('-MLb60UzLHdCuJrxTlq0','-MJq8S1suwASZ84EkCd5')
        //this.createCompanyDataroom(newRow)



}

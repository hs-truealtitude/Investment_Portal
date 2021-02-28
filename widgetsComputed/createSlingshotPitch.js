return async function  () {

        console.log('create pitch called')
        let newRow = await $dgAddRow('slingshotPitches', {_created: true})
        $setUser('activeSlingshotPitch', newRow)
        console.log('new profile id is '+ newRow)

        $setCurrentSubTab('-MLb60UzLHdCuJrxTlq0','-MJq8S1suwASZ84EkCd5')
        

}

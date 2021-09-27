return async function  (company, url) {

        console.log('company successfully saved')
        let newRow = await $dgAddRow('savedcompanyProfiles', {companyProfiles: company, image: url})
        
        console.log('new row')
}

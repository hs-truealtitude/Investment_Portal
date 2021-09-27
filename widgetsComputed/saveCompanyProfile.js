return async function  (companyProfile, url) {

       
        let newRow = await $dgAddRow('savedcompanyProfiles', {companyProfiles: companyProfile, image: url})
        
        
}

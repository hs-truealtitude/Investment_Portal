return async function(programmePartnerKey){
    let programmeRow = await $dgAddRow('programmeData', {programmePartner: programmePartnerKey})
    
    $dgShowEditRowModal('programmeData', programmeRow)
}
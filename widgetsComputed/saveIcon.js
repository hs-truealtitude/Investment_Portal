return function  (company) {

    let savedcompanyProfiles = $getGrid('savedcompanyProfiles')

    let filteredSaved = savedcompanyProfiles.filter(saved=> saved.owner == fbUser.uid && saved.companyProfiles == company);


    if (filteredSaved[0]){
        return filteredSaved[0].rowKey;
    }
    else{
        return false;
    }
    





}

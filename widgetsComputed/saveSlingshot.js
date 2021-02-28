return function  (slingshot) {
    let savedPitches = $getGrid('savedPitches')

    let filteredSaved = savedPitches.filter(saved=> saved.owner == fbUser.uid && saved.slingshotPitches == slingshot);

    if (filteredSaved[0]){
        
        return filteredSaved[0].rowKey;
    }
    else{
        
        return false;
    }
}


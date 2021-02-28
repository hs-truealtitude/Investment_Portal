return function  (pitch) {

    let savedPitches = $getGrid('savedPitches')

    let filteredSaved = savedPitches.filter(saved=> saved.owner == fbUser.uid && saved.pitches == pitch);


    if (filteredSaved[0]){
        return filteredSaved[0].rowKey;
    }
    else{
        return false;
    }
    





}

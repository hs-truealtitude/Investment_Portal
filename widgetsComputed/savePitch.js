return async function  (pitch, url) {

        console.log('pitch successfully saved')
        let newRow = await $dgAddRow('savedPitches', {pitches: pitch, image: url})
        
        console.log('new row')
}

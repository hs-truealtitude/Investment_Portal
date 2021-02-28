return async function  (slingshotPitch, url) {

       
        let newRow = await $dgAddRow('savedPitches', {slingshotPitches: slingshotPitch, image: url})
        
        
}

return async function  (SlingshotPitch) {

var r = confirm("Are you sure you want to delete this pitch?");
if (r==true){
    $dgRemoveRow('slingshotPitches', SlingshotPitch)

    
} else {
   
}
    return null;
}

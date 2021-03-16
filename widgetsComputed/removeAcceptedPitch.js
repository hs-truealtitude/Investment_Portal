return async function  (pitch) {

var r = confirm("Are you sure you want to remove this pitch from your list?");
if (r==true){
    $dgRemoveRow('investorAcceptedPitches', pitch)
} else {
   
}
    return null;
}

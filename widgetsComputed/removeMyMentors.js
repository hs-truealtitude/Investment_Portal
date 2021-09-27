return async function  (Amentor) {

var r = confirm("Are you sure you want to remove this Mentor from your list?");
if (r==true){
    $dgRemoveRow('applications', Amentor)
    
} else {
   
}
    return null;
}

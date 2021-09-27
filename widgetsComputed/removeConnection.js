return async function  (applicationRow) {

var r = confirm("Are you sure you want to remove this connection?");
if (r==true){
    $dgRemoveRow('applications', applicationRow)
    
} else {
   
}
    return null;
}

return async function  (applicationRow) {

var r = confirm("Are you sure you want to delect this connection within the programme?");
if (r==true){
    $dgRemoveRow('applications', applicationRow)
    
} else {
   
}
    return null;
}

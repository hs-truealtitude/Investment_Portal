return async function  (Session) {

var r = confirm("Are you sure you want to remove this session from your list?");
if (r==true){
    $dgRemoveRow('sessions', Session)
} else {
   
}
    return null;
}

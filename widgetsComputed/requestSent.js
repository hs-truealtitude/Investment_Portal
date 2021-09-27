return async function  (rowKey) {

var r = confirm("Have you sent the documents to this user?");

if (r==true){
    $dgRemoveRow('documentRequests', rowKey)
}

}
return async function  (AInvestor, programmeRowKey) {

var r = confirm("Are you sure you want to remove this Investor from your list?");
if (r==true){
        //Remove user from programme row
        $dgRemoveLookUpItem({
        gridId: 'programmeData',
        rowKey: programmeRowKey,
        cellKey: 'investors',
        target: AInvestor
        })
    
} else {
   
}
    return null;
}

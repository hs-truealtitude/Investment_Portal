return async function  (AInvestor, cohortRowKey) {

var r = confirm("Are you sure you want to remove this Investor from your list?");
if (r==true){
        //Remove user from cohort table
        $dgRemoveLookUpItem({
        gridId: 'cohortData',
        rowKey: cohortRowKey,
        cellKey: 'investors',
        target: AInvestor
        })
    
} else {
   
}
    return null;
}

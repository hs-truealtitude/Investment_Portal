return async function  (companyProfile, companyName) {

//Find dataroom with company name
const companyDataroom = _.find($getGrid('companyDatarooms'), {name: companyName})
const rowKey = companyDataroom ? companyDataroom.rowKey : null

//Find minutes with company name
const minutesRoom = _.find($getGrid('minutesTable'), {name: companyName})
const mrowKey = minutesRoom ? minutesRoom.rowKey : null

var r = confirm("Are you sure you want to delete this company AND dataroom?");
if (r==true){
    $dgRemoveRow('companyProfiles', companyProfile)

    //Delete fund docs
    const allFundDocs = alasql(`SELECT * FROM ? WHERE lower(\`cdataroom\`) LIKE lower("%${rowKey}%")`, [$getGrid('fundSetUpFile')])
    for (let i = 0; i < allFundDocs.length; i++) {
        const fundDocs = _.find($getGrid('fundSetUpFile'), {cdataroom: rowKey})
        const fRowKey = fundDocs ? fundDocs.rowKey : null
        $dgRemoveRow('fundSetUpFile', fRowKey)
    }

    //Delete admin & finance docs
    const allAdminDocs = alasql(`SELECT * FROM ? WHERE lower(\`cdataroom\`) LIKE lower("%${rowKey}%")`, [$getGrid('adminAndFinanceFiles')])
    for (let i = 0; i < allAdminDocs.length; i++) {
        const adminDocs = _.find($getGrid('adminAndFinanceFiles'), {cdataroom: rowKey})
        const aRowKey = adminDocs ? adminDocs.rowKey : null
        $dgRemoveRow('adminAndFinanceFiles', aRowKey)
    }

    //Delete origination docs
    const allOriginationDocs = alasql(`SELECT * FROM ? WHERE lower(\`cdataroom\`) LIKE lower("%${rowKey}%")`, [$getGrid('originationFiles')])
    for (let i = 0; i < allOriginationDocs.length; i++) {
        const origDocs = _.find($getGrid('originationFiles'), {cdataroom: rowKey})
        const oRowKey = origDocs ? origDocs.rowKey : null
        $dgRemoveRow('originationFiles', oRowKey)
    }
    
    //Delete investment in progress docs
    const allInvProgressDocs = alasql(`SELECT * FROM ? WHERE lower(\`cdataroom\`) LIKE lower("%${rowKey}%")`, [$getGrid('investmentInProgressFiles')])
    for (let i = 0; i < allInvProgressDocs.length; i++) {
        const invPDocs = _.find($getGrid('investmentInProgressFiles'), {cdataroom: rowKey})
        const invPRowKey = invPDocs ? invPDocs.rowKey : null
        $dgRemoveRow('investmentInProgressFiles', invPRowKey)
    }

    //Delete completed investment docs
    const allCinvDocs = alasql(`SELECT * FROM ? WHERE lower(\`cdataroom\`) LIKE lower("%${rowKey}%")`, [$getGrid('completedInvestments')])
    for (let i = 0; i < allCinvDocs.length; i++) {
        const invCDocs = _.find($getGrid('completedInvestments'), {cdataroom: rowKey})
        const invCRowKey = invCDocs ? invCDocs.rowKey : null
        $dgRemoveRow('completedInvestments', invCRowKey)
    }

    //Delete archived investment docs
    const allAinvDocs = alasql(`SELECT * FROM ? WHERE lower(\`cdataroom\`) LIKE lower("%${rowKey}%")`, [$getGrid('archivedInvestments')])
    for (let i = 0; i < allAinvDocs.length; i++) {
        const invADocs = _.find($getGrid('archivedInvestments'), {cdataroom: rowKey})
        const invARowKey = invADocs ? invADocs.rowKey : null
        $dgRemoveRow('archivedInvestments', invARowKey)
    }

    //Delete dataroom row
    $dgRemoveRow('companyDatarooms', rowKey)

    //Delete board minutes docs
    const allbMinutes = alasql(`SELECT * FROM ? WHERE lower(\`cMeetingRoom\`) LIKE lower("%${mrowKey}%")`, [$getGrid('boardMeetingMinutes')])
    for (let i = 0; i < allbMinutes.length; i++) {
        const bm = _.find($getGrid('boardMeetingMinutes'), {cMeetingRoom: mrowKey})
        const bmRowKey = bm ? bm.rowKey : null
        $dgRemoveRow('boardMeetingMinutes', bmRowKey)
    }

    //Delete investor committee minutes docs
    const alliMinutes = alasql(`SELECT * FROM ? WHERE lower(\`cMeetingRoom\`) LIKE lower("%${mrowKey}%")`, [$getGrid('investorMeetingMinutes')])
    for (let i = 0; i < alliMinutes.length; i++) {
        const im = _.find($getGrid('investorMeetingMinutes'), {cMeetingRoom: mrowKey})
        const imRowKey = im ? im.rowKey : null
        $dgRemoveRow('investorMeetingMinutes', imRowKey)
    }

    //Delete minutes row
    $dgRemoveRow('minutesTable', rowKey)

} else {
   
}
    return null;
}

let countNotifSent = 0
let countNotifResponse = 0

let countTotal = 0

countNotifSent = $getGrid('applications').filter(row => row.owner == fbUser.uid && row.isComplete != true && row.$applicationStatus$display == "Pending").length  
countNotifResponse = $getGrid('applications').filter(row => row.owner == fbUser.uid && row.responseOpened != true && row.$applicationStatus$display == "Approved").length  

countSessionSent = $getGrid('sessions').filter(row => row.owner == fbUser.uid && row.isBooked != true && row.$status$display == "Pending").length
countSessionResponse = $getGrid('sessions').filter(row => row.owner == fbUser.uid && row.isBooked == true && row.notifComplete != true && row.$status$display == "Accept").length

countInvestorNotifs = $getGrid('investorAcceptedcompanyProfiles').filter(row => row.owner == fbUser.uid && row.responseOpened != true && row.$status$display != "Approved").length 
countInvestorResponseNotifs = $getGrid('investorAcceptedcompanyProfiles').filter(row => row.owner == fbUser.uid && row.responseOpened != true && row.$status$display == "Approved").length  

countTotal = countNotifSent + countNotifResponse + countSessionSent + countSessionResponse + countInvestorNotifs + countInvestorResponseNotifs

return countTotal
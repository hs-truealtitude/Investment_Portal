//Session rows for notification purposes
let sessionRows = []

//Session rows dates in milliseconds applied to this array
let sessionRowsDates = []

//Session rows dates difference with date now in milliseconds applied to this array
let sessionRowsDatesDifference = []

//Session rows filtered for rows that haven't been checked as sessionHappened = true yet
sessionRows = $getGrid('sessions').filter(row => row.owner == fbUser.uid && row.isBooked == true && row.direction == "CompanyUser->Mentor" && row.rejected != true && row.sessionHappen != true)  

//Loop through session rows and apply .sDate to array
for (let i = 0; i < sessionRows.length; i++){
    //Apply start date specifically to this array
    sessionRowsDates[i] = sessionRows[i].sDate;

    //Apply difference to difference array
    sessionRowsDatesDifference[i] = Date.now() - sessionRowsDates[i];

    //If time difference is greater than an hour (TBD) edit row to notify user
    if(sessionRowsDatesDifference[i] >= 3600000){
        $setDataGridVal("sessions", sessionRows[i].rowKey + ".sessionHappenNotifCompanyUser", true);
    }
}

//Return rows for notifications purposes that notify the user that sessionHappen (yes/no) is ready to be inputted so feedback process can occur
sessionHappenNotifRows = $getGrid('sessions').filter(row => row.owner == fbUser.uid && row.companyUser == $getUser('profileID') && row.isBooked == true && row.direction == "CompanyUser->Mentor" && row.sessionHappen != true && row.rejected != true && row.sessionHappenNotifCompanyUser == true)  


return sessionHappenNotifRows
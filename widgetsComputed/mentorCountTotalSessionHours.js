return function  () {
    let rows = []
    let totalHours = 0
    let i = 0

    rows = $getGrid('sessions').filter(row => row.mentor == $getUser('profileID') && row.isBooked == true)

    for(i = 0; i < rows.length; i++){

        if(rows[i].sessionDurationLength == 15){
            totalHours = totalHours + 900000
        }

        if(rows[i].sessionDurationLength == 30){
            totalHours = totalHours + 1800000
        }

        if(rows[i].sessionDurationLength == 1){
            totalHours = totalHours + 1800000
        }

        if(rows[i].sessionDurationLength == 2){
            totalHours = totalHours + 7200000
        }

        if(rows[i].sessionDurationLength == 3){
            totalHours = totalHours + 10800000
        }
    }

    var milliseconds = parseInt((totalHours % 1000) / 100),
    seconds = Math.floor((totalHours / 1000) % 60),
    minutes = Math.floor((totalHours / (1000 * 60)) % 60),
    hours = Math.floor((totalHours / (1000 * 60 * 60)) % 24);

    var time = hours + ' hours ' + minutes + ' minutes'

return time
}
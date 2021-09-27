return function  (mentorID) {

let rows = []

rows = $getGrid('applications').filter(row => row.mentor == mentorID &&  row.isComplete == true) 

return rows
}
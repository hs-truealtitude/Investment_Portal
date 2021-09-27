return function  (mentorID) {

let total = 0

total = $getGrid('applications').filter(row => row.mentor == mentorID &&  row.isComplete == true).length

return total
}
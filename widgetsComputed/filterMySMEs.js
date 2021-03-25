return function  (mentor) {

let rows = []

rows = $getGrid('applications').filter(row => row.mentor == mentor && row.isComplete == true) 

return rows
}

return function  (company, mentor) {

let rows = []

rows = $getGrid('applications').filter(row => row.mentor == mentor && row.company == company && row.isComplete == true) 

return rows[0]
}
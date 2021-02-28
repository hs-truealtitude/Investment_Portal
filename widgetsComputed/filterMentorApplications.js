
return function  (pitch, mentor) {

let rows = []

rows = $getGrid('applications').filter(row => row.mentor == mentor && row.pitch == pitch && row.isComplete == true) 

return rows[0]
}
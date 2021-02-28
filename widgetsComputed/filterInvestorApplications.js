
return function  (pitch, investor) {

let rows = []

rows = $getGrid('applications').filter(row => row.investor == investor && row.pitch == pitch && row.isComplete == true) 

return rows[0]
}
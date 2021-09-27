
return function  (company, investor) {

let rows = []

rows = $getGrid('applications').filter(row => row.investor == investor && row.company == company && row.isComplete == true) 

return rows[0]
}
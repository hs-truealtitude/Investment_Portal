return function  (pitch) {

let rows = []

rows = $getGrid('applications').filter(row => row.pitch == pitch && row.isComplete == true && (row.name == "SME->Mentor" || row.name == "Mentor->SME")) 

return rows
}
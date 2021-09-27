return function(){

    let mentorKey = $getUser('filterMentor')

    let mentorRow = []

    mentorRow = $getGrid('mentors').filter(row => row.rowKey == mentorKey)  

    return mentorRow

}
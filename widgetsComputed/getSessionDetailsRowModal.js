let rows = []
    //let session = $dataGrid('sessions')[$getUser('activeSession')]
    rows = $getGrid('sessions').filter(row => row.rowKey == $getUser('activeSession'))  

return rows


return function () {

    const gridsToUpdate = ['applications']
    for (let gridId of gridsToUpdate) {
        for (let rowKey in $dataGrid(gridId)) {

            const record = $dataGrid(gridId)[rowKey]
            if (record.adminViewed !== true && record.name === "CompanyUser->Mentor" && record.name === "Mentor->CompanyUser") continue
            $setDataGridVal(
                gridId,
                `${rowKey}.adminViewed`,
                true
            )
        }
    }
}
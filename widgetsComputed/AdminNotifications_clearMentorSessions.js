
return function () {

    const gridsToUpdate = ['sessions']
    for (let gridId of gridsToUpdate) {
        for (let rowKey in $dataGrid(gridId)) {

            const record = $dataGrid(gridId)[rowKey]
            if (record.adminViewed !== true && record.direction === "CompanyUser->Mentor" && record.direction === "Mentor->CompanyUser") continue
            $setDataGridVal(
                gridId,
                `${rowKey}.adminViewed`,
                true
            )
        }
    }
}
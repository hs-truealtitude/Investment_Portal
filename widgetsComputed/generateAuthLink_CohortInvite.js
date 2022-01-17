return (rowKey, name, cohortType) => {
    $setGlobalModel('generateAuthLink', true)


if(cohortType == "Mentor"){

    this.callWf({
        workflow: '-MpkJcHDGhCGGwZZSpXT',
        rowKey,
    })
        .then((res) => {
            const { link } = res.authLinkGenerated

            $setUser('activeGeneratedLinkInvite', link)
            $setUser('inviteCohortName', name)

            $setGlobalModel('generateAuthLink', false)

            setTimeout(() => {
                this.$bvModal.show('openAuthModalInvite')
            }, 200)
        })


        .catch((err) => {
            console.error(err)

            $setGlobalModel('generateAuthLink', false)
    })
}

if(cohortType == "ProgrammePartner"){

    this.callWf({
        workflow: '-MpRc1BQ2udjLKkGDm6E',
        rowKey,
    })
        .then((res) => {
            const { link } = res.authLinkGenerated

            $setUser('activeGeneratedLinkInvite', link)
            $setUser('inviteCohortName', name)

            $setGlobalModel('generateAuthLink', false)

            setTimeout(() => {
                this.$bvModal.show('openAuthModalInvite')
            }, 200)
        })


        .catch((err) => {
            console.error(err)

            $setGlobalModel('generateAuthLink', false)
    })
}



}
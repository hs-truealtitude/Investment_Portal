return (rowKey) => {
    $setGlobalModel('generateAuthLink', true)

    this.callWf({
        workflow: '-Mo8HDbaw4V0Lg5fCy1t',
        rowKey,
    })
        .then((res) => {
            const { link } = res.authLinkGenerated

            $setUser('activeGeneratedLink', link)

            $setGlobalModel('generateAuthLink', false)

            setTimeout(() => {
                this.$bvModal.show('openAuthModal')
            }, 200)
        })

        .catch((err) => {
            console.error(err)

            $setGlobalModel('generateAuthLink', false)
    })

}
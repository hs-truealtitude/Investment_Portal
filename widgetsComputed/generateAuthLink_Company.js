return (rowKey) => {
    $setGlobalModel('generateAuthLink', true)

    this.callWf({
        workflow: '-MnkooX1eKKHhLPA_bfK',
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
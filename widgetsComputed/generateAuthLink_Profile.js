return (rowKey) => {
    $setGlobalModel('generateAuthLink', true)

    this.callWf({
        workflow: '-MnydXMg_PV7TibT78oI',
        origin: document.location.origin,
        rowKey,
    })
        .then((res) => {
            console.log(res)
            const { link, user } = res.authLinkGenerated

            $addUser({ uid: user.uid })
            
            this.$bvModal.show('openAuthModal')

            $setUser('activeGeneratedLink', link)

            //alert(link)
            $setGlobalModel('generateAuthLink', false)
        })

        .catch((err) => {
            console.error(err)

            $setGlobalModel('generateAuthLink', false)
    })

}
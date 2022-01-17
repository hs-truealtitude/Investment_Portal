<template>
    <div 
        class="LinkedCardListDetails" 
        v-if="rowKey"
    >
        <div class="d-flex justify-content-center pt-2">
            <button v-if="fbUser && !fbUser.email" style="width: auto;" class="myButton"
                href="#"
                @click.prevent="openSignInModal"
            >
                Not a user? Sign up here
            </button>
        </div>

        <widget-content
           :widget-key="widgetKey" 
           ref="widget" 
        />
    </div>
</template>

<script>
module.exports = {
    props: ['widgetKey'],
    data() {
        return {
            fbUser: window.fbUser
        }
    },
    methods: {
        openSignInModal() {
            $('.appNav__item > a:contains(Sign In)').get(0).click()
        },
    },
    computed: {
        rowKey() {
            return fbUser.customClaims && fbUser.customClaims.rowKey
        },
    },
    mounted() {
        if (!this.rowKey) return

        setTimeout(() => {
            const widgetInst = $(this.$refs.widget.$el).find('.widgetContent').get(0).__vue__

            widgetInst.openDetail(fbUser.customClaims.rowKey)
        })
    }
}

</script>

<style>
    .LinkedCardListDetails  .widgetContent > div > button {
        display: none;
    }
</style>

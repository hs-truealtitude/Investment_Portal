<template>
    <div 
        class="linkedUserLanding" 
        v-if="rowKey"
    >
        <div class="d-flex justify-content-center pt-2">
            <button v-if="fbUser && !fbUser.email" style="width: auto;" class="myButton"
                href="#"
                @click.prevent="$('.appNav__item > a:contains(Sign In)').get(0).click()"
            >
                Not a user? Sign up here
            </button>
        </div>

        <widget-content
           widget-key="-Mg6Yy3Mk9WxAg0f10FC" 
           ref="widget" 
        />
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            fbUser: window.fbUser
        }
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
    .linkedUserLanding #scroll-Mg6Yy3Mk9WxAg0f10FC > div > button {
        display: none;
    }
</style>


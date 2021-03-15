<template>
    <div id="foo">
        <h1>this is my foo page</h1>
        <div>
            {{fooInfo}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Foo",
        data() {
            return {
                fooInfo: 'this is foo info'
            }
        }
    }
</script>

<style scoped>

</style>

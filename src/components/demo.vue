<template>
    <div class="demo">
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: 'Demo',
    props: {
        title: {
            type: String,
            default () {
                return 'Hello Vue'
            }
        },
        text: {
            type: String,
            default () {
                return 'This is a first vue npm package'
            }
        }
    },
    data () {
        return {
            
        }
    }
}
</script>
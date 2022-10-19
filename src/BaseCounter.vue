<template>
    <div>
        я счетчик, {{counter}}
        <button @click="counter++">кликни меня</button>

    </div>
</template>

<script>
export default {
    name: "BaseCounter",
    data() {
        return {
            counter: 0,
        }
    }
}
</script>

<style scoped>

</style>
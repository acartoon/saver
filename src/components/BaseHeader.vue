<template>
    <div :class="$style.wrapper">
        <div :class="$style.image">
            <img src="https://arda.ws-dev.ru/img/ITARDA.db1a7e3b.png" alt="Лого арды">
        </div>
        <div :class="$style.image">
            <img src="https://arda.ws-dev.ru/img/ITARDA.db1a7e3b.png" alt="IT Pelag">
        </div>
    </div>
</template>

<script>
import json from '../json.json'
export default {
    name: "BaseHeader",

}
</script>

<style lang="scss" module>

.wrapper {
    display: flex;
}

.image {

}
</style>
<template>
    <BaseHeader />

</template>

<script>
import BaseCounter from "./BaseCounter.vue";
import BaseHeader from "./components/BaseHeader.vue";
import axios from 'axios';
import json from "./json.json";
export default {
    components: {BaseHeader, BaseCounter},
    data() {
        return {
            type: null,
            period: null,
            requests: null,
            developers: null,
            total: null,
        }
    },
    mounted() {
        this.getData().then(({type, period, requests,developers, total  }) => {
             this.type = type;
             this.period = period;
             this.requests = requests;
             this.developers = developers;
             this.total = total;
        })
    },
    methods: {
        async getData() {
           return axios.get('/json.json');
        }
    }
}
</script>

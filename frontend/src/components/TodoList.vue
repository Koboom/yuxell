<script>
    export default {
        props: ["todoName"]
    }
</script>

<template>
    <div class="w3-container w3-row">
        <div onclick="this.parentElement.style.display='none'" style="cursor: pointer;" class="w3-half">{{ todoName }}</div>
    </div>
</template>

<style></style>
<script>
    export default {
        props: ["todoName"]
    }
</script>

<template>
    <div class="y-container y-row">
        <div onclick="this.parentElement.style.display='none'" style="cursor: pointer;" class="y-half">{{ todoName }}</div>
    </div>
</template>

<style></style>
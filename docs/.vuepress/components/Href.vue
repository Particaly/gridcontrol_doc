<template>
    <a class="href" :href="path">{{value}}</a>
</template>

<script>
	export default {
		name: "Herf",
        props: {
			value: '',
            path: ''
        }
	}
</script>

<style scoped>
.href{
    cursor: pointer;
}
</style>

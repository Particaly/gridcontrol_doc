<template>
    <span class="href" @click="goto">{{value}}</span>
</template>

<script>
	export default {
		name: "Herf",
        props: {
			value: '',
            path: ''
        },
        methods:{
            goto() {
                if(this.path&&this.path[0] === '/'){
                    if(this.path !== this.$route.path){
                        this.$router.push(this.path);
                    }
                } else {
                    window.location.href = this.path;
                }
            }
        },
	}
</script>

<style scoped lang="scss">
.href {
    color: #3eaf7c;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
}
</style>

<template>
    <div class="btn-holder" v-if="$parent.isInScene">
        <div class="btn" id="back">返回上一个层级</div>
    </div>
</template>

<script>
	let gridcontrol;
	export default {
		name: "ExampleBackV2",
		mounted() {
			this.$parent.watcher.watch('load', this.init);
		},
		methods: {
			init() {
				gridcontrol = this.$parent.gridcontrol;
				document.getElementById('back').addEventListener('click', () => {
					gridcontrol.back();
				});
			},
		}
	}
</script>

<style scoped>

</style>

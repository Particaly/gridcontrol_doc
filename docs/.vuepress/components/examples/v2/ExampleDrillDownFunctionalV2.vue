<template>
    <div class="btn-holder">
        <div class="btn" id="泰兴市">泰兴市</div>
        <div class="btn" id="分界镇">分界镇</div>
    </div>
</template>

<script>
	let gridcontrol;
	export default {
		name: "ExampleDrillDownFunctionalV2",
		mounted() {
			this.$parent.watcher.watch('load', this.init);
		},
		methods: {
			init() {
				gridcontrol = this.$parent.gridcontrol;
				document.getElementById('泰兴市').addEventListener('click', () => {
					gridcontrol.goto('泰兴市');
				});
				document.getElementById('分界镇').addEventListener('click', () => {
					gridcontrol.goto('分界镇');
				});
			}
		}
	}
</script>

<style scoped>

</style>

<template>
    <div class="btn-holder">
        <div class="btn" id="level2">层级2</div>
        <div class="btn" id="level3">层级3</div>
    </div>
</template>

<script>
	let gridcontrol;
	export default {
		name: "ExampleSetNextGridData",
		mounted() {
			this.$parent.watcher.watch('load', this.init);
		},
		methods: {
			init() {
				gridcontrol = this.$parent.gridcontrol;
				document.getElementById('level2').addEventListener('click', () => {
					gridcontrol.setInnerData(gridcontrol.grid.findGridByLevel(2));
				});
				document.getElementById('level3').addEventListener('click', () => {
					gridcontrol.setInnerData(gridcontrol.grid.findGridByLevel(3));
				});
			}
		}
	}
</script>

<style scoped>

</style>

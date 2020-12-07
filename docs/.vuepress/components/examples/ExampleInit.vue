<template>
    <div class="container"></div>
</template>

<script>
	export default {
		name: "ExampleInit",
        mounted() {
			this.$parent.watcher.watch('load', this.init);
        },
        methods: {
	        init() {
	        	console.log(window.gridcontrol);
		        // 把网格下钻的显示参数打开
		        gridcontrol.showOuterLayer = true;
		        gridcontrol.showInnerLayer = true;
		        gridcontrol.setInnerData(gridcontrol.grid.findGridByLevel(2))
		        gridcontrol.hoverCallback = (grid) => {
		            console.log(grid);
		        }
            }
        },
	}
</script>

<style scoped>

</style>

<template></template>

<script>
	export default {
		name: "ExampleInit",
        mounted() {
			this.$parent.watcher.watch('load', this.init);
        },
        methods: {
	        init() {
		        gridcontrol.showOuterLayer = true;
		        gridcontrol.showInnerLayer = true;
		        gridcontrol.setInnerData(gridcontrol.grid.findGridByLevel(2))
		        gridcontrol.triggerClick = false;
		        gridcontrol.layerbox.setLayerZoomRange("hover", 8, 13.3);
            }
        },
	}
</script>

<style scoped>

</style>

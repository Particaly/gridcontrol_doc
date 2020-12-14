<template></template>

<script>
    let gridcontrol;
	export default {
		name: "ExampleInit",
        mounted() {
			this.$parent.watcher.watch('load', this.init);
        },
        methods: {
	        init() {
		        gridcontrol = this.$parent.gridcontrol;
		        // gridcontrol.layerbox.setLayerZoomRange("hover", 8, 13.3);
            }
        },
	}
</script>

<style scoped>

</style>

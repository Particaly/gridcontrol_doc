<template>
    <div class="btn-holder">
        <div class="btn" id="blue">蓝色</div>
        <div class="btn" id="green">绿色</div>
    </div>
</template>

<script>
	let gridcontrol;
	export default {
		name: "ExampleLineColor",
		mounted() {
			this.$parent.watcher.watch('load', this.init);
		},
        methods: {
            init() {
	            gridcontrol = this.$parent.gridcontrol;
	            document.getElementById('blue').addEventListener('click', () => {
		            gridcontrol.setColor('outer', 'middle', 'blue');
		            gridcontrol.layerbox.setLayerPaintProperty('outer-middle', 'line-width', 2);
		            gridcontrol.layerbox.setLayerPaintProperty('inner-top', 'line-width', 1);
		            gridcontrol.layerbox.setLayerPaintProperty('inner-middle', 'line-width', 2);
		            gridcontrol.layerbox.setLayerPaintProperty('inner-bottom', 'line-width', 2);
	            });
	            document.getElementById('green').addEventListener('click', () => {
		            gridcontrol.setColor('outer', 'middle', 'green');
		            gridcontrol.layerbox.setLayerPaintProperty('outer-middle', 'line-width', 2);
		            gridcontrol.layerbox.setLayerPaintProperty('inner-top', 'line-width', 1);
		            gridcontrol.layerbox.setLayerPaintProperty('inner-middle', 'line-width', 2);
		            gridcontrol.layerbox.setLayerPaintProperty('inner-bottom', 'line-width', 2);
	            });
            }
        },
	}
</script>

<style scoped>

</style>

<template>
    <div class="btn-holder">
        <div class="btn" id="blue">蓝色</div>
        <div class="btn" id="green">绿色</div>
    </div>
</template>

<script>
	let gridcontrol;
	export default {
		name: "ExampleSetColor",
		mounted() {
			this.$parent.watcher.watch('load', this.init);
		},
		methods: {
			init() {
				gridcontrol = this.$parent.gridcontrol;
				// 创建一个自定义的layer
				gridcontrol.createGroupLayer({
					group: 'fill-layer',
					grids: gridcontrol.findGridByLevel(1).slice(0, 3),
					type: 'fill',
					layout: {visibility: 'visible'},
					paint: {'fill-color': 'rgba(255,255,255,.5)'}
				});
				document.getElementById('blue').addEventListener('click', () => {
					// 设置默认样式
					gridcontrol.setLayerStyle('line-color', 'blue');
					gridcontrol.setLayerStyle('line-color-hover', 'blue');
					// 单独设置样式
                    let layer = gridcontrol.getLayer('fill-layer');
					layer.paint['fill-color'] = 'rgba(0,0,255,0.5)';
				});
				document.getElementById('green').addEventListener('click', () => {
					// 设置默认样式
					gridcontrol.setLayerStyle('line-color', 'green');
					gridcontrol.setLayerStyle('line-color-hover', 'green');
					// 单独设置样式
					let layer = gridcontrol.getLayer('fill-layer');
					layer.paint['fill-color'] = 'rgba(0,255,255,0.5)';
				});
			}
		}
	}
</script>

<style scoped>

</style>

<template>
    <div class="btn-holder">
        <div class="btn" id="on">开启</div>
        <div class="btn" id="off">关闭</div>
    </div>
</template>

<script>
	let gridcontrol;
	export default {
		name: "ExampleHighlightV2",
		mounted() {
			this.$parent.watcher.watch('load', this.init);
		},
		methods: {
			init() {
				gridcontrol = this.$parent.gridcontrol;
				const girdArray = gridcontrol.findGridByLevel(1).slice(0,3);
				gridcontrol.createGroupLayer({
                    group: 'highlight',
                    grids: girdArray,
                    type: 'fill',
                    paint: {
                    	'fill-color': 'rgba(255,0,0,0.4)'
                    }
                });
				gridcontrol.showGroupLayer('highlight');
				document.getElementById('on').addEventListener('click', () => {
					gridcontrol.showGroupLayer('highlight');
				});
				document.getElementById('off').addEventListener('click', () => {
					gridcontrol.hideGroupLayer('highlight');
				});
				this.$once('hook:beforeDestroy', () => {
					gridcontrol.removeGroupLayer('highlight');
				});
			}
		}
	}
</script>

<style scoped>

</style>

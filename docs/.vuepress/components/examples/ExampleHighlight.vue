<template>
    <div class="btn-holder">
        <div class="btn" id="on">开启</div>
        <div class="btn" id="off">关闭</div>
    </div>
</template>

<script>
	let gridcontrol;
	export default {
		name: "ExampleHighlight",
		mounted() {
			this.$parent.watcher.watch('load', this.init);
		},
		methods: {
			init() {
				gridcontrol = this.$parent.gridcontrol;
				const girdArray = gridcontrol.findGridByLevel(2).slice(0,3);
                gridcontrol.sethighlightgrid(girdArray,'rgba(255,0,0,0.2)', 'yellow');
                gridcontrol.showHighLight('yellow');
				document.getElementById('on').addEventListener('click', () => {
					gridcontrol.showHighLight('yellow');
				});
				document.getElementById('off').addEventListener('click', () => {
					gridcontrol.hideHighLight('yellow');
				});
				this.$once('hook:beforeDestroy', () => {
					gridcontrol.removeHighLight('yellow');
				})
			}
		},
	}
</script>

<style scoped>

</style>

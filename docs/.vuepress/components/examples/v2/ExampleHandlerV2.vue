<template>
    <div class="btn-holder" v-if="$parent.isInScene">
        <div class="btn">{{hoveringGrid}}</div>
        <div class="btn" id="triggerClick">click事件 {{triggerClick?'on':'off'}}</div>
        <div class="btn" id="triggerHover">hover事件 {{triggerHover?'on':'off'}}</div>
    </div>
</template>

<script>
	let gridcontrol;
	export default {
		name: "ExampleHandlerV2",
		data: function(){
			return {
				hoveringGrid: '无',
				triggerHover: true,
				triggerClick: true,
			}
		},
		mounted() {
			this.$parent.watcher.watch('load', this.init);
		},
		methods: {
			init() {
				gridcontrol = this.$parent.gridcontrol;
				document.getElementById('triggerHover').addEventListener('click', () => {
					this.triggerHover = !this.triggerHover;
					gridcontrol.setOptions('triggerHover', this.triggerHover);
				});
				document.getElementById('triggerClick').addEventListener('click', () => {
					this.triggerClick = !this.triggerClick;
					gridcontrol.setOptions('triggerClick', this.triggerClick);
				});
				gridcontrol.on('click', (grid) => {
					alert('点击了网格' + grid.name);
				});
				gridcontrol.on('hover', (grid) => {
					this.hoveringGrid = grid ? grid.name : '无';
				});
			}
		}
	}
</script>

<style scoped>

</style>

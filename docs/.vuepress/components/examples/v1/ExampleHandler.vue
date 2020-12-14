<template>
    <div class="btn-holder">
        <div class="btn">{{hoveringGrid}}</div>
        <div class="btn" id="triggerClick">click事件 {{triggerClick?'on':'off'}}</div>
        <div class="btn" id="triggerHover">hover事件 {{triggerHover?'on':'off'}}</div>
    </div>
</template>

<script>
	let gridcontrol;
	export default {
		name: "ExampleHandler",
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
					gridcontrol.triggerHover = this.triggerHover = !this.triggerHover;
				});
				document.getElementById('triggerClick').addEventListener('click', () => {
					gridcontrol.triggerClick = this.triggerClick = !this.triggerClick;
				});
				gridcontrol.clickCallback = (grid) => {
				    alert('点击了网格' + grid.name);
				}
				gridcontrol.hoverCallback = (grid) => {
					this.hoveringGrid = grid ? grid.name : '无';
				}
			}
		}
	}
</script>

<style scoped>

</style>

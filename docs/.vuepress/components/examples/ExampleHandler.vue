<template>
    <div class="btn-holder">
        <div class="btn">{{hoveringGrid}}</div>
    </div>
</template>

<script>
	let gridcontrol;
	export default {
		name: "ExampleHandler",
        data: function(){
            return {
	            hoveringGrid: '无'
            }
        },
		mounted() {
			this.$parent.watcher.watch('load', this.init);
		},
		methods: {
			init() {
				gridcontrol = this.$parent.gridcontrol;
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

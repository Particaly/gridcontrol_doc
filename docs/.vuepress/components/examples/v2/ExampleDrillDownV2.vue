<template>
    <div class="btn-holder">
        <div class="btn" @click="switchIndex(0)" id="normal">{{index === 0?'· ':''}}默认模式</div>
        <div class="btn" @click="switchIndex(1)" id="black">{{index === 1?'· ':''}}黑名单</div>
        <div class="btn" @click="switchIndex(2)" id="white">{{index === 2?'· ':''}}白名单</div>
        <div class="btn">{{hoverName}}</div>
    </div>
</template>

<script>
	let gridcontrol;
	export default {
		name: "ExampleDrillDownV2",
        data: function(){
            return {
                index: 0,
                hoverName: '无'
            }
        },
		mounted() {
			this.$parent.watcher.watch('load', this.init);
		},
		methods: {
			switchIndex(index) {
			    this.index = index;
            },
			init() {
				gridcontrol = this.$parent.gridcontrol;
				document.getElementById('normal').addEventListener('click', () => {
					gridcontrol.setOptions('drillRule', 'none');
				});
				document.getElementById('black').addEventListener('click', () => {
					gridcontrol.setOptions('drillRule', 'black');
					gridcontrol.setOptions('blacklist', ['兴化市']);
				});
				document.getElementById('white').addEventListener('click', () => {
					gridcontrol.setOptions('drillRule', 'white');
					gridcontrol.setOptions('whitelist', ['兴化市']);
				});
				gridcontrol.on('hover', (grid) => {
					this.hoverName = grid ? grid.name : '无';
				});
			}
		}
	}
</script>

<style scoped>

</style>

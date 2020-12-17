<template>
    <div class="btn-holder" v-if="$parent.isInScene">
        <div class="btn" @click="switchIndex(0)" >{{index === 0?'· ':''}}默认模式</div>
        <div class="btn" @click="switchIndex(1)" >{{index === 1?'· ':''}}阻止下钻</div>
        <div class="btn" @click="switchIndex(2)" >{{index === 2?'· ':''}}无动画下钻</div>
    </div>
</template>

<script>
	let gridcontrol;
	export default {
		name: "ExampleDrillDownMoreV2",
        data: function(){
            return {
                index: 0,
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
				gridcontrol.on('click', (grid, eventData) => {
					switch (this.index) {
						case 1: {
							eventData.return = true;
							break;
						}
						case 2: {
							eventData.animation = false;
							break
						}
					}
				});
			}
		}
	}
</script>

<style scoped>

</style>

<template>
    <div class="btn-holder">
        <div class="btn" id="back">返回上一个层级</div>
    </div>
</template>

<script>
	let gridcontrol;
	export default {
		name: "ExampleBack",
		mounted() {
			this.$parent.watcher.watch('load', this.init);
		},
		methods: {
			init() {
				gridcontrol = this.$parent.gridcontrol;
				document.getElementById('back').addEventListener('click', () => {
					gridcontrol.back((grid) => {
						console.log(grid);
					});
				});
			}
		}
	}
</script>

<style scoped>

</style>

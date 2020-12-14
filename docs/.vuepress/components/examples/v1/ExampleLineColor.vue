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
	            });
	            document.getElementById('green').addEventListener('click', () => {
		            gridcontrol.setColor('outer', 'middle', 'green');
	            });
            }
        },
	}
</script>

<style scoped>

</style>

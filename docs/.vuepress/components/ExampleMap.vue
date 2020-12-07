<template>
    <div class="container">
        <div class="map-holder">
            <div class="map" ref="map" v-if="isInScene"></div>
        </div>
        <slot ref="slots"></slot>
    </div>
</template>

<script>
    import mapboxgl,{Map} from '@xbcx/mapbox-gl';
    import GridControl from '@jspatrick/grid';
    import { createWatcher } from '@jspatrick/helper';
    mapboxgl.accessToken = 'pk.eyJ1Ijoid3pqOTI3MTIiLCJhIjoiY2pxNXphMmgyMjl4dzN4c3oxZTczaXFuNCJ9.7iqkAVOCgYhh4vdW-hmz4g';
    let map;
	export default {
		name: "ExampleMap",
        data: function(){
            return {
	            center:[120.0657394818769,32.60206729981317],
	            bearing:80.79999999999927,
	            pitch:0,
	            zoom:8.150497255506716,
                isInScene: false,
	            watcher: createWatcher()
            }
        },
        watch: {
	        isInScene(newval) {
	        	if(newval){
			        this.$nextTick(this.buildMap);
                }else {
			        this.destroyMap();
                }
            }
        },
        mounted() {
			this.bindEvents();
        },
        methods: {
            bindEvents() {
            	const windowHeight = window.innerHeight;
            	const elHeight = this.$el.clientHeight;
            	const handler = () => {
		            const isCrossTop = window.scrollY >= this.$el.offsetTop - windowHeight;
		            const isCrossBottom = window.scrollY <= this.$el.offsetTop + elHeight;
            	    this.isInScene = isCrossTop && isCrossBottom;
            	}
            	window.addEventListener('scroll', handler);
            },
	        async buildMap() {
		        const level1 = (await this.axios.get(this.$withBase('/jstz_wg_one.geojson'))).data;
		        const level2 = (await this.axios.get(this.$withBase('/jstz_wg_two.geojson'))).data;
		        const level3 = (await this.axios.get(this.$withBase('/jstz_wg_three.geojson'))).data;
		        map = new Map({
			        container: this.$refs.map,
			        style: 'mapbox://styles/mapbox/dark-v9',
			        center: this.center,
			        zoom: this.zoom,
			        bearing: this.bearing,
			        pitch: this.pitch,
		        });
		        map.on('click',(e) => {
			        console.log(`lngLat:[${e.lngLat.lng},${e.lngLat.lat}],\ncenter:${JSON.stringify(e.target.getCenter().toArray())},\nbearing:${e.target.getBearing()},\npitch:${e.target.getPitch()},\nzoom:${e.target.getZoom()}`);
		        })
		        map.once('style.load', () => {
			        let gridcontrol = window.gridcontrol = new GridControl();
			        // 导入网格数据
			        gridcontrol.useGridData(level1);
			        gridcontrol.useGridData(level2, 2);
			        gridcontrol.useGridData(level3, 3);
			        // 初始化
			        gridcontrol.init(map, map);
			        // 修改围栏外遮罩的颜色
			        gridcontrol.layerbox.setLayerColorByName("fullmask", 'rgba(0,0,0,0.4)');
			        gridcontrol.setColor('outer', 'middle', 'rgba(199, 199, 201, 1)');
			        gridcontrol.layerbox.setLayerPaintProperty('outer-middle', 'line-width', 2);
			        gridcontrol.layerbox.setLayerPaintProperty('inner-top', 'line-width', 1);
			        gridcontrol.layerbox.setLayerPaintProperty('inner-middle', 'line-width', 2);
			        gridcontrol.layerbox.setLayerPaintProperty('inner-bottom', 'line-width', 2);
			        this.watcher.dispatch('load');
		        });
            },
            destroyMap() {
            	this.watcher.dispatch('destroy');
                map = null;
            }
        },
	}
</script>

<style scoped lang="scss">
.container{
    margin-top: 1rem;
    /deep/.language-javascript{
        margin: 0 auto;
        border-radius: 0;
    }
}
.map-holder,.map {
    height: 330px;
    width: 100%;

}
</style>

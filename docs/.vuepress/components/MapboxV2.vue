<template>
    <div class="container">
        <div class="map-holder">
            <div class="map" ref="map" v-if="isInScene"></div>
        </div>
        <div class="reset" @click="reset">重置</div>
        <slot ref="slots"></slot>
    </div>
</template>

<script>
	import mapboxgl,{Map} from '@xbcx/mapbox-gl';
	import GridControl from '@jspatrick/grid2';
	import { createWatcher } from '@jspatrick/helper';
	mapboxgl.accessToken = 'pk.eyJ1Ijoid3pqOTI3MTIiLCJhIjoiY2pxNXphMmgyMjl4dzN4c3oxZTczaXFuNCJ9.7iqkAVOCgYhh4vdW-hmz4g';

	export default {
		name: "MapboxV2",
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
				const handler = () => {
					const windowHeight = window.innerHeight;
					const elHeight = this.$el.clientHeight;

					const isCrossTop = window.scrollY >= this.$el.offsetTop - windowHeight;
					const isCrossBottom = window.scrollY <= this.$el.offsetTop + elHeight;
					this.isInScene = isCrossTop && isCrossBottom;
				}
				window.addEventListener('scroll', handler);
			},
			async buildMap() {
				let map = this.map = new Map({
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
					let gridcontrol = this.gridcontrol = new GridControl();
					gridcontrol.options.mainId = 'Name';
					// 导入网格数据
					gridcontrol.useGridData(this.$withBase('/jstz_wg_one.geojson'));
					gridcontrol.useGridData(this.$withBase('/jstz_wg_two.geojson'));
					gridcontrol.useGridData(this.$withBase('/jstz_wg_three.geojson'));
					gridcontrol.on('load', () => {
						// 初始化
						gridcontrol.useMap('default', map);
						console.log(gridcontrol);
						this.watcher.dispatch('load');
					});
					this.handler = (grid, eventData) => {
						console.log('back', grid.level, eventData.recordType);
						console.log(gridcontrol);
						if (grid.name === '泰州市') {
							eventData.flyOptions = {
								center: this.center,
								zoom: this.zoom,
								bearing: this.bearing,
								pitch: this.pitch,
							}
						}
					}
					gridcontrol.on('back', this.handler);
				});
			},
			destroyMap() {
				this.watcher.dispatch('destroy');
				this.map.remove();
				this.map = null;
				this.gridcontrol.destroy();
			},
			reset() {
				this.isInScene = false;
				this.$nextTick(() => {
					this.isInScene = true;
				})
			}
		},
	}
</script>

<style scoped lang="scss">
    .container{
        margin-top: 1rem;
        position: relative;
        /deep/canvas{
            outline: none;
        }
        /deep/.language-javascript{
            margin: 0 auto;
            border-radius: 0;
        }
        /deep/.btn-holder{
            position: absolute;
            display: flex;
            top: 0;
            .btn{
                padding: 8px 15px;
                margin-right: 15px;
                background: #42b983;
                color: white;
                cursor: pointer;
                user-select: none;
            }
        }
    }
    .map-holder,.map {
        height: 330px;
        width: 100%;
    }
    .reset{
        padding: 10px 20px;
        background: #42b983;
        position: absolute;
        top: 286px;
        right: 0;
        color: #fff;
        letter-spacing: 3px;
        border-top-left-radius: 7px;
        cursor: pointer;
    }
</style>

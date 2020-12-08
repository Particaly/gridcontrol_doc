## 快速入门

:::tip
这是gridcontrol的v1文档
:::

## 安装

```javascript
npm install @jspatrick/grid@1.x
```
或者
```javascript
yarn add @jspatrick/grid@1.x
```

## 使用
```javascript
import GridControl from '@jspatrick/grid';

const gridcontrol = new GridControl;
```
::: tip
gridcontrol的构造函数可以传一个布尔值，用来处理是否清除原有数据进行构造
:::
这样， 我们就获得了一个 GridControl 的实例，
这个实例下包含了大部分常用的网格操作

在操作网格之前，我们需要使用 
<Href value="useGridData" path="/v1.x/Variable.html#usegriddata" /> 
方法来传入网格数据进行初始化
```javascript
// 创建一个GridControl实例
let gridcontrol = window.gridcontrol = new GridControl();
// 导入网格数据
gridcontrol.useGridData(geojson.level1);
gridcontrol.useGridData(geojson.level2, 2);
gridcontrol.useGridData(geojson.level3, 3);
// 初始化
gridcontrol.init(map,map2);
// 修改围栏外遮罩的颜色
gridcontrol.layerbox.setLayerColorByName("fullmask", 'rgba(0,0,0,0.4)');
```
一般的云图页面下，需要重新初始化网格的 flyOption
```javascript
// 只有当permanentInner为true时，才会在下钻到第三级网格时同时显示第二级网格
gridcontrol.setOption("permanentInner", true);
// 把网格下钻的显示参数打开
gridcontrol.showOuterLayer = true;
gridcontrol.showInnerLayer = true;
// 绑定地图的点击事件回调，点击地图的时候会调用该方法
gridcontrol.clickCallback = onMapClick;
// hove回调，同上
gridcontrol.hoverCallback = onMapHover;
// 加载地图
gridcontrol.init(
    window.control.map, // BasicMap
    window.control.map2,// PoiMap
    "zhts", // flyOption的页面标志
    true    // 是否重新绑定事件
);
// 设置下钻的网格数据
gridcontrol.setInnerData(gridcontrol.grid.findGridByLevel(2));
// 设置网格hover时的层级显示范围
gridcontrol.layerbox.setLayerZoomRange("hover", 10, 13.3);
```

### 初始化

这个例子描述了gridcontrol的初始化流程，
后续的代码中不再重复

<Mapbox >
<ExampleInit></ExampleInit>

```javascript
// --------------------------BaseMap-----------------------------------
// 创建网格单例
let gridcontrol = window.gridcontrol = new GridControl();
// 导入网格数据
gridcontrol.useGridData(level1);
gridcontrol.useGridData(level2, 2);
gridcontrol.useGridData(level3, 3);
// 初始化
gridcontrol.init(map, map);
// 修改围栏外遮罩的颜色
gridcontrol.layerbox.setLayerColorByName("fullmask", 'rgba(0,0,0,0.4)');
// 修改网格线的颜色
gridcontrol.setColor('outer', 'middle', 'rgba(199, 199, 201, 1)');
gridcontrol.layerbox.setLayerPaintProperty('outer-middle', 'line-width', 2);
gridcontrol.layerbox.setLayerPaintProperty('inner-top', 'line-width', 1);
gridcontrol.layerbox.setLayerPaintProperty('inner-middle', 'line-width', 2);
gridcontrol.layerbox.setLayerPaintProperty('inner-bottom', 'line-width', 2);
// --------------------------BaseMap-----------------------------------

// --------------------------云图页面-----------------------------------
// 修改网格的下钻默认视角，网格距离上下左右的像素值
gridcontrol.defaultOption.flyOffset = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
};
// 把网格下钻的显示参数打开
gridcontrol.showOuterLayer = true;
gridcontrol.showInnerLayer = true;
// 加载地图
gridcontrol.init(
    window.control.map, // BasicMap
    window.control.map2,// PoiMap
    "zhts", // flyOption的页面标志,只有当flyOption的path和此处的path相同时，flyOption才会生效
    true    // 是否重新绑定事件
);
// 设置下钻的网格数据
gridcontrol.setInnerData(gridcontrol.grid.findGridByLevel(2));
// --------------------------云图页面-----------------------------------
```
</Mapbox>

### 事件回调
<Mapbox>
<ExampleHandler></ExampleHandler>

```javascript
// 设置是否触发事件
document.getElementById('triggerHover').addEventListener('click', () => {
    gridcontrol.triggerHover = this.triggerHover = !this.triggerHover;
});
document.getElementById('triggerClick').addEventListener('click', () => {
    gridcontrol.triggerClick = this.triggerClick = !this.triggerClick;
});
// 每个云图都应该使用这种方式对回调函数进行覆盖
gridcontrol.clickCallback = (grid) => {
    alert('点击了网格' + grid.name);
}
gridcontrol.hoverCallback = (grid) => {
    this.hoveringGrid = grid ? grid.name : '无';
}
```
</Mapbox>

### 网格高亮

<Mapbox>
<ExampleHighlight></ExampleHighlight>

```javascript
// 取层级2的前三个网格作为grid数组
const girdArray = gridcontrol.findGridByLevel(2).slice(0,3);
// 创建一个高亮分组
gridcontrol.sethighlightgrid(girdArray,'rgba(255,0,0,0.2)', 'yellow');
// 展示一个高亮分组
gridcontrol.showHighLight('yellow');
// 绑定按钮事件逻辑
document.getElementById('on').addEventListener('click', () => {
    gridcontrol.showHighLight('yellow');
});
document.getElementById('off').addEventListener('click', () => {
    gridcontrol.hideHighLight('yellow');
});
// 销毁一个高亮分组
this.$once('hook:beforeDestroy', () => {
    gridcontrol.removeHighLight('yellow');
})
```
</Mapbox>

### 修改网格线颜色

<Mapbox>
<ExampleLineColor></ExampleLineColor>

```javascript
document.getElementById('blue').addEventListener('click', () => {
    gridcontrol.setColor('outer', 'middle', 'blue');
    // 等同于调用下面这个
    // gridcontrol.layerbox.setLayerColorByName('outer-middle', 'blue');
});
document.getElementById('green').addEventListener('click', () => {
    gridcontrol.setColor('outer', 'middle', 'green');
});
```
</Mapbox>

### 修改下一个层级的展示数据

<Mapbox>
<ExampleSetNextGridData></ExampleSetNextGridData>

```javascript
document.getElementById('level2').addEventListener('click', () => {
    // 设置下一个层级的展示数据为所有层级2的网格
    gridcontrol.setInnerData(gridcontrol.grid.findGridByLevel(2));
});
document.getElementById('level3').addEventListener('click', () => {
    // 设置下一个层级的展示数据为所有层级3的网格
    gridcontrol.setInnerData(gridcontrol.grid.findGridByLevel(3));
});
```
</Mapbox>

### 添加下钻后的返回按钮

<Mapbox>
<ExampleBack></ExampleBack>

```javascript
document.getElementById('back').addEventListener('click', () => {
    // 该方法会从gridchain中取得上一个被记录得网格，并调用传入得回调
    gridcontrol.back((grid) => {
        console.log(grid);
    });
});
```
</Mapbox>

### 手动触发下钻

<Mapbox>
<ExampleDrillDown></ExampleDrillDown>

```javascript
document.getElementById('泰兴市').addEventListener('click', () => {
    gridcontrol.goto('泰兴市');
});
document.getElementById('分界镇').addEventListener('click', () => {
    gridcontrol.goto('分界镇');
});
```
</Mapbox>

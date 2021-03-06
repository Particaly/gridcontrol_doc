## 快速入门
![](https://img.shields.io/npm/v/@jspatrick/grid)
![](https://badgen.net/npm/dw/@jspatrick/grid)
:::tip
这是gridcontrol的v2文档

如果你需要查看v1版本的文档，
请点击
<Href value="这里" path="/v1.x/" /> 
:::

## 安装

```javascript
npm install @jspatrick/grid@2.x
```
或者
```javascript
yarn add @jspatrick/grid@2.x
```

## 使用

```javascript
import GridControl from '@jspatrick/grid';

const gridcontrol = new GridControl;
```

::: tip
gridcontrol是一个单例，
所有数据都会存放在实例化之后的对象上
:::

这样， 我们就获得了一个 GridControl 的实例，
这个实例下包含了大部分常用的网格操作

在操作网格之前，我们需要使用 
<Href value="useGridData" path="/v2.x/Variable.html#usegriddata" /> 
方法来传入网格数据进行初始化

```javascript
// 基于mapbox开发
const map = new mapboxgl.Map();
// 等待style加载完成后
map.once('style.load', () => {
    // 创建一个GridControl实例
    let gridcontrol = window.gridcontrol = new GridControl();
    // 传入网格数据
    gridcontrol.useGridData(json);
    gridcontrol.useGridData(json1);
    gridcontrol.useGridData(json2);
    // 等待网格加载完成
    gridcontrol.on('load', () => {
        // 注入地图
        gridcontrol.useMap(map, 'default');
    });
});
```

### 初始化

这个例子描述了gridcontrol的初始化流程，
后续的代码中不再重复

<MapboxV2 >

```javascript
// 基于mapbox开发
const map = new mapboxgl.Map();
// 等待style加载完成后
map.once('style.load', () => {
    // 创建一个GridControl实例
    let gridcontrol = window.gridcontrol = new GridControl();
    // 传入网格数据
    gridcontrol.useGridData(json);
    gridcontrol.useGridData(json1);
    gridcontrol.useGridData(json2);
    // 等待网格加载完成
    gridcontrol.on('load', () => {
        // 注入地图
        gridcontrol.useMap('default', map);
    });
});
```
</MapboxV2>

### 事件回调
<MapboxV2>
<ExampleHandlerV2></ExampleHandlerV2>

```javascript
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
```
</MapboxV2>

### 网格高亮

<MapboxV2>
<ExampleHighlightV2></ExampleHighlightV2>

```javascript
const girdArray = gridcontrol.findGridByLevel(1).slice(0,3);
// 设置一个layer分组，默认会设置 layout 的 visibility 为 none，可被覆盖
gridcontrol.createGroupLayer({
    group: 'highlight',     // 分组名称
    grids: girdArray,       // grid实例组成的数组
    type: 'fill',           // 所有mapbox支持的layer.type
    paint: {                // 所有mapbox支持的layer.paint
        'fill-color': 'rgba(255,0,0,0.4)'
    }
});
// 将分组下的 layer.layout.visibility 的值设为 visible
gridcontrol.showGroupLayer('highlight');
// 设置事件监听
document.getElementById('on').addEventListener('click', () => {
    gridcontrol.showGroupLayer('highlight');
});
document.getElementById('off').addEventListener('click', () => {
    // 将分组下的 layer.layout.visibility 的值设为 none
    gridcontrol.hideGroupLayer('highlight');
});
this.$once('hook:beforeDestroy', () => {
    // 移除一个分组下的所有 layer
    gridcontrol.removeGroupLayer('highlight');
});
```
</MapboxV2>

### 修改颜色

::: tip
v2 的 mapbox 属性操作更加直观，
找到对应的 layer ，直接为对应的属性赋值即可
:::

<MapboxV2>
<ExampleSetColor></ExampleSetColor>

```javascript
// 创建一个自定义的layer
gridcontrol.createGroupLayer({
    group: 'fill-layer',
    grids: gridcontrol.findGridByLevel(1).slice(0, 3),
    type: 'fill',
    layout: {visibility: 'visible'},
    paint: {'fill-color': 'rgba(255,255,255,.5)'}
});
document.getElementById('blue').addEventListener('click', () => {
    // 设置默认样式
    gridcontrol.setLayerStyle('line-color', 'blue');
    gridcontrol.setLayerStyle('line-color-hover', 'blue');
    // 单独设置样式
    let layer = gridcontrol.getLayer('fill-layer');
    layer.paint['fill-color'] = 'rgba(0,0,255,0.5)';
});
document.getElementById('green').addEventListener('click', () => {
    // 设置默认样式
    gridcontrol.setLayerStyle('line-color', 'green');
    gridcontrol.setLayerStyle('line-color-hover', 'green');
    // 单独设置样式
    let layer = gridcontrol.getLayer('fill-layer');
    layer.paint['fill-color'] = 'rgba(0,255,255,0.5)';
});
```
</MapboxV2>

### 下钻逻辑

<MapboxV2>
<ExampleDrillDownV2></ExampleDrillDownV2>

```javascript
document.getElementById('normal').addEventListener('click', () => {
    // 默认模式，根据网格层级自由下钻
    gridcontrol.setOptions('drillRule', 'none');
});
document.getElementById('black').addEventListener('click', () => {
    // 黑名单模式，黑名单包含的网格将无法触发事件
    gridcontrol.setOptions('drillRule', 'black');
    gridcontrol.setOptions('blacklist', ['兴化市']);
});
document.getElementById('white').addEventListener('click', () => {
    // 白名单模式，仅白名单中的网格可以触发事件
    gridcontrol.setOptions('drillRule', 'white');
    gridcontrol.setOptions('whitelist', ['兴化市']);
});
```
</MapboxV2>

### 下钻补充说明

::: tip
eventData 下还有些别的参数，详情见<Href value="这里" path="/v2.x/Variable.html#eventdata" /> 
:::

<MapboxV2>
<ExampleDrillDownMoreV2></ExampleDrillDownMoreV2>

```javascript
gridcontrol.on('click', (grid, eventData) => {
    switch (this.index) {
        case 1: {
            // 如果 return 为true，这次下钻将会被阻止
            eventData.return = true;
            break;
        }
        case 2: {
            // 如果 animation 为false，地图将不会产生动画
            eventData.animation = false;
            break
        }
    }
});
```
</MapboxV2>

### 手动触发下钻

与 v1 版本相比，增加了 eventData

<MapboxV2>
<ExampleDrillDownFunctionalV2></ExampleDrillDownFunctionalV2>

```javascript
const eventData = {
	recordType: 'record',
}
document.getElementById('泰兴市').addEventListener('click', () => {
    gridcontrol.goto('泰兴市', eventData);
});
document.getElementById('分界镇').addEventListener('click', () => {
    gridcontrol.goto('分界镇', eventData);
});
```
</MapboxV2>

### 返回上一层级

<MapboxV2>
<ExampleBackV2></ExampleBackV2>

```javascript
document.getElementById('back').addEventListener('click', () => {
    gridcontrol.back();
});
```
</MapboxV2>

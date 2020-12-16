## 快速入门

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
        gridcontrol.useMap('default', map);
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


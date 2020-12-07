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
<ExampleMap >
<ExampleInit></ExampleInit>
```javascript
// 把网格下钻的显示参数打开
gridcontrol.showOuterLayer = true;
gridcontrol.showInnerLayer = true;
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

gridcontrol.setInnerData(gridcontrol.grid.findGridByLevel(2));

gridcontrol.triggerClick = false;
```
</ExampleMap>

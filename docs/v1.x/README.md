## 快速入门

:::tip
这是gridcontrol的v1文档
:::

## 安装

```javascript
npm install @jspatrick/grid@">=1.0.0 <2.0.0"
```
或者
```javascript
yarn add @jspatrick/grid@">=1.0.0 <2.0.0"
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

在操作网格之前，我们需要使用 <Href value="useGridData" href="/v1.x/Variable.html#usegriddata" /> 
方法来传入网格数据进行初始化
```javascript
gridcontrol.useGridData( geojson, level )
```

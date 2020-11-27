## 方法

### useGridData

<MethodTemplate :data="[
    {
        name: 'geojson', 
        type: 'GeoJson',
        deft: 'undefined',
        desc: '一个符合 GeoJson 规范的 Object 对象'
    },
    {
        name: 'level',
        type: 'Number',
        deft: 'undefined',
        desc: '为 GeoJson 指定层级信息'
    }
]" />
这个函数用来初始化网格数据, 
传入的数据会被保存在插件内部的闭包下

::: tip 调用方式：
```javascript
import geojson from 'geojson';
const level = 1;
gridcontrol.useGridData( geojson, level );
```
:::

### buildGridData

<MethodTemplate :data="[
    {
        name: 'geojson', 
        type: 'GeoJson',
        deft: 'undefined',
        desc: '一个符合 GeoJson 规范的 Object 对象'
    },
    {
        name: 'level',
        type: 'Number',
        deft: 'undefined',
        desc: '为 GeoJson 指定层级信息'
    }
]" />
这个函数用来创建一个 custom 的 Grid 实例, 
该实例不会被保存到插件闭包中, 所以无法使用
findGridByName、
findGridByLevel 
等方法

::: tip 调用方式：
```javascript
import geojson from 'geojson';
const level = 1;
gridcontrol.buildGridData( geojson, level );
```
:::

### init

<MethodTemplate :width="[150,150,0,260]" :data="[
    {
        name: 'BasicMap', 
        type: 'Mapbox-Map',
        deft: 'undefined',
        desc: '注入的 mapbox 地图对象'
    },
    {
        name: 'PoiMap',
        type: 'Mapbox-Map',
        deft: 'undefined',
        desc: '注入的另一个 mapbox 地图对象'
    },
    {
        name: 'path',
        type: 'String',
        deft: 'undefined',
        desc: '路由标识符, 建议取 $route.path'
    },
    {
        name: 'rebuild',
        type: 'Boolean',
        deft: 'false',
        desc: '是否重新创建默认 layer 及重新进行事件绑定'
    }
]" />

这个方法用来为闭包中的地图、路由标识符赋值,
path被用来作为设置的flag, 当 flag 变换时会重置 Grid 中每个网格的
flyOption

::: warning 提示
每个路由级别的页面都应当重新调用该方法进行重置
:::

## 内部方法
::: danger 警告
通常情况下你不应主动调用内部方法，GridControl 会自动调用，
此处仅作为源码的解释
:::

### updateMask

这个方法用来更新选中网格外黑色遮罩的数据源

<MethodTemplate :width="[120,160,120,null]" :data="[
    {
        name: 'feature', 
        type: 'GeoJson-Feature',
        deft: 'undefined',
        desc: '符合 Geojson 格式的 feature 对象'
    }
]" />

### buildDefaultLayer

这个方法用来生成 mapbox 中的一些默认的 layer

<MethodTemplate :width="[
    120,160,120,null
]" />

| 名称      |           类型      |简介           |
| ----------|:-------------:|:-------------:|
| special   | line |始终存在的内部2级网格边线|
| blackmask | fill|选中网格的外部黑色遮罩 |
| fullmask  | fill|全局网格的外部黑色遮罩 |
| outer     | line|粗网格线              |
| inner     | line|细网格线              |
| hover     | fill|高亮 hover          |
| custom    | line|自定义              |

### onMouseMoveHandler

这个方法用来处理 mapbox 的鼠标在地图上的移动事件

<MethodTemplate :width="[
    120,160,120,null
]" :data="[
    {
        name: 'e', 
        type: 'Event',
        deft: 'undefined',
        desc: '被 mapbox 包装过的 Event 对象'
    }
]" />

### _triggerhover

这个方法用来处理鼠标悬浮在网格上时的逻辑

<MethodTemplate :width="[
    120,160,120,null
]" :data="[
    {
        name: 'point', 
        type: '[lng, lat]',
        deft: 'undefined',
        desc: `坐标点的经纬度数组，也可以是实现了 toArray 方法的对象，
        toArray 方法需返回一个经纬度数组`
    }
]" />

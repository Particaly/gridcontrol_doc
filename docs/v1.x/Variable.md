## 实例属性

### showInnerLayer

<b>类型： Boolean</b>

是否显示内部网格线

### showOuterLayer
<b>类型： Boolean</b>

是否显示外部网格线

### triggerHover
<b>类型： Boolean</b>

是否触发鼠标在网格上的悬浮事件

### triggerClick
<b>类型： Boolean</b>

是否触发鼠标点击网格的事件

### currentHoverGrid
<b>类型： Object | null</b>

当前被鼠标悬浮的网格

### currentChoosedGrid
<b>类型： Object | null</b>

当前被选中的 Grid 实例

### innerColor
<b>类型： Object | null</b>

内部网格线的颜色,字段包含 top、middle、bottom,
这是为了制造出类似发光效果，所以有三层 layer

### outerColor
<b>类型： Object | null</b>

外部网格线的颜色，同上

## 实例方法

### useGridData

<MethodTemplate :width="[135,135,145,null]" :data="[
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

<MethodTemplate :width="[140,170,0,null]" :data="[
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

<MethodTemplate :width="[140,170,0,null]" :data="[
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

### back 

主动调用该方法来回到上一个层级被选中的网格

<MethodTemplate :width="[
    130,160,145,null
]" :data="[
    {
        name: 'callback', 
        type: 'Function',
        deft: 'undefined',
        desc: 'back 方法的回调，默认第一个参数为返回的 Grid 实例'
    }
]" />

### reset

主动调用该方法来回到最顶层级的网格

<MethodTemplate :width="[
    130,160,145,null
]" :data="[
    {
        name: 'callback', 
        type: 'Function',
        deft: 'undefined',
        desc: 'back 方法的回调，默认第一个参数为返回的 Grid 实例'
    }
]" />

### goto

下钻到某个网格，这个下钻操作会被记录

<MethodTemplate :width="[
    120,160,145,null
]" :data="[
    {
        name: 'grid', 
        type: 'String|Grid',
        deft: 'undefined',
        desc: '目标网格的名称或 Grid 实例对象'
    }
]" />

### gotoNotSave

下钻到某个网格，这个下钻操作不会被记录

<MethodTemplate :width="[
    120,160,145,null
]" :data="[
    {
        name: 'grid', 
        type: 'String|Grid',
        deft: 'undefined',
        desc: '目标网格的名称或 Grid 实例对象'
    }
]" />

### sethighlightgrid

该方法用来创建一个高亮的 mapbox fill layer

::: tip
该方法并无返回值
:::

<MethodTemplate :width="[
    135,135,145,null
]" :data="[
    {
        name: 'gridArray', 
        type: '[Grid]',
        deft: 'undefined',
        desc: '一个包含 Grid 实例的数组'
    },
    {
        name: 'color', 
        type: 'String',
        deft: 'undefined',
        desc: '符合 mapbox 颜色规范的字符串'
    },
    {
        name: 'name',
        type: 'String',
        deft: 'undefined',
        desc: '要创建的 fill 的分组名称'
    }
]" />

### showHighLight

该方法通过传入一个已被创建的高亮分组名，来显示一个高亮的 mapbox fill layer

<MethodTemplate :width="[
    135,135,145,null
]" :data="[
    {
        name: 'name',
        type: 'String',
        deft: 'undefined',
        desc: '要显示的 fill 的分组名称'
    }
]" />

### hideHighLight

该方法通过传入一个已被创建的高亮分组名，来隐藏一个高亮的 mapbox fill layer

<MethodTemplate :width="[
    135,135,145,null
]" :data="[
    {
        name: 'name',
        type: 'String',
        deft: 'undefined',
        desc: '要隐藏的 fill 的分组名称'
    }
]" />

### removeHighLight

该方法通过传入一个已被创建的高亮分组名，来销毁一个高亮的 mapbox fill layer

<MethodTemplate :width="[
    135,135,145,null
]" :data="[
    {
        name: 'name',
        type: 'String',
        deft: 'undefined',
        desc: '要销毁的 fill 的分组名称'
    }
]" />

### setHighLightSource

该方法用来修改对应layer的数据源

<MethodTemplate :width="[
    135,135,145,null
]" :data="[
    {
        name: 'name',
        type: 'String',
        deft: 'undefined',
        desc: '要修改的 fill 的分组名称'
    },
    {
        name: 'gridArray',
        type: '[Grid]',
        deft: 'nextLevelGridList',
        desc: `一个包含 Grid 实例的数组`
    }
]" />

### fitLngLat

传入一个经纬度数组，遍历当前所有网格，来得到从层级最大到层级最小的，
围住了这个经纬度的 GridArray

<MethodTemplate :width="[
    135,135,145,null
]" :data="[
   {
       name: 'point', 
       type: '[lng, lat]',
       deft: 'undefined',
       desc: `坐标点的经纬度数组，也可以是实现了 toArray 方法的对象，
       toArray 方法需返回一个经纬度数组`
   },
]" />

### findGridByName

传入网格名称，返回对应的 Grid 实例, 如果不存在，将会返回 null

<MethodTemplate :width="[
    135,135,145,null
]" :data="[
   {
       name: 'name', 
       type: 'String',
       deft: 'undefined',
       desc: '网格名称'
   },
]" />

### findGridByLevel

传入需要获取的层级，返回目标层级的所有 Grid 实例

<MethodTemplate :width="[
    135,135,145,null
]" :data="[
   {
       name: 'level', 
       type: 'Number',
       deft: 'undefined',
       desc: '网格层级'
   },
]" />

### setCustom

设置默认自定义 custom layer 的透明度及网格数据

<MethodTemplate :width="[
    135,135,145,null
]" :data="[
   {
       name: 'flag', 
       type: 'Boolean',
       deft: 'undefined',
       desc: '是否显示 custom layer'
   },
   {
       name: 'gridArray',
       type: '[Grid]',
       deft: 'undefined',
       desc: `一个包含 Grid 实例的数组`
   }
]" />

### setInnerData

设置可下钻的下一级的网格数据

<MethodTemplate :width="[
    135,135,145,null
]" :data="[
   {
       name: 'gridArray',
       type: '[Grid]',
       deft: 'undefined',
       desc: `一个包含 Grid 实例的数组`
   }
]" />

### setOuterData

设置当前被选中的网格数据

<MethodTemplate :width="[
    135,135,145,null
]" :data="[
   {
       name: 'grid',
       type: 'Grid',
       deft: 'undefined',
       desc: `一个 Grid 实例`
   }
]" />

### setPadding

设置网格下钻时的 fitBounds 的 padding 参数

<MethodTemplate :width="[
    135,135,145,null
]" :data="[
   {
       name: 'option',
       type: 'Object',
       deft: 'undefined',
       desc: '一个包含 top、right、bottom、left 的对象'
   }
]" />

### setColor

设置layer的颜色
默认的layer有以下
inner-bottom、inner-middle、inner-top、
blackmask、fullmask、outer-middle、
custom-inner、hover

<MethodTemplate :width="[
    135,135,145,null
]" :data="[
    {
        name: 'type',
        type: 'String',
        deft: 'undefined',
        desc: '组合成layer的id的第一段标志'
    },
    {
        name: 'prop',
        type: 'String',
        deft: 'undefined',
        desc: '组合成layer的id的第二段标志'
    },
    {
        name: 'value',
        type: 'String',
        deft: 'undefined',
        desc: '能被 mapbox 识别的颜色字符串'
    }
]" />

::: tip 调用方式
```javascript
gridcontrol.setColor('inner','bottom','rgba(255,255,255,1)')
```
:::

### getOption

获取 GridControl 实例配置项的参数值

<MethodTemplate :width="[
    135,135,145,null
]" :data="[
    {
        name: 'name',
        type: 'String',
        deft: 'undefined',
        desc: 'GridControl 实例的配置项字段'
    }
]" />

### setOption

设置 GridControl 实例配置项的参数值

<MethodTemplate :width="[
    135,135,145,null
]" :data="[
    {
        name: 'name',
        type: 'String',
        deft: 'undefined',
        desc: 'GridControl 实例的配置项字段'
    }
]" />

### mixOption

将 target 对象上的值，递归赋值给 source 对象，
相同引用类型的值会继续递归，仅操作值类型的字段，
不同引用类型将会直接赋值

<MethodTemplate :width="[
    135,135,145,null
]" :data="[
    {
        name: 'target',
        type: 'Object',
        deft: 'undefined',
        desc: '从该对象上取值'
    },
    {
        name: 'source',
        type: 'Object',
        deft: 'undefined',
        desc: '赋值给该对象'
    }
]" />

### destory

清除地图对象的事件监听，销毁 layerbox 实例

<MethodTemplate :width="[
    135,135,145,null
]" :data="[]" />

### revert

修复因地图样式切换导致的layer丢失，重新生成 layerbox

<MethodTemplate :width="[
    135,135,145,null
]" :data="[]" />

## 内部成员
### grid
grid实例类似一个链表，组装了所有跟网格相关的地理信息

### grid.name
网格名称，取 useGridData 传入的 GeoJson 中 properties 下的 name和pname字段

### grid.id
网格的唯一id，取properties下的id字段

### grid.level
网格的层级

### grid.center
网格的中心点坐标数组， [lng,lat]

### grid.children
当前网格的下一个层级的 grid 实例数组

### grid.feature
当前网格的GeoJson

### grid.coordinates
当前网格的点信息数组、相当于GeoJson的coordinates

### grid.flyOption
flyOption是mapbox的flyTo方法可接受的参数对象，
当网格下钻时，如果grid实例下存在该参数，那么将默认使用该参数作为flyTo的参数

### grid.mbox
当前 grid 的外接四边形的坐标

### grid.getFeatures(gridArray)
获取传入的 gridArray 的 feature，结果将以 featureCollection 返回

### grid.findGridByName(name)
查询当前 grid 实例下 name 字段为传入值的 grid，如果找不到，将返回 null

### grid.findGridByProp(name, value)
查询当前 grid 实例下对应字段name为传入值 value 的 grid，如果找不到，将返回 null

### grid.findGridByLevel(level)
查询当前 grid 实例下，对应网格层级的 Grid，结果以数组返回，若找不到，返回空数组

### grid.traverse(callback)
递归遍历 grid 及 grid.children , callback的第一个参数为被遍历到的 grid

### layerbox
layerbox中存放了当前 GridControl 实例的 layer信息及对layer操作的封装

### layerbox.layerbox
所有被 gridcontrol 创建的 layer 实例都被存储在这个数组中

### layerbox.makeLineLayer(option)
option对象下的字段如下所示
<MethodTemplate :width="[155,140,145,null]" :data="[
    {
        name: 'name', 
        type: 'String',
        deft: 'undefined',
        desc: 'layer的分组名称'
    },
    {
        name: 'type',
        type: 'String',
        deft: 'undefined',
        desc: 'layer的唯一标识'
    },
    {
        name: 'map',
        type: 'String',
        deft: 'undefined',
        desc: '这个layer被添加到哪个地图，默认有 BasicMap 和 PoiMap'
    },
    {
        name: 'features',
        type: 'Array',
        deft: 'undefined',
        desc: 'GeoJson 的 features 数组'
    },
    {
        name: 'blur',
        type: 'Boolean',
        deft: 'undefined',
        desc: '是否线条虚化，仅makeLineLayer生效'
    },
    {
        name: 'width',
        type: 'Number|Object',
        deft: 'undefined',
        desc: 'line宽度，需要符合mapbox的参数规则'
    },
    {
        name: 'color',
        type: 'String',
        deft: 'undefined',
        desc: 'line颜色'
    },
    {
        name: 'opacity',
        type: 'Number',
        deft: 'undefined',
        desc: 'line的透明度'
    },
    {
        name: 'coordinates',
        type: 'Array',
        deft: 'undefined',
        desc: 'line数据也支持使用二维数组传入，但此选项不应和features同时使用'
    }
]" />

### layerbox.makeFillLayer(option)
fill的option与line相比，fill没有blur、width字段

### layerbox.getLayers(type)
查询已创建的layer中与传入的type匹配的layer，返回数组

### layerbox.getLayerByName(name)
查询已创建的layer中与传入的type匹配的layer，返回第一个符合结果的layer，
如果没有，返回undefined

### layerbox.getLayerIdByType(type)
查询已创建的layer中与传入的type匹配的layer，返回这些layer的真实mapbox的id数组

### layerbox.removeLayer(type)
移除已创建的layer中与传入的type匹配的layer

### layerbox.setLayerOpacity(type, opacity)
修改已创建的layer中与传入的type匹配的layer的透明度

### layerbox.setLayerColor(type, color)
修改已创建的layer中与传入的type匹配的layer的颜色

### layerbox.setLayerColorByName(name, color)
修改已创建的layer中与传入的name匹配的layer的颜色

### layerbox.setLayerZoomRange(type, min, max)
为已创建的layer中与传入的type匹配的layer设置可显示的层级范围

### layerbox.setLayerPaintProperty(type, prop, value)
为已创建的layer中与传入的type匹配的layer设置PaintProperty

## 内部方法
::: danger 警告
通常情况下你不应主动调用内部方法，GridControl 会自动调用，
此处仅作为源码的解释
:::

### updateMask

这个方法用来更新选中网格外黑色遮罩的数据源

<MethodTemplate :width="[120,190,145,null]" :data="[
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
    120,160,155,null
]" :data="[
    {
        name: 'e', 
        type: 'Event',
        deft: 'undefined',
        desc: '被 mapbox 包装过的 Event 对象'
    }
]" />

### onMouseClickHandler

这个方法用来处理 mapbox 的鼠标在地图上的点击事件

<MethodTemplate :width="[
    120,160,155,null
]" :data="[
    {
        name: 'e', 
        type: 'Event',
        deft: 'undefined',
        desc: '被 mapbox 包装过的 Event 对象'
    }
]" />

### _triggerhover

这个方法用来处理鼠标悬浮在网格上时的逻辑，
输入的 point 信息将会遍历 gridArray 来查找第一个符合条件的Grid实例，
并修改 currentHoverGrid 的值

<MethodTemplate :width="[
    135,127,190,null
]" :data="[
    {
        name: 'point', 
        type: '[lng, lat]',
        deft: 'undefined',
        desc: `坐标点的经纬度数组，也可以是实现了 toArray 方法的对象，
        toArray 方法需返回一个经纬度数组`
    },
    {
        name: 'gridArray',
        type: '[Grid]',
        deft: 'nextLevelGridList',
        desc: `一个包含 Grid 实例的数组`
    }
]" />

### _triggerdown

这个方法用来处理鼠标点击网格上时的逻辑,
输入的 point 信息将会遍历 gridArray 来查找第一个符合条件的Grid实例，
并修改 currentChoosedGrid 的值

<MethodTemplate :width="[
    135,127,190,null
]" :data="[
    {
        name: 'point', 
        type: '[lng, lat]',
        deft: 'undefined',
        desc: `坐标点的经纬度数组，也可以是实现了 toArray 方法的对象，
        toArray 方法需返回一个经纬度数组`
    },
    {
        name: 'gridArray',
        type: '[Grid]',
        deft: 'nextLevelGridList',
        desc: `一个包含 Grid 实例的数组`
    }
]" />
 

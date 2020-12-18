## 实例属性

### hoveringGridName
当前被 hover 的 grid 的 mainID字段

### isLoadingData
当前正处于请求中的数据源数量

### currentHoveredGrid
当前被 hover 的 grid 实例

### currentLevel
当前的网格层级，从 0 开始

### currentSelectedGrid
当前被选中的 grid 实例

### eventData
事件处理对象，这个对象会被传递给 click、goto 事件的 handler 函数，

<ObjectTemplate :width="[163,190,115,null]" :data="[
    {
        name: 'return', 
        type: 'Boolean',
        deft: 'false',
        desc: '是否终端本次下钻'
    },
    {
        name: 'fitBoundsOptions',
        type: 'Object',
        deft: 'null',
        desc: 'mapbox的参数，优先级低'
    },
    {
        name: 'flyOptions',
        type: 'Object',
        deft: 'null',
        desc: 'mapbox的参数，优先级高'
    },
    {
        name: 'recordType',
        type: 'String|undefined|null',
        deft: 'record',
        desc: '是否记录本次下钻，可选值为 record、cover、undefined、null'
    },
    {
        name: 'animation',
        type: 'Boolean',
        deft: 'true',
        desc: '是否触发动画'
    }
    
]" ></ObjectTemplate>

## 实例方法

### back

主动调用该方法，来使地图返回到上一个被选中的网格

<MethodTemplate :width="[135,135,145,null]" :data="[
]" />

### createGroupLayer

创建一个包含分组信息的 layer

<MethodTemplate :width="[170,135,145,null]" :data="[
    {
        name: 'options', 
        type: 'Object',
        deft: 'undefined',
        desc: '参数配置信息的 Object 对象'
    },
    {
        name: 'options.id', 
        type: 'String',
        deft: 'undefined',
        desc: 'layer的id'
    },
    {
        name: 'options.type', 
        type: 'String',
        deft: 'undefined',
        desc: 'layer的type'
    },
    {
        name: 'options.group', 
        type: 'String',
        deft: 'undefined',
        desc: 'layer的分组名称'
    },
    {
        name: 'options.grids', 
        type: 'Array',
        deft: 'undefined',
        desc: 'layer的数据源，由 grid 实例组成的数组'
    },
    {
        name: 'options.layout', 
        type: 'Object',
        deft: 'undefined',
        desc: 'layer的layout属性'
    },
    {
        name: 'options.paint', 
        type: 'Object',
        deft: 'undefined',
        desc: 'layer的paint属性'
    },
]" />

### findGridByLevel

通过层级查找 grid, 返回一个由 grid 实例组成的数组

<MethodTemplate :width="[170,135,145,null]" :data="[
    {
        name: 'level', 
        type: 'Number',
        deft: 'undefined',
        desc: '要查找的 grid 实例的层级'
    }
]" />

### findGridByName

通过 grid 的 mainId 查找 grid, 返回一个 grid 实例或者 null

<MethodTemplate :width="[170,135,145,null]" :data="[
    {
        name: 'name', 
        type: 'String',
        deft: 'undefined',
        desc: '要查找的 grid 实例的 mainId 字段'
    }
]" />

### getGridInfoDB

获取实例化后的 grid 成员

<MethodTemplate :width="[170,135,145,null]" :data="[

]" />

### hideGroupLayer

将分组的 layer.layout.visibility 的值设为 'none'

<MethodTemplate :width="[170,135,145,null]" :data="[
    {
        name: 'groupID', 
        type: 'String',
        deft: 'undefined',
        desc: '对应分组的GroupID'
    }
]" />

### getLayer

根据 ID 查找 Layer 实例，使用 includes 判断 layer.ID 是否符合条件

<MethodTemplate :width="[115,135,145,null]" :data="[
    {
        name: 'likeID', 
        type: 'String',
        deft: 'undefined',
        desc: '使用 includes 判断 layer.ID 是否符合条件'
    }
]" />

### goto

下钻到某个具体的网格

<MethodTemplate :width="[115,135,145,null]" :data="[
    {
        name: 'grid', 
        type: 'String|Object',
        deft: 'undefined',
        desc: '可以是 grid 实例或实例的 name 值'
    },
    {
        name: 'eventData',
        type: 'Object|null|undefined',
        deft: '该参数可选',
        desc: '详见 eventData 详细说明',
        href: [
            {key: 'eventData',value: '/v2.x/Variable.html#eventdata'}
        ]
    }
]" />

## 内部成员

### gridcontrol.event

一个 gridcontrol 内的全局事件总线，
通常情况不应当使用该对象来绑定事件，
事件绑定的方法已暴露给 gridcontrol

<ObjectTemplate :width="[115,115,140,null]" :data="[
    {
        name: 'eventBox', 
        type: 'Object',
        deft: '{}',
        desc: '事件存储器，gridcontrol的destroy会清空该对象'
    },
    {
        name: 'dispatch',
        type: 'Function',
        deft: 'async dispatch',
        desc: '触发一个事件，调用相应的 handler 函数'
    },
    {
        name: 'off',
        type: 'Function',
        deft: 'off',
        desc: '解除一个事件绑定，传入 handler 函数'
    },
    {
        name: 'once',
        type: 'Function',
        deft: 'once',
        desc: 'once绑定的 handler 函数只会执行一次，执行完毕后会自动解除绑定'
    },
    {
        name: 'onchange',
        type: 'Function',
        deft: 'onchange',
        desc: '绑定一个 EventBoxGlobalChangeEvent 的事件函数，需配合 @jspatrick/helper 的 createReactive 函数使用'
    },
    {
        name: 'watch',
        type: 'Function',
        deft: 'watch',
        desc: '添加一个事件监听'
    }
]" ></ObjectTemplate>

### gridcontrol.getGridInfoDB()

::: danger 警告⚠
通常情况你不应该调用这个方法
:::

<ObjectTemplate :width="[115,115,140,null]" :data="[
    {
        name: 'GridDB', 
        type: 'Object',
        deft: '{}',
        desc: '所有的 grid 按层级和结构存储'
    },
    {
        name: 'GridLevel',
        type: 'Object',
        deft: '{}',
        desc: '所有的 grid 仅按层级存储'
    },
    {
        name: 'GridMap',
        type: 'Object',
        deft: '{}',
        desc: '所有的 grid 仅按结构存储'
    }
]" ></ObjectTemplate>

### gridcontrol.gridHelper

帮助生产 grid 实例的工具

<ObjectTemplate :width="[170,115,140,null]" :data="[
    {
        name: 'addGrid', 
        type: 'Function',
        deft: 'Function',
        desc: '添加网格数据，数据会被合并到已添加的数据中'
    },
    {
        name: 'findGridByLevel',
        type: 'Function',
        deft: 'interface',
        desc: '提供给 gridcontrol 的接口'
    },
    {
        name: 'findGridByName',
        type: 'Function',
        deft: 'interface',
        desc: '提供给 gridcontrol 的接口'
    },
    {
        name: 'getGridInfoDB',
        type: 'Function',
        deft: 'interface',
        desc: '提供给 gridcontrol 的接口'
    },
    {
        name: 'interface',
        type: 'Object',
        deft: 'interface',
        desc: '把对外的方法通过这个对象来传递给 gridcontrol'
    },
]" ></ObjectTemplate>

### gridcontrol.jsonLoader

内部的 json 访问工具，支持传入链接访问数据源

### gridcontrol.layerHelper

帮助生产及管理 layer 实例的工具

<ObjectTemplate :width="[130,115,150,null]" :data="[
    {
        name: 'IDFilter', 
        type: 'Reg',
        deft: '/-RandomID-.*/',
        desc: '用来过滤生成的随机ID'
    },
    {
        name: 'defaultLayer',
        type: 'Array',
        deft: `[\'level-*\',
            \'selected-line\',
            \'full-mask\']`,
        desc: '存储默认会被创建的layer'
    },
    {
        name: 'event',
        type: 'Object',
        deft: 'EventBox',
        desc: '全局事件总线'
    },
    {
        name: 'gridcontrol',
        type: 'Object',
        deft: 'GridControl',
        desc: '当前的 gridcontrol 实例'
    },
    {
        name: 'interface',
        type: 'Object',
        deft: 'interface',
        desc: '把对外的方法通过这个对象来传递给 gridcontrol'
    },
    {
        name: 'layerGroup',
        type: 'Object',
        deft: '{}',
        desc: '具有 group 属性的 layer 的存储容器'
    },
    {
        name: 'layerMap',
        type: 'Object',
        deft: '{}',
        desc: '存储 layer 的容器'
    },
    {
        name: 'layerSourceNameMap',
        type: 'Object',
        deft: '{}',
        desc: '对已创建的 source 进行缓存，如果两个 layer 用的是同一个 source 对象，那么会 sourceID 进行复用'
    },
    {
        name: 'layerbox',
        type: 'Array',
        deft: '[]',
        desc: '所有创建的 layer 都会被存入这个数组'
    },
    {
        name: 'mapbox',
        type: 'Object',
        deft: '{}',
        desc: '使用 useMap 方法注入的 map 实例的存储容器',
    },
    {
        name: 'sourceMap',
        type: 'WeakMap',
        deft: '{}',
        desc: '用来存放和复用相同的source'
    }
]" ></ObjectTemplate>

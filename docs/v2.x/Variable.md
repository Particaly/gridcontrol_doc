
### 实例属性

## hoveringGridName
当前被 hover 的 grid 的 mainID字段

## isLoadingData
当前正处于请求中的数据源数量

## currentHoveredGrid
当前被 hover 的 grid 实例

## currentSelectedGrid
当前被选中的 grid 实例

## eventData
事件处理对象，这个对象会被传递给 click、goto 事件的 handler 函数，

<ObjectTemplate :width="[148,190,115,null]" :data="[
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

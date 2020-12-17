<template>
    <div class="MethodTemplate">
        <Table class="table"
               :columns="columns"
               :data="list"></Table>
    </div>
</template>

<script>
	export default {
		name: "ObjectTemplate",
        data: function(){
            return {
	            columns1: [
		            {
			            title: '键名',
			            key: 'name',
			            align: 'center'
		            },
		            {
			            title: '参数类型',
			            key: 'type'
		            },
		            {
			            title: '默认取值',
			            key: 'deft'
		            },
		            {
			            title: '参数描述',
			            key: 'desc',
			            width: 240
		            }
	            ],
            }
        },
		computed: {
			columns() {
				return this.columns1.map((item, index) => {
					if(this.width[index] === null){
						item.width = undefined;
					} else if(this.width[index]) {
						item.width = this.width[index];
					}
					return item;
				})||[]
			},
			list() {
				return this.data||[]
			}
		},
		props: {
			data: {
				type: Array,
				default() {
					return [];
				}
			},
			width: {
				type: Array,
				default() {
					return [];
				}
			}
		}
	}
</script>

<style scoped lang="scss">
.MethodTemplate {
    width: 100%;
    .table /deep/ .ivu-table {
        font-size: 16px;
    }
}
</style>

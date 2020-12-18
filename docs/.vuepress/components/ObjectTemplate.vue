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
			            align: 'left'
		            },
		            {
			            title: '参数类型',
			            key: 'type',
			            align: 'center'
		            },
		            {
			            title: '默认取值',
			            key: 'deft',
			            align: 'center'
		            },
		            {
			            title: '参数描述',
			            key: 'desc',
			            width: 240,
			            align: 'left',
			            render:(h, params) => {
				            if(params.row.href){
					            let res = [params.row.desc];
					            params.row.href.forEach(href => {
						            let index = 0;
						            while (index !== res.length) {
							            if(res[index].includes&&res[index].includes(href.key)){
								            let start = res.slice(0, index);
								            let end = res.slice(index, res.length-1);
								            let tempword = res[index], temp = [];
								            tempword = tempword.split(href.key);
								            const template = h('a', {attrs: {href: this.$withBase(href.value)}}, href.key);
								            tempword.forEach((item,index) => {
									            temp.push(item);
									            if(index < tempword.length-1){
										            temp.push(template);
									            }
								            });
								            res = start.concat(temp, end);
							            }
							            index += 1;
						            }
					            })
					            return h('span', {}, res);
				            } else {
					            return h('span', {}, params.row.desc)
				            }
			            }
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
        th,td{
            padding: 0.5em 0;
        }
        table{
            margin: 0!important;
        }
        .ivu-table-cell{
            white-space: pre-line;
        }
    }
}
</style>

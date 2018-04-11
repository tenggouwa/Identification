<template>
	<div class="block">
		<div class="block-main">
      <!-- 头 -->
      <div class="block-tit">
        <table>
          <tr>
            <td class="blue" max-width="18%">区块高度</td>
            <td class="bor"  width="32%">2456655</td>
            <td class="blue" max-width="18%">区块哈希</td>
            <td max-width="32%">223432423522234324235222343242352223432423522234324235</td>
          </tr>
          <tr>
            <td class="blue">发现时间</td>
            <td class="bor">2012-03-12 10:23:12</td>
            <td class="blue"></td>
            <td></td>
          </tr>
        </table>
      </div> 
      <!-- table -->
      <div class="qukuai caozuo">
        <div class="qukuai-main">
          <!-- 搜索栏 -->
          <div class="qukuai-search">
            <span class="tit span">操作&nbsp;&nbsp;</span>
            <span class="span">(最新产生的操作)</span>
            <div class="commit">
              <el-date-picker
                v-model="value6"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
              <el-button class="search-btn" type="primary">查询</el-button>
            </div>  
          </div>
          <!-- 表格 -->
          <table>
            <tr class="tr1">
              <td width="32%">操作哈希</td>
              <td width="16%">所属区块</td>
              <td width="16%">操作类型</td>
              <td width="16%">时间</td>
              <td width="16%">操作</td>
            </tr>
            <tr>
              <td class="blue" @click="golink('operation')">2223432423522234324235222343242352223432423522234324235</td>
              <td class="blue">22234324235</td>
              <td>合同上传</td>
              <td>2018-12-21 20:02:12</td>
              <td><button @click="golink('operation')">查看详情</button></td>
            </tr>
            <tr>
              <td class="blue">2223432423522234324235222343242352223432423522234324235</td>
              <td class="blue">22234324235</td>
              <td>合同上传</td>
              <td>2018-12-21 20:02:12</td>
              <td><button>查看详情</button></td>
            </tr>
          </table>
          <el-pagination
            class="fenye"
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </div>
    </div>
	</div>
</template>
<script>
export default {
  data () {
    return {
      value6:'',
    }
  },
  methods:{
    golink(e){
      if(e == 'block'){
        this.$router.push({path:'/main/block'})
      }else if(e == 'contract'){
        this.$router.push({path:'/main/contract'})
      }else if(e == 'enterprise'){
        this.$router.push({path:'/main/enterprise'})
      }else if(e == 'operation'){
        this.$router.push({path:'/main/operation'})
      }
    }
  }
}
</script>
<style>
  .block{
    .block-main{
      width: 1200px;
      margin:0 auto;
      .block-tit{
        width: 100%;
        background: #fff;
        height: 95px;
        padding: 4px;
        table{
          text-align: left;
          width: 100%;
          tr{
            line-height: 43.5px;
            td{
              padding-left: 40px;
              font-size: 14px;
            }
            .bor{
              border-right: 1px solid #eee;
            }
            .blue{
              color: #658290;
              font-weight: bold;
            }
          }
        }
      }
      .qukuai{
        .qukuai-main{
          width: 1200px;
          margin: 0 auto;
          background: #fff;
          padding: 24px 20px;
          margin-top: -134px;
          .qukuai-search{
            width: 100%;
            text-align: left;
            overflow: hidden;
            .span{
              color: #999;
              font-size: 18px;
              line-height: 40px;
            }
            .tit{
              color: #333;
            }
            .commit{
              float: right;
              .search-btn{
                width: 85px;
                margin-left: 5px;
              }
            }
          }
          table{
            margin-top: 24px;
            width: 100%;
            text-align: left;
            font-size: 14px;
            tr{
              line-height: 48px;
              border-bottom: 1px solid #eaeef0;
              td{
                padding-left: 35px;
                button{
                  width: 86px;
                  height: 28px;
                  border-radius: 14px;
                  border: 0;
                  background: #e2e3e4;
                  font-size: 14px;
                  cursor: pointer;
                }
                button:active{
                  color: #fff;
                  background: #1ea959;
                }
              }
              .blue{
                /*color: #085eb7;*/
                cursor: pointer;
              }
            }
            tr:nth-child(odd){
              background: #f7f8f9;
            }
            .tr1{
              border-bottom:0;
              color: #658290;
              font-weight: bold;
              td{
                background: #f4f7f9;
              }
            }
          }
          .fenye{
            margin-top: 24px;
            li{
              margin: 0 2px;
            }
            .number,.more{
              border:1px solid #ccc;
              border-radius:6px;
              background: #fff;
            }
            .active{
              background: #076bd1;
              border: 1px solid #076bd1;
            }
            button{
              background: #fff;
              border:1px solid #ccc;
              border-radius:6px;
            }
          }
        }
      }
      .caozuo{
        .qukuai-main{
          margin-top: 20px;
        }
      }
    }
  }
</style>
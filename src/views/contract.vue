<template>
	<div class="contract">
		<!-- operation(合同) -->
    <div class="contract-main">
      <!-- 头 -->
      <div class="contract-tit">
        <table>
          <tr>
            <td class="blue" width="18%">签约平台</td>
            <td class="bor" width="32%">某某某机构</td>
            <td class="blue" max-width="18%">合同哈希</td>
            <td max-width="32%">223432423522234324235222343242352222423522234324235222</td>
          </tr>
          <tr>
            <td class="blue">合同编号</td>
            <td class="bor">22343242352223432423</td>
            <td class="blue">合同类型</td>
            <td max-width="32%">融资合同</td>
          </tr>
        </table>
      </div>
      <!-- table  -->
      <div class="contract-tab">
       
        <div class="search">
          <h1>操作信息</h1>
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
        <div class="tab-tab">
          <table>
            <tr>
              <td class="tab-tit" width='20%'>操作哈希</td>
              <td class="blue cursor" @click="golink('operation')">223432423522234324235222343242352223432423522234324235</td>
            </tr>
            <tr>
              <td class="tab-tit">操作类型</td>
              <td>合同签署</td>
            </tr>
            <tr>
              <td class="tab-tit">操作企业</td>
              <td class="outline cursor" @click="golink('enterprise')">企业1</td>
            </tr>
            <tr>
              <td class="tab-tit">企业公钥</td>
              <td class="blue cursor" @click="golink('enterprise')">223432423522234324235222343242352223432423522234324235</td>
            </tr>
            <tr>
              <td class="tab-tit">操作时间</td>
              <td>2018-01-12 10:10:10</td>
            </tr>
          </table>
          <table>
            <tr>
              <td class="tab-tit" width='20%'>操作哈希</td>
              <td class="blue cursor" @click="golink('operation')">223432423522234324235222343242352223432423522234324235</td>
            </tr>
            <tr>
              <td class="tab-tit">操作类型</td>
              <td>合同签署</td>
            </tr>
            <tr>
              <td class="tab-tit">操作企业</td>
              <td class="outline cursor" @click="golink('enterprise')">企业1</td>
            </tr>
            <tr>
              <td class="tab-tit">企业公钥</td>
              <td class="blue cursor" @click="golink('enterprise')">223432423522234324235222343242352223432423522234324235</td>
            </tr>
            <tr>
              <td class="tab-tit">操作时间</td>
              <td>2018-01-12 10:10:10</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
	</div>
</template>
<script>
	
export default{
	data(){
		return{
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
  .contract{
    .contract-main{
      width: 1200px;
      margin:0 auto;
      .contract-tit{
        width: 100%;
        background: #fff;
        /*height: 95px;*/
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
      .contract-tab{
        margin-top: 20px;
        background: #fff;
        text-align: left;
        .search{
          overflow: hidden;
          width: 100%;
          background: #fff;
          margin-bottom: 10px;
          h1{
            font-size: 18px;
            line-height: 78px;
            margin-left: 35px;
            float: left;
          }
          .commit{
            float: right;
            position: relative;
            transform: translateY(50%);
            margin-right: 10px;
            .search-btn{
              width: 85px;
              margin-left: 5px;
            }
          }
        }
        
        .tab-tab{
          padding:0px 10px 10px 10px;
          background: #f4f7f9;
          table{
            margin-top: 10px;
            background: #fff;
            width: 100%;
            tr{
              border-top: 1px solid #efefef;
              td{
                padding-left: 50px;
                line-height: 54px;
                color: #333;
                font-size: 14px;
              }
              .cursor{
                cursor: pointer;
              }
              .blue{
                color: #085eb7;
              }
              .outline{
                color: #1ea959;
                text-decoration:underline;
              }
              .tab-tit{
                color: #658290;
                font-weight: bold;
              }
            }
            /*tr:nth-child(odd){
              background: #f4f7f9;
            }*/
          }
        }
      }
    }
  }
</style>
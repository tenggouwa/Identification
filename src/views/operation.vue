<template>
	<div class="operation">
		<!-- operation(操作详情) -->
    <div class="operation-main">
      <!-- 头 -->
      <div class="operation-tit">
        <table>
          <tr>
            <td class="blue" max-width="18%">区块高度</td>
            <td class="bor" max-width="32%" @click="golink('block')">2456655</td>
            <td class="blue" max-width="18%">区块哈希</td>
            <td max-width="32%" @click="golink('block')">223432423522234324235222343242352222423522234324235222</td>
          </tr>
          <tr>
            <td class="blue">操作哈希</td>
            <td class="bor">223432423522234324235222343242352223432423522234324235</td>
            <td class="blue"></td>
            <td></td>
          </tr>
        </table>
      </div>
      <!-- table  -->
      <div class="operation-tab">
        <h1>操作信息</h1>
        <table>
          <tr>
            <td class="tab-tit" width='20%'>操作类型</td>
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
            <td class="tab-tit">签约平台</td>
            <td>供应链金融</td>
          </tr>
          <tr>
            <td class="tab-tit">合同哈希</td>
            <td class="blue cursor" @click="golink('contract')">223432423522234324235222343242352223432423522234324235</td>
          </tr>
          <tr>
            <td class="tab-tit">合同编号</td>
            <td>22343242352223432423522234</td>
          </tr>
          <tr>
            <td class="tab-tit">合同类型</td>
            <td>融资合同</td>
          </tr>
          <tr>
            <td class="tab-tit">甲方签约公司</td>
            <td>美的集团</td>
          </tr>
          <tr>
            <td class="tab-tit">甲方公钥地址</td>
            <td class="blue cursor" @click="golink('enterprise')">223432423522234324235222343242352223432423522234324235</td>
          </tr>
          <tr>
            <td class="tab-tit">乙方签约公司</td>
            <td>河北天宇</td>
          </tr>
          <tr>
            <td class="tab-tit">乙方公钥地址</td>
            <td class="blue cursor" @click="golink('enterprise')">223432423522234324235222343242352223432423522234324235</td>
          </tr>
          <tr>
            <td class="tab-tit">合同金额</td>
            <td>450,000元</td>
          </tr>
        </table>
      </div>
      <!-- total -->
      <div class="operation-foot">
        <i></i>
        <span class="spOne">操作结果</span>
        <span>成功</span>
        <i></i>
        <span class="spOne">错误信息</span>
        <span>无</span> 
        <i></i>
        <span class="spOne">操作时间</span>
        <span>2019-01-01 12:12:23</span>
      </div>
    </div>
	</div>
</template>
<script>
	
export default{
	data(){
		return{

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
  .operation{
    .operation-main{
      width: 1200px;
      margin:0 auto;
      .operation-tit{
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
      .operation-tab{
        margin-top: 20px;
        background: #fff;
        text-align: left;
        h1{
          font-size: 18px;
          line-height: 78px;
          margin-left: 35px;
        }
        table{
          width: 100%;
          tr{
            border-top: 1px solid #efefef;
            td{
              padding-left: 50px;
              line-height: 54px;
              color: #333;
              font-size: 14px;
            }
            .tab-tit{
              color: #658290;
              font-weight: bold;
            }
            .outline{
              text-decoration:underline;
              color: #1ea959;
            }
            .cursor{
              cursor: pointer;
            }
            .blue{
              color: #085eb7;
            }
          }
          tr:nth-child(odd){
            background: #f4f7f9;
          }
        }
      }
      .operation-foot{
        font-size: 14px;
        text-align: left;
        line-height: 48px;
        i{
          display: inline-block;
          width: 10px;
          height: 10px;
          background: #f39800;
        }
        span{
          margin-right: 50px;
        }
        .spOne{
          color: #666;
          margin-right: 3px;
        }
        
      }
    }
  }
</style>
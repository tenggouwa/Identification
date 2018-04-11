<template>
  <div class="index">
    <!-- banner -->
    <div class="index-banner">
      <div class="banner-main">
        <h1>鉴定链区块链浏览器</h1>
        <p>提供区块、操作哈希、合同签署、合同上传等查询功能</p>
        <div class="search">
          <index-search></index-search>
        </div>
      </div>  
    </div>
    <!-- 区块 -->
    <div class="qukuai">
      <div class="qukuai-main">
        <!-- 搜索栏 -->
        <div class="qukuai-search">
          <span class="tit span">区块&nbsp;&nbsp;</span>
          <span class="span">(区块下的操作)</span>
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
            <td width="20%">区块高度</td>
            <td width="48%">区块哈希</td>
            <td width="16%">操作笔数</td>
            <td width="16%">生成时间</td>
          </tr>
          <tr>
            <td class="blue" @click="golink('block')">22234324235</td>
            <td class="blue" @click="golink('block')">2223432423522234324235222343242352223432423522234324235</td>
            <td >100笔</td>
            <td>2018-12-21 20:02:12</td>
          </tr>
          <tr>
            <td class="blue">22234324235</td>
            <td class="blue">2223432423522234324235222343242352223432423522234324235</td>
            <td >100笔</td>
            <td>2018-12-21 20:02:12</td>
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


    <!-- 操作 -->
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
            <td class="blue" @click="golink('hash')">2223432423522234324235222343242352223432423522234324235</td>
            <td class="blue" @click="golink('block')">22234324235</td>
            <td>合同上传</td>
            <td>2018-12-21 20:02:12</td>
            <td><button @click="golink('hash')">查看详情</button></td>
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
</template>

<script>

import indexSearch from '../components/search.vue'
export default {
  components:{
    indexSearch
  },
  data () {
    return {
      value6:'',
    }
  },
  methods:{
    golink(e){
      if(e == 'hash'){
        this.$router.push({path:'/main/operation'})
      }else if(e == 'block'){
        this.$router.push({path:'/main/block'})
      }
    }
  }
}
</script>
<style >
  .index{
    .index-banner{
      height: 434px;
      width: 100%;
      background: url(../assets/img/back.png) center center no-repeat;
      background-size: auto 100%;
      .banner-main{
        width: 1200px;
        margin: 0 auto;
        padding-top: 72px;
        h1{
          font-size: 50px;
          color: #fff;
        }
        p{
          font-size: 16px;
          color: #fff;
        }
        .search{
          float: none;
          margin-top: 46px;
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
              color: #085eb7;
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
</style>

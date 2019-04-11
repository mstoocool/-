// pages/gamesList/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gameId:"",
    list:[],
    gameName:""
  },

  /**
   * 生命周期函数--监听页面加载
   */

  glList(e) {
    // console.log(e)
    // e.currentTarget.dataset.id
    // 跳转特面
    wx.navigateTo({
      url: "../glList/index?id=" + e.currentTarget.dataset.id
    })
  },
  onLoad: function (options) {
    // console.log(options)
    this.setData({
      gameId:options.id
    })
    this.getList()
  },
  // 查询攻略列表接口
  getList(){
    wx.request({
      url: 'https://route.showapi.com/1698-1',
      data: {
        showapi_appid: "91611",
        showapi_sign: "8f05a91867a740d697c6fadcaff87956",
        gameId:this.data.gameId
      },
      success: res => {
        console.log(res)
        this.setData({
          list:res.data.showapi_res_body.strategyList,
          gameName: res.data.showapi_res_body.name
        })
      }
    })
  }
})
// pages/glList/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    list: [],
    // title:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
     id: options.id
    })
    this.getList()
  },
  // 查询攻略详情接口
  getList() {
    wx.request({
      url: 'https://route.showapi.com/1698-2',
      data: {
        showapi_appid: "91611",
        showapi_sign: "8f05a91867a740d697c6fadcaff87956",
        id: this.data.id
      },
      success: res => {
        console.log(res)
          this.setData({
        // title: res.data.showapi_res_body.title,
            list: res.data.showapi_res_body,
        //     // gameName: res.data.showapi_res_body.name,
        })
      }
    })
  }
})
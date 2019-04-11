// pages/games/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue:"",
    gameList:[],
    
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  showList(e){
    // console.log(e)
    // e.currentTarget.dataset.id
    // 跳转特面
    wx.navigateTo({
      url: "../gamesList/index?id=" + e.currentTarget.dataset.id
    })
  },
  getValue(e){
    // console.log(e)
    this.setData({
      searchValue:e.detail.value
    })
  },
  search(){
    wx.showLoading({
      title: '加载中',
    })
    var v = this.data.searchValue;
    wx.request({
      url: 'https://route.showapi.com/1698-3',
      data: {
        showapi_appid: "91611",
        showapi_sign: "8f05a91867a740d697c6fadcaff87956",
        name:v
      },
      success: res => {
        wx.hideLoading()
        var arr = []
        for (var i = 0; i < res.data.showapi_res_body.games.length;i++){
          arr.push({
            id: res.data.showapi_res_body.games[i].gameId,
            name: res.data.showapi_res_body.games[i].name,
            image:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
          })
        }
        this.setData({
          gameList:arr
        })
      }
    })
  }
})
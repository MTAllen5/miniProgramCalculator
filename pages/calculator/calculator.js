// pages/calculator/calculator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: '0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  handleTap (event) {
    let res = this.data.result.toString()

    if (event.detail.type === 'number' && event.detail.value === '.' && this.data.result.indexOf('.') > 0) {
      return
    }
    if (event.detail.type === 'prefix' && event.detail.value === 'AC') {
      this.setData({
        result: 0
      })
    }
    if (event.detail.type === 'prefix' && event.detail.value === '%') {
      this.setData({
        result: res / 100
      })
    }
    if (event.detail.type === 'number') {
      res = (res === '0' && event.detail.value !== '.' ? '' : res) + event.detail.value
      this.setData({
        result: res
      })
    }
  }
})
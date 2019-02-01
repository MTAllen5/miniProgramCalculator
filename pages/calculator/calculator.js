// pages/calculator/calculator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: '0',
    optionQueue: [],
    resultQueue: [],
    resultFont: 'normal'
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 点击按钮
   * 根据按钮类型分派处理方法
   */
  handleTap (event) {
    switch (event.detail.type) {
      case 'number': this.addNumber(event.detail.value); break
      case 'prefix': this.addPrefix(event.detail.value); break
      case 'option': this.addOption(event.detail.value); break
    }
  },

  /**
   * 点击前缀按钮处理方法
   */
  addPrefix (val) {
    switch (val) {
      case 'AC':
        this.setData({
          result: 0,
          optionQueue: [],
          resultQueue: []
        })
        break
      case '%':
        this.setData({
          result: (this.data.result / 100).toString()
        })
        break
      case '±':
        this.setData({
          result: this.data.result.indexOf('-') == 0 ? this.data.result.slice(1) : ('-' + this.data.result)
        })
    }
  },

  /**
   * 点击数字按钮处理方法
   */
  addNumber (val) {
    if (val === '.' && this.data.result.indexOf('.') > 0) {
      return
    }

    let res = this.data.result.toString()
    res = (res === '0' && val !== '.' ? '' : res) + val
    this.setData({
      result: res
    })
    this.resizeResult()
  },

  /**
   * 点击操作按钮处理方法
   */
  addOption (val) {
    this.data.resultQueue.push(this.data.result)

    if (this.data.optionQueue.length > 0 && val !== '=') {
      if (this.data.resultQueue.length < 2) { // 忽略重复点击操作按钮的操作
        return
      }
      this.calculateResult()
    }

    switch (val) {
      case '÷': 
        this.data.optionQueue.push(this.divide)
        break
      case '×':
        this.data.optionQueue.push(this.multiply)
        break
      case '-':
        this.data.optionQueue.push(this.minus)
        break
      case '+':
        this.data.optionQueue.push(this.sum)
        break
      case '=':
        this.calculateResult()
        break
    }
    this.data.result = '0'
  },

  // 除法
  divide (a, b) {
    return a / b
  },

  // 乘以
  multiply (a, b) {
    return a * b
  },

  // 减法
  minus (a, b) {
    return a - b
  },

  // 求和
  sum (a, b) {
    return Number(a) + Number(b)
  },

  // 计算结果
  calculateResult () {
    let b = this.data.resultQueue.pop()
    let a = this.data.resultQueue.pop()
    let optionFn = this.data.optionQueue.pop()

    this.data.result = optionFn(a, b)
    this.data.resultQueue.push(this.data.result)
    this.setData({
      result: this.data.result
    })
  },

  resizeResult () {
    let res = this.data.result.toString()
    if (res.length <= 6) {
      this.setData({
        resultFont: 'normal'
      })
    } else if (res.length <= 7) {
      this.setData({
        resultFont: 'small'
      })
    } else if (res.length <= 8) {
      this.setData({
        resultFont: 'smaller'
      })
    } else if (res.length <= 9) {
      this.setData({
        resultFont: 'smallerer'
      })
    }
  }
})
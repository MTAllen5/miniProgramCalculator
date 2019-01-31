// components/button/button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap () {
      this.triggerEvent('tapBtn', {
        type: this.data.type,
        value: this.data.value
      })
    }
  }
})

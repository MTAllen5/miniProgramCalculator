// components/result.js
import utils from '../../utils/util.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    result: {
      type: String,
      value: '',
      observer(newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
        this.setData({
          resultTxt: utils.formatMoney(newVal)
        })
      }
    },
    fontSize: {
      type: String,
      value: 'normal',
      // observer(newVal, oldVal, changedPath) {
      //   console.log(newVal)
      // }
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
    formatMoney () {

    }
  },

  /**
   * 组件的生命周期
   */
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      this.setData({
        resultTxt: utils.formatMoney(this.data.result)
      })
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    }
  },
})

/**
 * 工具--引用JS
 **/
import * as Model from './model.js'

// 私有方法
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// 导出方法
export function shuffle (arr) {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}

export function debounce (func, delay) {
  let timer

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

// 获取指定30种高亮随机颜色
export function getLightRandomColor () {
  const randomColor = [
    '#b0ff53',
    '#5fb5ff',
    '#ffe452',
    '#ff08dd',
    '#39ffe9',
    '#ffd46f',
    '#06a2ff',
    '#65ff9a',
    '#ffe5cc',
    '#74cbff',
    '#fadb84',
    '#12fbff',
    '#a3ff78',
    '#d4ff55',
    '#ff6b00',
    '#ff71b0',
    '#e3bfff',
    '#36d9ff',
    '#96ff83',
    '#ff0317',
    '#ff8902',
    '#ffad09',
    '#00ff45',
    '#e796ff',
    '#ffb109',
    '#ffe820',
    '#66abff',
    '#43ffa8',
    '#ff9771',
    '#d200ff']
  let number = Math.floor(Math.random() * 31)
  return randomColor[number]
}

// 获取指定30种较暗随机颜色
export function getDarkRandomColor () {
  const randomColor = [
    '#78ad38',
    '#34648d',
    '#af9d38',
    '#ab23a6',
    '#1f8d81',
    '#a88c4a',
    '#215ca4',
    '#46b26c',
    '#b29f8f',
    '#194dd7',
    '#30acb2',
    '#0faeb2',
    '#71b255',
    '#94b23b',
    '#b24677',
    '#b24142',
    '#668cb2',
    '#b24142',
    '#905a58',
    '#4e947e',
    '#b21a4e',
    '#9e85b2',
    '#238aa4',
    '#6d4be3',
    '#af6fe3',
    '#e3664e',
    '#e39a1c',
    '#ae4100',
    '#2fb777',
    '#745ae3']
  let number = Math.floor(Math.random() * 31)
  return randomColor[number]
}

// 格式化数字:返回格式化后的数
export function formatNumber (num) {
  let formatNum = num
  if (num) {
    if (parseInt(num) >= 100000000) {
      formatNum = Math.round(num / 100000000 * Math.pow(10, 1)) / Math.pow(10, 1) + '亿'
    } else if (parseInt(num) >= 10000000 && parseInt(num) < 100000000) {
      formatNum = Math.round(num / 10000 * Math.pow(10, 0)) / Math.pow(10, 0) + '万'
    } else if (parseInt(num) >= 10000 && parseInt(num) < 10000000) {
      formatNum = Math.round(num / 10000 * Math.pow(10, 1)) / Math.pow(10, 1) + '万'
    }
  } else {
    formatNum = 0
  }
  return formatNum
}

// 保存session
export function keepSession (key, value) {
  if (key) {
    if (sessionStorage.getItem(key)) {
      sessionStorage.removeItem(key)
    }
    sessionStorage.setItem(key, value)
  }
}

// 获取session
export function getSession (key) {
  if (key) {
    if (sessionStorage.getItem(key)) {
      return sessionStorage.getItem(key)
    }
  }
  return ''
}

// 文本转化表情
export function castTextWithGif (text, gifPath) {
  let newText = ''
  if (text) {
    newText = text
    gifPath = gifPath || 'common/FaceGif/'
    let list = Model.faceList
    for (let i = 0; i < list.length; i++) {
      let c = list[i].c.trim()
      let n = list[i].n.replace(/(\[)|(])/g, '')
      let tHtml = `<img src="${gifPath + n}.gif"/>`
      newText = newText.replace(new RegExp(c, 'g'), tHtml)
    }
  }
  return newText
}

// 检查身份证号码
export function isIdentity (UUserCard) {
  let re = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/
  if (UUserCard && re.test(UUserCard)) {
    return true
  }
  return false
}

// 获取身份证信息
export function getIdCardInfo (userId) {
  let result = {}
  result = {
    country: '中国大陆',
    province: '',
    city: '',
    prefecture: '',
    sex: '',
    birthday: ''
  }
  if (isIdentity(userId)) {
    // 出生日期
    let last = 0
    if (userId.length === 15) {
      result.birthday = '19' + userId.substring(6, 8) + '-' + userId.substring(8, 10) + '-' + userId.substring(10, 12)
      last = userId.substring(13, 14)
    }
    if (userId.length === 18) {
      result.birthday = userId.substring(6, 10) + '-' + userId.substring(10, 12) + '-' + userId.substring(12, 14)
      last = userId.substring(16, 17)
    }
    // 性别
    if (last % 2 !== '0') {
      result.sex = '男'
    } else {
      result.sex = '女'
    }
    // 籍贯
    let provinceId = userId.substring(0, 2)
    let cityId = userId.substring(2, 4)
    let prefectureId = userId.substring(4, 6)
    let userIdCityId
    if (provinceId && provinceId !== '00') {
      let p = provinceId + '0000'
      for (let i = 0; i < Model.province.length; i++) {
        if (Model.province[i].id === p) {
          result.province = Model.province[i].name
          userIdCityId = Model.province[i].city
          break
        }
      }
      if (cityId && cityId !== '00') {
        let p = provinceId + cityId + '00'
        for (let j = 0; j < userIdCityId.length; j++) {
          if (userIdCityId[j].id === p) {
            result.city = userIdCityId[j].name
            break
          }
        }
        if (prefectureId && prefectureId !== '00') {
          let p = provinceId + cityId + prefectureId
          for (let i = 0; i < Model.area.length; i++) {
            if (Model.area[i].id === p) {
              result.prefecture = Model.area[i].name
            }
          }
        }
      }
    }
    // 国籍
    result.country = '中国大陆'
  }
  return result
}

// 拓展数据格式化及去重
export function formatData (oldData, type) {
  let newData = ''
  let hash = {}
  if (oldData) {
    if (type === 'account') { /// [^1-9]/g
      oldData = oldData.replace(/[^0-9a-zA-Z]/g, ';')
    } else {
      oldData = oldData.replace(/；/g, ';').replace(/\n/g, '').replace(/(\[)|(])/g, '').replace(/×/g, '*').replace(/（/g, '(').replace(/）/g, ')').replace(/－/g, '-').replace(/＊/g, '*').replace(/，/g, ',').trim()
    }
    let oldDataStr = oldData.split(';')
    for (let i = 0; i < oldDataStr.length; i++) {
      if (oldDataStr[i]) {
        if (!hash[oldDataStr[i]]) {
          newData += !newData ? oldDataStr[i] : ';' + oldDataStr[i]
          hash[oldDataStr[i]] = true
        }
      }
    }
  }
  return newData
}

// 判断两个时间字符串大小
export function isMoreThenWeek (a, b) {
  let al = new Date(a).getTime()
  let bl = new Date(b).getTime()
  let diff = (al - bl) / (24 * 3600 * 1000)
  console.log(diff)
  if (diff > 9) {
    return true
  } else {
    return false
  }
}

// 格式化时间--返回yyyy-mm-dd HH:mm:ss 或 yyyy-mm-dd
export function getDateFormat (dateStr, format) {
  let date = new Date(dateStr)
  let year = date.getFullYear()
  let mStr = date.getMonth() + 1
  let month = mStr < 10 ? '0' + mStr : mStr
  let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  let second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  if (format && format === 'yyyy-mm-dd') {
    return year + '-' + month + '-' + day
  } else {
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
  }
}

// 根据时间间隔获取时间 返回格式yyyy-mm-dd HH:mm:ss
export function getDateTimeByInterval (dateTimeStr, interval) {
  if (dateTimeStr && interval) {
    let now = new Date(dateTimeStr)
    let date = new Date(now.getTime() + interval)
    let year = date.getFullYear()
    let mStr = date.getMonth() + 1
    let month = mStr < 10 ? '0' + mStr : mStr
    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    let second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
  }
  return ''
}

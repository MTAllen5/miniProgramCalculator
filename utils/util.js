const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function formatMoney(s) {
  if (/[^0-9\.]/.test(s))
    return '0'
  if (s == null || s == 'null' || s == '')
    return '0'

  s = s.toString().replace(/^(\d*\.?)$/, '$1.')
  s = s.replace('.', ',')
  let re = /(\d)(\d{3},)/
  while (re.test(s)) {
    s = s.replace(re, '$1,$2')
  }
  if (/,(\d+)$/.test(s)) {
    s = s.replace(/,(\d*)$/, '.$1')
  } else {
    s = s.replace(/,(\.?)$/, '$1')
  }

  return s;
}

module.exports = {
  formatTime: formatTime,
  formatMoney
}

// 对应 Flarum 2.0.0-beta.8

dayjs.locale(
  {
    name: 'zh-hans',
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    ordinal: (number, period) => (period === 'W' ? `${number}周` : `${number}日`),
    weekStart: 1,
    yearStart: 4,
    formats: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY/MM/DD',
      LL: 'YYYY年M月D日',
      LLL: 'YYYY年M月D日 HH:mm',
      LLLL: 'YYYY年M月D日dddd HH:mm',
    },
    relativeTime: {
      future: '%s后',
      past: '%s前',
      s: '几秒',
      m: '1 分钟',
      mm: '%d 分钟',
      h: '1 小时',
      hh: '%d 小时',
      d: '1 天',
      dd: '%d 天',
      M: '1 个月',
      MM: '%d 个月',
      y: '1 年',
      yy: '%d 年',
    },
    meridiem: (hour, minute) => {
      const hm = hour * 100 + minute;
      if (hm < 600) return '凌晨';
      if (hm < 900) return '早上';
      if (hm < 1130) return '上午';
      if (hm < 1230) return '中午';
      if (hm < 1800) return '下午';
      return '晚上';
    },
  },
  null,
  true
);

dayjs.locale('zh-hans');

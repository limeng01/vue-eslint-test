export const getDates = function(
  ifNeedSevenDays = true, // 是否需要自动生成默认七天的横向展示日历()
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1, //今天是几月份
) {
  let todayInWeek = new Date(`${year},${month},1`).getDay(); // 本月1号是周几 (0-6,0代表星期天)
  // 算出这个月最后一天周几
  let lastDayInWeek = new Date(
    `${year},${month},${getDaysOfMonth(year, month)}`,
  ).getDay();

  // 获取某个月有多少天
  function getDaysOfMonth(year, month) {
    var date = new Date(year, month, 0);
    var days = date.getDate();
    return days;
  }
  // (1) 先格式化本月天数
  let targetMonthDays = [];
  for (let i = 1; i <= getDaysOfMonth(year, month); i++) {
    targetMonthDays.push({
      type: "cur",
      date: `${year}-${month}-${i}`,
    });
  }
  // (2) 头部插入上一个月
  let priDates = getDaysOfMonth(year, month - 1); // 前一个月有多少天
  let priMonth = month - 1; // 先默认初始前一个月等于当前月份
  let priYear = year; //先默认初始前一年等于当前年份
  if (priMonth === 0) {
    // 说明当前月是1月，减一的话应该是前一年的十二月份
    priMonth = 12;
    priYear = year - 1;
  }
  for (let j = todayInWeek; j >= 1; j--) {
    targetMonthDays.unshift({
      type: "pre",
      date: `${priYear}-${priMonth}-${priDates--}`,
    });
  }
  // (3)尾部插入下一个月
  let nextMonth = month + 1;
  let nextYear = year;
  if (nextMonth === 13) {
    // 说明当前月是十二月，下个月应该是明年的一月份
    nextMonth = 1;
    nextYear = year + 1;
  } else {
  }
  for (let i = 1; i < 7 - lastDayInWeek; i++) {
    targetMonthDays.push({
      type: "next",
      date: `${nextYear}-${nextMonth}-${i}`,
    });
  }
  console.log(targetMonthDays, "targetMonthDays");
  const weekTipsList = [0, 1, 2, 3, 4, 5, 6]; // 0 代表周日，1代表周一，以此类推
  let startIdx = 0;
  targetMonthDays.forEach(item => {
    startIdx === 7 && (startIdx = 0);
    item.weekTip = weekTipsList[startIdx];
    startIdx++;
  });
  return {
    targetMonthDays,
    getViewOfSevenDateList:
      ifNeedSevenDays && getViewOfSevenDateList(targetMonthDays),
  };
};
export const add = ctx => {
  console.log(ctx, "this");
};

export const getViewOfSevenDateList = function(
  allDays,
  chooseDate = `${new Date().getFullYear()}-${String(
    new Date().getMonth() + 1,
  )}-${String(new Date().getDate())}`,
) {
  let todayIdxInallDays = allDays.findIndex(item => item.date === chooseDate);
  const formatSevenDays = [chooseDate];

  for (
    let i = 0, v = todayIdxInallDays;
    i < allDays[todayIdxInallDays].weekTip;
    i++
  ) {
    formatSevenDays.unshift(allDays[--v].date);
  }

  for (
    let i = 0, v = todayIdxInallDays;
    i < 6 - allDays[todayIdxInallDays].weekTip;
    i++
  ) {
    formatSevenDays.push(allDays[++v].date);
  }
  return formatSevenDays;
};

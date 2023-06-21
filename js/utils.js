// get the number of days in any particular month
const daysInMonth = function(month, year) {
  switch(month) {
    case 1:
      return (year % 4 == 0 
        && year % 100) || year % 400 == 0 
        ? 29 : 28
        case 8 : case 3 : case 5 : case 10
        : return 30
        default : 
        return 31
  }
}

// check if a date is valid
export const isValidDate = function(options) {
  let { day, month, year } = options
  if( !day || !month || !year) return false
  month = parseInt(month, 10) - 1
  return day <= daysInMonth(month, year)
}

export function checkDay(day) {
  return day && day > 0 && day <= 31
}

export function checkMonth(month) {
  return month && month > 0 && month <= 12
}

export function checkYear(year) {
  const actualYear = new Date().getFullYear()
  return year && year > 0 && year <= actualYear
}

export function getTimeDifference(options) {
  let { day, month, year } = options

  if(!day || !month || !year) return null

  const nowMs = Date.now()
  const originalDateMs = new Date(year, month, day).getTime()
  const difference = nowMs - originalDateMs

  const secondsPassed = Math.floor(difference / 1000)
  const minutesPassed = Math.floor(secondsPassed / 60)
  const hoursPassed = Math.floor(minutesPassed / 60)
  let daysPassed = Math.floor(hoursPassed / 24)
  let monthsPassed = Math.floor(daysPassed / 31)
  const yearsPassed = Math.floor(monthsPassed / 12)

  daysPassed = Math.floor(daysPassed % 31)
  monthsPassed = Math.floor(monthsPassed % 12)

  return { yearsPassed, monthsPassed, daysPassed}
}

export function capitalizeFirstCharacter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
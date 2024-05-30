
export const minutesDifference = (date1: Date, date2: Date, difference: number) => {
  const msDate1 = date1.getTime()
  const msDate2 = date2.getTime()
  const msDifference = Math.abs(msDate1 - msDate2)
  return msDifference > (difference * 60 * 1000)
}
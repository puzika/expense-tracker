const isToday = (date: Date): boolean => {
   const currDate = new Date();

   return (
      currDate.getFullYear() === date.getFullYear() &&
      currDate.getMonth() === date.getMonth() &&
      currDate.getDay() === date.getDay()
   );
}

const isThisWeek = (date: Date): boolean => {
   const currDate = new Date();

   return (
      currDate.getFullYear() === date.getFullYear() &&
      currDate.getMonth() === date.getMonth() &&
      currDate.getDate() - date.getDate() <= 7
   );
}

const isThisMonth = (date: Date): boolean => {
   const currDate = new Date();

   return (
      currDate.getFullYear() === date.getFullYear() &&
      currDate.getMonth() === date.getMonth()
   )
}

const isThisYear = (date: Date): boolean => {
   const currDate = new Date();

   return currDate.getFullYear() === date.getFullYear();
}

export default function isInPeriod(period: string, date: Date): boolean {
   switch (period) {
      case 'Today':
         return isToday(date);
      case 'Week':
         return isThisWeek(date);
      case 'Month':
         return isThisMonth(date);
      case 'Year':
         return isThisYear(date);
      default:
         return false;
   }
}

import { subDays, format } from 'date-fns';

const date = new Date(1998, 6, 2); // 1998-07-02
const subtracted = subDays(date, 10);
const formatted = format(subtracted, 'yyyy-MM-dd');
console.log(`Subtracted: ${formatted}`);

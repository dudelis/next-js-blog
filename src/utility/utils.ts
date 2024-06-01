export function formatDate(date: Date) {
  // Ensure input is a Date object
  if (!(date instanceof Date)) {
      date = new Date(date);
  }

  // Extract day, month, and year
  var day = date.getDate().toString().padStart(2, '0');
  var month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
  var year = date.getFullYear();

  // Format the date as dd.mm.yyyy
  return `${day}.${month}.${year}`;
}
export function formatDateTime(date: Date) {
  // Ensure input is a Date object
  if (!(date instanceof Date)) {
      date = new Date(date);
  }

  // Extract day, month, year, minute, and hour
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
  const year = date.getFullYear();
  const minute = date.getMinutes().toString().padStart(2, '0');
  const hour = date.getHours().toString().padStart(2, '0');

  // Format the date as dd.mm.yyyy
  return `${day}.${month}.${year} ${hour}:${minute}`;
}


export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g,"")
    .replace(/[\s_-]+/g,"-")
    .replace(/^-+|-+$/g,"");    
}

export function stripHtml(text: string) {
  return text.replace(/<[^>]*>?/gm, '');
}

export function getBaseUrl() {
  return process.env.VERCEL_ENV === "production"
    ? `https://codemusician.dev`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:3000`;
}
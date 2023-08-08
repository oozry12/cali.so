export const emailConfig = {
  from: 'hi@www.ko.ac.cn',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://www.ko.ac.cn`
      : 'http://localhost:3000',
}

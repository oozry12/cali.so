export const emailConfig = {
  from: 'ko.ac.cn@ooim.xyz',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://www.ko.ac.cn`
      : 'http://localhost:3000',
}

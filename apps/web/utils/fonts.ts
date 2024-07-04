import localFont from 'next/font/local';

export const AvenirNextFont = localFont({
  src: [
    {
      path: '../public/AvenirNext-Regular-da92ca69.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/AvenirNext-Medium-9ab29c0a.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-primary',
});

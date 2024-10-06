import localFont from "next/font/local";
// import "./globals.css";

// const featureDisplay = localFont({
//   src: [
//     {
//       path: './fonts/FEATUREDISPLAY-EXTRALIGHT-TRIAL.woff',
//       weight: '200',
//       style: 'normal',
//     },
//     {
//       path: './fonts/FEATUREDISPLAY-REGULAR-TRIAL.woff',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './fonts/FEATUREDISPLAY-MEDIUM-TRIAL.woff',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: './fonts/FEATUREDISPLAY-BOLD-TRIAL.woff',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: './fonts/FEATUREDISPLAY-ULTRA-TRIAL.woff',
//       weight: '900',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-feature-display',
// });

// const ppMontrealNeue = localFont({
//   src: './fonts/PPNEUEMONTREAL-BOOK.woff',
//   variable: '--font-pp-montreal-neue',
// });

// export const metadata = {
//   title: "Nautilus",
//   description: "Master Your Craft",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={''}>
        {children}
      </body>
    </html>
  );
}
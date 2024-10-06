import localFont from "next/font/local";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={''}>
        {children}
      </body>
    </html>
  );
}
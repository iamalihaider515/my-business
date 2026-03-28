export const metadata = {
  title: "DevHub",
  description: "Mini SaaS App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}
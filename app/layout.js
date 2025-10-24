import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Whimsical Animations - Course Exercises",
  description: "My exercises from Josh W Comeau's Whimsical Animation course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

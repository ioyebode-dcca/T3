import Preloader from "@/components/Preloader";
import BackToTop from "@/components/BackToTop";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {/* your header, children, footer */}
        <BackToTop />
      </body>
    </html>
  );
}
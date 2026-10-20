import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-white text-slate-900">
        <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4">
          <Navbar />
          <main className="flex-1 py-6">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

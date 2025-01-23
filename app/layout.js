import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="p-6">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex justify-between items-center">
          <div>
            <Link href="/"><h3 className="text-2xl font-bole">Next Project</h3></Link>
          </div>
          <ul className="flex gap-5">
            <li className="text-xl font-bold"><Link href="/">Home</Link></li>
            <li className="text-xl font-bold"><Link href="/profile">Profile</Link></li>
          </ul>
          <div>
            {/* {
              isAuthenticated ? (
                <button>Logout</button>
              ) : (
                <button>Login</button>
              )
            } */}
            <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 text-lg font-semibold text-white">Login</button>
          </div>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}

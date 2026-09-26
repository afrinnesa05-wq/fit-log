
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { PlanProvider } from "@/context/PlanContext";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Fit Log",
  description: "Workout planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PlanProvider>
          <Navbar />
          {children}
          <Footer/>
        </PlanProvider>
      </body>
    </html>
  );
}
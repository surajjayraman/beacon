import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";
import LeftSideBar from "@/components/layout/LeftSideBar";
import MainContainer from "@/components/layout/MainContainer";
import TopBar from "@/components/layout/TopBar";
import RightSideBar from "@/components/layout/RightSideBar";

export const metadata = {
  title: "Beacon Live",
  description: "Beacon Social Media App",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-1`}>
          <LeftSideBar />
          <MainContainer>
            <TopBar />
            {children}
          </MainContainer>
          <RightSideBar />
        </body>
      </html>
    </ClerkProvider>
  );
}

import type { Metadata } from "next";

import { ThemeProvider } from "@/providers/ThemeProvider";

import { Toaster } from "sonner";

import Header from "@/components/Header";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "AI Notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen w-full flex-col">
            <Header />
            <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8">
              {children}
            </main>
          </div>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

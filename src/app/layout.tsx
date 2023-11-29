import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Potluck",
  description: "Open source event organisation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex justify-center">
          <div className=" h-screen w-full max-w-xl mx-auto my-10">
            <h1 className="text-3xl font-semibold py-4">Potluck</h1>

            <div className="h-screen items-center ">
              <Providers>{children}</Providers>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

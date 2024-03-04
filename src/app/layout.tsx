import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hedin Mobility Group',
  description:
    'Hedin Mobility Group is a leading European mobility enabler operating in thirteen countries.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container mx-auto flex min-h-screen flex-col items-center gap-8 p-4 md:p-8">
          <div className="max-w-lg">
            <h2 className="text-center text-xl md:text-2xl">Text lorem ipsum</h2>
            <p className="text-center text-xs md:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nesciunt, excepturi
              eveniet deserunt accusantium placeat distinctio aliquid alias soluta aspernatur
              aperiam eos error asperiores quasi maiores deleniti ullam sequi enim.
            </p>
          </div>
          {children}
        </main>
      </body>
    </html>
  )
}

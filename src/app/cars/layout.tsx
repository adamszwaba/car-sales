import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function CarLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center gap-8 container p-4 md:p-8 mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}

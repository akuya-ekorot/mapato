import './globals.css'

export const metadata = {
  title: 'Mapato Creative',
  description: 'Hand-made creative marketing for your business',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import './globals.css'


export const metadata = {
  title: 'Lar das Velhinhas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}

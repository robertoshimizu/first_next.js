
import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - TaxPal',
    default: 'Deploy to the cloud with confidence',
  },
  description:
    'Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
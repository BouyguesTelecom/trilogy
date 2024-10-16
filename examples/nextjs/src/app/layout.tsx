export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr'>
      <head>
        <link
          rel='stylesheet'
          href='https://dev.public.a7.apps.ocp-1.pin.prd.mlb.nbyt.fr/TRILOGY/trilogy-styles@4.0.0-beta.5/default/trilogy.css'
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

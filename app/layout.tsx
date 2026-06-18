import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'BIOMAGNA - Especialistas en Biológicos Agrícolas',
  description: 'Distribuidor argentino líder en insumos agrícolas biológicos con sede en Rosario, Santa Fe. Transformamos el agro con biodefensivos, biofertilizantes, inoculantes y bioestimulantes.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${montserrat.variable}`}>
      <body className="font-sans antialiased text-neutral-800 bg-[#FAF8F5]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

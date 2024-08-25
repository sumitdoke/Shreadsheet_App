import '../styles/globals.css'; // Import global styles
import { ReactNode } from 'react'; // Import ReactNode type

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;

import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      <a
        href="https://wa.me/212669337548?text=Bonjour%2C%20je%20vous%20contacte%20depuis%20le%20site%20Oncovita.%20Je%20souhaite%20obtenir%20des%20informations%20et%20prendre%20rendez-vous.%20Merci."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Oncovita sur WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 hover:bg-primary/90"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M16.04 4C9.43 4 4.06 9.36 4.06 15.97c0 2.11.55 4.17 1.6 5.99L4 28l6.2-1.62a11.9 11.9 0 0 0 5.83 1.5h.01c6.6 0 11.97-5.36 11.97-11.97C28.01 9.36 22.64 4 16.04 4zm0 21.84h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.68.96.98-3.59-.24-.37a9.86 9.86 0 0 1-1.51-5.28c0-5.46 4.45-9.9 9.92-9.9 2.65 0 5.13 1.03 7.01 2.9a9.82 9.82 0 0 1 2.9 7.01c0 5.46-4.45 9.91-9.91 9.91zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z"/>
        </svg>
      </a>
    </div>
  );
};

export default Layout;

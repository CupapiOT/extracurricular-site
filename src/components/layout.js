import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex items-center flex-col">{children}</div>
      <Footer />
    </>
  );
}

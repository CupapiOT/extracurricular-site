import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex items-center flex-col">{children}</div>
    </>
  );
}

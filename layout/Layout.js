import Header from "@/components/Header";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="w-full">{children}</main>
    </>
  );
}

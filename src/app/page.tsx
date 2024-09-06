import Header from "./header";
import Menu from "./menu";

export default function Home() {
  return (
    <>
      <Menu />
      <main className="max-w-5xl mx-auto p-4">
        <Header
          title="Going beyond the border"
          subtitle="Bienvenido a mi sitio web, donde cada desafío es una oportunidad para crecer e innovar. El enfoque es sencillo, dar soluciones creativas de manera eficiente y profesional."
        />
      </main>
    </>
  );
}

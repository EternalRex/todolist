import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="text-black bg-white w-screen h-60">
        <p>Introduction Section</p>
      </section>
      <section className="text-black bg-appDarkOrange w-screen h-60">
        <p>About Us Section</p>
      </section>
      <section className="text-black bg-appLightOrange w-screen h-60">
        <p>Guides Section</p>
      </section>
      <footer className="text-black bg-slate-600 w-screen h-60">
        <p>Fotter Section</p>
      </footer>
    </main>
  );
}

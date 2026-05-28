import { Hero } from "../components/sections/Hero";
import { Manifiesto } from "../components/sections/Manifiesto";
import { Services } from "../components/sections/Services";
import { Metodologia } from "../components/sections/Metodologia";
// import { Casos } from "../components/sections/Casos"; // oculto hasta que el case sea efectivo
import { Stack } from "../components/sections/Stack";
import { Equipo } from "../components/sections/Equipo";
import { FAQ } from "../components/sections/FAQ";
import { Contacto } from "../components/sections/Contacto";

export function Home() {
  return (
    <main>
      <Hero />
      <Manifiesto />
      <Services />
      <Metodologia />
      {/* <Casos /> — oculto hasta que el case sea efectivo */}
      <Stack />
      <Equipo />
      <FAQ />
      <Contacto />
    </main>
  );
}

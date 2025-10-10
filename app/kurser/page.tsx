import Classes from "@/components/classes";
import { DrawerFilter } from "@/components/drawerfilter";
import Header from "@/components/header";

export default async function Kurser() {
  return (
    <main>
      <Header />
      <DrawerFilter />
      <Classes />
    </main>
  );
}

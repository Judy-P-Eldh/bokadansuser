import About from "@/components/about";
import Classes from "@/components/classes";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { getSchools } from "@/lib/dbactions";

export default async function Home() {
  const { data: schools, error } = await getSchools();
// count, 
  if (error) {
    return <div>Fel vid hämtning: {error.message}</div>;
  }

  if (!schools || schools.length === 0) {
    return <div>Inga skolor hittades.</div>;
  }
  return (
    <main>
     <Header />
     <Hero />
     <About />
     <Classes />
      {/* <h1>Boka dans User</h1>
      <section className="grid gap-2">
        {schools.map((school) => (
          <div key={school.id} className="bg-cyan-500">
            <h2>{school.name}</h2>
            <p>{school.address}</p>
            <p>{school.phone}</p>
            <p>{school.email}</p>
          </div>
        ))}
      </section> */}
    </main>
  );
}

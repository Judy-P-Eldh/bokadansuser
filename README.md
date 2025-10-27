# Bokning för svenska dansskolor

Ett webbaserat bokningssystem som hjälper svenska dansskolor att visa sina kurser och ta emot bokningar med automatisk ålderskontroll.

Projektet är utvecklat i **Next.js 15 (App Router)** och riktar sig till småskaliga verksamheter med behov av ett enkelt och tillgängligt bokningsflöde.

---

## Innehåll
- [Om projektet](#Om-projektet) 
- [Funktionalitet](#Funktionalitet)
- [Teknik](#Teknik)
- [Användning](#Användning)
- [Arbetssätt](#Arbetssätt)
- [Sprintplan](#Sprintplan)
- [Lärdomar och färdigheter](#Lärdomar-och-färdigheter)
- [Svårigheter](#Svårigheter)
- [Tillgänglighet](#Tillgänglighet)
- [Framtida möjligheter](#Framtida-möjligheter)

--- 

## Om projektet
Detta är ett individuellt slutprojekt som demonstrerar praktisk användning av **Next.js**, **TypeScript**, **Tailwind CSS** och **Supabase**.  
Syftet är att skapa en tillgänglig och responsiv webbapp där besökare kan:
- Utforska kurser från flera dansskolor
- Filtrera utbudet efter ålder, nivå och dansstil
- Göra kursanmälningar direkt via webbgränssnittet

---

## Funktionalitet
- Hero-sektion med tydlig CTA 
- Presentation av verksamheten
- Schemalista
- Kurspresentation med filtrering
- Kursanmälan med ålderskontroll
- Kontaktinfo, kontaktformulär och karta
- Vanliga frågor
- Presentation av lärare och dansstilar
- Footer med menylänkar, sociala medier och kontaktuppgifter

---

## Teknik
Projektet är byggt med:
- [Next.js 15 (App Router)](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Supabase](https://supabase.com)
- [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- [React Hot Toast](https://react-hot-toast.com)
- [WAVE](https://wave.webaim.org) för tillgänglighetstestning
  
---

## Användning
Webbappen innehåller flera sidor:
- Start: hero med CTA, presentation av verksamheten, schema, kursanmälan, kontaktinfo, kontaktformulär, karta och vanliga frågor
- Dansstilar: beskrivning av olika dansstilar
- Lärare: presentation av lärare
- Sök kurser – filtreringsfunktion för att hitta passande kurser

---

## Arbetssätt
Utvecklingen bedrevs enskilt med **SCRUM-inspirerat arbetssätt**:
- Planering i Trello
- Feature branches och PR
- Iterativ testning och refaktorering

---

## Sprintplan

### Sprint 1 – Planering och uppstart
- Beslut kring databashantering
- Skapade projektstruktur
- Skapade backlog i Trello
- Skapade grundlayout
- Lade in ny och befintlig exempeldata i databasen

### Sprint 2 - Filterfunktionalitet 
- Koppling mot Supabase 
- Implementerade filterfunktion 
- Skapade informationssida om dansstilar
- Implementerade funktionalitet för kontaktformulär
- Kontrollerade tillgänglighetsanpassning

### Sprint 3 - Färdigställa MVP
- Justerade mappstruktur
- Uppdaterade tillgänglighetsanpassning
- Publicerade på Vercel
- Testade med externa användare
- Färdigställde kurskort (aktuell info och design)

### Sprint 4 - Avslut och redovisning
- Uppdatering av responsivitet
- Genomförde tillgänglighetsgranskning  
- Förberedde och genomförde redovisning

---

## Lärdomar och färdigheter
- Client & Server Components
- Client & Server Actions
- Filtrering och databaslogik
- Supabase-integration
- Responsiv design
- Tillgänglighetsanpassning

---

## Svårigheter
- Tidsbegränsning förhindrade utveckling av administrationsdel med inlogg.
- Dokumentation för nyare Next.js-principer var stundtals bristfällig.
- Övergick från Prisma till enbart Supabase för att förenkla databaskopplingen.

---

## Tillgänglighet
Testat med:
- WAVE och Lighthouse
- Manuella granskningar av externa användare
- Skärmläsare

---

## Framtida möjligheter
En framtida utveckling kan inkludera:
- Administrationsgränssnitt med inlogg
- Hantering av anmälningar direkt i systemet

# Bokning för svenska dansskolor
Ett projekt med syfte att hjälpa svenska dansskolor att ta emot bokningar. Webbappen är anpassad för småskaliga verksamheter med möjlighet att:
- visa upp danskurser från allla dansskolor kopplade till verksamheten
- ta emot bokningar med inkluderad ålderskontroll baserat på kurskraven

---

## Innehåll
- [Om projektet](#Om-projektet) 
- [Funktionalitet](#Funktionalitet)
- [Tech](#Tech)
- [Användning](#Användning)
- [Arbetssätt](#Arbetssätt)
- [Sprintplan](#Sprintplan)
- [Lärdomar och färdigheter](#Lärdomar-och-färdigheter)
- [Svårigheter](#Svårigheter)
- [Tillgänglighet](#Tillgänglighet)
- [Framtida möjligheter](#Framtida-möjligheter)

--- 

## Om projektet
Detta är ett enskilt slutprojetkt där jag använder kunskaper inom Next.js, Typescript, Tailwind

---

## Funktionalitet
- Hero med CTA 
- Presentation av verksamheten
- Schema
- Kursanmälan
- Kontaktinfo, kontaktformulär och karta
- Vanliga frågor
- Footer med länkar till sociala medier, menylänkar och kontaktuppgifter
- Filtreringsmöjlighet
- Informaiton om olika dansstilar
- Presentation av lärare

---

## Tech
- [Next.js v.15 (App Router)](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Supabase](https://supabase.com/)
- [WAVE](https://wave.webaim.org/)
- [Tailwind](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- [React Hot Toast](https://react-hot-toast.com/)

---

## Användning
* Hemsida -> hero med CTA, presentation av verksamheten, schema, kursanmälan, kontaktinfo, kontaktformulär, karta och vanliga frågor
* Sida med texter om olika dansstilar
* Sida med presentation av lärare
* Sida med filtrering för att hitta danskurser

---

## Arbetssätt
* Enskilt arbete med inkludering i mindre grupp för att arbeta med SCRUM
* Trello för sprintplanering
* Feature branches
* PR

---

## Sprintplan

### Srint 1 - Planering och uppstart
* Tog beslut kring databashantering
* Skapade Next.js-projektet
* Skapade mappstruktur
* Skapade backlog i Trello
* Skapade grundutseendet baserat på tidigare arbete
* Lade in ny och befintlig exempeldata i databasen

### Srint 2 - Filterfunktionalitet 
* Kopplade ihop databasen med Next.js
* Skapade filterfunktionalitet
* Lade till informationssida om dansstilar
* Lade till funktionalitet för kontaktformulär
* Kontrollera tillgänglighetsanpassning

### Sprint 3 - Färdigställa MVP
* Justerade mappstruktur
* Uppdatera tillgänglighetsanpassning
* Publicerade till Vercel
* Tog in feedback från utomstående som testat manuellt
* Färdigställde uteseende och aktuell info för kurskort

### Spring 4 - Avslt och redovisning (extra kort)
* Uppdatering av responsivitet och  tillgänglighetsanpassning
* Förberedde och genomförde redovsining
* README.txt

---

## Lärdomar och färdigheter
* Client Actions
* Filtrering
* Supabase
- Responsivitet
- Tillänglighetsanpassning
- Databashantering
- Client components
- Server components
- Server Actions


### Svårigheter
* Tidsbegränsning, vilket medförde att administrationsdel med inlogg inte hanns med.
* Att alltid lyckas arbeta enligt de nyaste principerna, då dokumentation ibland är bristfällig.
* Då koppling med Prisam inte lyckades, valde jag bort Prisma och valde att använda enbart Supabase.

---

## Tillgänglighet
* Wave
* Lighthouse
* Manuell testning av utomstående
* Screen reader

---

## Framtida möjligheter
En önskad fortsttning på detta projekt skulle vara att lägga till en administrationsdel, så att de anmälningar som kommer in lätt kan hanteras via ett inlogg.
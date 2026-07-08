# Промпти для AI-генерації фото/відео — розділ «Realizované projekty»

Мета: для кожного з 10 проєктів у `src/data/projects.ts` зараз є лише 1 фото (stock-заглушка). Реальні фото від клієнта покривають лише 2 проєкти з 10. Цей файл — готові промпти, щоб догенерувати решту фото (до 5–10 на проєкт) та 1 відео на проєкт відповідно до вимог договору (п. 1.2) та `Grujic_Wireframes.md` (розділ 3).

**Головне правило: кожне фото має ілюструвати саме те, що написано в `workItems` цього проєкту** (розділ "Co jsme realizovali" на сторінці `/projekty/{slug}`) — не просто загальну тему категорії. Тому нижче під кожен проєкт — окремий промпт **на кожен пункт `workItems`** (1:1 відповідність тексту й фото), плюс 1-2 додаткові загальні кадри (hero/фінал) для заповнення галереї до 5-6 фото.

## ⚠️ Перед використанням — важливо

- **Це тимчасове рішення до отримання реальних фото від клієнта.** Видавати AI-згенеровані фото за реальні завершені проєкти конкретного клієнта — репутаційний і потенційно юридичний ризик (введення в оману споживача), якщо десь буде явно написано, що це фото саме цього об'єкта клієнта. Поточні назви проєктів прив'язані до районів Брно (Bystrc, Žabovřesky тощо), а не до конкретної адреси клієнта — тримай так і надалі, не додавай точні адреси/фото фасадів, які можна ідентифікувати, поки це не реальні фото.
- Коли клієнт нарешті надасть реальні фото — замінити цим самим списком (просто підставити реальні файли в `images: string[]` у `projects.ts`), а AI-фото прибрати.
- Не використовуй AI-генерацію для тих 2 проєктів, де вже є реальні фото від клієнта — там добери решту потрібних кадрів (до 5–10) з наданих 50 фото, а не генеруй.

## Технічні налаштування (спільні для всіх)

- **Формат прев'ю в галереї на сайті**: квадрат 1:1 (`aspect-square`) — генеруй з `--ar 1:1` або кадруй після.
- **Формат hero-фото на сторінці проєкту**: 16:9 (`aspect-video`).
- **Спільні ключові слова стилю** (додавай у кінець кожного промпту для візуальної єдності з наявними фото сайту):
  `photorealistic, natural daylight, professional construction photography, DSLR, 35mm lens, high detail, sharp focus, no text, no watermark, no logos`
- **Негативний промпт** (де інструмент підтримує): `cartoon, illustration, painting, blurry, low quality, distorted hands, extra fingers, text, watermark, logo, unrealistic`
- Інструменти: Midjourney / DALL·E 3 / Stable Diffusion (фото), Runway Gen-3 / Kling / Pika (відео, 5–10 сек кліпи).

---

## 1. Rodinný dům Brno-Bystrc (`house.webp`)
Наявне фото: готовий модерний двоповерховий будинок ззовні (відповідає підсумковому пункту 3 нижче).

**workItems → фото:**
1. *"Kompletní hrubá stavba rodinného domu"* → "Wide shot of a two-story house under construction, brick and concrete structural shell complete, roof trusses installed but not yet covered, scaffolding around, construction workers on site, daylight, photorealistic, construction photography, DSLR, 35mm lens, high detail, sharp focus, no text, no watermark, no logos"
2. *"Vnitřní rozvody a instalace"* → "Interior of an unfinished house during construction, electrician installing wiring and conduit boxes into exposed brick walls before plastering, exposed pipes for plumbing, daylight through window openings, photorealistic, construction photography, high detail"
3. *"Finální povrchové úpravy a předání"* → "Finished modern two-story family house exterior, dark wood cladding, large panoramic windows, manicured lawn, front door open as if ready for handover, warm daylight, photorealistic, professional real estate photography, high detail"

**Додаткові фото (2):**
4. "Bright open-plan living room interior of a newly finished modern house, minimalist furniture, wooden floor, natural light, photorealistic, interior photography, high detail"
5. "Front entrance close-up of a modern house, dark wood cladding, large glass door, landscaped path, warm evening light, photorealistic, DSLR, high detail"

**Відео (5–8 сек):** "Smooth cinematic sequence: starts on a house structural shell under construction with scaffolding, cross-dissolve transition to the same house fully finished with landscaping and warm exterior lighting at dusk, photorealistic, no text overlay"

---

## 2. Zateplení fasády Brno-Žabovřesky (`facade.webp`)
Наявне фото: готовий модерний фасад (темна плитка + дерев'яні ламелі) — відповідає пункту 2 нижче.

**workItems → фото:**
1. *"Zateplovací systém (ETICS) na obvodové zdi"* → "Construction worker installing EPS insulation boards on an exterior house wall, gluing panels with notched trowel adhesive, scaffolding, safety helmet, daylight, photorealistic, construction photography, DSLR, high detail, sharp focus, no text, no watermark, no logos"
2. *"Nová fasádní omítka a nátěr"* → "Construction worker applying and smoothing fresh gray render (omítka) on an insulated facade with a large trowel, followed by a painter rolling exterior facade paint, daylight, photorealistic, construction photography, high detail"
3. *"Osazení parapetů a oplechování"* → "Close-up of a worker installing a metal window sill flashing (parapet) on a house facade, sealant gun nearby, precise fitting against insulation render, daylight, photorealistic, high detail, sharp focus"

**Додаткові фото (2):**
4. "Finished modern house facade corner detail, dark stone tile cladding meeting wood slat panels, evening ambient lighting, photorealistic, architectural photography, high detail"
5. "Scaffolding covering a residential building during facade renovation work, workers in safety vests, daylight, wide angle, photorealistic, construction photography, high detail"

**Відео (5–8 сек):** "Sequence showing a worker troweling insulation adhesive onto a facade panel, quick transition to the same facade finished with dark render and warm exterior lighting at dusk, photorealistic, no text overlay"

---

## 3. Rekonstrukce koupelny Brno-Královo Pole (`tiles.webp`)
Наявне фото: робітник кладе підлогову плитку — відповідає пункту 2 нижче.

**workItems → фото:**
1. *"Demontáž původní koupelny"* → "Old outdated bathroom partially demolished, worn cracked tiles being removed, exposed pipes and rough wall surface, debris on floor, dim work light, photorealistic, documentary construction photography, high detail, sharp focus, no text, no watermark, no logos"
2. *"Nové obklady a dlažba"* → "Construction worker's hands laying a large gray floor tile into fresh adhesive with a notched trowel, tile spacers visible, tools nearby, photorealistic, construction photography, high detail"
3. *"Výměna sanity a rozvodů vody"* → "Plumber installing a modern wall-hung toilet and washbasin with chrome fittings in a newly tiled bathroom, wrench and tools on the floor, daylight, photorealistic, high detail"

**Додаткові фото (2):**
4. "Fully renovated modern bathroom interior, gray large-format floor and wall tiles, walk-in shower with glass partition, white sanitary ware, bright lighting, photorealistic, interior photography, high detail"
5. "Close-up detail shot of neatly laid large-format gray floor tiles with straight grout lines, soft natural light, photorealistic, high detail, macro"

**Відео (5–8 сек):** "Construction worker's hands laying a large gray floor tile into fresh adhesive using a notched trowel, close-up, then smooth transition to a wide shot of the finished modern bathroom, photorealistic, natural lighting, no text overlay"

---

## 4. Podhledy a příčky – kancelář Brno-střed (`drywall.webp`)
Наявне фото: два робітники монтують гіпсокартонну перегородку — відповідає пункту 1 нижче.

**workItems → фото:**
1. *"Sádrokartonové příčky a podhledy"* → "Two construction workers assembling a metal-stud drywall partition wall in an office space, mounting gray gypsum boards, daylight through large windows, photorealistic, construction photography, DSLR, high detail, sharp focus, no text, no watermark, no logos"
2. *"Elektroinstalace v podhledu"* → "Electrician installing cables and recessed light fixture housings above an open suspended ceiling grid in an office, standing on a ladder, cable trays visible, daylight, photorealistic, construction photography, high detail"
3. *"Povrchová úprava a malba"* → "Painter applying white paint with a roller to a freshly finished drywall office wall, clean straight edges, daylight, photorealistic, high detail"

**Додаткові фото (2):**
4. "Finished modern office interior with white painted drywall partition walls, suspended ceiling, recessed lighting, minimalist office furniture, daylight, photorealistic, interior photography, high detail"
5. "Close-up of a finished drywall joint being sanded smooth, dust particles visible in light, hand holding sanding block, photorealistic, high detail"

**Відео (5–8 сек):** "Time-lapse style clip of two construction workers assembling a metal-stud drywall partition wall in an office space, mounting gray gypsum boards, daylight through large windows, photorealistic, no text overlay"

---

## 5. Zemní práce a základy Šlapanice (`earthworks.webp`)
Наявне фото: екскаватор копає траншею під фундамент — відповідає пункту 1 нижче.

**workItems → фото:**
1. *"Výkopové práce a základové pásy"* → "Wide shot of a yellow excavator digging a foundation trench at a construction site on a sunny day, soil being lifted and placed in a pile, warning cones around the trench, photorealistic, construction photography, DSLR, high detail, sharp focus, no text, no watermark, no logos"
2. *"Odvodnění pozemku"* → "Construction worker installing perforated drainage pipe wrapped in geotextile fabric along the perimeter of an excavated foundation trench, gravel bedding, daylight, photorealistic, construction photography, high detail"
3. *"Příprava pro betonáž"* → "Foundation trench prepared for concrete pour, wooden formwork boards and steel rebar reinforcement cage assembled and ready, daylight, photorealistic, high detail, sharp focus"

**Додаткові фото (2):**
4. "Aerial drone view of a construction site foundation excavation, rectangular trenches marked out, excavator parked nearby, green fields around, daylight, photorealistic, high detail"
5. "Wide establishing shot of a construction site with excavated foundation trenches and the wooden frame of a house beginning to rise in the background, daylight, photorealistic, high detail"

**Відео (5–8 сек):** "Wide shot of a yellow excavator digging a foundation trench at a construction site on a sunny day, soil being lifted and placed in a pile, realistic machinery motion, photorealistic, cinematic, no text overlay"

---

## 6. Demolice objektu Brno-Tuřany (`demolition.webp`)
Наявне фото: екскаватор зносить цегляну будівлю — відповідає пункту 1 нижче.

**workItems → фото:**
1. *"Demolice stávající stavby"* → "Excavator with hydraulic crusher attachment demolishing a section of an old brick building wall, dust and debris falling, daylight, photorealistic, construction photography, DSLR, high detail, dramatic, no text, no watermark, no logos"
2. *"Třídění a odvoz stavební sutě"* → "Construction workers in high-visibility vests and helmets sorting building rubble into separate piles (brick, concrete, metal) and loading debris into a large waste container with a small excavator, daylight, photorealistic, high detail"
3. *"Úklid a příprava pozemku"* → "Cleared and leveled construction site after building demolition, compacted gravel surface, safety fencing around perimeter, empty lot ready for new construction, daylight, photorealistic, wide angle, high detail"

**Додаткові фото (2):**
4. "Water suppression cannon spraying mist over a demolition site to control dust, excavator working in background, daylight, photorealistic, high detail"
5. "Safety fencing and warning signage around an active demolition construction site in a city, partially demolished brick building visible, daylight, photorealistic, high detail"

**Відео (5–8 сек):** "Excavator with hydraulic crusher attachment demolishing a section of an old brick building wall, dust rising, daylight, photorealistic, dramatic slow-motion feel, no text overlay"

---

## 7. Vodoinstalace – novostavba Modřice (`plumbing.webp`)
Наявне фото: сантехнік монтує мідні труби біля бойлера — відповідає пункту 1 нижче.

**workItems → фото:**
1. *"Kompletní rozvody vody a odpadů"* → "Plumber installing copper water supply pipes and gray plastic waste pipes along a wall in an unfinished new building, tools and pipe fittings on the floor, daylight, photorealistic, construction photography, DSLR, high detail, sharp focus, no text, no watermark, no logos"
2. *"Zapojení sanitárních zařízení"* → "Plumber connecting a modern washbasin and toilet to finished pipe connections in a newly built bathroom, wrench in hand, daylight, photorealistic, high detail"
3. *"Tlaková zkouška rozvodů"* → "Plumber checking a pressure gauge (manometer) connected to a newly installed pipe system during a pressure test, close-up of gauge and copper pipes, daylight, photorealistic, high detail, sharp focus"

**Додаткові фото (2):**
4. "Fully finished modern bathroom with all plumbing fixtures installed - walk-in shower, toilet, washbasin with chrome fittings, bright daylight, photorealistic, interior photography, high detail"
5. "Close-up macro shot of soldered copper pipe joints in a plumbing installation, shiny metal, photorealistic, high detail, sharp focus"

**Відео (5–8 сек):** "Close-up of a plumber's hands soldering a copper pipe joint with a small torch, blue flame and slight smoke, precise controlled motion, photorealistic, high detail, no text overlay"

---

## 8. Malby a nátěry – bytový dům Brno (`painting.webp`)
Наявне фото: чоловік валиком фарбує стіну в темно-синій колір — відповідає пункту 2 нижче.

**workItems → фото:**
1. *"Penetrace a vyrovnání povrchů"* → "Construction worker applying primer with a roller to a bare plastered wall, then smoothing a leveling filler compound with a wide putty knife, preparation before painting, daylight, photorealistic, construction photography, DSLR, high detail, sharp focus, no text, no watermark, no logos"
2. *"Malby interiérových prostor"* → "Man painting an interior wall deep navy blue with a paint roller, bright room with white walls and wooden floor, daylight, photorealistic, high detail"
3. *"Nátěry společných prostor"* → "Painter using a roller on an extension pole to paint a stairwell wall in a residential apartment building, common hallway, daylight, photorealistic, construction photography, high detail"

**Додаткові фото (2):**
4. "Wide shot of a freshly painted bright living room, one accent wall in deep navy blue, rest in white, minimalist furniture, natural daylight, photorealistic, interior photography, high detail"
5. "Close-up of a painter's hand using a small brush to cut a clean straight paint edge along a white window frame, precise technique, photorealistic, high detail, macro"

**Відео (5–8 сек):** "Smooth continuous shot of a painter's hand rolling deep blue paint onto a white interior wall with a paint roller, even coverage, natural daylight from a window, photorealistic, no text overlay"

---

## 9. Napínané stropy – byt Brno-Řečkovice (`ceiling.webp`)
Наявне фото: готова глянцева натяжна стеля з LED-підсвіткою — відповідає пункту 3 нижче.

**workItems → фото:**
1. *"Montáž napínaného stropu"* → "Construction worker installing a stretch ceiling membrane using a hot air gun, standing on a ladder, film being heated and pulled taut into an aluminum perimeter track, photorealistic, construction photography, DSLR, high detail, sharp focus, no text, no watermark, no logos"
2. *"Zabudované LED osvětlení"* → "Close-up of recessed LED spotlights embedded in a finished glossy stretch ceiling, warm light glowing, modern living room below, photorealistic, interior photography, high detail"
3. *"Finální úprava a předání"* → "Finished modern living room with glossy black stretch ceiling reflecting recessed LED lighting, cozy furniture, fireplace, evening ambiance, ready for handover, photorealistic, interior photography, high detail"

**Додаткові фото (2):**
4. "Close-up of a stretch ceiling perimeter track/profile being mounted along a wall edge before the membrane installation, photorealistic, high detail, sharp focus"
5. "Matte white stretch ceiling installed in a cozy modern bedroom, soft ambient lighting, minimalist furniture, photorealistic, interior photography, high detail"

**Відео (5–8 сек):** "Construction worker using a hot air gun to heat and stretch a ceiling membrane into an aluminum track, film becoming smooth and taut, close-up, then transition to the finished glossy ceiling with LED lights on, photorealistic, high detail, no text overlay"

---

## 10. Hydroizolace ploché střechy Brno-Líšeň (`foil.webp`)
Наявне фото: робітник зварює гідроізоляційну мембрану на плоскому даху — відповідає пункту 1 нижче.

**workItems → фото:**
1. *"Hydroizolační fólie na ploché střeše"* → "Construction worker heat-welding a seam between two sheets of gray waterproofing membrane on a flat roof with a hot air welding tool, city skyline in background, daylight, photorealistic, construction photography, DSLR, high detail, sharp focus, no text, no watermark, no logos"
2. *"Ošetření prostupů a detailů"* → "Close-up of a worker carefully sealing a waterproofing membrane detail around a roof pipe penetration and drain outlet, precise hand work with a heat gun, photorealistic, high detail, macro"
3. *"Kontrola vodotěsnosti"* → "Construction worker inspecting a finished flat roof surface after a water-tightness test, checking membrane seams and drain outlets, clipboard in hand, daylight, photorealistic, high detail"

**Додаткові фото (2):**
4. "Aerial drone view of a finished flat roof with gray waterproofing membrane, roof drains and parapet edges visible, city skyline in background, daylight, photorealistic, high detail"
5. "Finished flat roof edge with metal parapet flashing and membrane termination detail, city buildings in background, daylight, photorealistic, high detail"

**Відео (5–8 сек):** "Construction worker heat-welding a seam between two sheets of gray roofing membrane with a hot air welding tool, slight steam/smoke rising, flat rooftop with city skyline in background, photorealistic, no text overlay"

---

## Після генерації

1. Конвертувати згенеровані фото у WebP (як решта `public/images/*.webp`), оптимізувати розмір.
2. Оновити `src/data/projects.ts`: замінити `image: "..."` на `images: ["...", "...", ...]` (масив) для кожного проєкту, додати `video: "/videos/{slug}.mp4"` (чи webm).
3. `ProjectPage.tsx` вже підтримує масив фото в галереї та умовний рендер відео-блоку — треба буде трохи доробити компонент під масив (зараз там лише 1 фото в галереї), скажи коли будуть файли — доопрацюю.

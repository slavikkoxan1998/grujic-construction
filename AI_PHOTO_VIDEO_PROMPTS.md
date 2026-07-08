# Промпти для AI-генерації фото/відео — розділ «Реалizované projekty»

Мета: для кожного з 10 проєктів у `src/data/projects.ts` зараз є лише 1 фото (stock-заглушка). Реальні фото від клієнта покривають лише 2 проєкти з 10. Цей файл — готові промпти, щоб догенерувати решту фото (до 5–10 на проєкт) та 1 відео на проєкт відповідно до вимог договору (п. 1.2) та `Grujic_Wireframes.md` (розділ 3).

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
Модерний двоповерховий будинок, велике панорамне скління, темне дерев'яне оздоблення, акуратний газон.

**Додаткові фото (4–6):**
1. "Front entrance close-up of a modern two-story house, dark wood cladding, large glass door, warm evening light, landscaped path leading to entrance, photorealistic, natural daylight, professional construction photography, DSLR, 35mm lens, high detail, sharp focus, no text, no watermark, no logos"
2. "Side view of modern family house exterior, large panoramic windows, manicured lawn, driveway with gravel, blue sky, wide angle, photorealistic, professional construction photography, DSLR, high detail"
3. "Backyard terrace of a modern house, wooden deck, outdoor seating area, glass railing, garden in background, golden hour lighting, photorealistic, DSLR photo, high detail"
4. "Aerial drone view of a modern single-family house with flat roof, green lawn, driveway, suburban neighborhood in Central Europe, daylight, photorealistic, high detail, no text"
5. "Bright open-plan living room interior of a newly built modern house, large windows, minimalist furniture, wooden floor, natural light, photorealistic, interior photography, high detail"
6. "Garage and driveway of a modern house, dark gray garage door, paved path, small ornamental garden, daylight, photorealistic, DSLR, high detail"

**Відео (1, 5–8 сек):** "Slow drone flyover approaching a modern two-story family house with panoramic windows and dark wood facade, descending toward the front entrance, golden hour lighting, cinematic, photorealistic, smooth camera motion, no text overlay"

---

## 2. Zateplení fasády Brno-Žabovřesky (`facade.webp`)
Модерний фасад — темна керамограніт/камінь плитка + дерев'яні ламелі, підсвітка.

**Додаткові фото (4–6):**
1. "Construction worker installing exterior wall insulation boards (EPS/mineral wool) on a house facade, scaffolding, safety helmet, daylight, photorealistic, construction photography, DSLR, high detail"
2. "Close-up of hands applying adhesive mortar and installing insulation panel on building facade, trowel with notched edge, gray render, photorealistic, high detail, sharp focus"
3. "Split-view style photo of a house facade mid-renovation, half showing old plain wall, half showing new insulated facade with modern dark cladding, daylight, photorealistic, high detail"
4. "Finished modern house facade corner detail, dark stone tile cladding meeting wood slat panels, evening ambient lighting, photorealistic, architectural photography, high detail"
5. "Scaffolding covering a residential building during facade renovation work, workers in safety vests, daylight, wide angle, photorealistic, construction photography, high detail"

**Відео (1, 5–8 сек):** "Smooth cinematic pan across a finished modern house facade with dark stone cladding and wood slat accents, warm exterior lighting turning on at dusk, photorealistic, no text overlay"

---

## 3. Rekonstrukce koupelny Brno-Královo Pole (`tiles.webp`)
Робітник кладе підлогову плитку, процес укладання.

**Додаткові фото (4–6):**
1. "Fully renovated modern bathroom interior, gray large-format floor and wall tiles, walk-in shower with glass partition, white sanitary ware, bright lighting, photorealistic, interior photography, high detail"
2. "Construction worker grouting bathroom wall tiles with a rubber float, close-up of hands, gray tile joints, photorealistic, high detail, sharp focus"
3. "Before-renovation photo of an old outdated bathroom with worn tiles, partially demolished, exposed pipes, dim lighting, photorealistic, documentary construction photography"
4. "Plumber installing a modern wall-hung toilet and washbasin in a newly tiled bathroom, tools nearby, daylight, photorealistic, high detail"
5. "Close-up detail shot of neatly laid large-format gray floor tiles with straight grout lines, soft natural light, photorealistic, high detail, macro"

**Відео (1, 5–8 сек):** "Construction worker's hands laying a large gray floor tile into fresh adhesive using a notched trowel, close-up, then smooth transition to a wide shot of the finished modern bathroom, photorealistic, natural lighting, no text overlay"

---

## 4. Podhledy a příčky – kancelář Brno-střed (`drywall.webp`)
Два робітники монтують гіпсокартонну перегородку в офісі.

**Додаткові фото (4–6):**
1. "Finished modern office interior with white painted drywall partition walls, suspended ceiling, recessed lighting, minimalist office furniture, daylight, photorealistic, interior photography, high detail"
2. "Construction worker installing a suspended ceiling grid system in an office space, ladder, daylight through windows, photorealistic, construction photography, high detail"
3. "Close-up of a worker's hands using a drill to fasten a drywall panel to a metal stud frame, safety gloves, photorealistic, high detail, sharp focus"
4. "Close-up of a finished drywall joint being sanded smooth, dust particles visible in light, hand holding sanding block, photorealistic, high detail"
5. "Wide shot of an open-plan office space mid-renovation, partial drywall partitions, exposed ceiling with cable trays, construction materials stacked, daylight, photorealistic, construction photography"

**Відео (1, 5–8 сек):** "Time-lapse style clip of two construction workers assembling a metal-stud drywall partition wall in an office space, mounting gray gypsum boards, daylight through large windows, photorealistic, no text overlay"

---

## 5. Zemní práce a základy Šlapanice (`earthworks.webp`)
Екскаватор копає траншею під фундамент, будівельний майданчик.

**Додаткові фото (4–6):**
1. "Aerial drone view of a construction site foundation excavation, rectangular trenches marked out, excavator parked nearby, green fields around, daylight, photorealistic, high detail"
2. "Construction worker using a laser level and tripod to check foundation trench depth, excavator in background, daylight, photorealistic, construction photography, high detail"
3. "Freshly poured concrete foundation strip footings in an excavated trench, rebar visible, daylight, photorealistic, high detail, sharp focus"
4. "Dump truck delivering gravel to a construction site foundation area, excavator working nearby, blue sky, wide angle, photorealistic, construction photography"
5. "Wide establishing shot of a construction site with excavated foundation trenches and the wooden frame of a house beginning to rise in the background, daylight, photorealistic, high detail"

**Відео (1, 5–8 сек):** "Wide shot of a yellow excavator digging a foundation trench at a construction site on a sunny day, soil being lifted and placed in a pile, realistic machinery sounds implied, photorealistic, cinematic, no text overlay"

---

## 6. Demolice objektu Brno-Tuřany (`demolition.webp`)
Екскаватор зносить цегляну будівлю, робітники в СІЗ, водяна гармата проти пилу.

**Додаткові фото (4–6):**
1. "Close-up of an excavator hydraulic claw crushing a brick wall, dust and debris falling, daylight, photorealistic, construction photography, high detail, dramatic"
2. "Construction workers in high-visibility vests and helmets loading building rubble and debris into a large waste container, daylight, photorealistic, high detail"
3. "Cleared and leveled construction site after building demolition, gravel surface, safety fencing around perimeter, daylight, photorealistic, wide angle"
4. "Water suppression cannon spraying mist over a demolition site to control dust, excavator working in background, daylight, photorealistic, high detail"
5. "Safety fencing and warning signage around an active demolition construction site in a city, partially demolished brick building visible, daylight, photorealistic, high detail"

**Відео (1, 5–8 сек):** "Excavator with hydraulic crusher attachment demolishing a section of an old brick building wall, dust rising, daylight, photorealistic, dramatic slow-motion feel, no text overlay"

---

## 7. Vodoinstalace – novostavba Modřice (`plumbing.webp`)
Сантехнік монтує мідні труби біля бойлера у новобудові.

**Додаткові фото (4–6):**
1. "Fully finished modern bathroom with all plumbing fixtures installed - walk-in shower, toilet, washbasin with chrome fittings, bright daylight, photorealistic, interior photography, high detail"
2. "Close-up macro shot of soldered copper pipe joints in a plumbing installation, shiny metal, photorealistic, high detail, sharp focus"
3. "Plumber testing water pressure on a newly installed pipe system, pressure gauge visible, daylight, photorealistic, construction photography, high detail"
4. "Underfloor heating pipe installation in a new building, orange PEX pipes laid in a spiral pattern on insulation boards before concrete pour, photorealistic, high detail, wide angle"
5. "Plumber connecting pipes under a modern kitchen sink in a newly built apartment, tools on the floor, daylight, photorealistic, high detail"

**Відео (1, 5–8 сек):** "Close-up of a plumber's hands soldering a copper pipe joint with a small torch, blue flame and slight smoke, precise controlled motion, photorealistic, high detail, no text overlay"

---

## 8. Malby a nátěry – bytový dům Brno (`painting.webp`)
Чоловік валиком фарбує стіну в темно-синій колір, світла кімната.

**Додаткові фото (4–6):**
1. "Wide shot of a freshly painted bright living room, one accent wall in deep navy blue, rest in white, minimalist furniture, natural daylight, photorealistic, interior photography, high detail"
2. "Close-up of a painter's hand using a small brush to cut a clean straight paint edge along a white window frame, precise technique, photorealistic, high detail, macro"
3. "Painter using a roller on an extension pole to paint a high stairwell wall in a residential building, daylight, photorealistic, construction photography, high detail"
4. "Before and after style photo of a wall - half showing old worn paint with cracks, half showing fresh smooth white paint, photorealistic, high detail"
5. "Common hallway of an apartment building freshly repainted in light gray, clean lines, natural light from windows, photorealistic, interior photography, high detail"

**Відео (1, 5–8 сек):** "Smooth continuous shot of a painter's hand rolling deep blue paint onto a white interior wall with a paint roller, even coverage, natural daylight from a window, photorealistic, no text overlay"

---

## 9. Napínané stropy – byt Brno-Řečkovice (`ceiling.webp`)
Глянцева натяжна стеля у вітальні з каміном, вбудоване LED-підсвічування.

**Додаткові фото (4–6):**
1. "Construction worker installing a stretch ceiling membrane using a hot air gun, working near the ceiling on a ladder, film being heated and pulled taut, photorealistic, construction photography, high detail"
2. "Close-up of a stretch ceiling perimeter track/profile being mounted along a wall edge before the membrane installation, photorealistic, high detail, sharp focus"
3. "Finished glossy black stretch ceiling in a modern living room reflecting recessed LED lighting, different angle than existing photo, evening ambiance, photorealistic, interior photography, high detail"
4. "Matte white stretch ceiling installed in a cozy modern bedroom, soft ambient lighting, minimalist furniture, photorealistic, interior photography, high detail"
5. "Bare concrete ceiling before renovation in an apartment room, exposed wiring, preparation stage, photorealistic, construction photography, high detail"

**Відео (1, 5–8 сек):** "Construction worker using a hot air gun to heat and stretch a ceiling membrane into an aluminum track, film becoming smooth and taut, close-up, photorealistic, high detail, no text overlay"

---

## 10. Hydroizolace ploché střechy Brno-Líšeň (`foil.webp`)
Робітник зварює гідроізоляційну мембрану на плоскому даху, міський краєвид.

**Додаткові фото (4–6):**
1. "Aerial drone view of a finished flat roof with gray waterproofing membrane, roof drains and parapet edges visible, city skyline in background, daylight, photorealistic, high detail"
2. "Close-up of a heat-welded seam between two waterproofing membrane sheets on a flat roof, hot air welding tool nearby, photorealistic, high detail, sharp focus"
3. "Construction worker unrolling a large roll of waterproofing membrane across a flat roof surface, daylight, photorealistic, construction photography, high detail"
4. "Close-up detail of a roof drain outlet installed in a waterproofing membrane, metal grate cover, photorealistic, high detail, macro"
5. "Finished flat roof edge with metal parapet flashing and membrane termination detail, city buildings in background, daylight, photorealistic, high detail"

**Відео (1, 5–8 сек):** "Construction worker heat-welding a seam between two sheets of gray roofing membrane with a hot air welding tool, slight steam/smoke rising, flat rooftop with city skyline in background, photorealistic, no text overlay"

---

## Після генерації

1. Конвертувати згенеровані фото у WebP (як решта `public/images/*.webp`), оптимізувати розмір.
2. Оновити `src/data/projects.ts`: замінити `image: "..."` на `images: ["...", "...", ...]` (масив) для кожного проєкту, додати `video: "/videos/{slug}.mp4"` (чи webm).
3. `ProjectPage.tsx` вже підтримує масив фото в галереї та умовний рендер відео-блоку — треба буде трохи доробити компонент під масив (зараз там лише 1 фото в галереї), скажи коли будуть файли — доопрацюю.

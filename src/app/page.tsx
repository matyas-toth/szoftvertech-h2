export default function Home() {
  const groupMembers = [
    { name: "TÓTH MÁTYÁS", code: "OQH5NH", email: "matyastoth.mail@gmail.com" },
    { name: "VAY DOMINIKA", code: "VM3DIR", email: "vaydominika@gmail.com" },
    { name: "ARDON MILÁN", code: "E00XC3", email: "ardon.milan1@gmail.com" },
    { name: "KOVÁCS ATTILA MARCELL", code: "SEGUV3", email: "kovacsmarci03@gmail.com" },
    { name: "GOMBKÖTŐ ÁBEL MARCELL", code: "C67VWA", email: "gmbkt09@gmail.com" },
  ];

  const tableOfContents = [
    { number: "1.", title: "Bevezetés", id: "bevezetes" },
    { number: "2.", title: "Az alkalmazás helye", id: "alkalmazashelye" },
    { number: "2.1.", title: "Üzleti lehetőségek", id: "uzletilehetosegek" },
    { number: "2.2.", title: "A probléma megfogalmazása", id: "problema" },
    { number: "2.3.", title: "A termék helye", id: "termekhelye" },
    { number: "3.", title: "Érintettek és felhasználók", id: "erintettekesfelhasznalok" },
    { number: "3.1.", title: "Az érintettek összefoglalása", id: "erintettekosszefoglalasa" },
    { number: "3.2.", title: "Az felhasználók összefoglalása", id: "felhasznalokosszefoglalasa" },
    { number: "3.3.", title: "Felhasználói környezet", id: "felhasznaloikornyezet" },
    { number: "3.4.", title: "Illetékesek adatai", id: "illetekesekadatai" },
    { number: "3.5.", title: "Felhasználók adatai", id: "felhasznalokadatai" },
    { number: "4.", title: "A végtermék áttekintése", id: "vegtermekattekintes" },
    { number: "4.1.", title: "A termék kapcsolatai", id: "termekkapcsolatai" },
    { number: "4.2.", title: "A termék használatának előnyei", id: "termekhasznalatanelonyei" },
    { number: "4.3.", title: "Feltételezések és függőségek", id: "feltetelezesekesfuggosegek" },
    { number: "4.4.", title: "Költségbecslés", id: "koltsegbecsles" },
    { number: "4.5.", title: "Installáció", id: "installacio" },
    { number: "5.", title: "A végtermék jellemzői, biztosított szolgáltatások", id: "vegtermekjellemzoi" },
    { number: "6.", title: "Korlátozások", id: "korlatozasok" },
    { number: "7.", title: "Minőségi elvárások", id: "minosegielvarasok" },
    { number: "8.", title: "Dokumentációval kapcsolatos követelmények", id: "dokumentaciokovetelmenyek" },
    { number: "9.", title: "Kockázat lista", id: "kockazatlista" },
    { number: "10.", title: "Szótár", id: "szotar" },
  ];

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="p-4">
          <h1 className="text-xl">Csoport neve: Alt+F4 Alakulat - Az Azonnali Kilépők</h1>
          <h1 className="text-xl">Feladat sorszáma: 2</h1>
          <h1 className="text-xl">Feladat címe: H1</h1>
        </div>
        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 className="text-5xl mb-8 py-8">Vízió dokumentum</h1>
          <h4 className="text-l">Gyakorlatvezető</h4>
          <h3 className="text-3xl mb-8">DR. ÁRVAI LÁSZLÓ LAJOS</h3>
          <h3 className="text-2xl mb-8">Csoporttagok:</h3>
          <table className="mb-16 border-collapse">
            <tbody>
              {groupMembers.map((member, index) => (
                <tr key={index}>
                  <td className="border border-black p-4 text-lg">{member.name}</td>
                  <td className="border border-black p-4 text-lg">{member.code}</td>
                  <td className="border border-black p-4 text-lg">{member.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 text-right mb-8">
          <h2>BEADÁS DÁTUMA</h2>
          <h2>2024. október 10.</h2>
        </div>

        <div className="flex flex-col items-center justify-center mb-16">
          <h1 className="text-4xl mb-8">Tartalomjegyzék</h1>
          <table className="mb-16 border-collapse underline text-blue-600 hover:text-blue-900 transition-colors duration-200 border-black">
            <tbody>
              {tableOfContents.map((item, index) => (
                <tr key={index}>
                  <td className="px-52 border-black">
                    <a href={`#${item.id}`} className="text-blue-600 hover:text-blue-900 transition-colors duration-200">
                      {item.number} {item.title}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 id="bevezetes" className="ml-8 text-xl font-bold text-sky-600">1. Bevezetés</h2>
        <h2 id="alkalmazashelye" className="ml-8 text-xl font-bold text-sky-600">2. Az alkalmazás helye</h2>
        <h2 id="uzletilehetosegek" className="ml-8 text-xl font-bold text-sky-600">2.1 Üzleti lehetőségek</h2>
        <h2 id="problema" className="ml-8 text-xl font-bold text-sky-600">2.2. A probléma megfogalmazása:</h2>
        <h2 id="termekhelye" className="ml-8 text-xl font-bold text-sky-600">2.3. A termék helye:</h2>
        <ul>
          <li className="pl-[5.3rem] p-6">Az új e-learning platform piaci pozíciójának meghatározása során fontos figyelembe venni az online oktatásban tapasztalható gyors változásokat és az innovációra irányuló növekvő igényeket. Az e-learning szektor dinamikus növekedése nemcsak a technológiai fejlődésnek köszönhető, hanem az oktatási paradigmaváltásnak is, amely az információs társadalom igényeihez igazodva egyre inkább a digitalizációra, valamint a tanulási folyamat testreszabhatóságára helyezi a hangsúlyt.</li>

          <li className="my-2 ml-8 font-bold indent-8 list-disc list-inside p-6">Piaci szereplők és versenyhelyzet:</li>
          <li className="pl-[5.3rem]">
          ○ A globális e-learning piac nagyobb szereplői – például a Coursera, Udemy, edX és Khan Academy – domináns jelenlétükkel határozzák meg az iparág trendjeit. Ezek a platformok széleskörű tananyagválasztékkal rendelkeznek, azonban tipikusan aszinkron oktatási formákat alkalmaznak, amelyek előre rögzített, statikus tananyagokra épülnek. Az ilyen tananyagok jellemzően kevésbé reagálnak a tanulói interakciókra és az egyéni tanulási szükségletekre, ami a tanulók elköteleződésének csökkenéséhez vezethet. Ezzel szemben az új platform egyik különlegessége, hogy differenciált tanulási útvonalakat kínál, amelyek figyelembe veszik a tanulók eltérő képességeit, érdeklődési területeit és fejlődési ütemét.
          </li>
          <li className="pl-[5.3rem] pt-6">
          ○ Az oktatásban egyre nagyobb szerepet kap a komplexitásmenedzsment , amelynek lényege, hogy az oktatási rendszerek képesek legyenek dinamikusan alkalmazkodni a felhasználói igényekhez, valamint az új technológiai és pedagógiai trendekhez. A versenytársak közötti különbségek egyik meghatározó eleme az, hogy milyen mértékben képesek megfelelni a piaci réseken jelentkező specifikus igényeknek. Az új platform ebben a tekintetben egy niche-stratégiát alkalmaz, amely a kisebb, de nagy potenciállal rendelkező szegmensekre összpontosít, mint például a kis- és közepes oktatási intézmények, valamint a vállalati belső képzések piaca.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 list-disc list-inside p-6">Célcsoportok:</li>
          <li className="pl-[5.3rem]">
          ○ Az e-learning platform elsődleges célcsoportjai között szerepelnek a különböző korosztályú és képzettségű tanulók, az oktatók, valamint az oktatási intézmények és vállalatok. A diákok esetében a platform célja, hogy egy andragógiai megközelítés szerint építse fel a tananyagot, amely különösen a felnőttképzés területén bizonyul hatékonynak. Ez a módszer a tanulói autonómiára, a gyakorlati ismeretekre és az önirányított tanulásra helyezi a hangsúlyt, ezzel növelve az elkötelezettséget és a tanulási folyamat hatékonyságát.
          </li>
          <li className="pl-[5.3rem] pt-6">
          ○ Az oktatók számára a platform lehetőséget kínál arra, hogy metakognitív stratégiákat alkalmazzanak a tanítás során, amelyek révén nemcsak a tudás átadására koncentrálnak, hanem a tanulók tanulási képességeinek fejlesztésére is. Az ilyen típusú megközelítés különösen értékes a komplex és szakmai tartalmak esetében, ahol a tudás folyamatos frissítése és az egyénre szabott tanulási módszerek kialakítása kiemelkedő jelentőségű.
          </li>
          <li className="pl-[5.3rem] pt-6">
          ○ A vállalatok és oktatási intézmények számára a platform egyik legnagyobb előnye a skálázhatóság és a flexibilitás. A platform lehetőséget biztosít arra, hogy a cégek és iskolák saját tanulási környezetet hozzanak létre, ahol belső képzési anyagokat és egyedi tanterveket valósíthatnak meg. Ez különösen fontos a hibrid oktatási modellek esetében, ahol a távoktatás és a személyes jelenlét együttesen alkalmazott módszertanokban valósul meg. A platform alkalmas arra, hogy az oktatási folyamatot zökkenőmentesen támogassa mindkét környezetben.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 list-disc list-inside p-6">A platform piaci helyzete:</li>
          <li className="pl-[5.3rem]">
          ○ A platform sikeres piaci pozicionálása érdekében kiemelt figyelmet fordítunk a reszponzív dizájnra, amely a felhasználói élmény testre szabhatóságát biztosítja, és lehetővé teszi, hogy a tartalmak különböző eszközökön és kijelzőméreteken is jól működjenek. Az interaktív funkciók és a valós idejű visszajelzések beépítése segít abban, hogy a tanulók folyamatosan kapcsolatban maradjanak az oktatási tartalommal, és visszacsatolást kapjanak előrehaladásukról.
          </li>
          <li className="pl-[5.3rem] pt-6">
          ○ A platform különlegessége az adaptív tanulásban rejlik, amely egyre nagyobb figyelmet kap az oktatási technológiák területén. Az adaptív tanulási rendszerek képesek algoritmikus analízis segítségével követni a tanulók teljesítményét, és automatikusan módosítani a tananyagot annak érdekében, hogy az egyénre szabott oktatási útvonalat kínáljon. Ez különösen fontos a tanulási variabilitás kezelésében, ahol a diákok eltérő tempóban és módon sajátítják el a tananyagot.
          </li>
          <li className="pl-[5.3rem] pt-6">
          ○ A platform beépített analitikai dashboardjai révén az oktatók és az intézmények könnyedén nyomon követhetik a tanulók előrehaladását, valamint az oktatási program hatékonyságát. Ezek az eszközök nemcsak a tanulói teljesítmény mérésére szolgálnak, hanem lehetővé teszik a tananyagok optimalizálását és a pedagógiai módszerek finomhangolását is.
          </li>
          <li className="pl-[5.3rem] pt-6">
          ○ A blokklánc-technológia alkalmazása a tanulói eredmények és tanúsítványok hitelesítésére egy újabb innováció, amely biztosítja a tanulási eredmények átláthatóságát és csalásmentességét. A blokkláncon alapuló tanúsítványok lehetővé teszik, hogy a tanulók hitelesített, ellenőrizhető bizonyítványokat szerezzenek, amelyek világszerte elismertek. Ez a technológia hosszú távon hozzájárulhat ahhoz, hogy a tanulási eredmények megbízhatóak és transzparensek legyenek.
          </li>
          <li className="pl-[5.3rem] pt-6">
          ○ A fenntartható piaci részesedés elérése érdekében a platform folyamatos fejlesztéseket és innovációkat vezet be, hogy lépést tartson a piaci elvárásokkal és a technológiai fejlődéssel. A platform moduláris felépítése lehetőséget nyújt arra, hogy új funkciókat és szolgáltatásokat integráljunk anélkül, hogy a felhasználói élményben zavar keletkezne.
          </li>
          <li className="pl-[5.3rem] pt-6">
          ○ Az új platform nemcsak tartalmi szempontból innovatív, hanem technológiai értelemben is élvonalbeli megoldásokat alkalmaz. A felhőalapú infrastruktúra lehetővé teszi, hogy a platform könnyedén skálázható legyen, függetlenül a felhasználók számától és az általuk igényelt erőforrásoktól. A felhőalapú technológiák segítségével a platform mindig elérhető, magas rendelkezésre állású és biztonságos hozzáférést biztosít, amely különösen fontos a globális felhasználók számára.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 list-disc list-inside p-6">Piaci versenyelőny: Személyre szabott oktatás és gamifikáció:</li>
          <li className="pl-[5.3rem]">
          ○ A platform egyik legnagyobb versenyelőnye, hogy képes integrálni a személyre szabott tanulási tapasztalatokat a felhasználói profilokhoz és tanulási előzményekhez igazodva. A platform intelligens rendszerei – mint például a gépi tanulás (machine learning) és a mesterséges intelligencia (AI) – segítségével a felhasználók személyre szabott tanulási javaslatokat kapnak, amelyek figyelembe veszik a korábbi eredményeiket, érdeklődési területeiket és az általuk követett tanulási útvonalat. Ez a fajta adaptív tanulás segít a tanulóknak abban, hogy hatékonyabban haladjanak előre, mivel a rendszer automatikusan az ő egyéni igényeikhez igazítja a tananyagot, a nehézségi szintet és az ismétlések gyakoriságát.
          </li>
          <li className="pl-[5.3rem] pt-6">
          ○ A platform további kiemelkedő pozitívuma a gamifikáció alkalmazása, amely az oktatás élményalapú megközelítését támogatja, növelve a tanulók elkötelezettségét és motivációját. A gamifikációs elemek, mint például a pontgyűjtés, szintek elérése, jelvények megszerzése, valamint a versenyhelyzetek kialakítása, lehetővé teszik a tanulók számára, hogy az oktatási folyamatot játékos formában, élményszerűen éljék meg. Ez a megközelítés nem csupán szórakoztatóbbá teszi a tanulást, hanem elősegíti a folyamatos fejlődést, visszajelzéseket és elismeréseket adva a tanulóknak, ami tovább ösztönzi őket a kitartásra és a teljesítményük javítására.
          </li>
          <li className="pl-[5.3rem] pt-6">
          ○ Összességében az új e-learning platform egy olyan kollaboratív tanulási környezetet kíván megteremteni, amely egyszerre biztosítja a személyre szabott, interaktív tanulási élményt, és képes alkalmazkodni a piaci trendekhez. Az olyan fejlett technológiai megoldások, mint a mesterséges intelligencia alapú adaptív tanulás, a skálázható infrastruktúra és a reszponzív felhasználói felület révén a platform a globális piac egyre növekvő szegmenseit célozza meg. A felhasználói visszajelzések beépítése és a folyamatos tartalomfrissítési lehetőség biztosítja, hogy a platform hosszú távon is fenntartható versenyelőnyt élvezzen.
          </li>
        </ul>

        <h2 className="ml-8 text-xl font-bold text-sky-600 pt-6">3. Érintettek és felhasználók</h2>
        <h2 className="ml-8 text-xl font-bold text-sky-600 pt-6">3.1 Az érintettek összefoglalása</h2>
        <h2 className="ml-8 text-xl font-bold text-sky-600 pt-6">3.2 Az felhasználók összefoglalása</h2>
        <h2 className="ml-8 text-xl font-bold text-sky-600 pt-6">3.3. Felhasználói környezet:</h2>
        <h2 className="ml-8 text-xl font-bold text-sky-600 pt-6">3.4 Illetékesek adatai</h2>
        <h2 className="ml-8 text-xl font-bold text-sky-600 pt-6">3.5 Felhasználók adatai</h2>
        <h2 className="ml-8 text-xl font-bold text-sky-600 pt-6">4. A végtermék áttekintése</h2>
        <h2 className="ml-8 text-xl font-bold text-sky-600 pt-6">4.1 A termék kapcsolatai</h2>
        <h2 className="ml-8 text-xl font-bold text-sky-600 pt-6">4.2. A termék használatának előnyei:</h2>
        <h2 className="ml-8 text-xl font-bold text-sky-600 pt-6">4.3. Feltételezések és függőségek:</h2>
        <ul className="my-2 ml-8">
          <li className="my-2 ml-8 list-disc list-inside font-bold pt-6">Feltételezések:</li>
          <li className="my-2 ml-8 font-bold indent-8 pt-6"> ○ Folyamatos és stabil internetkapcsolat:</li>
          <li className="pl-[4.8rem]">
            A platform zökkenőmentes használatának elengedhetetlen feltétele a
            felhasználók gyors és megbízható internetkapcsolata, amely garantálja a
            valós idejű adatátvitelt, valamint a multimédiás tartalmak (például
            interaktív videók és tesztek) zavartalan lejátszását.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 pt-6"> ○ Modern eszközök és frissített szoftverek:</li>
          <li className="pl-[4.8rem]">
         A felhasználók számára rendelkezésre kell állniuk olyan eszközöknek
        (okostelefonok, táblagépek, asztali számítógépek), amelyek
        kompatibilisek a legújabb technológiai szabványokkal. Továbbá
        elvárás, hogy a legfrissebb böngészők és operációs rendszerek
        biztosítsák a platform maximális teljesítményét.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 pt-6"> ○ Digitális kompetenciák megléte:</li>
          <li className="pl-[4.8rem]">
        A projekt alapvetése, hogy a felhasználók rendelkeznek alapvető
        digitális készségekkel, beleértve az online tanulási felületek
        használatának ismeretét. Ez minimalizálja a tanulási görbét, így a
        platform használata egyszerűen integrálódik a felhasználói
        mindennapokba.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 pt-6"> ○ Fejlett technológiai stack és források elérhetősége:</li>
          <li className="pl-[4.8rem]">
        A projekt során elengedhetetlen a csúcstechnológiát képviselő eszköztár
        (például felhő alapú infrastruktúra, modern keretrendszerek)
        rendelkezésre állása, amely garantálja a hatékony és skálázható
        működést.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 pt-6"> ○ Magas szintű szakértelem a csapatban:</li>
          <li className="pl-[4.8rem]">
        A fejlesztőcsapat tagjainak kiemelkedő szakértelemmel és specializált
        tudással kell rendelkezniük a projekt sikeres megvalósításához. Ez
        különösen igaz a technológiai innovációk és a komplex fejlesztési
        kihívások kezelése terén.
          </li>

          <li className="my-2 ml-8 list-disc list-inside font-bold pt-6">Függőségek:</li>
          <li className="my-2 ml-8 font-bold indent-8 pt-6"> ○ Harmadik fél szolgáltatások integritása:</li>
          <li className="pl-[4.8rem]">
          A projekt jelentős mértékben támaszkodik külső szolgáltatók által
        biztosított rendszerekre, mint például a fizetési átjárók (pl. Stripe,
        PayPal) és felhőszolgáltatások (AWS, Google Cloud). Ezek megbízhatósága
        kritikus, mivel közvetlen hatással vannak a platform működésére és a
        felhasználói élmény minőségére.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 pt-6"> ○ Szabályozási és adatvédelmi megfelelés:</li>
          <li className="pl-[4.8rem]">
          A projekt során szigorúan be kell tartani az aktuális jogszabályi
        előírásokat és adatvédelmi szabályokat (például GDPR), hogy garantálni
        lehessen a felhasználói adatok biztonságos kezelését és tárolását.
        Ezen szabályozások megsértése komoly következményekkel járhat.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 pt-6"> ○ Innovációs és technológiai kihívások kezelése:</li>
          <li className="pl-[4.8rem]">
          A fejlesztés során felléphetnek előre nem látott technológiai akadályok,
        például új szabványok implementálása vagy rendszerszintű integrációk
        nehézségei. Ezen kihívások hatékony kezelése kritikus a projekt időbeni
        és költséghatékony kivitelezéséhez.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 pt-6"> ○ Szinergia a csapat tagjai között:</li>
          <li className="pl-[4.8rem]">
          A csapattagok közötti folyamatos és gördülékeny kommunikáció, illetve
        együttműködés elengedhetetlen ahhoz, hogy a projekt valamennyi
        résztvevője azonos ütemben haladjon, és elérjék a kitűzött
        mérföldköveket.
          </li>
        </ul>

        <h2 className="ml-8 text-xl font-bold text-sky-600 pt-6">4.4. Költségbecslés</h2>
        <h2 className="ml-8 text-xl font-bold text-sky-600 pt-6">4.5. Installáció</h2>
        <h2 className="ml-8 text-xl font-bold text-sky-600 pt-6">5. A végtermék jellemzői, biztosított szolgáltatások</h2>
        <h2 className="ml-8 text-xl font-bold text-sky-600 pt-6">6. Korlátozások</h2>
        <h2 className="ml-8 text-xl font-bold  text-sky-600 pt-6">7. Minőségi elvárások:</h2>
        <ul>
          <li className="my-2 ml-8 font-bold indent-8 list-disc list-inside pt-6">Felhasználó-központú, intuitív felület:</li>
          <li className="pl-[5.3rem] pt-6">
          A platformnak ultra-modern, felhasználóbarát felülettel kell rendelkeznie, amely garantálja a felhasználói élményt (UX) és a könnyű navigációt. A dizájn során kiemelt figyelmet kell fordítani az ergonómiára és az esztétikai összhangra, amely megteremti a vizuális harmóniát és a zökkenőmentes használatot.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 list-disc list-inside pt-6">Optimális oldal betöltési sebesség:</li>
          <li className="pl-[5.3rem] pt-6">
          A betöltési idők minimalizálása létfontosságú: az oldalak válaszidejének 3 másodpercen belül kell maradnia. Ez a sebesség biztosítja a felhasználók elkötelezettségét, és minimalizálja a lemorzsolódás kockázatát a várakozási idő miatt.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 list-disc list-inside pt-6">Optimális oldal betöltési sebesség:</li>
          <li className="pl-[5.3rem] pt-6">
          A felhasználói adatok védelme prioritás, amelyet csúcstechnológiás biztonsági megoldásokkal (SSL/TLS titkosítás, kétlépcsős hitelesítés) és az adatvédelem legszigorúbb előírásainak betartásával kell garantálni. Az adatbiztonság iránti bizalom növeli a felhasználói hűséget és a platform iránti elkötelezettséget.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 list-disc list-inside pt-6">Rugalmas skálázhatóság:</li>
          <li className="pl-[5.3rem] pt-6">
          A rendszernek képesnek kell lennie a dinamikusan növekvő felhasználói bázis kiszolgálására anélkül, hogy a teljesítmény romlana. A skálázhatóság kritikus ahhoz, hogy a platform fenntartható és hosszú távon is hatékony maradjon a növekvő igények mellett.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 list-disc list-inside pt-6">Folyamatos rendelkezésre állás és stabilitás:</li>
          <li className="pl-[5.3rem] pt-6">
          A platformnak kifogástalan megbízhatósággal kell rendelkeznie, minimális állásidővel és hibaaránnyal. A magas rendelkezésre állás kritériumai a felhasználók zavartalan tanulási élményét szolgálják.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 list-disc list-inside pt-6">Proaktív felhasználói élmény javítása:</li>
          <li className="pl-[5.3rem] pt-6">
          A felhasználói élményt (UX) folyamatosan fejleszteni kell, figyelembe véve a felhasználói visszajelzéseket és az új technológiai trendeket. Az iteratív javítások lehetővé teszik, hogy a platform mindig a legmagasabb színvonalon működjön.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 list-disc list-inside pt-6">Teljes körű tesztelési ciklusok:</li>
          <li className="pl-[5.3rem] pt-6">
          A fejlesztési folyamat minden szakaszában szigorú tesztelési protokollokat kell alkalmazni. Ez magában foglalja a funkcionális, teljesítmény-, biztonsági és terheléses teszteléseket, amelyek biztosítják a platform hibamentes működését.
          </li>
        </ul>

        <h2 className="ml-8 text-xl font-bold  text-sky-600 pt-6">8. Dokumentációkkal kapcsolatos követelmények:</h2>

        <h2 className="ml-8 text-xl font-bold text-sky-600 pt-6">9. Kockázat lista:</h2>
        <ul>
          <li className="my-2 ml-8 font-bold indent-8 list-disc list-inside pt-6">Technológiai kihívások és integrációs problémák: </li>
          <li className="pl-[5.3rem] font-bold pt-6">
          ○ Leírás: {" "}
          <span className="font-normal">
            A projekt során számos új technológiai megoldást alkalmazunk, ideértve a harmadik féltől származó API-kat, cloud szolgáltatásokat és különböző technológiai stack-eket (pl. frontend-backend integráció). Az integráció során felmerülhetnek kompatibilitási problémák, késleltetések, vagy hibák, amelyek akadályozzák a rendszer zavartalan működését.
          </span>
          </li>

          <li className="pl-[5.3rem] font-bold">
          ○ Kockázat mértéke: {" "}
          <span className="font-normal">
          Magas.
          </span>
          </li>

          <li className="pl-[5.3rem] font-bold">
          ○ Enyhítő intézkedés: {" "}
          <span className="font-normal">
          Részletes adatvédelmi irányelvek kidolgozása, jogi tanácsadás igénybevétele, valamint a felhasználói beleegyezések és adatkezelési eljárások auditálása.
          </span>
          </li>

          <li className="my-2 ml-8 font-bold indent-8 list-disc list-inside pt-6">Erőforrás- és kapacitáshiány: </li>
          <li className="pl-[5.3rem] font-bold pt-6">
          ○ Leírás: {" "}
          <span className="font-normal">
          A projekt sikeres megvalósításához szükséges erőforrások, mint a megfelelő mennyiségű és képzett fejlesztők, tervezők és projektmenedzserek rendelkezésre állása elengedhetetlen. Az alulbecsült emberi erőforrások vagy a túlterhelt csapatok kockázatot jelentenek a projekt késedelmeire és minőségi problémáira.
          </span>
          </li>

          <li className="pl-[5.3rem] font-bold">
          ○ Kockázat mértéke: {" "}
          <span className="font-normal">
          Magas.
          </span>
          </li>

          <li className="pl-[5.3rem] font-bold">
          ○ Enyhítő intézkedés: {" "}
          <span className="font-normal">
          Gondos erőforrás-tervezés, túlterhelés elkerülése, és outsourcing lehetőségének vizsgálata külső szakemberek bevonása érdekében.
          </span>
          </li>

          <li className="my-2 ml-8 font-bold indent-8 list-disc list-inside pt-6">Jogi és adatvédelmi szabályozásoknak való nem megfelelés:</li>
          <li className="pl-[5.3rem] font-bold pt-6">
          ○ Leírás: {" "}
          <span className="font-normal">
          A platform a felhasználói adatokat kezeli, így kiemelten fontos a jogszabályoknak való megfelelés, különösen a GDPR és egyéb adatvédelmi rendeletek tekintetében. A nem megfelelő adatkezelés komoly pénzbírságokat és reputációs veszteségeket eredményezhet.
          </span>
          </li>

          <li className="pl-[5.3rem] font-bold">
          ○ Kockázat mértéke: {" "}
          <span className="font-normal">
          Magas.
          </span>
          </li>

          <li className="pl-[5.3rem] font-bold">
          ○ Enyhítő intézkedés: {" "}
          <span className="font-normal">
          Részletes adatvédelmi irányelvek kidolgozása, jogi tanácsadás igénybevétele, valamint a felhasználói beleegyezések és adatkezelési eljárások auditálása.
          </span>
          </li>

          <li className="my-2 ml-8 font-bold indent-8 list-disc list-inside pt-6">Biztonsági fenyegetések és adatlopás:</li>
          <li className="pl-[5.3rem] font-bold pt-6">
          ○ Leírás: {" "}
          <span className="font-normal">
          Mivel a platform pénzügyi tranzakciókat is kezel, így különösen ki van téve a kibertámadásoknak, mint például adathalászat, DDoS támadások vagy rendszervisszaélések. Az ilyen jellegű támadások adatszivárgáshoz, pénzügyi veszteségekhez, illetve a felhasználók bizalmának elvesztéséhez vezethetnek.
          </span>
          </li>

          <li className="pl-[5.3rem] font-bold">
          ○ Kockázat mértéke: {" "}
          <span className="font-normal">
          Magas.
          </span>
          </li>

          <li className="pl-[5.3rem] font-bold">
          ○ Enyhítő intézkedés: {" "}
          <span className="font-normal">
          Erős biztonsági protokollok alkalmazása (pl. SSL/TLS titkosítás, kétlépcsős azonosítás), rendszeres biztonsági auditok és penetration tesztek végzése, valamint a legújabb védelmi technológiák bevezetése.
          </span>
          </li>

          <li className="my-2 ml-8 font-bold indent-8 list-disc list-inside pt-6">Felhasználói elégedetlenség:</li>
          <li className="pl-[5.3rem] font-bold pt-6">
          ○ Leírás: {" "}
          <span className="font-normal">
          A felhasználók részéről jelentkező elégedetlenség – legyen szó az interfész bonyolultságáról, lassú betöltési időkről, vagy hiányzó funkciókról – komoly hatással lehet a platform sikerére és növekedési ütemére. Az elégedetlen felhasználók negatív visszajelzései csökkenthetik az új felhasználók regisztrációját, illetve az aktív felhasználói bázis elpártolását okozhatják.
          </span>
          </li>

          <li className="pl-[5.3rem] font-bold">
          ○ Kockázat mértéke: {" "}
          <span className="font-normal">
          Közepes.
          </span>
          </li>

          <li className="pl-[5.3rem] font-bold">
          ○ Enyhítő intézkedés: {" "}
          <span className="font-normal">
          Rendszeres felhasználói felmérések készítése, visszajelzések gyűjtése és azok gyors implementálása a felhasználói élmény folyamatos javítása érdekében. Gamifikációs elemek és interakciós lehetőségek növelése a felhasználói elkötelezettség érdekében.
          </span>
          </li>

          <li className="my-2 ml-8 font-bold indent-8 list-disc list-inside pt-6">Projekt késedelmek:</li>
          <li className="pl-[5.3rem] font-bold pt-6">
          ○ Leírás: {" "}
          <span className="font-normal">
          A projekt mérföldkövei közötti csúszások kockázata folyamatosan fennáll, különösen, ha az időbeli tervezés nem megfelelő. Ezek a késedelmek további erőforrásokat igényelnek és negatív hatással lehetnek a költségvetésre is.
          </span>
          </li>

          <li className="pl-[5.3rem] font-bold">
          ○ Kockázat mértéke: {" "}
          <span className="font-normal">
          Közepes.
          </span>
          </li>

          <li className="pl-[5.3rem] font-bold">
          ○ Enyhítő intézkedés: {" "}
          <span className="font-normal">
          Rendszeres állapotjelentések készítése, projektmenedzsment eszközök használata (pl. Jira, Trello), és a rugalmasság biztosítása az ütemezésben.
          </span>
          </li>

          
          <li className="my-2 ml-8 font-bold indent-8 list-disc list-inside pt-6">Pénzügyi instabilitás:</li>
          <li className="pl-[5.3rem] font-bold pt-6">
          ○ Leírás: {" "}
          <span className="font-normal">
          A projekt költségvetésének alulbecslése, illetve a váratlan kiadások komoly problémákat okozhatnak a projekt későbbi szakaszaiban. Pénzügyi instabilitás miatt megszakadhat a fejlesztés, vagy csökkenthetik a minőségi követelményeket.
          </span>
          </li>

          <li className="pl-[5.3rem] font-bold">
          ○ Kockázat mértéke: {" "}
          <span className="font-normal">
          Magas.
          </span>
          </li>

          <li className="pl-[5.3rem] font-bold">
          ○ Enyhítő intézkedés: {" "}
          <span className="font-normal">
          Részletes költségvetési tervezés és pénzügyi kontroll bevezetése, tartalék források biztosítása a váratlan kiadásokra.
          </span>
          </li>

          
          <li className="my-2 ml-8 font-bold indent-8 list-disc list-inside pt-6">Új technológiai trendek vagy változások figyelmen kívül hagyása:</li>
          <li className="pl-[5.3rem] font-bold pt-6">
          ○ Leírás: {" "}
          <span className="font-normal">
          Az iparág gyorsan fejlődik, így a legújabb technológiai trendek figyelmen kívül hagyása lemaradáshoz vezethet a versenytársakhoz képest. Ez különösen igaz a felhő alapú technológiák, a mesterséges intelligencia, valamint az adattudomány terén.
          </span>
          </li>

          <li className="pl-[5.3rem] font-bold">
          ○ Kockázat mértéke: {" "}
          <span className="font-normal">
          Alacsony-közepes.
          </span>
          </li>

          <li className="pl-[5.3rem] font-bold">
          ○ Enyhítő intézkedés: {" "}
          <span className="font-normal">
          Folyamatos piac- és technológiai trendek monitorozása, valamint a csapat rendszeres képzése a legújabb eszközökről és technikákról.
          </span>
          </li>
        </ul>

        <h2 className="ml-8 text-xl font-bold  text-sky-600 pt-6">10. Szótár:</h2>
      </div>
    </>
  );
}

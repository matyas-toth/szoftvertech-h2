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
    { number: "3.1.", title: "Az érintettek összefoglalása", id: "erintettekesfelhasznalok" },
    { number: "3.2.", title: "Az felhasználók összefoglalása", id: "erintettekesfelhasznalok" },
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
          <h1 className="text-xl">Feladat címe: H2</h1>
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
          <h2>2024. október 13.</h2>
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
        <h2 id="bevezetes" className="ml-8 text-xl font-bold text-sky-600 pt-6">1. Bevezetés</h2>
        <p className="pl-[5.3rem] pt-6">
          Az általunk fejlesztett alkalmazás, a "Learnify" egy innovatív e-learning platform, amelynek célja, hogy a tanulási folyamatot élvezetesebbé és motiválóbbá tegye gamifikációs elemek beépítésével. A platform különféle, felhasználók által létrehozott kurzusokat és tananyagokat kínál, amelyek során a felhasználók pontokat, jelvényeket és szinteket szerezhetnek, valamint kihívásokkal és versenyekkel találkozhatnak, amelyek serkentik a tanulási kedvet. A "Learnify" interaktív és játékos megközelítése révén a felhasználók folyamatosan nyomon követhetik fejlődésüket és élményszerű módon sajátíthatják el az új ismereteket.
        </p>
        <h2 id="alkalmazashelye" className="ml-8 text-xl font-bold text-sky-600 pt-6">2. Az alkalmazás helye</h2>
          <p className="pl-[5.3rem] pt-6">
            Az oktatás digitalizálódása és az online tanulási lehetőségek elterjedése számos új lehetőséget teremt, de egyúttal kihívásokat is hoz magával. Sok e-learning platform nem tudja megfelelően fenntartani a tanulók érdeklődését és motivációját, ami az eredmények és a tanulási folyamat hatékonyságának csökkenéséhez vezethet. A "Learnify" célja, hogy ezeket a kihívásokat kezelje egy játékos, gamifikációs elemekkel gazdagított e-learning platform révén, amely aktívan bevonja a felhasználókat, és ösztönzi őket a tanulásra. Az alkalmazás modern, interaktív megközelítést kínál, amely különösen a fiatalabb generációk számára vonzó, akik már megszokták a játékok és az interaktív alkalmazások világát. A "Learnify" lehetővé teszi, hogy a tanulók élvezetes módon sajátítsák el az új ismereteket, miközben folyamatosan kapnak visszajelzést és jutalmakat a haladásukról, ezáltal növelve az elköteleződésüket és a tanulási eredményeiket.
          </p>
          <p className="pl-[5.3rem] pt-6">
            A "Learnify" célja, hogy ezeket a kihívásokat kezelje egy játékos, gamifikációs elemekkel gazdagított e-learning platform révén, amely aktívan bevonja a felhasználókat, és ösztönzi őket a tanulásra. Az alkalmazás modern, interaktív megközelítést kínál, amely különösen a fiatalabb generációk számára vonzó, akik már megszokták a játékok és az interaktív alkalmazások világát. A "Learnify" lehetővé teszi, hogy a tanulók élvezetes módon sajátítsák el az új ismereteket, miközben folyamatosan kapnak visszajelzést és jutalmakat a haladásukról, ezáltal növelve az elköteleződésüket és a tanulási eredményeiket.
          </p>
        <h2 id="uzletilehetosegek" className="ml-8 text-xl font-bold text-sky-600 pt-6">2.1 Üzleti lehetőségek</h2>
        <p className="pl-[5.3rem] pt-6">
          A "Learnify" nem csupán egy oktatási platform, hanem egy olyan üzleti lehetőség is, amely illeszkedik a modern oktatási trendekhez és igényekhez. Kurzusok létrehozásánál a készítő dönthet arról, hogy a kurzus ingyenes elérhető és elvégezhető, vagy fizetős, ezáltal a kurzusok létrehozóinak is egyfajta bevételszerzési lehetőséget jelent. A vállalat bevételét a fizetős kurzusokból bejövő százalékos haszon jelenti. 
        </p>
        <p className="pl-[5.3rem] pt-6">
          Ezen túlmenően a "Learnify" bővíthető vállalati képzési platformként is, amely segíthet a cégeknek dolgozóik szakmai fejlődésének nyomon követésében és javításában. A gamifikációs elemek hozzájárulhatnak a dolgozói elkötelezettség növeléséhez és a tanulási folyamat hatékonyabbá tételéhez, így a vállalatok szívesebben fektethetnek be az alkalmazás használatába.
        </p>
        <p className="pl-[5.3rem] pt-6">
          Az oktatási intézmények számára a "Learnify" egy olyan megoldás, amely támogatja a tanulók motivációjának fenntartását és a tanulási eredmények javítását, ezáltal növelve az intézmény hírnevét és versenyképességét. A platform ezenkívül lehetőséget biztosíthat online kurzusok létrehozására és értékesítésére, ami új bevételi forrást jelenthet az intézmények számára.
        </p>
        <p className="pl-[5.3rem] pt-6">
          Összességében a "Learnify" rugalmasan illeszkedik a különböző oktatási és üzleti igényekhez, és lehetőséget biztosít a piacbővítésre és a felhasználói bázis folyamatos növelésére.
        </p>
        <h2 id="problema" className="ml-8 text-xl font-bold text-sky-600 pt-6">2.2. A probléma megfogalmazása:</h2>

        <p className="pl-[5.3rem] pt-6">
        Az e-learning platformunk célja, hogy megoldást kínáljon a modern oktatás számos kihívására, amelyek a hagyományos tanulási módszerekből erednek. Az alábbiakban bemutatjuk a főbb problémákat, amelyekkel a felhasználók és az oktatók szembesülnek, és amelyeket platformunk révén szeretnénk orvosolni.
        </p>

        <p className="pl-[5.3rem] pt-6 font-bold">
        Problémák, amikre az alkalmazás megoldást kínál:
        </p>

        <ul className="pl-[7rem] pt-4 list-disc"> <li className="mb-4"> <span className="font-bold">Hozzáférhetőség és rugalmasság:</span> <p className="mt-2"> A hagyományos oktatási rendszerek gyakran korlátozzák a tanulási lehetőségeket, hiszen az előadások, kurzusok és tananyagok elérhetősége meghatározott időpontokhoz és helyszínekhez kötött. Ez megnehezíti a diákok számára, hogy a saját tempójukban tanuljanak, különösen azok számára, akik munka vagy családi kötelezettségek miatt nem tudnak részt venni a hagyományos órákon. Az e-learning platformunk rugalmas tanulási lehetőséget kínál, lehetővé téve, hogy a felhasználók bármikor és bárhol hozzáférjenek a kurzusokhoz. </p> </li> <li className="mb-4"> <span className="font-bold">Tananyag minősége és relevanciája:</span> <p className="mt-2"> A hagyományos oktatásban gyakran előfordul, hogy a tananyag elavult vagy nem releváns a munkaerőpiac aktuális igényeihez képest. Az e-learning platformunkon a felhasználók által létrehozott kurzusok révén biztosítjuk, hogy a tananyagok naprakészen és a valós igények szerint készüljenek el. Így a felhasználók mindig aktuális, releváns információkhoz juthatnak. </p> </li> <li className="mb-4"> <span className="font-bold">Motiváció és elköteleződés fenntartása:</span> <p className="mt-2"> Az online tanulás során gyakran előfordul, hogy a diákok elveszítik a motivációjukat, mivel a tanulási élmény kevésbé interaktív és szórakoztató, mint a hagyományos osztálytermi környezetben. Az e-learning platformunk gamifikációs elemeket, mint például XP gyűjtést, küldetéseket és ranglistákat alkalmaz, hogy fokozza a tanulók elköteleződését. Ezen elemek segítségével a tanulók célokat tűzhetnek ki maguk elé, ami növeli a tanulás iránti lelkesedésüket. </p> </li> <li className="mb-4"> <span className="font-bold">Közösségi tanulás hiánya:</span> <p className="mt-2"> A hagyományos oktatási rendszerekben a tanulók gyakran rendelkeznek lehetőséggel arra, hogy közvetlen kapcsolatban álljanak tanáraikkal és társaikkal. Az online környezetben azonban ezek a lehetőségek gyakran hiányoznak. Az e-learning platformunk közösségi funkciókat kínál, amelyek lehetővé teszik a felhasználók közötti interakciót, tapasztalatmegosztást és együttműködést, ezáltal erősítve a közösségi tanulást. </p> </li> <li className="mb-4"> <span className="font-bold">Technikai nehézségek:</span> <p className="mt-2"> Az online tanulás során a felhasználók gyakran találkoznak technikai problémákkal, mint például a lassú betöltési idő, rendszerleállások vagy használhatatlan felületek. Ezen problémák megnehezítik a tanulási élményt, és csökkenthetik a felhasználók motivációját. Az e-learning platformunk célja, hogy felhasználóbarát és megbízható technológiát biztosítson, amely zökkenőmentes tanulási élményt nyújt. </p> </li> <li className="mb-4"> <span className="font-bold">Adatvédelem és biztonság:</span> <p className="mt-2"> Az online platformok használatakor a felhasználók aggódnak a személyes adataik védelme miatt. A platformunk kiemelt figyelmet fordít az adatbiztonságra, és biztosítja, hogy a felhasználók adatai biztonságban legyenek, ezzel növelve a bizalmat és a felhasználói élményt. </p> </li> </ul>

        <p className="pl-[5.3rem] pt-6">
        Ezek a problémák gyakoriak az e-learning platformok világában, és az általunk tervezett megoldások célja, hogy ezekre a kihívásokra reagálva egy olyan innovatív és felhasználóbarát platformot hozzunk létre, amely segíti a tanulást, és javítja a felhasználói élményt.        </p>

        <h2 id="termekhelye" className="ml-8 text-xl font-bold text-sky-600 pt-6">2.3. A termék helye:</h2>
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
          ○ A platform beépített analitikai dashboardjai révén a tanulók nyomon követhetik az előrehaladásukat, valamint a tanulásuk hatékonyságát, illetve ezzel együtt a tananyag készítői is elemezhetik a kurzusaik minőségét és teljesíthetőségét. Ezek az eszközök nemcsak a tanulói teljesítmény mérésére szolgálnak, hanem lehetővé teszik a tananyagok optimalizálását is.
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

        <h2 id="erintettekesfelhasznalok" className="ml-8 text-xl font-bold text-sky-600 pt-6 inline-block">3. Érintettek és felhasználók, 3.1 Az érintettek összefoglalása, 3.2 Az felhasználók összefoglalása</h2>

        
        <p className="pl-[5.3rem] pt-6">
          A "Learnify" rendszer fejlesztése és üzemeltetése során több érintett csoport és felhasználói réteg kerül beazonosításra, amelyek szerepe és viszonya eltérő az alkalmazáshoz és a szervezethez képest.
        </p>

        <ul className="pl-[5.3rem] pt-6 list-disc">
          <li className="mb-4">
            <span className="font-bold pt-6">Regisztrált felhasználók:</span>
            <ul className="pl-8 mt-2 list-disc">
              <li><span className="font-bold pt-6">Beosztás:</span> Tanulók, a program felhasználói.</li>
              <li><span className="font-bold">Viszony az alkalmazáshoz:</span> Ők a rendszer elsődleges felhasználói, akik a platformon keresztül tanulnak és részt vesznek a különböző kurzusokban. Számukra a gamifikáció segít fenntartani az érdeklődést és motivációt a tanulás során. Emellett szintén ők azok, akik a tartalmakat létrehozzák és menedzselik a platformon. Feladatuk, hogy a tananyagokat hozzáigazítsák a platform lehetőségeihez, és naprakészen tartsák a kurzusaikat.</li>
            </ul>
          </li>

          <li className="mb-4">
            <span className="font-bold">Vállalatok és szervezetek:</span>
            <ul className="pl-8 mt-2 list-disc">
              <li><span className="font-bold">Beosztás:</span> HR menedzserek, vállalati oktatási szakértők.</li>
              <li><span className="font-bold">Viszony az alkalmazáshoz:</span> A cégek számára a "Learnify" egy platformot biztosít dolgozóik képzéséhez és fejlesztéséhez. Ők felelősek a megfelelő kurzusok kiválasztásáért és a dolgozók előrehaladásának nyomon követéséért.</li>
              <li><span className="font-bold">Kapcsolat a szervezettel:</span> A vállalatok számára az alkalmazás egy eszköz, amely segíti a dolgozók szakmai fejlődését és motivációjuk fenntartását, ezáltal növelve a vállalati teljesítményt.</li>
            </ul>
          </li>

          <li className="mb-4">
            <span className="font-bold">Platform fejlesztők és rendszergazdák:</span>
            <ul className="pl-8 mt-2 list-disc">
              <li><span className="font-bold">Beosztás:</span> Szoftverfejlesztők, UI/UX tervezők, rendszergazdák.</li>
              <li><span className="font-bold">Viszony az alkalmazáshoz:</span> Ők felelősek a platform karbantartásáért, új funkciók fejlesztéséért és az alkalmazás stabil működéséért. Az ő szerepük kiemelten fontos az alkalmazás folyamatos fejlesztése és üzemeltetése során.</li>
              <li><span className="font-bold">Kapcsolat a szervezettel:</span> A fejlesztők és rendszergazdák közvetlen kapcsolatban állnak a szervezet vezetőivel és az ügyfelekkel, hogy az igényeket és visszajelzéseket figyelembe véve folyamatosan fejleszthessék a rendszert.</li>
            </ul>
          </li>
        </ul>

        <p className="pl-[5.3rem] pt-6">
          Az összes érintett és felhasználó azonosítása és bevonása kritikus lépés annak érdekében, hogy az alkalmazás a felhasználói igényeknek megfelelően működjön, és minden érintett számára hasznos funkciókat kínáljon.
        </p>

        
        <h2 id="felhasznaloikornyezet" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.3. Felhasználói környezet:</h2>
        <p className="pl-[5.3rem] pt-6">
          Az alkalmazás egy weboldalon keresztül érhető el, melyet egy felhasználó bármilyen böngészőből megnyithat, akár mobilról is. Mobil esetén ajánlott a "Learnify" mobilalkalmazás használata, mely segítségével könnyebben kizárhatóak egy böngésző zavaró részei.
        </p>
        <h2 id="illetekesekadatai" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.4 Illetékesek adatai</h2>

        <p className="pl-[5.3rem] pt-6 font-bold">A platform fejlesztői esetén:</p>

        <ul className="pl-[7rem] pt-4 list-disc">
  <li className="mb-4">
    <span className="font-bold">Név:</span>
    <p className="mt-2">
      A fejlesztők teljes neve, amely segít azonosítani a csapat tagjait.
    </p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Email cím:</span>
    <p className="mt-2">
      A fejlesztők email címe, amely lehetővé teszi a kommunikációt és a projektekhez kapcsolódó információk megosztását.
    </p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Szerepkör:</span>
    <p className="mt-2">
      A fejlesztő pozíciója a projektben (pl. backend fejlesztő, frontend fejlesztő, UX/UI tervező), amely segít megérteni a felelősségi köröket.
    </p>
  </li>
  </ul>

  <p className="pl-[5.3rem] pt-6 font-bold">Üzleti partnerek, vállalatok esetén:</p>

  <ul className="pl-[7rem] pt-4 list-disc">

  

  <li className="mb-4">
    <span className="font-bold">Cég neve:</span>
    <p className="mt-2">
      A vállalat neve, amely a platformot igénybe veszi, így könnyen nyomon követhető a szolgáltatás igénybe vétele.
    </p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Kapcsolattartó személy:</span>
    <p className="mt-2">
      A cég azon képviselője, aki a platform használatával kapcsolatos ügyekért felelős, beleértve a nevét és elérhetőségeit.
    </p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Email cím:</span>
    <p className="mt-2">
      A vállalat kapcsolattartó személyének email címe, amely lehetővé teszi a gyors és hatékony kommunikációt.
    </p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Szerződéses adatok:</span>
    <p className="mt-2">
      Az igénybevett szolgáltatások részletei, beleértve a szerződés időtartamát, a választott csomagot és a fizetési feltételeket.
    </p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Használati statisztikák:</span>
    <p className="mt-2">
      A vállalat által a platformon végzett tevékenységek nyomon követése, például a kurzusok száma, a felhasználók aktivitása és a megszerzett XP pontok.
    </p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Visszajelző űrlapok:</span>
    <p className="mt-2">
      A vállalatok által küldött visszajelzések, amelyek segítenek a platform folyamatos fejlesztésében és az igények jobb megértésében.
    </p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Javasolt funkciók:</span>
    <p className="mt-2">
      A vállalatok által javasolt új funkciók és szolgáltatások, amelyek hozzájárulhatnak a platform fejlesztéséhez.
    </p>
  </li>
</ul>


        <h2 id="felhasznalokadatai" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.5 Felhasználók adatai</h2>
        <ul className="pl-[6rem] pt-4 list-disc">
          <li className="mb-4">
            <span className="font-bold">Felhasználónév:</span>
            <p className="mt-2">
            Egyedi azonosító, amely a felhasználót képviseli a platformon, és amelyen keresztül a közösségi interakciók során mások azonosíthatják.
            </p>
          </li>

          <li className="mb-4">
            <span className="font-bold">Email cím:</span>
            <p className="mt-2">
            A felhasználó email címe, amely lehetővé teszi a kommunikációt, a regisztráció megerősítését, és a jelszó helyreállítást.
            </p>
          </li>

          <li className="mb-4">
            <span className="font-bold">Név:</span>
            <p className="mt-2">
            A felhasználó teljes neve, amely segít azonosítani őt a rendszerben.
            </p>
          </li>

          <li className="mb-4">
            <span className="font-bold">Profilkép:</span>
            <p className="mt-2">
            A felhasználók feltölthetnek egy profilképet, amely segíti az azonosítást és a közösségi élményt.
            </p>
          </li>

          <li className="mb-4">
            <span className="font-bold">Biográfia:</span>
            <p className="mt-2">
              A felhasználók írhatnak egy rövid bemutatkozót, amely segít másoknak megismerni őket és érdeklődési köreiket.
            </p>
          </li>

          <li className="mb-4">
            <span className="font-bold">Tanulási előzmények:</span>
            <p className="mt-2">
              Elvégzett kurzusok, Elért XP és rangok, Küldetések és kihívások.
            </p>
          </li>
          <li className="mb-4">
            <span className="font-bold">Beállítások és preferenciák:</span>
            <p className="mt-2">
            A felhasználók megadhatják, hogy milyen értesítéseket szeretnének kapni, például új kurzusok vagy rendszerfrissítések kapcsán, ezen kívül még a platform megjelenített nyelve is személyre szabható.
            </p>
          </li>
          <li className="mb-4">
            <span className="font-bold">Fizetési információk (ha szükséges):</span>
            <p className="mt-2">
            A felhasználók által megadott banki vagy kártyaadatai, amelyek a fizetős kurzusokhoz szükségesek, illetve a bankszámlaszámuk, amelyek a kifizetésekhez szükségesek. Ezen adatokat a biztonság és adatvédelem érdekében a platform nem tárolja, hanem megbízható harmadik fél szolgáltatón keresztül kezeli. (Stripe)
            </p>
          </li>
        </ul>
        <h2 id="vegtermekattekintes" className="ml-8 text-xl font-bold text-sky-600 pt-6">4. A végtermék áttekintése</h2>
        <p className="pl-[5.3rem] pt-6">
          A "Learnify" egy webalapú, gamifikációval támogatott e-learning platform, amely az online oktatás és képzés élményét teszi interaktívabbá és motiválóbbá. Az alkalmazás célja, hogy növelje a tanulók elköteleződését és javítsa a tanulási eredményeket különböző játékos elemek és ösztönző mechanizmusok beépítésével.
        </p>

        <p className="pl-[5.3rem] pt-6 font-bold">A végtermék legfontosabb jellemzői:</p>

        <ul className="pl-[7rem] pt-4 list-disc">
          <li className="mb-4">
            <span className="font-bold">Platformfüggetlenség:</span>
            <p className="mt-2">
              A "Learnify" elérhető lesz asztali számítógépeken, laptopokon, valamint mobil eszközökön (okostelefonokon és tableteken) egyaránt, hogy a felhasználók bármikor és bárhonnan hozzáférhessenek.
            </p>
          </li>

          <li className="mb-4">
            <span className="font-bold">Gamifikációs elemek:</span>
            <p className="mt-2">
              A rendszer különböző játékos elemeket, például pontgyűjtést, jelvényeket, szinteket és kihívásokat tartalmaz, amelyek célja, hogy motiválják a tanulókat és nyomon kövessék a fejlődésüket.
            </p>
          </li>

          <li className="mb-4">
            <span className="font-bold">Interaktív tananyagok és feladatok:</span>
            <p className="mt-2">
              A platformon elérhető tananyagok multimédiás tartalmakkal (videók, interaktív kvízek, szimulációk) vannak kiegészítve, hogy a tanulók számára változatos és élvezetes tanulási élményt nyújtsanak.
            </p>
          </li>

          <li className="mb-4">
            <span className="font-bold">Testreszabhatóság:</span>
            <p className="mt-2">
              A "Learnify" rugalmasan testreszabható a kurzuskészítők számára, lehetővé téve a kurzus megjelenésének személyre szabását, valamint a tananyag tagolását.
            </p>
          </li>

          <li className="mb-4">
            <span className="font-bold">Felhőalapú tárolás:</span>
            <p className="mt-2">
              Az alkalmazás felhőalapú tárolást használ, amely lehetővé teszi a tanulók számára, hogy biztonságosan hozzáférjenek adataikhoz és tananyagaikhoz bárhonnan, anélkül, hogy helyi telepítésre vagy frissítésekre lenne szükségük.
            </p>
          </li>

          <li className="mb-4">
            <span className="font-bold">Integrációk:</span>
            <p className="mt-2">
              A platform képes integrálódni más tanulásmenedzsment rendszerekkel (LMS), valamint videókonferencia-eszközökkel, így egy átfogó tanulási környezetet biztosít a tanulóknak.
            </p>
          </li>
        </ul>

        <h2 id="termekkapcsolatai" className="ml-8 text-xl font-bold text-sky-600 pt-6">4.1 A termék kapcsolatai</h2>
        <p className="pl-[5.3rem] pt-6">
          A "Learnify" több funkcionális komponensből áll, amelyek egymással és más rendszerekkel is kapcsolatban állnak, hogy átfogó e-learning élményt biztosítsanak a felhasználóknak.
        </p>

        <h3 className="ml-12 text-lg font-bold pt-4">Funkcionális komponensek:</h3>

        <ul className="pl-16 list-disc">
          <li className="mt-2">
            <span className="font-bold">Felhasználói felület (UI):</span>
            <p className="mt-1">
              A "Learnify" felhasználói felülete web- és mobilalkalmazásként érhető el, biztosítva az intuitív navigációt és a kényelmes felhasználói élményt.
            </p>
          </li>
          <li className="mt-2">
            <span className="font-bold">Tananyagkezelő rendszer:</span>
            <p className="mt-1">
              A platform tartalmaz egy tananyagkezelő modult, amely lehetővé teszi a kurzusok létrehozását, szerkesztését és kezelését. Kurzust bárki ingyenesen készíthet, aki sikeresen elvégzi az ingyenes "Kurzuskészítés a Learnify-on" kurzust, ezzel megismertetve a felhasználókkal a tananyagszerkesztő főbb funkcióit. A kurzuskészítők könnyedén feltölthetik a tananyagaikat, és testreszabhatják azokat az intuitív tananyagszerkesztő segítségével.
            </p>
          </li>
          <li className="mt-2">
            <span className="font-bold">Gamifikációs modul:</span>
            <p className="mt-1">
              A gamifikációs funkciók, mint a pontok, szintek és jelvények kezelése egy külön modulban történik. Ez a modul felelős a felhasználói aktivitás nyomon követéséért és az ösztönző mechanizmusok működtetéséért.
            </p>
          </li>
          <li className="mt-2">
            <span className="font-bold">Értékelési és nyomon követési rendszer:</span>
            <p className="mt-1">
              Ez a modul biztosítja a tanulók teljesítményének követését, valamint a kvízek és tesztek automatikus kiértékelését. Az eredmények és a haladási adatok megjelennek mind a tanulók, mind a kurzus készítői számára.
            </p>
          </li>
          <li className="mt-2">
            <span className="font-bold">Kurzuskészítők kifizetési rendszere:</span>
            <p className="mt-1">
              Ez a modul biztosítja a kurzusokból érkező bevétel a készítőkre eső részét, melyet a rendszer minden hónapban automatikusan kiutal egy bizonyos összeg felett a készítők által beállított fizetési móddal. A készítők részletes statisztikákat láthatnak a bevételeikről akár havi lebontásban is.
            </p>
          </li>
        </ul>

        <h3 className="ml-12 text-lg font-bold pt-6">A termék helye egy nagyobb rendszerben:</h3>

        <p className="pl-16 pt-2">
          A "Learnify" egy tanulásmenedzsment rendszer (LMS) részeként működik, és különböző más rendszerekkel is integrálható a hatékony tanulási élmény érdekében:
        </p>

        <ul className="pl-20 list-disc">
          <li className="mt-2">
            <span className="font-bold">Videókonferencia-eszközök:</span> A platform integrálható népszerű videókonferencia-szoftverekkel, mint a Zoom és a Microsoft Teams, hogy a diákok és a kurzusok készítői akár közvetlenül is konzultálhassanak.
          </li>
          <li className="mt-2">
            <span className="font-bold">Más LMS-ekkel való integráció:</span> A "Learnify" API-n keresztül csatlakozhat más tanulásmenedzsment rendszerekhez (például Udemy), így a felhasználók könnyen importálhatják a már máshol létrehozott kurzusaikat.
          </li>
          <li className="mt-2">
            <span className="font-bold">Harmadik fél alkalmazásai:</span> A platform nyitott API-t biztosít harmadik fél által fejlesztett alkalmazások számára, így a felhasználók további tanulási eszközöket, mint például virtuális laboratóriumok vagy szimulációs programok, könnyen integrálhatnak a rendszerbe.
          </li>
        </ul>

        <h2 id="termekhasznalatelonyei" className="ml-8 text-xl font-bold text-sky-600 pt-6">4.2. A termék használatának előnyei:</h2>

        
          <table className="ml-12 mt-6 w-[70%]">
            <thead>
              <tr>
                <th className="border border-black text-left px-4 py-2 uppercase tracking-wider">
                  A megrendelő haszna
                </th>
                <th className="border border-black text-left px-4 py-2 uppercase tracking-wider">
                  Az ezt támogató rendszer jellemzői
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td className="border border-black px-4 py-2">
              A felhasználók motivációja nő a tanulás során
                </td>
                <td className="border border-black px-4 py-2">
                Gamifikációs elemek, mint az XP gyűjtés, küldetések és jutalmak segítik a folyamatos résztvételt és elköteleződést
                </td>
              </tr>
              <tr>
              <td className="border border-black px-4 py-2">
              A tanulás rugalmasan követhető a saját tempóban
                </td>
                <td className="border border-black px-4 py-2">
                A felhasználók saját maguk választhatják meg a tanulási ütemüket, és új kurzusokat oldhatnak fel a meglévők teljesítése alapján
                </td>
              </tr>
              <tr>
              <td className="border border-black px-4 py-2">
              Költséghatékony tanulási lehetőségek bárki számára                </td>
                <td className="border border-black px-4 py-2">
                Bárki tölthet fel kurzusokat, így az elérhető tananyag széleskörű, alacsony költséggel vagy akár ingyen is hozzáférhető                </td>
              </tr>
              <tr>
              <td className="border border-black px-4 py-2">
              Személyre szabott tanulási élmény                </td>
                <td className="border border-black px-4 py-2">
                A felhasználók egyéni preferenciák és célok alapján választhatnak kurzusokat, és személyre szabott ajánlásokkal segíti őket a rendszer                </td>
              </tr>
              <tr>
              <td className="border border-black px-4 py-2">
              A felhasználó garantáltan a megfelelő kurzust tudja kiválasztani                </td>
                <td className="border border-black px-4 py-2">
                Más felhasználók értékelhetnek kurzusokat és megjegyzéseket is fűzhetnek hozzájuk, így aki épp kurzust keres, az megbizonyosodhat róla, hogy a tananyag által átadott tudás megfelelő-e                </td>
              </tr>
              <tr>
              <td className="border border-black px-4 py-2">
              Könnyű tanulás bárhonnan, bármikor                </td>
                <td className="border border-black px-4 py-2">
                A platform bármilyen eszközről elérhető, legyen az számítógép, tablet vagy okostelefon, így a felhasználók szabadon tanulhatnak, amikor csak idejük engedi                </td>
              </tr>
              <tr>
              <td className="border border-black px-4 py-2">
              Egyszerűsödik a naprakész tudás megszerzése                </td>
                <td className="border border-black px-4 py-2">
                A kurzusokat is felhasználók készítik, így legtöbbször a tananyag naprakész, rendszeresen van frissítve, hogy a tanulók pozitív értékeléseket adjanak le az adott kurzusra.                </td>
              </tr>
            </tbody>
          </table>
        

        <h2 id="feltetelezesekesfuggosegek" className="ml-8 text-xl font-bold text-sky-600 pt-6">4.3. Feltételezések és függőségek:</h2>
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
        PayPal) és felhőszolgáltatások (Vercel, AWS). Ezek megbízhatósága
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

        <h2 id="koltsegbecsles" className="ml-8 text-xl font-bold text-sky-600 pt-6">4.4. Költségbecslés</h2>

        <p className="pl-[5.3rem] pt-6">
          A "Learnify" fejlesztése és üzembe állítása több különböző költségtételből áll, amelyeket az alábbiakban részletezünk. A költségek becslése a projekt jelenlegi szakaszában történik, és a későbbi változások és fejlesztési igények függvényében módosulhat.
        </p>

        <h3 className="ml-12 text-lg font-bold pt-4">1. Fejlesztési költségek</h3>

        <p className="pl-[5.3rem] pt-2">
          <span className="font-bold">Szoftverfejlesztők:</span> A fejlesztői csapat bérköltségei (5 fő, 6 hónapos fejlesztési időszak):
        </p>
        <ul className="pl-[7rem] list-disc">
          <li>5 fejlesztő havi bérköltsége: 5 × 500.000 Ft = 2.500.000 Ft / hónap</li>
          <li>Összesen: 2.500.000 Ft × 6 hónap = 15.000.000 Ft</li>
        </ul>

        <p className="pl-[5.3rem] pt-2">
          <span className="font-bold">UI/UX tervezés:</span> A felhasználói felület és élmény tervezési költségei:
        </p>
        <ul className="pl-[7rem] list-disc">
          <li>Tervező havi bérköltsége (1 fő, 3 hónap): 1 × 600.000 Ft = 600.000 Ft / hónap</li>
          <li>Összesen: 600.000 Ft × 3 hónap = 1.800.000 Ft</li>
        </ul>

        <p className="pl-[5.3rem] pt-2">
          <span className="font-bold">Projektmenedzsment:</span>
        </p>
        <ul className="pl-[7rem] list-disc">
          <li>Projektmenedzser havi bérköltsége (1 fő, 6 hónap): 1 × 700.000 Ft = 700.000 Ft / hónap</li>
          <li>Összesen: 700.000 Ft × 6 hónap = 4.200.000 Ft</li>
        </ul>

        <p className="pl-[5.3rem] pt-2">
          <span className="font-bold">Tesztelési költségek:</span>
        </p>
        <ul className="pl-[7rem] list-disc">
          <li>Felhasználói tesztek és QA tesztelők díja: 2.000.000 Ft</li>
        </ul>

        <h3 className="ml-12 text-lg font-bold pt-4">2. Infrastruktúra és technikai költségek</h3>

        <p className="pl-[5.3rem] pt-2">
          <span className="font-bold">Szerverek és felhőalapú tárolás:</span>
        </p>
        <ul className="pl-[7rem] list-disc">
          <li>Felhőalapú szerver és tárolási költség (AWS vagy Vercel): 1.500.000 Ft / év</li>
        </ul>

        <p className="pl-[5.3rem] pt-2">
          <span className="font-bold">Fejlesztői eszközök és licenszek:</span>
        </p>
        <ul className="pl-[7rem] list-disc">
          <li>Fejlesztői szoftverek és licenszek költsége: 800.000 Ft</li>
        </ul>

        <h3 className="ml-12 text-lg font-bold pt-4">3. Karbantartás</h3>

        <p className="pl-[5.3rem] pt-2">
          <span className="font-bold">Karbantartás és frissítések (éves költség):</span>
        </p>
        <ul className="pl-[7rem] list-disc">
          <li>Technikai támogatás és frissítések: 2.000.000 Ft / év</li>
        </ul>

        <h3 className="ml-12 text-lg font-bold pt-4">Összesített költségbecslés</h3>

        <ul className="pl-[7rem] list-disc">
          <li>Fejlesztési fázis összesen: 23.000.000 Ft</li>
          <li>Infrastruktúra és licenszek: 2.300.000 Ft</li>
          <li>Bevezetés és karbantartás (1. év): 2.000.000 Ft</li>
          <li className="font-bold">Teljes költség (első év): 27.300.000 Ft</li>
        </ul>

        <h2 id="installacio" className="ml-8 text-xl font-bold text-sky-600 pt-6">4.5. Installáció</h2>

        <p className="pl-[3.1rem] pt-6">
          A "Learnify" egy weboldalon keresztül elérhető, melynek rendszere központilag, a projekt elkészítéséért felelős vállalat szerverein fut, így nincs szükség telepítésre.
        </p>

        <p className="pl-[3.1rem] pt-6">
          A "Learnify" mobilalkalmazás egy beágyazott "headless" böngészőt tartalmaz, amely a weboldal mobil verzióját tölti be.
        </p>

        <h3 className="ml-12 text-lg font-bold pt-4">Mobilalkalmazás telepítése</h3>

        <p className="pl-[5.3rem] pt-2">
          <span className="font-bold">Android:</span>
        </p>
        <ul className="pl-[7rem] list-disc">
          <li>A Play Áruház-ból a "Learnify" nevű alkalmazás telepítése után azonnal futtatható.</li>
        </ul>

        <p className="pl-[5.3rem] pt-2">
          <span className="font-bold">iOS & iPadOS:</span>
        </p>
        <ul className="pl-[7rem] list-disc">
          <li>Az App Store-ból a "Learnify" nevű alkalmazás telepítése után azonnal futtatható.</li>
        </ul>

        <h3 className="ml-12 text-lg font-bold pt-4">Követelmények</h3>

        <p className="pl-[5.3rem] pt-2">
          <span className="font-bold">Hálózati követelmények:</span>
        </p>
        <ul className="pl-[7rem] list-disc">
          <li>Stabil internetkapcsolat (minimum 10 Mbps sebesség).</li>
        </ul>

        <p className="pl-[5.3rem] pt-2">
          <span className="font-bold">Szoftveres követelmények:</span>
        </p>
        <ul className="pl-[7rem] list-disc">
          <li>Android esetén Android 12, vagy újabb</li>
          <li>iOS esetén iOS 15, vagy újabb</li>
          <li>iPadOS esetén iOS 15, vagy újabb</li>
        </ul>


        <h2 id="vegtermekjellemzoi" className="ml-8 text-xl font-bold text-sky-600 pt-6">5. A végtermék jellemzői, biztosított szolgáltatások</h2>
        <p className="pl-[5.3rem] pt-6">
  A "Learnify" e-learning rendszer egy innovatív platform, amely számos funkciót kínál a tanulók és oktatók számára. Az alábbiakban összefoglaljuk a legfontosabb szolgáltatásokat, prioritásokkal kiegészítve, a felhasználók szempontjából.
</p>

<ul className="pl-[5.3rem] pt-4 list-disc">
  <li className="mb-4">
    <span className="font-bold">Interaktív tananyagok</span>
    <p className="mt-2"><span className="font-bold">Prioritás:</span> Magas</p>
    <p>A tanulók számára hozzáférést biztosít különféle interaktív tananyagokhoz, beleértve a videókat, kvízeket, és szimulációkat. Ezek a tartalmak segítik a mélyebb megértést és a tudás gyakorlati alkalmazását.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Gamifikációs elemek</span>
    <p className="mt-2"><span className="font-bold">Prioritás:</span> Magas</p>
    <p>A platform beépített gamifikációs funkciókat kínál, mint például a pontgyűjtés, szintezés és jelvények. Ezek az elemek motiválják a tanulókat a részvételre és a teljesítmény javítására.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Teljesítménykövetés</span>
    <p className="mt-2"><span className="font-bold">Prioritás:</span> Közepes</p>
    <p>Az alkalmazás részletes statisztikákat és elemzéseket nyújt a tanulók teljesítményéről, lehetővé téve számukra, hogy nyomon követhessék fejlődésüket és azonosíthassák a fejlődési lehetőségeket.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Közösségi funkciók</span>
    <p className="mt-2"><span className="font-bold">Prioritás:</span> Közepes</p>
    <p>A platform lehetőséget biztosít a felhasználók számára, hogy interakcióba lépjenek egymással, fórumokon, csoportos projektek keretében, és közös tanulási élményeket oszthassanak meg.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Mobil alkalmazás</span>
    <p className="mt-2"><span className="font-bold">Prioritás:</span> Közepes</p>
    <p>A "Learnify" mobilalkalmazás biztosítja a tanulók számára, hogy bármikor és bárhol hozzáférjenek a tananyagokhoz és feladatokhoz, így rugalmasabbá téve a tanulást.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Testreszabható kurzusok</span>
    <p className="mt-2"><span className="font-bold">Prioritás:</span> Alacsony</p>
    <p>Az kurzuskészítők lehetőséget kapnak arra, hogy a tananyagot az igényeikhez és a célcsoportjukhoz igazítsák, testreszabva a kurzusokat a résztvevők szintjének és érdeklődésének megfelelően.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Technikai támogatás</span>
    <p className="mt-2"><span className="font-bold">Prioritás:</span> Alacsony</p>
    <p>A felhasználók számára elérhető technikai támogatás és oktatási anyagok segítik a platform hatékony használatát, valamint a felmerülő problémák gyors megoldását.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Értékelési rendszer</span>
    <p className="mt-2"><span className="font-bold">Prioritás:</span> Közepes</p>
    <p>Az értékelési rendszer lehetővé teszi a kvízek és tesztek automatikus kiértékelését, valamint visszajelzést ad a tanulóknak a teljesítményükről.</p>
  </li>
</ul>
        <h2 id="korlatozasok" className="ml-8 text-xl font-bold text-sky-600 pt-6">6. Korlátozások</h2>

        <p className="pl-[5.3rem] pt-6">
          A "Learnify" e-learning rendszer fejlesztése és működése során számos korlátozó tényezővel kell számolni, amelyek befolyásolják a projekt megvalósítását. Az alábbiakban felsoroljuk a legfontosabb korlátozásokat:
        </p>

        <ul className="pl-[5.3rem] pt-4 list-disc">
          <li className="mb-4">
            <span className="font-bold">Hardver követelmények</span>
            <p className="mt-2"><span className="font-bold">Prioritás:</span> Magas</p>
            <p>A rendszernek képesnek kell lennie arra, hogy alacsony teljesítményű személyi számítógépeken is működjön. Ezért a felhasználói felület és a háttérszolgáltatások optimalizálása elengedhetetlen.</p>
          </li>

          <li className="mb-4">
            <span className="font-bold">Jogszabályi és szabályozási előírások</span>
            <p className="mt-2"><span className="font-bold">Prioritás:</span> Magas</p>
            <p>A rendszernek meg kell felelnie az adatvédelmi előírásoknak (pl. GDPR) és az oktatási intézmények által előírt követelményeknek és irányelveknek.</p>
          </li>

          <li className="mb-4">
            <span className="font-bold">Felhasználói élmény</span>
            <p className="mt-2"><span className="font-bold">Prioritás:</span> Közepes</p>
            <p>A rendszernek meg kell felelnie a különböző felhasználói igényeknek, beleértve a mozgáskorlátozott felhasználók elérhetőségét is, ami különböző akadálymentesítési irányelvek betartását igényli.</p>
          </li>

          <li className="mb-4">
            <span className="font-bold">Technikai korlátozások</span>
            <p className="mt-2"><span className="font-bold">Prioritás:</span> Magas</p>
            <p>A rendszernek biztosítania kell a zökkenőmentes működést különböző platformokon és eszközökön. Az internetkapcsolat minősége jelentősen befolyásolhatja a felhasználói élményt.</p>
          </li>

          <li className="mb-4">
            <span className="font-bold">Idő- és költségkeretek</span>
            <p className="mt-2"><span className="font-bold">Prioritás:</span> Közepes</p>
            <p>A projekt költségkerete és időkerete korlátozott lehet, ami befolyásolhatja a fejlesztés ütemezését és a megvalósítható funkciók körét.</p>
          </li>

          <li className="mb-4">
            <span className="font-bold">Felhasználói visszajelzések</span>
            <p className="mt-2"><span className="font-bold">Prioritás:</span> Alacsony</p>
            <p>A felhasználói igények és visszajelzések folyamatos figyelemmel kísérése és a rendszerhez való alkalmazkodás képessége kulcsfontosságú, de kihívást jelenthet a fejlesztés során.</p>
          </li>
        </ul>

        <p className="pl-[5.3rem] pt-6">
          Ezek a korlátozások figyelembevételre kerülnek a "Learnify" e-learning rendszer fejlesztése és üzemeltetése során, hogy a lehető legjobban alkalmazkodjunk a felhasználók és a jogszabályi előírások igényeihez.
        </p>

        <h2 id="minosegielvarasok" className="ml-8 text-xl font-bold  text-sky-600 pt-6">7. Minőségi elvárások:</h2>
        <ul>
          <li className="my-2 ml-8 font-bold indent-8 list-disc list-inside pt-6">Felhasználó-központú, intuitív felület:</li>
          <li className="pl-[5.3rem] pt-6">
          A platformnak ultra-modern, felhasználóbarát felülettel kell rendelkeznie, amely garantálja a felhasználói élményt (UX) és a könnyű navigációt. A dizájn során kiemelt figyelmet kell fordítani az ergonómiára és az esztétikai összhangra, amely megteremti a vizuális harmóniát és a zökkenőmentes használatot.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 list-disc list-inside pt-6">Optimális oldal betöltési sebesség:</li>
          <li className="pl-[5.3rem] pt-6">
          A betöltési idők minimalizálása létfontosságú: az oldalak válaszidejének 3 másodpercen belül kell maradnia. Ez a sebesség biztosítja a felhasználók elkötelezettségét, és minimalizálja a lemorzsolódás kockázatát a várakozási idő miatt.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 list-disc list-inside pt-6">Biztonság:</li>
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

          <li className="my-2 ml-8 font-bold indent-8 list-disc list-inside pt-6">Teljes kör tesztelési ciklusok:</li>
          <li className="pl-[5.3rem] pt-6">
          A fejlesztési folyamat minden szakaszában szigorú tesztelési protokollokat kell alkalmazni. Ez magában foglalja a funkcionális, teljesítmény-, biztonsági és terheléses teszteléseket, amelyek biztosítják a platform hibamentes működését.
          </li>
        </ul>

        <h2 id="dokumentaciokovetelmenyek" className="ml-8 text-xl font-bold  text-sky-600 pt-6">8. Dokumentációkkal kapcsolatos követelmények:</h2>

        <p className="pl-[5.3rem] pt-6">
  A "Learnify" e-learning rendszer fejlesztése során különböző típusú dokumentációk elkészítése szükséges, amelyek segítik a felhasználók és a fejlesztőcsapat közötti kommunikációt, valamint biztosítják a rendszer zökkenőmentes működését. Az alábbiakban összefoglaljuk a dokumentációk típusait és médiaformátumait.
</p>

<ul className="pl-[5.3rem] pt-4 list-disc">
  <li className="mb-4">
    <span className="font-bold">Felhasználói kézikönyv</span>
    <p className="mt-2"><span className="font-bold">Típus:</span> Írásos dokumentum</p>
    <p><span className="font-bold">Média:</span> PDF, HTML</p>
    <p><span className="font-bold">Leírás:</span> A felhasználói kézikönyv részletes útmutatást nyújt a rendszer használatáról, beleértve a funkciók ismertetését, a telepítési folyamatot, valamint a gyakori kérdések és problémák megoldását.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Üzemeltetési és karbantartási útmutató</span>
    <p className="mt-2"><span className="font-bold">Típus:</span> Írásos dokumentum</p>
    <p><span className="font-bold">Média:</span> PDF, DOCX</p>
    <p><span className="font-bold">Leírás:</span> Ez a dokumentum tartalmazza a rendszer üzemeltetésével és karbantartásával kapcsolatos információkat, beleértve a rendszerbeállításokat, frissítési eljárásokat és a hibakezelési folyamatokat.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Technikai dokumentáció</span>
    <p className="mt-2"><span className="font-bold">Típus:</span> Részletes technikai leírás</p>
    <p><span className="font-bold">Média:</span> PDF, Markdown</p>
    <p><span className="font-bold">Leírás:</span> A technikai dokumentáció részletesen bemutatja a rendszer architektúráját, a használt technológiákat, a kód struktúráját és a fejlesztési folyamatokat.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Tesztelési dokumentáció</span>
    <p className="mt-2"><span className="font-bold">Típus:</span> Tesztelési jegyzőkönyvek</p>
    <p><span className="font-bold">Média:</span> PDF, XLSX</p>
    <p><span className="font-bold">Leírás:</span> A tesztelési dokumentáció tartalmazza a tesztelési terveket, teszt eseteket, és a tesztelés eredményeit, amelyek segítik a rendszer minőségének ellenőrzését.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Oktatási anyagok</span>
    <p className="mt-2"><span className="font-bold">Típus:</span> Képzési anyagok</p>
    <p><span className="font-bold">Média:</span> PPTX, videó, online kurzus (pl. Moodle)</p>
    <p><span className="font-bold">Leírás:</span> Az oktatási anyagok célja, hogy támogassák a felhasználókat a rendszer használatában, és bemutassák a legfontosabb funkciókat. Ezek tartalmazhatnak prezentációkat, videókat és online tanfolyamokat.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Visszajelzési űrlapok</span>
    <p className="mt-2"><span className="font-bold">Típus:</span> Interaktív űrlapok</p>
    <p><span className="font-bold">Média:</span> HTML, Google Form</p>
    <p><span className="font-bold">Leírás:</span> A visszajelzési űrlapok lehetővé teszik a felhasználók számára, hogy megosszanak véleményeket és javaslatokat a rendszer használatával kapcsolatban, amelyeket a fejlesztési folyamat során figyelembe kell venni.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Támogatási dokumentáció</span>
    <p className="mt-2"><span className="font-bold">Típus:</span> GYIK és technikai támogatás</p>
    <p><span className="font-bold">Média:</span> PDF, weboldal</p>
    <p><span className="font-bold">Leírás:</span> A támogatási dokumentáció tartalmazza a gyakran ismételt kérdéseket (GYIK), technikai hibaelhárítási útmutatókat, és a felhasználók számára elérhető támogatási lehetőségeket.</p>
  </li>
</ul>

        <h2 id="kockazatlista" className="ml-8 text-xl font-bold text-sky-600 pt-6">9. Kockázat lista:</h2>
        <ul>
          <li className="my-2 ml-8 font-bold indent-8 pt-6 list-disc list-inside">Technológiai kihívások és integrációs problémák:</li>
          <li className="pl-[4.8rem]">
          A projekt során számos új technológiai megoldást alkalmazunk, ideértve a harmadik féltől származó API-kat, cloud szolgáltatásokat és különböző technológiai stack-eket (pl. frontend-backend integráció). Az integráció során felmerülhetnek kompatibilitási problémák, késleltetések, vagy hibák, amelyek akadályozzák a rendszer zavartalan működését.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 pt-6 list-disc list-inside">Erőforrás- és kapacitáshiány:</li>
          <li className="pl-[4.8rem]">
          A projekt sikeres megvalósításához szükséges erőforrások, mint a megfelelő mennyiségű és képzett fejlesztők, tervezők és projektmenedzserek rendelkezésre állása elengedhetetlen. Az alulbecsült erőforrások vagy a túlterhelt csapatok kockázatot jelentenek a projekt késedelmeire és minőségi problémáira.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 pt-6 list-disc list-inside">Jogi és adatvédelmi szabályozásoknak való nem megfelelés:</li>
          <li className="pl-[4.8rem]">
          A platform a felhasználói adatokat kezeli, így kiemelten fontos a jogszabályoknak való megfelelés, különösen a GDPR és egyéb adatvédelmi rendeletek tekintetében. A nem megfelelő adatkezelés komoly pénzbírságokat és reputációs veszteségeket eredményezhet.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 pt-6 list-disc list-inside">Biztonsági fenyegetések és adatlopás:</li>
          <li className="pl-[4.8rem]">
          Mivel a platform pénzügyi tranzakciókat is kezel, így különösen ki van téve a kibertámadásoknak, mint például adathalászat, DDoS támadások vagy rendszervisszaélések. Az ilyen jellegű támadások adatszivárgáshoz, pénzügyi veszteségekhez, illetve a felhasználók bizalmának elvesztéséhez vezethetnek.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 pt-6 list-disc list-inside">Felhasználói elégedetlenség:</li>
          <li className="pl-[4.8rem]">
          A felhasználók részéről jelentkező elégedetlenség – legyen szó az interfész bonyolultságáról, lassú betöltési időkről, vagy hiányzó funkciókról – komoly hatással lehet a platform sikerére és növekedési ütemére. Az elégedetlen felhasználók negatív visszajelzései csökkenthetik az új felhasználók regisztrációját, illetve az aktív felhasználói bázis elpártolását okozhatják.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 pt-6 list-disc list-inside">Projekt késedelmek:</li>
          <li className="pl-[4.8rem]">
          A projekt mérföldkövei közötti csúszások kockázata folyamatosan fennáll, különösen, ha az időbeli tervezés nem megfelelő. Ezek a késedelmek további erőforrásokat igényelnek és negatív hatással lehetnek a költségvetésre is.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 pt-6 list-disc list-inside">Pénzügyi instabilitás:</li>
          <li className="pl-[4.8rem]">
          A projekt költségvetésének alulbecslése, illetve a váratlan kiadások komoly problémákat okozhatnak a projekt későbbi szakaszaiban. Pénzügyi instabilitás miatt megszakadhat a fejlesztés, vagy csökkenthetik a minőségi követelményeket.
          </li>

          <li className="my-2 ml-8 font-bold indent-8 pt-6 list-disc list-inside"> Új technológiai trendek vagy változások figyelmen kívül hagyása:</li>
          <li className="pl-[4.8rem]">
          Az iparág gyorsan fejlődik, így a legújabb technológiai trendek figyelmen kívül hagyása lemaradáshoz vezethet a versenytársakhoz képest. Ez különösen igaz a felhő alapú technológiák, a mesterséges intelligencia, valamint az adattudomány terén.
          </li>
        </ul>
        <h2 id="szotar" className="ml-8 text-xl font-bold  text-sky-600 pt-6">10. Szótár:</h2>

        <ul className="pl-[5.3rem] pt-4 list-disc">
  <li className="mb-4">
    <span className="font-bold">E-learning:</span>
    <p className="mt-2">Elektronikus tanulás, amely számítógépes hálózaton keresztül történő távoktatást jelent.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Gamifikáció:</span>
    <p className="mt-2">Játékelemek és játéktervezési technikák alkalmazása nem játékos környezetben, például az oktatásban, a felhasználói élmény és az elkötelezettség növelése érdekében.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">UX (User Experience):</span>
    <p className="mt-2">Felhasználói élmény, amely a felhasználó és egy termék, rendszer vagy szolgáltatás közötti interakció minden aspektusát magában foglalja.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">API (Application Programming Interface):</span>
    <p className="mt-2">Alkalmazásprogramozási felület, amely lehetővé teszi különböző szoftverek közötti kommunikációt és adatcserét.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">GDPR (General Data Protection Regulation):</span>
    <p className="mt-2">Az Európai Unió általános adatvédelmi rendelete, amely szabályozza a személyes adatok kezelését és védelmét.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">SSL/TLS:</span>
    <p className="mt-2">Secure Sockets Layer/Transport Layer Security, biztonsági protokollok, amelyek titkosított kapcsolatot biztosítanak az interneten keresztül.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Skálázhatóság:</span>
    <p className="mt-2">Egy rendszer azon képessége, hogy növekvő terhelés mellett is hatékonyan működjön és bővíthető legyen.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Frontend:</span>
    <p className="mt-2">A szoftver azon része, amellyel a felhasználó közvetlenül interakcióba lép, általában a felhasználói felületet jelenti.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Backend:</span>
    <p className="mt-2">A szoftver háttérben működő része, amely az adatfeldolgozást és -tárolást végzi, és a frontendnek szolgáltatja az adatokat.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">DDoS (Distributed Denial of Service):</span>
    <p className="mt-2">Elosztott szolgáltatásmegtagadással járó támadás, amely egy rendszer túlterhelésével próbálja megakadályozni annak normál működését.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Reszponzív dizájn:</span>
    <p className="mt-2">Olyan webtervezési megközelítés, amely lehetővé teszi, hogy a weboldal vagy alkalmazás automatikusan alkalmazkodjon a különböző képernyőméretekhez és eszközökhöz.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">LMS (Learning Management System):</span>
    <p className="mt-2">Tanulásmenedzsment rendszer, amely az oktatási anyagok kezelésére, kurzusok szervezésére és a tanulók előrehaladásának nyomon követésére szolgál.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Mesterséges intelligencia (AI):</span>
    <p className="mt-2">Olyan számítógépes rendszerek és algoritmusok összessége, amelyek képesek emberi intelligenciát igénylő feladatok elvégzésére, például tanulásra, problémamegoldásra és döntéshozatalra.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Felhő alapú szolgáltatások:</span>
    <p className="mt-2">Interneten keresztül elérhető számítástechnikai erőforrások és szolgáltatások, amelyek lehetővé teszik az adatok és alkalmazások távoli tárolását, feldolgozását és elérését.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Adaptív tanulás:</span>
    <p className="mt-2">Olyan oktatási módszer, amely a tanuló egyéni szükségleteihez és teljesítményéhez igazítja a tananyagot és a tanulási folyamatot.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Interaktív tartalom:</span>
    <p className="mt-2">Olyan digitális tananyag, amely aktív részvételt igényel a felhasználótól, például kvízek, szimulációk vagy interaktív videók formájában.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Kollaboratív tanulás:</span>
    <p className="mt-2">Olyan tanulási forma, ahol a résztvevők együttműködnek, megosztják ismereteiket és közösen oldanak meg feladatokat a hatékonyabb tudáselsajátítás érdekében.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Mobilalkalmazás:</span>
    <p className="mt-2">Okostelefonokra vagy táblagépekre tervezett szoftveralkalmazás, amely lehetővé teszi a felhasználók számára a szolgáltatások elérését mobil eszközökön keresztül.</p>
  </li>

  <li className="mb-4">
    <span className="font-bold">Felhasználói visszajelzés:</span>
    <p className="mt-2">A felhasználóktól származó vélemények, javaslatok és értékelések, amelyek segítenek a termék vagy szolgáltatás fejlesztésében és javításában.</p>
  </li>
</ul>

      </div>
    </>
  );
}
export default function Home() {
  const groupMembers = [
    { name: "TÓTH MÁTYÁS", code: "OQH5NH", email: "matyastoth.mail@gmail.com" },
    { name: "VAY DOMINIKA", code: "VM3DIR", email: "vaydominika@gmail.com" },
    { name: "ARDON MILÁN", code: "E00XC3", email: "ardon.milan1@gmail.com" },
    { name: "KOVÁCS ATTILA MARCELL", code: "SEGUV3", email: "kovacsmarci03@gmail.com" },
    { name: "GOMBKÖTŐ ÁBEL MARCELL", code: "C67VWA", email: "gmbkt09@gmail.com" },
  ];

  const tableOfContents = [
    { title: "Bevezetés", id: "introduction" },
    { title: "Projekt áttekintés", id: "project-overview" },
    { title: "Célkitűzések", id: "objectives" },
    { title: "Funkcionalitás", id: "functionality" },
    { title: "Technológiai stack", id: "tech-stack" },
  ];

  return (
    <>
      <div className="flex flex-col h-screen text-gray-600">
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
          <table className="border-collapse border-4 border-gray-400 mb-16">
            <tbody>
              {groupMembers.map((member, index) => (
                <tr key={index}>
                  <td className="border-2 border-gray-400 p-4 text-lg">{member.name}</td>
                  <td className="border-2 border-gray-400 p-4 text-lg">{member.code}</td>
                  <td className="border-2 border-gray-400 p-4 text-lg">{member.email}</td>
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
          <table className="mb-16 border-collapse underline text-blue-600 hover:text-blue-900 transition-colors duration-200">
            <tbody>
              {tableOfContents.map((item, index) => (
                <tr key={index}>
                  <td className="px-52">
                    <a href={`#${item.id}`} className="text-blue-600 hover:text-blue-900 transition-colors duration-200">
                      {index + 1}. {item.title}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mb-8">
          <h1 className="text-4xl pb-8">1. Bevezetés</h1>
        </div>
        <h2 className="my-8 ml-8">2.2. (A probléma megfogalmazása) min. 2 oldal</h2>
        <h2 className="my-8 ml-8">2.3. (A termék helye) min 1-2 oldal</h2>
        <h2 className="my-8 ml-8">3.4. (Felhasználói környezet)</h2>
        <h2 className="my-8 ml-8">4.2. (A termék használatának előnyei)</h2>
        <h2 className="my-8 ml-8">4.3. (Feltételezések és függőségek)</h2>
        <h2 className="my-8 ml-8">5. (A végtermék jellemzői) min. 2 oldal</h2>
        <h2 className="my-8 ml-8">7. (Minőségi elvárások)</h2>
        <h2 className="my-8 ml-8">9. (Kockázat lista)</h2>
        <h2 className="my-8 ml-8 mb-16">10. (Szótár) min. 1 oldal</h2>

        <div className="flex justify-center mb-8">
        <h1 className="text-4xl pb-8">2. Projekt terv</h1>
      </div>

      <div className="flex justify-center mb-8">
        <h1 className="text-4xl pb-8">3. Munkanapló</h1>
      </div>
      </div>
    </>
  );
}

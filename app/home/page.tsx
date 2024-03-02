"use client";

import Link from "next/link";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Line } from "react-chartjs-2";
import Chart from "react-google-charts";
import { useRouter } from "next/navigation";

export default function Home({ children }: { children: any }): any {
  const router = useRouter();
  const dataStatistics = [
    ["Data", "Ilość odwiedzin"],
    ["01-03-2024", 150],
    ["02-03-2024", 200],
    ["03-03-2024", 180],
    ["04-03-2024", 250],
    ["05-03-2024", 300],
    ["06-03-2024", 220],
    ["07-03-2024", 180],
  ];
  const data = [
    {
      klient: "Anna Nowak",
      status: "Aktywny",
      termin: "2024-02-10",
      wartosc: "$1000",
      email: "anna.nowak@example.com",
    },
    {
      klient: "Jan Kowalski",
      status: "Oczekujący",
      termin: "2024-02-15",
      wartosc: "$1500",
      email: "jan.kowalski@example.com",
    },
    {
      klient: "Magdalena Wiśniewska",
      status: "Zakonczony",
      termin: "2024-02-20",
      wartosc: "$2000",
      email: "magdalena.wisniewska@example.com",
    },
    {
      klient: "Piotr Jankowski",
      status: "Anulowany",
      termin: "2024-02-25",
      wartosc: "$1200",
      email: "piotr.jankowski@example.com",
    },
    {
      klient: "Katarzyna Nowak",
      status: "Aktywny",
      termin: "2024-03-01",
      wartosc: "$1800",
      email: "katarzyna.nowak@example.com",
    },
    {
      klient: "Mateusz Kowalczyk",
      status: "Oczekujący",
      termin: "2024-03-05",
      wartosc: "$2500",
      email: "mateusz.kowalczyk@example.com",
    },
    {
      klient: "Agnieszka Zielińska",
      status: "Zakonczony",
      termin: "2024-03-10",
      wartosc: "$3000",
      email: "agnieszka.zielinska@example.com",
    },
    {
      klient: "Łukasz Nowak",
      status: "Aktywny",
      termin: "2024-03-15",
      wartosc: "$2200",
      email: "lukasz.nowak@example.com",
    },
    {
      klient: "Ewa Kaczmarek",
      status: "Anulowany",
      termin: "2024-03-20",
      wartosc: "$1600",
      email: "ewa.kaczmarek@example.com",
    },
    {
      klient: "Michał Lewandowski",
      status: "Oczekujący",
      termin: "2024-03-25",
      wartosc: "$2800",
      email: "michal.lewandowski@example.com",
    },
    // Dodaj więcej danych według potrzeb
  ];

  // Funkcja do określania koloru tła na podstawie statusu
  const getStatusColor = (status) => {
    switch (status) {
      case "Zakonczony":
        return "bg-green-500";
      case "Aktywny":
        return "bg-orange-500";
      case "Oczekujący":
        return "bg-yellow-500";
      case "Anulowany":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };
  // Przykładowe dane w postaci stałej
  const comments = [
    {
      avatar: "https://placekitten.com/40/40",
      author: "Jan Kowalski",
      content: "To jest świetny komentarz!",
      date: "2024-02-10",
      unreaded: true,
    },
    {
      avatar: "https://placekitten.com/40/41",
      author: "Anna Nowak",
      content: "Bardzo ciekawe spostrzeżenie.",
      date: "2024-02-15",
      unreaded: true,
    },
    {
      avatar: "https://placekitten.com/40/42",
      author: "Piotr Nowakowski",
      content: "Ciekawa dyskusja!",
      date: "2024-02-20",
      unreaded: true,
    },
    {
      avatar: "https://placekitten.com/40/43",
      author: "Magdalena Kowalczyk",
      content: "Zakonczone sukcesem!",
      date: "2024-02-25",
      unreaded: false,
    },
    {
      avatar: "https://placekitten.com/40/44",
      author: "Tomasz Nowak",
      content: "Wartość jest imponująca!",
      date: "2024-03-01",
      unreaded: true,
    },
    {
      avatar: "https://placekitten.com/40/45",
      author: "Agnieszka Kowalska",
      content: "Nieoczekiwane zakończenie.",
      date: "2024-03-05",
      unreaded: false,
    },
    {
      avatar: "https://placekitten.com/40/46",
      author: "Karol Nowak",
      content: "Niesamowita historia!",
      date: "2024-03-10",
      unreaded: true,
    },
    {
      avatar: "https://placekitten.com/40/47",
      author: "Monika Kowalska",
      content: "Ciekawy punkt widzenia.",
      date: "2024-03-15",
      unreaded: false,
    },
    {
      avatar: "https://placekitten.com/40/48",
      author: "Grzegorz Nowak",
      content: "Dziękuję za udział!",
      date: "2024-03-20",
      unreaded: true,
    },
    {
      avatar: "https://placekitten.com/40/49",
      author: "Weronika Kowalska",
      content: "Podziwiam za kreatywność.",
      date: "2024-03-25",
      unreaded: false,
    },
    // Dodaj więcej danych według potrzeb
  ];

  return (
    <main className="flex">
      <div className="w-full">
        <div className="mt-0 w-full flex gap-4">
          <div className="p-5 bg-white shadow-lg rounded-md">
            <h1 className="flex pb-4">
              <b>Aktywne Zlecenia</b>
            </h1>
            <div className="shadow-lg overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Klient
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Termin
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Wartość
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Mapowanie danych i tworzenie wierszy */}
                  {data.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-100 cursor-pointer"
                      onClick={() => router.push("/projects/1/projekt")}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {row.klient}
                      </td>
                      <td>
                        <button
                          className={`whitespace-nowrap ${getStatusColor(
                            row.status
                          )} text-white font-bold py-2 px-4 rounded`}
                        >
                          {row.status}
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {row.termin}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {row.wartosc}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {row.email}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="p-5 bg-white shadow-lg rounded-md overflow-auto w-full">
            <h1 className="flex pb-4 ">
              <b>Aktywnosc</b>
            </h1>
            <div className="max-w-2xl mx-auto">
              <ul className="divide-y divide-gray-200">
                {/* Mapowanie danych i tworzenie elementów listy */}
                {comments.slice(0, 8).map((comment, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <div
                      className={`py-4 flex ${
                        comment.unreaded ? "font-semibold" : ""
                      }`}
                    >
                      {/* Zdjęcie z lewej strony */}
                      <img
                        src={comment.avatar}
                        alt="Avatar"
                        className="h-10 w-10 rounded-full"
                      />

                      {/* Treść komentarza i informacje o autorze z prawej strony */}
                      <div className="ml-4">
                        <div className="flex items-center">
                          <p className="font-semibold">{comment.author}</p>
                          <p className="text-gray-500 text-xs ml-2">
                            {comment.date}
                          </p>
                        </div>
                        <p className="text-gray-800">{comment.content}</p>
                      </div>
                    </div>
                    {comment.unreaded && (
                      <div className="text-red-500 ">
                        <FiberManualRecordIcon />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-5 w-full flex gap-4">
          <div className="p-5 bg-white shadow-lg rounded-md w-full">
            <h1 className="flex pb-4">
              <b>Statystyki</b>
            </h1>
            <div className="">
              <Chart
                width={"100%"}
                height={"400px"}
                chartType="LineChart"
                loader={<div>Ładuję wykres...</div>}
                data={dataStatistics}
                options={{
                  title: "Ilość odwiedzin na wizytowki w ciągu ostatnich 7 dni",
                  hAxis: {
                    title: "Data",
                  },
                  vAxis: {
                    title: "Ilość odwiedzin",
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="mt-20"></div>
        {/* <Link href="/home/dom">Home/dom</Link> */}
      </div>
    </main>
  );
}

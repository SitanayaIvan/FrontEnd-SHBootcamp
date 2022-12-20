import CardCourse from "../components/card-course";

export default function PublicSpeaking() {
  const countCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function listCourse(label, titleCard) {
    return (
      <div className="ml-20 mb-12">
        <h2 className="font-bold text-4xl mb-16 underline">{label}</h2>
        <div key={15} className="flex overflow-x-auto scroll-smooth space-x-10">
          {countCard.map((card) => {
            return (
              <CardCourse
                key={1}
                title={titleCard}
                image={"negotiation-skills.jpeg"}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-screen">
      <div className="ml-[520px]">
        <div className="relative bg-blue-400">
          <img
            className="absolute -left-32"
            width={300}
            height={300}
            src="blob-programming.svg"
            alt="background.svg"
          />
          <img
            className="absolute left-14 top-11"
            width={300}
            height={300}
            src="blob-public-speaking.svg"
            alt="background3.svg"
          />
          <img
            className="absolute"
            width={300}
            height={300}
            src="blob-content-writing.svg"
            alt="background2.svg"
          />
        </div>
        <h1 className="absolute flex flex-col text-center font-[Courgette] text-[80px] pt-20 -ml-36">
          Public Speaking <span className="text-5xl">Course</span>
        </h1>
      </div>

      <div className="flex space-x-5 justify-center items-center w-screen mt-[60vh] mb-24">
        <label className="font-semibold text-lg" htmlFor="inputSearch">
          Search
        </label>
        <input
          className="w-3/4 border-2 border-slate-300 rounded-lg p-2 text-lg"
          type="search"
          placeholder="Searching by course name"
        />
      </div>

      {listCourse("Negotiation", "Negotiation basic")}
      {listCourse("Presentation", "Presentation basic")}
      {listCourse("Leadership", "Leadership basic")}
      {listCourse("Marketing", "Marketing basic")}
      {listCourse("Others", "Promotion product basic")}
    </div>
  );
}

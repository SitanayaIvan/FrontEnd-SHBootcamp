export default function CardBenefit(props) {
  const className =
    "flex flex-col items-center w-[30rem] h-full rounded-2xl shadow-xl hover:-translate-y-1 hover:scale-105 " +
    props.background;
  return (
    <div className={className}>
      <img className="mb-10" src={props.image} alt="background" />
      <div className="px-4">
        <h1 className="font-[Poppins] text-center text-white text-4xl mb-8">
          {props.title}
        </h1>
        <p className="text-xl text-white text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          voluptates porro facere molestias. Architecto nostrum nemo enim facere
          rem consequuntur ab possimus minima autem, dolor distinctio sit.
        </p>
      </div>
      <button className="bg-white w-3/4 rounded-xl py-2 my-10 active:scale-105">
        <p className="text-2xl text-blue-500 font-semibold">Learn more</p>
      </button>
    </div>
  );
}

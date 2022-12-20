export default function CardCourse(props) {
  // For five stars
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="bg-blue-400 flex flex-col w-72 h-fit justify-center items-center rounded-lg shadow-lg hover:scale-105 ease-in-out duration-300">
      <img
        className="mb-2 w-full"
        src={props.image}
        alt="java-programming.jpg"
      />
      <h3 className="font-semibold text-center text-2xl w-80">{props.title}</h3>
      <div className="flex flex-col">
        <div key={12} className="flex space-x-1">
          {stars.map((star) => {
            return (
              <img
                key={8}
                src="star.svg"
                width={15}
                height={15}
                alt="star.svg"
              />
            );
          })}
        </div>
        <p className="text-xs text-center">(127 users)</p>
      </div>
      <p className="text-sm text-center p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat totam
        velit minima! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Id molestias natus voluptas.
      </p>

      <div className="w-4/5">
        <button className="border-2 border-slate-400 w-full h-full bg-blue-700 text-lg font-semibold px-4 rounded-xl my-4 hover:border-black active:border-4 active:border-black">
          Register
        </button>
      </div>
    </div>
  );
}

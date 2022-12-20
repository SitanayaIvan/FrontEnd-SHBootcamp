export default function CardTestimoni(props) {
  return (
    <div className="bg-blue-600 w-96 h-fit rounded-xl hover:scale-105 ease-in-out duration-200 hover:border-slate-300 hover:border-2 shadow-lg">
      <div className="">
        <p className="text-center text-white mb-8 text-lg">{props.message}</p>
        <div className="flex mb-2">
          <img
            className="rounded-full mr-5"
            width={80}
            height={80}
            src="testimoni-profile.jpg"
            alt="profile"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-white font-bold text-xl">{props.name}</h3>
            <p className="text-white text-base">{props.school}</p>
          </div>
        </div>
        <div>
          <h2 className="text-white text-center font-semibold text-xl">
            {props.result}
          </h2>
        </div>
      </div>
    </div>
  );
}

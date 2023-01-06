export default function CardTestimoni(props) {
  return (
    <div className="bg-blue-900 w-80 h-fit rounded-xl hover:scale-105 ease-in-out duration-200 hover:border-slate-300 hover:border-2 hover:bg-blue-600 hover:bg-opacity-80 shadow-lg">
      <div className="flex flex-col items-center pt-10 mb-6">
        <img
          className="rounded-full mr-5"
          width={120}
          height={120}
          src="testimoni-profile.jpg"
          alt="profile"
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-white font-bold text-xl">{props.name}</h3>
          <p className="text-white text-base">{props.school}</p>
        </div>
      </div>
      <p className="text-center text-white mb-8 text-xl">{props.message}</p>
      <div className="pb-5">
        <h2 className="text-white text-center font-semibold text-xl">
          {props.result}
        </h2>
      </div>
    </div>
  );
}

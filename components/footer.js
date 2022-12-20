export default function Footer() {
  return (
    <div className="flex flex-col h-screen justify-end">
      <div className="w-screen h-full max-h-[450px] py-12 bg-blue-500 border-t-2 border-blue-400 shadow-xl">
        <div className="flex flex-col items-center mb-5">
          <img className="w-24 h-24" src="/logo.png" alt="logo.png" />
          <p className="w-3/4 my-5 text-center">
            Sandang D Street No.8, RT.2/RW.11, Palmerah, Palmerah district, West
            Jakarta, DKI Jakarta 11480
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-center font-bold mb-9">
            Do you have problem or want be partner? please contact us!
          </p>
          <div className="flex justify-between px-14">
            <div className="text-center">
              <p className="font-semibold">Contact us by phone</p>
              <p>+62 812 4594 5958</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">Contact us by email</p>
              <p>shbootcamp@gmail.com</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">Contact us by instagram</p>
              <p>@shbootcamp.id</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-400 w-full h-[0.10rem] mt-10 rounded-lg">
          <p className="text-center pt-3">
            Copyright 2022 © S&H Bootcamp All rights reserve.
          </p>
        </div>
      </div>
    </div>
  );
}

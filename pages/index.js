import Link from "next/link";
import CardBenefit from "../components/card-benefit";
import CardCourse from "../components/card-course";
import CardTestimoni from "../components/card-testimoni";

export default function Home() {
  const countCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <div className="relative -mt-14 mb-14 shadow-md">
        <img
          className="absolute w-full h-[36rem]"
          src="soft-skill.jpg"
          alt="background.jpg"
        />
        <div className="w-full h-[36rem] bg-blue-900 opacity-90 pl-10">
          <div className="flex items-center">
            <div className="pt-28 w-[28rem]">
              <h1 className="font-[Poppins] text-blue-300 text-5xl mb-5">
                <span>Dream Together,</span> <br />
                <span>Learn Together,</span> <br />
                <span>Success Together</span>
              </h1>
              <p className="text-white font-semibold text-xl">
                S&H Bootcamp has produced generations of competitive
                professionals in the professional industry
              </p>
            </div>

            <div>
              <h2 className="font-bold text-center text-white text-4xl pt-10">
                Best Courses
              </h2>
              <div
                key={11}
                className="flex py-5 px-2 mx-8 w-[45rem] overflow-x-scroll scroll-smooth space-x-5"
              >
                {countCard.map((card) => {
                  return (
                    <CardCourse
                      key={3}
                      image="java-programming.jpg"
                      title="Java Programming 101"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full pb-10 pt-52">
        <div className="flex flex-col relative justify-center items-center">
          <div className="flex flex-col absolute justify-center items-center -left-72 -rotate-12">
            <img
              className="rounded-3xl absolute hover:animate-bounce"
              src="public-speaking.jpg"
              width={230}
              height={230}
              alt="public-speaking.png"
            />
            <img
              src="blob-public-speaking.svg"
              width={300}
              height={300}
              alt="background-public-speaking.svg"
            />
          </div>
          <div className="flex flex-col absolute justify-center items-center -top-64">
            <img
              className="rounded-3xl absolute -mt-8 hover:animate-bounce"
              src="programming-course.jpg"
              width={250}
              height={250}
              alt="programming-course.png"
            />
            <img
              src="blob-programming.svg"
              width={400}
              height={400}
              alt="background-programming-course.svg"
            />
          </div>
          <div className="flex flex-col absolute justify-center items-center -right-[280px] rotate-12">
            <img
              className="rounded-3xl absolute hover:animate-bounce"
              src="content-writing.jpeg"
              width={250}
              height={250}
              alt="content-writing.jpeg"
            />
            <img
              src="blob-content-writing.svg"
              width={300}
              height={300}
              alt="background-content-writing.svg"
            />
          </div>
          <h1 className="text-5xl font-[courgette] w-[400px] absolute text-center">
            What bootcamp do you want?
          </h1>
          <img src="blob.svg" width={400} height={400} alt="blob.svg" />
        </div>
        <div className="flex space-x-10">
          <Link href={"public-speaking"}>
            <div className="px-5 py-5 bg-blue-400 w-52 h-16 rounded-full hover:border-2 hover:border-black active:border-4">
              <p className="text-center">Public Speaking</p>
            </div>
          </Link>

          <Link href={"programming"}>
            <div className="px-5 py-5 bg-blue-400 w-52 h-16 rounded-full hover:border-2 hover:border-black active:border-4">
              <p className="text-center">Programming</p>
            </div>
          </Link>

          <Link href={"content-writing"}>
            <div className="px-5 py-5 bg-blue-400 w-52 h-16 rounded-full hover:border-2 hover:border-black active:border-4">
              <p className="text-center">Content Writing</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="px-16 mt-36 space-y-14 text-justify">
        <h1 className="font-[courgette] font-bold text-5xl text-center">
          What is S&H Bootcamp?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          nihil illo quo nulla harum quas voluptate voluptatibus accusantium
          maxime mollitia dolorem suscipit perspiciatis praesentium aperiam non
          tenetur, voluptas dolore sunt? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Vel, labore minima delectus nulla nisi quis, iste
          voluptatem est impedit tenetur beatae ipsum natus nostrum, quos
          praesentium dolore doloribus aut fugiat. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptatem porro quis dolorem quia
          impedit architecto ut, veritatis velit animi, minima consequuntur modi
          unde repellat, corporis est recusandae fugiat veniam quo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          omnis doloremque reiciendis quas temporibus sit deserunt possimus
          eveniet dolor suscipit. Ipsum odio sint, quibusdam est animi impedit
          quas mollitia molestias! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Deserunt provident, veniam tempora voluptas est,
          placeat perspiciatis perferendis adipisci eos culpa fugiat ex harum
          cumque eaque dolores consequatur, reprehenderit possimus facere. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Amet ipsam iure
          maiores error itaque quo atque commodi, ea, voluptas quae ut eos
          consectetur? Repellat molestias perferendis obcaecati praesentium
          quibusdam dolore!
        </p>
      </div>

      <div className="px-16 mt-44 space-y-24 text-justify">
        <h1 className="font-[courgette] font-bold text-5xl text-center">
          Benefits
        </h1>
        <div key={2} className="grid grid-cols-2 gap-2 gap-y-24 ml-10">
          <CardBenefit
            title="Gain Networking"
            image="java-programming.jpg"
            background="bg-blue-500"
          />
          <CardBenefit
            title="Gain Networking"
            image="java-programming.jpg"
            background="bg-green-300"
          />
          <CardBenefit
            title="Gain Networking"
            image="java-programming.jpg"
            background="bg-red-300"
          />
          <CardBenefit
            title="Gain Networking"
            image="java-programming.jpg"
            background="bg-violet-400"
          />
        </div>
      </div>
      <div className="mt-44 space-y-24 text-justify">
        <h1 className="font-[courgette] font-bold text-5xl text-center">
          Testimony
        </h1>
        <div className="flex justify-center space-x-16 px-10">
          <CardTestimoni
            message="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          totam adipisci reprehenderit! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit.'"
            name="Angelina Anastasya"
            school="Hamilton University Student"
            result="'Accepted as Software Engineer intern at Google'"
          />
          <CardTestimoni
            message="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          totam adipisci reprehenderit! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit.'"
            name="Angelina Anastasya"
            school="Hamilton University Student"
            result="'Accepted as Software Engineer intern at Google'"
          />
          <CardTestimoni
            message="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          totam adipisci reprehenderit! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit.'"
            name="Angelina Anastasya"
            school="Hamilton University Student"
            result="'Accepted as Software Engineer intern at Google'"
          />
        </div>
      </div>
    </div>
  );
}

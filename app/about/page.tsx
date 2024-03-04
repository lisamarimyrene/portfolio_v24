import { Navbar } from "../../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="pt-10 pb-20 px-6 bg-purple-dark text-purple-light">
        <h1 className="leading-[100%]">Hi, I'm Lisa!</h1>
        <h1 className="text-orange mb-4">Fullstack developer</h1>
        <h3>
          I approach my work with creativity and structured methodology,
          focusing on developing innovative web concepts using user-centered
          methods.
        </h3>
      </section>
      <div className="px-6 bg-purple-light w-full h-full pb-16 pt-8 z-1 absolute rounded-t-3xl mt-[-26px]">
        <p>hello</p>
      </div>
    </>
  );
}

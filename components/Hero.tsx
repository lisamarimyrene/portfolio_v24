import { Button } from "./Button";

export function Hero() {
  return (
    <div className="bg-purple-dark h-auto text-purple-light px-6 md:px-20 py-3 pt-8 md:py-16 md:pb-2">
      <h1 className="md:leading-[130%] text-4xl lg:text-8xl">Lisa Mari Myrene</h1>
      <h2 className="md:leading-[90%] md:mb-8 mb-6 text-orange text-xl lg:text-4xl">
        Code, design & user-experience
      </h2>
      <p className="text-lg">
        I am dedicated in developing and prototyping modern and robust web
        solutions.
      </p>
      <div className="mt-12 w-full md:w-[415px] h-[180px] flex flex-col md:flex-row md:justify-between">
        <Button
          href="/about"
          variant="orange"
          size="default"
          text="Get to know me"
        />
        <Button
          href="https://www.linkedin.com/in/lisamarimyrene/"
          variant="whiteStroke"
          size="default"
          text="Connect with me"
        />
      </div>
    </div>
  );
}

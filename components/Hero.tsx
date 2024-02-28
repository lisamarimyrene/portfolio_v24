import { Button, buttonVariants } from "./Button";

export function Hero() {
  return (
    <div className="bg-purple-dark h-auto text-purple-light px-6 md:px-20 py-6 md:py-16 pb-8 md:pb-16">
      <h1 className="md:leading-[130%]">Lisa Mari Myrene</h1>
      <h2 className="md:leading-[90%] md:mb-8 mb-6 text-orange">
        Code, design & user-experience
      </h2>
      <p className="text-lg">
        I am dedicated in developing and prototyping modern and robust web
        solutions.{" "}
      </p>
      <div className="mt-12 w-[350px] flex justify-between">
        <Button
          href="/about"
          variant="orange"
          size="default"
          text="Get to know me"
        />
        <Button
          href="linkedIn"
          variant="whiteStroke"
          size="default"
          text="Connect with me"
        />
      </div>
    </div>
  );
}

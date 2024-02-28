import Link from "next/link";

export function NavbarDesktop() {
  return (
    <div className="w-full flex flex-row justify-between items-center bg-purple-dark text-purple-light px-20 py-2">
      <nav className="flex justify-between w-24">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
      </nav>
      <div className="flex flex-col items-center">
        <h4>Lisa Mari Myrene</h4>
        <h4>Developer</h4>
      </div>
      <div className="flex justify-between w-32">
        <p>SoMe1</p>
        <p>SoMe2</p>
      </div>
    </div>
  );
}

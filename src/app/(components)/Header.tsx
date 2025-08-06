import { Button } from "@/app/(components)/Button";
import { Wrapper } from "@/app/(components)/Wrapper";
import Link from "next/link";

export const Header = () => {
  return (
    <Wrapper>
      <header className="flex h-[60px] items-center justify-between">
        <h1 className="font-bold text-xl">appium</h1>
        <div className="flex items-center gap-8">
          <p className="font-medium hidden sm:block">
            <Link href="mailto:hello@appium.pl">hello@appium.pl</Link>
          </p>
          <Link href="#kontakt">
            <Button>Kontakt</Button>
          </Link>
        </div>
      </header>
    </Wrapper>
  );
};

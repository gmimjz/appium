import { Wrapper } from "@/app/(components)/Wrapper";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="border-t border-gray pt-4">
      <Wrapper>
        <div>
          <div className="flex flex-col gap-8 md:flex-row md:justify-between min-h-[256px]">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold">appium</h2>
              <p>Aplikacje, aplikacje, aplikacje</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 pb-4">
              <div className="flex flex-col gap-4 w-full md:w-[160px] lg:w-[192px]">
                <p className="text-xl font-bold">Kontakt</p>
                <div className="flex flex-col gap-2">
                  <p>
                    <Link href="mailto:hello@appium.pl" target="_blank">
                      hello@appium.pl
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full md:w-[160px] lg:w-[192px]">
                <p className="text-xl font-bold">Menu</p>
                <div className="flex flex-col gap-2">
                  <p>Główna</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full md:w-[160px] lg:w-[192px]">
                <p className="text-xl font-bold">Sociale</p>
                <div className="flex flex-col gap-2">
                  <p className="underline">
                    <Link href="https://facebook.com/" target="_blank">
                      Facebook
                    </Link>
                  </p>
                  <p className="underline">
                    <Link href="https://instagram.com/" target="_blank">
                      Instagram
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <div className="border-t border-gray">
        <Wrapper>
          <p className="h-12 flex items-center">
            &copy; appium 2025. Wszelkie prawa zastrzeżone.
          </p>
        </Wrapper>
      </div>
    </div>
  );
};

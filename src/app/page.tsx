"use client";

import { Button } from "@/app/(components)/Button";
import { Card } from "@/app/(components)/Card";
import { Cursor } from "@/app/(components)/Cursor";
import { Footer } from "@/app/(components)/Footer";
import { Header } from "@/app/(components)/Header";
import { Input } from "@/app/(components)/Input";
import { Project } from "@/app/(components)/Project";
import { Question } from "@/app/(components)/Question";
import { Review } from "@/app/(components)/Review";
import { Section } from "@/app/(components)/Section";
import { Stat } from "@/app/(components)/Stat";
import { Step } from "@/app/(components)/Step";
import { Textarea } from "@/app/(components)/Textarea";
import { QUESTIONS } from "@/app/(utils)/consts";
import { Color } from "@/app/(utils)/enums";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ReactLenis } from "lenis/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { isMobile } from "react-device-detect";
import "swiper/css";
import "swiper/css/pagination";
import { useMediaQuery } from "usehooks-ts";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function Home() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(
    null
  );

  const [isArrow, setIsArrow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const paginationRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef(null);

  const isMd = useMediaQuery("(min-width: 768px)");

  return (
    <div
      className="flex flex-col gap-32"
      data-scroll-container
      ref={containerRef}
    >
      <ReactLenis root />
      {!isMobile && <Cursor isArrow={isArrow} />}
      <Header />
      <div className="flex flex-col gap-32">
        <Section title="Aplikacje, aplikacje, aplikacje">
          <div className="flex gap-4 lg:gap-8 flex-col lg:flex-row">
            <Card
              color={Color.Green}
              title="Strony internetowe"
              onHover={() => setIsArrow(true)}
              onLeave={() => setIsArrow(false)}
            >
              Profesjonalne i nowoczesne strony internetowe dopasowane do twoich
              potrzeb.
            </Card>
            <Card
              color={Color.Yellow}
              title="Aplikacje internetowe"
              onHover={() => setIsArrow(true)}
              onLeave={() => setIsArrow(false)}
            >
              Szybkie i niezawodne aplikacje internetowe, które zapewniają
              komfort korzystania.
            </Card>
            <Card
              color={Color.Red}
              title="Sklepy e-commerce"
              onHover={() => setIsArrow(true)}
              onLeave={() => setIsArrow(false)}
            >
              Nowoczesne sklepy online, które przyciągają i zwiększają sprzedaż.
            </Card>
            <Card
              color={Color.Blue}
              title="Aplikacje mobilne"
              onHover={() => setIsArrow(true)}
              onLeave={() => setIsArrow(false)}
            >
              Intuicyjne i wydajne aplikacje mobilne, aby być bliżej ciebie.
            </Card>
            <Card
              color={Color.Violet}
              title="Aplikacje desktopowe"
              onHover={() => setIsArrow(true)}
              onLeave={() => setIsArrow(false)}
            >
              Dedykowane aplikacje desktopowe stworzone z myślą o wygodzie i
              efektywności.
            </Card>
          </div>
        </Section>
        <Section title="O nas" isHorizontal>
          <div className="flex flex-col gap-8">
            <p className="font-bold text-xl">
              Realizujemy projekty kompleksowo — od analizy i koncepcji, przez
              design, aż po pełne wdrożenie. Każdy etap dopasowujemy do potrzeb
              i możliwości klienta, oferując przemyślane rozwiązania, które
              łączą estetykę, funkcjonalność i efektywność.
            </p>
            <div className="flex flex-col gap-8 md:flex-row md:gap-16">
              <Stat stat={0} description="skończonych projektów" />
              <Stat stat={2} description="lat doświadczenia" />
              <Stat stat={0} description="zadowolonych klientów" />
            </div>
          </div>
        </Section>
        <Section title="Jak działamy">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row">
              <Step number={1} title="Analiza">
                Zaczynamy od poznania Twojego biznesu oraz celów. Dokładnie
                analizujemy potrzeby, by zaproponować projekt idealnie
                dopasowany do Twoich wymagań.
              </Step>
              <Step number={2} title="Projektowanie">
                Na tym etapie tworzymy koncepcję działania aplikacji oraz
                projektujemy jej interfejs. Dbamy o intuicyjność, estetykę i
                wygodę użytkowników, aby korzystanie było proste i przyjemne.
              </Step>
              <Step number={3} title="Tworzenie">
                Budujemy aplikację, kładąc nacisk na jakość kodu, stabilność i
                wydajność. Pracujemy transparentnie, informując Cię o postępach
                na każdym kroku.
              </Step>
            </div>
            <div className="flex flex-col md:flex-row">
              <Step number={4} title="Testowanie" isDown>
                Sprawdzamy, czy aplikacja działa bez zarzutu, eliminujemy błędy
                i optymalizujemy działanie. Testujemy na różnych urządzeniach i
                przeglądarkach, by zapewnić pełną kompatybilność.
              </Step>
              <Step number={5} title="Wdrożenie" isDown>
                Stawiamy aplikację na serwerze, w sklepie lub na urządzeniu,
                dbając o to, żeby wszystko działało sprawnie i bez
                niespodzianek.
              </Step>
              <Step number={6} title="Utrzymanie" isDown>
                Zapewniamy wsparcie techniczne, aktualizacje oraz dalszy rozwój
                projektu, by aplikacja stale spełniała Twoje oczekiwania i była
                bezpieczna.
              </Step>
            </div>
          </div>
        </Section>
        <Section title="Zaufali nam" isHorizontal>
          <div className="pb-8">
            <Swiper
              spaceBetween={32}
              slidesPerView={isMd ? 2 : 1}
              pagination={{
                clickable: true,
                el: paginationRef.current,
              }}
              modules={[Pagination]}
            >
              <SwiperSlide>
                <Review name="Jakub Zielonka" company="appium">
                  Przykładowa opinia
                </Review>
              </SwiperSlide>
              <SwiperSlide>
                <Review name="Jakub Zielonka" company="appium">
                  Przykładowa opinia
                </Review>
              </SwiperSlide>
              <SwiperSlide>
                <Review name="Jakub Zielonka" company="appium">
                  Przykładowa opinia
                </Review>
              </SwiperSlide>
              <SwiperSlide>
                <Review name="Jakub Zielonka" company="appium">
                  Przykładowa opinia
                </Review>
              </SwiperSlide>
              <SwiperSlide>
                <Review name="Jakub Zielonka" company="appium">
                  Przykładowa opinia
                </Review>
              </SwiperSlide>
            </Swiper>
            <div
              ref={paginationRef}
              className="flex justify-center mt-4 md:mt-8"
            ></div>
          </div>
        </Section>
        <Section title="Nasze realizacje">
          <div className="flex flex-col lg:flex-row">
            <Project
              type="Strona internetowa"
              title="Facebook"
              imageUrl="/project.webp"
              onHover={() => setIsArrow(true)}
              onLeave={() => setIsArrow(false)}
            >
              Serwis społecznościowy, w ramach którego zarejestrowani
              użytkownicy mogą tworzyć sieci i grupy, dzielić się wiadomościami
              i zdjęciami oraz korzystać z aplikacji, będący własnością Meta
              Platforms z siedzibą w Menlo Park.
            </Project>
            <Project
              type="Strona internetowa"
              title="Facebook"
              imageUrl="/project.webp"
              onHover={() => setIsArrow(true)}
              onLeave={() => setIsArrow(false)}
            >
              Serwis społecznościowy, w ramach którego zarejestrowani
              użytkownicy mogą tworzyć sieci i grupy, dzielić się wiadomościami
              i zdjęciami oraz korzystać z aplikacji, będący własnością Meta
              Platforms z siedzibą w Menlo Park.
            </Project>
            <Project
              type="Strona internetowa"
              title="Facebook"
              imageUrl="/project.webp"
              isLast
              onHover={() => setIsArrow(true)}
              onLeave={() => setIsArrow(false)}
            >
              Serwis społecznościowy, w ramach którego zarejestrowani
              użytkownicy mogą tworzyć sieci i grupy, dzielić się wiadomościami
              i zdjęciami oraz korzystać z aplikacji, będący własnością Meta
              Platforms z siedzibą w Menlo Park.
            </Project>
          </div>
        </Section>
        <Section title="Porozmawiajmy" isHorizontal>
          <form
            className="bg-white p-4 flex flex-col gap-8 rounded-xl"
            id="kontakt"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Input
                title="Imię"
                error={errors.name?.message}
                {...register("name", { required: "Imię jest wymagane" })}
              />
              <Input
                title="E-mail"
                error={errors.email?.message}
                {...register("email", {
                  required: "Adres e-mail jest wymagany",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Adres e-mail jest nieprawidłowy",
                  },
                })}
              />
            </div>
            <Textarea
              title="Opowiedz nam co potrzebujesz?"
              error={errors.message?.message}
              {...register("message", {
                required: "Wiadomość jest wymagana",
              })}
            />
            <div className="flex justify-end">
              <Button isBlack type="submit">
                Wyślij
              </Button>
            </div>
          </form>
        </Section>
        <Section title="Często zadawane pytania" isHorizontal>
          <div className="divide-y min-h-[256px]">
            {QUESTIONS.map(({ question, answer }, index) => (
              <Question
                question={question}
                isOpen={openQuestionIndex === index}
                onClick={() =>
                  setOpenQuestionIndex(
                    openQuestionIndex === index ? null : index
                  )
                }
                key={index}
              >
                {answer}
              </Question>
            ))}
          </div>
        </Section>
      </div>
      <Footer />
    </div>
  );
}

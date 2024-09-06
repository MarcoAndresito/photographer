"use client";

export default function Header({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="text-center mx-auto my-12 max-w-72 sm:max-w-[38rem] md:max-w-[46rem] lg:max-w-[62rem]">
      <h1 className="mb-4 text-5xl sm:text-8xl md:text-9xl lg:text-[10rem]">
        {title}
      </h1>
      <p className="text-xs sm:text-base md:text-lg lg:text-[1.6rem]">
        {subtitle}
      </p>
    </section>
  );
}

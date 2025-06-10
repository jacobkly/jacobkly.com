import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/Button";
import { FileDown, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const JACOB_BIRTH_YEAR = 2005;
const LIMIT = 4;

export default async function Home() {
  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <Image
          className="rounded-lg"
          src="/jacob.jpg"
          alt="Photo of Jacob"
          width={220}
          height={220}
          priority
        />
        <div className="flex flex-col">
          <h1 className="title text-5xl font-serif">heyy jacob here 👋</h1>
          <p className="mt-2 font-medium">
            {new Date().getFullYear() - JACOB_BIRTH_YEAR}
            yo software engineer from Washington
          </p>
          <p className="mt-8 max-w-sm">
            Student by day, full-stack dev by night, and musician on weekends.
          </p>

          <section className="mt-8 flex items-center gap-8">
            <Link href="/resume.pdf" target="_blank">
              <Button variant="outline" className="cursor-pointer">
                <span className="font-semibold">Resume</span>
                <FileDown className="ml-2 size-5" />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>

      <Experience />

      <section className="flex flex-col gap-8">
        <h2 className="title text-2xl sm:text-3xl font-serif">skills</h2>
        <Skills />
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl font-serif">featured projects</h2>
          <LinkWithIcon
            href="https://github.com/jacobkly"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Projects limit={LIMIT} />
      </section>

    </article >
  );
}
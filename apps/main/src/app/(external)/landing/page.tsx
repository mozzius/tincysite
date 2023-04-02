import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@tincy/components/ui/accordion";
import { buttonVariants } from "@tincy/components/ui/button";

import { cn } from "~/lib/utils";

export default function Homepage() {
  return (
    <main>
      <HeroSection />
      <PitchSection />
      <ProcessSection />
    </main>
  );
}

const HeroSection = () => (
  <>
    <div className="relative h-screen min-h-[600px] overflow-hidden">
      <Panel className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 space-y-8 translate-y-[calc(-50%+100px)] md:-translate-y-2/3">
        <h1 className="max-w-xl text-6xl font-medium">
          Your next website costs £0 up front
        </h1>
        <p className="max-w-lg text-xl sm:text-gray-600">
          We handle literally everything, letting you focus on what you do best.
          No more hassle.
        </p>
        <Link
          href="/sign-up"
          className={cn(buttonVariants({ size: "lg", hasIcon: true }))}
        >
          Get yours today
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-2"
          />
        </Link>
        <ul className="mt-4 w-max list-disc pl-4 text-lg text-gray-600 portrait:hidden">
          <li>Beatiful, modern designs</li>
          <li>Flat monthly fee - only £100!</li>
          <li>100% fully managed</li>
        </ul>
        <div className="aspect-video w-full overflow-hidden rounded shadow-2xl md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://i.tincy.pics/clfzdn2g600002e6946c2sb64"
            alt="website screenshot"
            className="h-full w-full object-cover"
          />
        </div>
      </Panel>
      {/* background shapes */}
      <div className="absolute inset-0 -z-20 max-h-screen">
        <div className="bg-grid-paper absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white to-80% md:bg-gradient-to-t" />
        <div className="absolute left-1/2 top-1/2 h-[200vh] w-[200vw] origin-center -translate-x-0 translate-y-[-20%] -rotate-45 bg-indigo-300 md:-translate-x-1/4 md:translate-y-0" />
        <div className="absolute left-1/2 top-1/2 h-[200vh] w-[200vw] origin-center -translate-x-1/4 translate-y-0 rotate-[-23deg] bg-indigo-400" />
        <div className="absolute left-1/2 top-1/2 h-[200vh] w-[200vw] origin-center -translate-x-1/4 translate-y-[10%] -rotate-6 bg-indigo-500" />
      </div>
    </div>
    {/* foreground images - different panel due to overflow issues */}
    <div className="pointer-events-none absolute top-0 z-10 hidden h-[200vh] min-h-[600px] w-full items-center overflow-x-hidden overflow-y-visible pb-[100vh] md:flex">
      <Panel>
        <div className="relative h-96 w-full">
          <div
            className="absolute inset-x-0 transform-gpu overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="relative left-1/2 top-full aspect-[1155/678] w-full -translate-x-1/2 bg-gradient-to-tr from-indigo-400 to-indigo-500 opacity-30"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="pointer-events-auto absolute bottom-0 aspect-video w-1/2 translate-x-1/4 rounded-lg bg-white shadow-2xl md:right-24 lg:right-32 xl:right-48">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://i.tincy.pics/clfzdgz1j00002e69ksdb81lu"
              alt="website screenshot"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
          <div
            className="absolute inset-x-0 transform-gpu overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="relative left-1/2 top-full aspect-[1155/678] w-full -translate-x-1/2 bg-gradient-to-tr from-indigo-400 to-indigo-500 opacity-30 lg:-translate-y-1/4 xl:-translate-y-[40%]"
              style={{
                clipPath:
                  "polygon(91.94% 99.37%, 93.86% 86.87%, 91.01% 69.54%, 89.67% 55.37%, 77.22% 48.78%, 64.97% 49.08%, 61.71% 56.48%, 54.02% 51.32%, 51.09% 70.54%, 44.74% 67.07%, 16.38% 83.61%, 21.89% 91.95%, 43.97% 101.97%, 59.58% 102.66%, 72.28% 103.23%, 87.19% 105.09%)",
              }}
            />
          </div>
          <div className="pointer-events-auto absolute bottom-[-40%] aspect-video w-1/2 rounded-lg bg-white shadow-2xl md:right-24 lg:right-32 xl:right-48">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://i.tincy.pics/clfzdn2g600002e6946c2sb64"
              alt="website screenshot"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </Panel>
    </div>
  </>
);

const PitchSection = () => (
  <div className="bg-indigo-500 py-8 text-white">
    <Panel className="flex flex-col gap-4 text-center">
      <h2 className="text-5xl font-medium">
        Websites are a hassle... why exactly?
      </h2>
      <p className="mt-8">
        For most businesses, they&apos;re a means to an end. So why is it such a
        pain?
      </p>
      <p>
        We&apos;re on a mission to simplify the process of getting your business
        online.
      </p>
      <p>No more Wordpress, templates, domain management.</p>
      <p>
        We handle literally everything, and let you do what you do best - your
        business.
      </p>
      <p className="mt-8">All with £0 up front.</p>
    </Panel>
  </div>
);

const ProcessSection = () => (
  <div className="bg-white py-8">
    <Panel className="space-y-4">
      <h2 className="text-center text-xl font-medium">Our Process</h2>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Step 1: Tell us about yourself</AccordionTrigger>
          <AccordionContent>
            Tell us about your business, and what content you want on your
            website. You also need to give us your logo and other brand details
            you might have, like colours and fonts.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Step 2: Pick a theme</AccordionTrigger>
          <AccordionContent>
            We&apos;ll consult with you to figure out which of our preset themes
            would work best for you. We currently have 0 themes to choose from,
            with more coming soon.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Step 3: Wait</AccordionTrigger>
          <AccordionContent>
            We&apos;ll create your website, no effort from you required!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Step 4: Launch</AccordionTrigger>
          <AccordionContent>
            If you&apos;re happy for what we&apos;ve built, then we&apos;ll
            launch your site. We&apos;ll handle all the complicated domain and
            hosting stuff, as well as SEO.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Panel>
  </div>
);

interface Props extends React.PropsWithChildren {
  className?: string;
}
const Panel = ({ className, ...rest }: Props) => (
  <section
    className={cn("container mx-auto p-8 md:px-16", className)}
    {...rest}
  />
);

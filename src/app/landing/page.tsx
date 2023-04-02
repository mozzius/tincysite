import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
      <Panel className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 space-y-8 portrait:-translate-y-1/2 landscape:-translate-y-2/3">
        <h1 className="max-w-xl text-6xl font-medium">
          Your next website costs £0 up front
        </h1>
        <p className="max-w-xl text-xl text-gray-600">
          We handle literally everything, letting you focus on what you do best
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
        <ul className="mt-4 w-max list-disc pl-4 text-lg portrait:hidden">
          <li>Beatiful, modern designs</li>
          <li>Flat monthly fee - only £100!</li>
          <li>100% fully managed</li>
        </ul>
        <div className="aspect-video w-full overflow-hidden rounded shadow-2xl landscape:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://i.tincy.pics/clfzdn2g600002e6946c2sb64"
            alt="website screenshot"
            className="h-full w-full object-cover"
          />
        </div>
      </Panel>
      {/* background shapes */}
      <div className="absolute inset-0 z-0 max-h-screen">
        <div className="bg-grid-paper absolute inset-0 z-0" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-white to-80% sm:bg-gradient-to-t" />
        <div className="absolute left-1/2 top-1/2 z-0 h-[200vh] w-[200vw] origin-center -translate-x-0 translate-y-[-20%] -rotate-45 bg-indigo-300 md:-translate-x-1/4 md:translate-y-0" />
        <div className="absolute left-1/2 top-1/2 z-0 h-[200vh] w-[200vw] origin-center -translate-x-1/4 translate-y-0 rotate-[-23deg] bg-indigo-400" />
        <div className="absolute left-1/2 top-1/2 z-0 h-[200vh] w-[200vw] origin-center -translate-x-1/4 translate-y-[10%] -rotate-6 bg-indigo-500" />
      </div>
    </div>
    {/* foreground images - different panel due to overflow issues */}
    <div className="pointer-events-none absolute top-0 z-20 flex h-screen min-h-[600px] w-full items-center">
      <Panel>
        <div className="relative h-96 w-full">
          <div className="absolute bottom-0 hidden aspect-video w-1/2 translate-x-1/4 overflow-hidden rounded-lg bg-white shadow-2xl md:right-24 md:block lg:right-32 xl:right-48">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://i.tincy.pics/clfzdgz1j00002e69ksdb81lu"
              alt="website screenshot"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-[-40%] hidden aspect-video w-1/2 overflow-hidden rounded-lg bg-white shadow-2xl md:right-24 md:block lg:right-32 xl:right-48">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://i.tincy.pics/clfzdn2g600002e6946c2sb64"
              alt="website screenshot"
              className="h-full w-full object-cover"
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
    className={cn("container mx-auto p-8 md:px-16 lg:px-32", className)}
    {...rest}
  />
);

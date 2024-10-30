"use client";

import { useState } from "react";
import Footer from "./Footer";

export default function AboutUs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-full">
      <div className="bg-white dark:bg-slate-900">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-orange-600 sm:text-6xl">
                About Us
              </h1>
            </div>
            <div className="mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
              <section className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Who We Are
                </h3>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  FUTURE QUEST is a company that helps students and
                  professionals study or work abroad. We make it easier for
                  people to find opportunities around the world.
                </p>
              </section>
              <section className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  What We Do
                </h3>
                <ul className="mt-4 text-lg text-gray-600 dark:text-gray-300 list-disc list-inside">
                  <li>
                    <strong>Help Students:</strong> We assist students in
                    finding the right schools and programs abroad. We've helped
                    over 700 students get into good universities worldwide.
                  </li>
                  <li className="mt-2">
                    <strong>Help Job Seekers:</strong> We support professionals
                    looking for work in other countries. We help with job
                    searches and applications.
                  </li>
                  <li className="mt-2">
                    <strong>Offer Test Prep:</strong> We provide resources for
                    important tests like IELTS, TOEFL, GMAT, GRE, and SAT.
                  </li>
                </ul>
              </section>
              <section className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Our Goals
                </h3>
                <ul className="mt-4 text-lg text-gray-600 dark:text-gray-300 list-disc list-inside">
                  <li>
                    To make studying and working abroad possible for everyone
                  </li>
                  <li className="mt-2">
                    To guide people through the process of applying to schools
                    or jobs in other countries
                  </li>
                  <li className="mt-2">
                    To help our clients succeed in their international education
                    and careers
                  </li>
                </ul>
              </section>
              <section className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Why Choose Us
                </h3>
                <ul className="mt-4 text-lg text-gray-600 dark:text-gray-300 list-disc list-inside">
                  <li>
                    We have experience: We've helped many people succeed abroad
                  </li>
                  <li className="mt-2">
                    We care about your goals: We create plans that fit what you
                    want
                  </li>
                  <li className="mt-2">
                    We support you: We're here to help from start to finish
                  </li>
                </ul>
              </section>
              <section className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Our Team
                </h3>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  Our staff knows a lot about education and jobs around the
                  world. We're ready to help you with your international plans.
                </p>
              </section>
              <section className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Contact Us
                </h3>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  Want to learn more or start your journey abroad? Get in touch
                  with us:
                </p>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                  Email:{" "}
                  <a
                    href="mailto:team@questfuture.net"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    team@questfuture.net
                  </a>
                </p>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  Let's work together to make your international dreams come
                  true!
                </p>
              </section>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            {/* <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          /> */}
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

import { useState } from "react";
import PostList from "../components/PostList";
import { getAllPosts } from "../lib/api";
import Post from "../models/post";

type Props = {
  allPosts: Post[];
};

const experience = [
  {
    years: "2024 - Now",
    title: "Software Engineer, Voice AI",
    company: "Ada",
    href: "https://ada.cx",
    details:
      "Production AI agents, Unified Reasoning Engine work, multilingual knowledge ingestion, CPaaS cost reduction, voice UX, and evals.",
  },
  {
    years: "2021 - 2024",
    title: "Software Engineer",
    company: "Amadeus",
    href: "https://amadeus.com/en",
    details: "A/B testing, cloud migration, MFA systems, Kubernetes, and high-availability platforms.",
  },
  {
    years: "2019 - 2021",
    title: "Founding Software Engineer",
    company: "Neurovine",
    href: "https://neurovine.ai",
    details: "Built HIPAA-compliant serverless APIs, real-time ML inference, and wearable EEG integrations.",
  },
  {
    years: "2017 - 2019",
    title: "Research Assistant",
    company: "IoT Lab @ Carleton University",
    href: "https://carleton.ca",
    details: "Published ML research for smart grids and built real-time multimodal data systems.",
  },
];

const notableWork = [
  {
    title: "Brisa",
    href: "https://joinbrisa.com",
    details: "Founder of an AI wealth platform with 1000+ users, $58m+ assets tracked, and #1 Fintech on Product Hunt.",
  },
  {
    title: "SPC x OpenAI Hackathon",
    href: "https://x.com/tomas_hk/status/1764725667130991022",
    details: "Built an AI tool for reducing online polarization using NLP and GPT-based reasoning.",
  },
  {
    title: "Handshake",
    href: "https://github.com/boshd/handshake",
    details: "Real-time group chat iOS app with event management.",
  },
  {
    title: "RP",
    href: "https://github.com/boshd/rp",
    details: "High-performance HTTP proxy with LRU caching.",
  },
];

const Home = ({ allPosts }: Props) => {
  const [activeTab, setActiveTab] = useState<"blog" | "experience">("experience");

  return (
    <main className="min-w-0 overflow-hidden break-words font-body text-neutral-900 dark:text-neutral-100">
      <section className="pt-6 pb-12">
        <p className="text-lg leading-none">Kareem Arab</p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Applied AI Engineer</p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Remote</p>
      </section>

      <section className="space-y-4 text-[15px] leading-7 text-gray-700 dark:text-gray-300">
        <p className="text-sm text-neutral-900 dark:text-neutral-100">About</p>
        <p>
          I build production AI systems for agents, voice, and finance. Currently at{" "}
          <a
            className="underline decoration-gray-300 underline-offset-2 hover:text-neutral-900 dark:decoration-gray-700 dark:hover:text-neutral-100"
            href="https://ada.cx"
            target="_blank"
            rel="noreferrer"
          >
            Ada
          </a>{" "}
          working on enterprise AI agents, reasoning infrastructure, multilingual knowledge ingestion, voice UX, and eval
          loops. I also build{" "}
          <a
            className="underline decoration-gray-300 underline-offset-2 hover:text-neutral-900 dark:decoration-gray-700 dark:hover:text-neutral-100"
            href="https://joinbrisa.com"
            target="_blank"
            rel="noreferrer"
          >
            Brisa
          </a>
          , an AI wealth platform.
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          <a
            className="underline decoration-gray-300 underline-offset-2 hover:text-neutral-900 dark:decoration-gray-700 dark:hover:text-neutral-100"
            href="mailto:me@kareemarab.com"
          >
            Email
          </a>
          <a
            className="underline decoration-gray-300 underline-offset-2 hover:text-neutral-900 dark:decoration-gray-700 dark:hover:text-neutral-100"
            href="https://github.com/boshd"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="underline decoration-gray-300 underline-offset-2 hover:text-neutral-900 dark:decoration-gray-700 dark:hover:text-neutral-100"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <a
            className="underline decoration-gray-300 underline-offset-2 hover:text-neutral-900 dark:decoration-gray-700 dark:hover:text-neutral-100"
            href="https://joinbrisa.com"
            target="_blank"
            rel="noreferrer"
          >
            Brisa
          </a>
        </div>
      </section>

      <section className="pt-12">
        <div className="inline-flex rounded-md border border-gray-200 bg-gray-50 p-1 text-sm dark:border-gray-800 dark:bg-neutral-950">
          <button
            type="button"
            aria-pressed={activeTab === "experience"}
            onClick={() => setActiveTab("experience")}
            className={`rounded-md px-4 py-1 transition ${
              activeTab === "experience"
                ? "bg-white text-neutral-900 ring-1 ring-gray-200 dark:bg-neutral-900 dark:text-neutral-100 dark:ring-gray-800"
                : "text-gray-500 hover:text-neutral-900 dark:text-gray-400 dark:hover:text-neutral-100"
            }`}
          >
            Experience
          </button>
          <button
            type="button"
            aria-pressed={activeTab === "blog"}
            onClick={() => setActiveTab("blog")}
            className={`rounded-md px-4 py-1 transition ${
              activeTab === "blog"
                ? "bg-white text-neutral-900 ring-1 ring-gray-200 dark:bg-neutral-900 dark:text-neutral-100 dark:ring-gray-800"
                : "text-gray-500 hover:text-neutral-900 dark:text-gray-400 dark:hover:text-neutral-100"
            }`}
          >
            Blog
          </button>
        </div>
      </section>

      <section className="pt-10">
        {activeTab === "blog" ? (
          <div>
            <p className="mb-5 text-sm text-neutral-900 dark:text-neutral-100">Blog</p>
            <PostList posts={allPosts} />
          </div>
        ) : (
          <div className="space-y-10">
            <div>
              <p className="mb-6 text-sm text-neutral-900 dark:text-neutral-100">Experience</p>
              <div className="space-y-6">
                {experience.map((item) => (
                  <article
                    key={`${item.company}-${item.years}`}
                    className="grid min-w-0 gap-1 text-sm text-gray-600 dark:text-gray-400 sm:grid-cols-[92px_1fr] sm:gap-5"
                  >
                    <p className="text-gray-400 dark:text-gray-500">{item.years}</p>
                    <div className="min-w-0">
                      <p className="text-neutral-900 dark:text-neutral-100">
                        {item.title} at{" "}
                        <a
                          className="underline decoration-gray-300 underline-offset-2 hover:text-neutral-900 dark:decoration-gray-700 dark:hover:text-neutral-100"
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {item.company}
                        </a>
                      </p>
                      <p className="mt-1 leading-6">{item.details}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-6 text-sm text-neutral-900 dark:text-neutral-100">Selected Work</p>
              <div className="space-y-4">
                {notableWork.map((item) => (
                  <article key={item.title} className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                    <a
                      className="text-neutral-900 underline decoration-gray-300 underline-offset-2 hover:text-neutral-900 dark:text-neutral-100 dark:decoration-gray-700 dark:hover:text-neutral-100"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.title}
                    </a>
                    <span> - {item.details}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "category", "date", "slug", "author", "coverImage", "excerpt"]);

  return {
    props: { allPosts },
  };
};

import Image from "next/image";
import { Mail, ArrowUpRight, LinkedinIcon } from "lucide-react";
import { AboutMe } from "@/data/aboutme";

interface ProfileSectionProps {
  aboutMe: AboutMe;
}

export function ProfileSection({ aboutMe }: ProfileSectionProps) {
  if (!aboutMe) {
    return null;
  }

  return (
    <div className="md:sticky top-12 flex flex-row-reverse md:flex-col gap-4 md:space-y-8">
      {aboutMe.imageUrl && (
        <div className="w-1/3 md:w-full shrink-0">
          <div className="relative max-h-[45vh] md:w-[65%] aspect-3/4">
            <Image
              src={aboutMe.imageUrl}
              alt={aboutMe.name}
              fill
              priority
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      )}
      <div className="w-2/3 md:w-full">
        <h1 className="font-serif text-3xl font-light tracking-wide mb-3">
          {aboutMe.name}
        </h1>
        {aboutMe.altName && (
          <p className="text-zinc-600 text-md leading-relaxed tracking-wide mb-6">
            {aboutMe.altName}
          </p>
        )}
        <p className="text-zinc-600 text-xs leading-relaxed tracking-wide uppercase mb-6">
          {aboutMe.title}
          <br />
          {aboutMe.institutionUrl ? (
            <a
              href={aboutMe.institutionUrl}
              className="hover:text-zinc-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {aboutMe.institution}
            </a>
          ) : (
            aboutMe.institution
          )}
        </p>
        <div className="flex gap-6 mb-6">
          {aboutMe.blogUrl && (
            <a
              href={aboutMe.blogUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Blog</span>
            </a>
          )}
          {aboutMe.cvUrl && (
            <a
              href={aboutMe.cvUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">CV</span>
            </a>
          )}
        </div>
        <div className="space-y-2">
          <a
            href={`mailto:${aboutMe.email}`}
            className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={14} />
            {aboutMe.email}
          </a>
          {aboutMe.linkedin && (
            <>
              <br />
              <a
                href={`https://www.linkedin.com/in/${aboutMe.linkedin.url}`}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon size={14} />
                linkedin.com/in/{aboutMe.linkedin.username}
              </a>
            </>
          )}
          {aboutMe.languages && aboutMe.languages.length > 0 && (
            <>
              <h2 className="font-serif text-l pt-4 mb-4 tracking-wide uppercase">
                Languages
              </h2>
              <ul className="space-y-1">
                {aboutMe.languages.map(({ language, level }) => (
                  <li key={language} className="text-sm text-zinc-600">
                    {language} - {level}
                  </li>
                ))}
              </ul>
            </>
          )}
          {aboutMe.softSkills && aboutMe.softSkills.length > 0 && (
            <>
              <h2 className="font-serif text-lg pt-4 mb-4 tracking-wide uppercase">
                Soft Skills
              </h2>
              <ul className="flex flex-wrap gap-2">
                {aboutMe.softSkills.map(({ label }) => (
                  <li
                    key={label}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-600"
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </>
          )}
          {aboutMe.hardSkills && aboutMe.hardSkills.length > 0 && (
            <>
              <h2 className="font-serif text-lg pt-4 mb-4 tracking-wide uppercase">
                Hard Skills
              </h2>
              <ul className="flex flex-wrap gap-2">
                {aboutMe.hardSkills.map(({ label }) => (
                  <li
                    key={label}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-600"
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}


export const FooterCopyWriter = () => {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2024 + (currentYear > 2024 ? `-${currentYear}` : "");

  const copyrightName = "LHV";

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
        <div className="mx-auto flex w-full">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith(".")
              ? "."
              : ""}{"  "}
            All rights reserved.
          </p>
          <p className="md:ml-auto">
            <a
              href="https://github.com/andresinho20049" target="_blank"
              className="text-black dark:text-white"
            >
              Created by Andresinho20049
            </a>
          </p>
      </div>
    </footer>
  );
}
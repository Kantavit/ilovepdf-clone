import ToolCards from "@/components/toolCards";
import { pdfTools } from "@/components/toolData";

export default function Home() {
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center py-8 px-11 text-center text-pretty"
        style={{ height: "200px" }}
      >
        <h1 className="font-bold tablet:text-4xl mobile:text-3xl tiny:text-2xl">
          Every tool you need to work with PDFs in one place
        </h1>

        <p className="font-light pt-1.5 text-center text-pretty tablet:text-xl mobile:text-base tiny:text-xs laptop:w-3/4">
          Every tool you need to use PDFs, at your fingertips. All are 100% FREE
          and easy to use! Merge, split, compress, convert, rotate, unlock and
          watermark PDFs with just a few clicks.
        </p>
      </div>

      <div className="grid desktopMedium:grid-cols-6 desktopSmall:grid-cols-5 laptop:grid-cols-4 tablet:grid-cols-3 mobile:grid-cols-2 tiny:grid-cols-1 px-16 justify-center items-center gap-y-0.5 gap-x-1.5">
        {pdfTools.map((tool, i) => (
          <ToolCards
            key={i}
            icon={tool.icon}
            title={tool.name}
            description={tool.description}
          />
        ))}
      </div>
    </div>
  );
}

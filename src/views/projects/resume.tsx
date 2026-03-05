import { useState } from "react"

const Resume = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const slides = [
    { src: "images/bg1.png", alt: "bg1" },
    { src: "images/bg2.png", alt: "bg2" },
  ]

  return (
    <div className="rounded-xl bg-white border border-zinc-200 shadow-sm p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-black mb-1">웹 이력서</h2>
      <p className="text-sm text-zinc-500 mb-6">2022.06</p>

      <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className="md:w-7/12 relative">
          <img
            className="w-full h-72 object-cover rounded-lg"
            src={slides[activeSlide].src}
            alt={slides[activeSlide].alt}
            loading="lazy"
          />
          <div className="flex justify-center gap-2 mt-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === activeSlide ? "bg-black" : "bg-zinc-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="md:w-5/12 flex flex-col gap-4">
          {[
            { label: "GitHub", value: "" },
            { label: "URL", value: "" },
            { label: "기술스택", value: "" },
            { label: "주요기능", value: "" },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-start gap-3 pb-3 border-b border-zinc-100">
              <span className="text-xs font-semibold text-zinc-500 w-16 shrink-0 pt-0.5">{label}</span>
              <span className="text-sm text-zinc-800">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Resume
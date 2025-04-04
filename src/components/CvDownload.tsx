import DownloadButton from "./ui/DownloadButton"

export default function CvDownload() {
  return (
    <a href='/CV/esdrasCV.pdf' download='esdrasCV.pdf' aria-label="Curriculum Vitae" className="w-50 z-25 transition-all duration-300 h-12 gap-3 relative text-lg flex items-center justify-center rounded-lg hover:border-secundaria border-transparent border-1"><DownloadButton /> 
    <span>Download CV</span>
    </a>
  )
}
import Navbar from "../components/common/Navbar";
import CyberBackground from "../components/common/CyberBackground";
import IcraceProceeding from "../assets/ICRACE Proceeding -Front Page.pdf";
import ResearchPaper from "../assets/Research Paper.pdf";
import Sem1Report from "../assets/Sem-1 Report.pdf";
import Sem2Report from "../assets/Sem-2 Report.pdf";
import ProjectPhaseI from "../assets/Project Phase - I.pdf";
import ProjectPhaseII from "../assets/Project Phase - II.pdf";
import ProjectPhaseIII from "../assets/Project Phase - III.pdf";
import CertAditya from "../assets/203-AI-Powered Cybersecurity Web Application Firewall for Threat Detection and Response--Aditya Balaji Bhavar .pdf";
import CertMrunal from "../assets/203-AI-Powered Cybersecurity Web Application Firewall for Threat Detection and Response--Mrunal Nivrutti Tambe .pdf";
import CertRushikesh from "../assets/203-AI-Powered Cybersecurity Web Application Firewall for Threat Detection and Response--Rushikesh Dattatray Raut .pdf";
import CertSsupanekar from "../assets/203-AI-Powered Cybersecurity Web Application Firewall for Threat Detection and Response--S S Supanekar.pdf";
import CertSakshi from "../assets/203-AI-Powered Cybersecurity Web Application Firewall for Threat Detection and Response--SAKSHI DHAIRYASHIL SABALE.pdf";

function Dashboard() {
  const certificates = [
    {
      title:
        "203 - AI-Powered Cybersecurity WAF for Threat Detection and Response (Aditya Balaji Bhavar)",
      file: CertAditya,
    },
    {
      title:
        "203 - AI-Powered Cybersecurity WAF for Threat Detection and Response (Mrunal Nivrutti Tambe)",
      file: CertMrunal,
    },
    {
      title:
        "203 - AI-Powered Cybersecurity WAF for Threat Detection and Response (Rushikesh Dattatray Raut)",
      file: CertRushikesh,
    },
    {
      title:
        "203 - AI-Powered Cybersecurity WAF for Threat Detection and Response (S S Supanekar)",
      file: CertSsupanekar,
    },
    {
      title:
        "203 - AI-Powered Cybersecurity WAF for Threat Detection and Response (Sakshi Dhairyashil Sabale)",
      file: CertSakshi,
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <CyberBackground />
      <Navbar />

      <div className="px-5 py-10 md:px-10">
        <section className="mx-auto mt-10 w-[80%]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                  Research & Reports
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-cyan-300">
                  Paper, Proceeding, and Project Documents
                </h2>
              </div>
              <p className="text-xs text-gray-400">
                Click any card to open the full PDF
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                { title: "ICRACE Proceeding", file: IcraceProceeding },
                { title: "Research Paper", file: ResearchPaper },
              ].map((doc) => (
                <a
                  key={doc.title}
                  href={doc.file}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-white/10 bg-black/40 p-4 transition hover:border-cyan-400/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">
                      {doc.title}
                    </span>
                    <span className="text-xs text-cyan-300">Open PDF</span>
                  </div>
                  <div className="mt-3 overflow-hidden rounded-xl border border-white/5">
                    <iframe
                      title={doc.title}
                      src={doc.file}
                      className="h-64 w-full bg-black"
                    />
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                { title: "Semester 1 Report", file: Sem1Report },
                { title: "Semester 2 Report", file: Sem2Report },
              ].map((report) => (
                <a
                  key={report.title}
                  href={report.file}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-white/10 bg-black/30 p-4 transition hover:border-emerald-400/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">
                      {report.title}
                    </span>
                    <span className="text-xs text-emerald-300">Open PDF</span>
                  </div>
                  <div className="mt-3 overflow-hidden rounded-xl border border-white/5">
                    <iframe
                      title={report.title}
                      src={report.file}
                      className="h-52 w-full bg-black"
                    />
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                { title: "Project Phase I", file: ProjectPhaseI },
                { title: "Project Phase II", file: ProjectPhaseII },
                { title: "Project Phase III", file: ProjectPhaseIII },
              ].map((phase) => (
                <a
                  key={phase.title}
                  href={phase.file}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-white/10 bg-black/30 p-4 transition hover:border-sky-300/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">
                      {phase.title}
                    </span>
                    <span className="text-xs text-sky-300">Open PDF</span>
                  </div>
                  <div className="mt-3 overflow-hidden rounded-xl border border-white/5">
                    <iframe
                      title={phase.title}
                      src={phase.file}
                      className="h-44 w-full bg-black"
                    />
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-purple-200">
                Certificates (203 Series)
              </h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {certificates.map((cert) => (
                  <a
                    key={cert.title}
                    href={cert.file}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-purple-300/60"
                  >
                    <div className="text-sm font-semibold text-white">
                      {cert.title}
                    </div>
                    <div className="mt-3 overflow-hidden rounded-xl border border-white/5">
                      <iframe
                        title={cert.title}
                        src={cert.file}
                        className="h-48 w-full bg-black"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;

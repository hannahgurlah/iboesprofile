import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "School Issued Memorandums | Ibo Elementary School",
  description:
    "Official listing of school issued memorandums from Ibo Elementary School.",
};

type Memorandum = {
  number: string;
  title: string;
  date: string;
  category: string;
  href?: string;
};

const memorandums: Memorandum[] = [
  {
    number: "SIM No. , s. 2026",
    title: "DESIGNATION ORDER FOR THE COMPOSITION OF THE BIDS AND AWARDS COMMITTEE (BAC), SCHOOL INSPECTORATE TEAM (SIT), AND SCHOOL PROPERTY CUSTODIAN",
    date: "February 11, 2026",
    category: "Designation Order",
    href: "https://drive.google.com/file/d/107iXIpNQ69kKZILT0OP-rcaiFXj1Mako/view?usp=drive_link",
  },
  {
    number: "SIM No. , s. 2026",
    title: "ADMINISTRATION OF END-OF-SCHOOL-YEAR (EOSY) ASSESSMENT FOR SCHOOL YEAR 2025 - 2026",
    date: "February 3, 2026",
    category: "Assessment",
    href: "https://drive.google.com/file/d/1vlnZhmlqNVBpn0CJPrwFsBzEOdE1qrK3/view?usp=drive_link",
  },
  {
    number: "SIM No. , s. 2026",
    title: "3RD QUARTER LEARNING ACTION CELL (LAC) SESSION",
    date: "January 4, 2026",
    category: "Learning Action Cell (LAC) Session",
    href: "https://drive.google.com/file/d/1sampleGoogleDrivePdfFileId/view?usp=sharing",
  },
  {
    number: "SIM No. , s. 2026",
    title: "MID YEAR PERFORMANCE REVIEW FOR SCHOOL YEAR 2025-2026",
    date: "January 23, 2026",
    category: "Performance Review",
    href: "https://drive.google.com/file/d/1sampleGoogleDrivePdfFileId/view?usp=sharing",
  },
  {
    number: "SIM No. , s. 2026",
    title: "DESIGNATION AS OFFICER - IN - CHARGE ON DECEMBER 3, 2025",
    date: "November 24, 2025",
    category: "Designation Order",
    href: "https://drive.google.com/file/d/1sampleGoogleDrivePdfFileId/view?usp=sharing",
  },
  {
    number: "SIM No. , s. 2026",
    title: "TEACHERS’ MEETING / CONFERENCE - DISTRICT ATHLETIC MEET",
    date: "October 4, 2025",
    category: "Meeting",
    href: "https://drive.google.com/file/d/1sampleGoogleDrivePdfFileId/view?usp=sharing",
  },
  {
    number: "SIM No. , s. 2026",
    title: "CONDUCT FIRST PERIODICAL EXAM FOR SCHOOL YEAR 2025-2026",
    date: "August 17, 2025",
    category: "Examination",
    href: "https://drive.google.com/file/d/1sampleGoogleDrivePdfFileId/view?usp=sharing",
  },
  {
    number: "SIM No. , s. 2026",
    title: "TEACHERS’ MEETING / CONFERENCE AND COMMITMENT SIGNING",
    date: "January 7, 2026",
    category: "Meeting",
    href: "https://drive.google.com/file/d/1sampleGoogleDrivePdfFileId/view?usp=sharing",
  },
  {
    number: "SIM No. , s. 2026",
    title: "AWARDING OF HONOR LEARNER AND  TEACHERS & STAKEHOLDERS RECOGNITION FOR SCHOOL YEAR 2024-2025",
    date: "April 8, 2025",
    category: "Awarding",
    href: "https://drive.google.com/file/d/1sampleGoogleDrivePdfFileId/view?usp=sharing",
  },
  {
    number: "SIM No. , s. 2026",
    title: "ORIENTATION ON THE INTERIM GUIDELINES FOR THE DEPARTMENT OF EDUCATION PERFORMANCE MANAGEMENT AND EVALUATION SYSTEM FOR TEACHERS IN THE SCHOOL YEAR 2024 - 2025",
    date: "February 13, 2025",
    category: "Orientation",
    href: "https://drive.google.com/file/d/1sampleGoogleDrivePdfFileId/view?usp=sharing",
  },
  {
    number: "SIM No. , s. 2026",
    title: "CONDUCT THE THIRD PERIODICAL EXAM FOR SCHOOL YEAR 2024 - 2025",
    date: "February 10, 2025",
    category: "Orientation",
    href: "https://drive.google.com/file/d/1sampleGoogleDrivePdfFileId/view?usp=sharing",
  },

];

const sortedMemorandums = [...memorandums].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export default function SchoolIssuedMemorandumsPage() {
  return (
    <SiteShell
      eyebrow="Official School Communications"
      title="School Issued Memorandums"
      description="This page provides a centralized listing of official school issued memorandums for learners, parents, teachers, and stakeholders."
    >
      <section className="memorandum-listing">
        <div className="section-heading">
          <h2>School Issued Memorandums</h2>
        </div>

        {sortedMemorandums.length > 0 ? (
          <div className="memorandum-table-wrap">
            <table className="memorandum-table">
              <thead>
                <tr>
                  <th scope="col">Memo No.</th>
                  <th scope="col">Title</th>
                  <th scope="col">Date Issued</th>
                  <th scope="col">Category</th>
                  <th scope="col">File</th>
                </tr>
              </thead>
              <tbody>
                {sortedMemorandums.map((memo) => (
                  <tr key={`${memo.number}-${memo.title}`}>
                    <td>{memo.number}</td>
                    <td>{memo.title}</td>
                    <td>{memo.date}</td>
                    <td>{memo.category}</td>
                    <td>
                      {memo.href ? (
                        <Link className="memorandum-link" href={memo.href} target="_blank">
                          View
                        </Link>
                      ) : (
                        <span className="memorandum-unavailable">Pending</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <article className="panel memorandum-empty">
            <p className="eyebrow">No Memorandums Posted Yet</p>
            <h3>Memorandum files will be listed here once they are uploaded.</h3>
            <p>
              Add future memorandum PDFs or documents to the public assets folder, then add
              their details to this page so stakeholders can view them in one place.
            </p>
          </article>
        )}
      </section>
    </SiteShell>
  );
}

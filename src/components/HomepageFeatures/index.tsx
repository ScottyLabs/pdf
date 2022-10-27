import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type SectionItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  imgUrl?: string;
  description: JSX.Element;
};

type ScheduleItem = {
  time: string;
  link: React.ReactNode;
};

const sectionList: SectionItem[] = [
  {
    title: "A Personal Website for Everyone",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Portfolio Development Fair is an annual series of student-led workshops
        and talks that introduce you to web development centered around
        developing your own personal website. It is a great place to pick up new
        skills that you'll be able to use in your projects, hackathons, and
        classes!
      </>
    ),
  },
  {
    title: "Who we are",
    imgUrl: require("@site/static/img/scottylabs.png").default,
    description: (
      <>
        Portfolio Development Fair is run by{" "}
        <a href="https://www.scottylabs.org/" target="_blank" rel="noreferrer">
          ScottyLabs
        </a>
        . We also run{" "}
        <a href="https://tartanhacks.com/" target="_blank" rel="noreferrer">
          TartanHacks
        </a>{" "}
        (CMU’s largest software hackathon) and other educational events like{" "}
        <a
          href="https://crashcourse.scottylabs.org/"
          target="_blank"
          rel="noreferrer"
        >
          CrashCourse
        </a>
        .
      </>
    ),
  },
];

const scheduleList: ScheduleItem[] = [
  {
    time: "11am - 12pm",
    link: <a href="/content">Content</a>,
  },
  {
    time: "12pm - 1pm",
    link: <a href="/design">Design</a>,
  },
  {
    time: "1pm - 2pm",
    link: "Internship Panel w/ Food!",
  },
  {
    time: "2pm - 3pm",
    link: (
      <>
        <a
          href="https://docs.google.com/presentation/d/1xrW_YdaKAFbzqXDVXpLs-LEE970b10jmDgudJ1XyRRU"
          target="_blank"
          rel="noreferrer"
        >
          HTML
        </a>{" "}
        (
        <a
          href="https://drive.google.com/drive/folders/1MthLDpoYMN5RaF0xMqQdp-niN4qAi1Ra?usp=share_link"
          target="_blank"
          rel="noreferrer"
        >
          Lab
        </a>
        ) |{" "}
        <a
          href="https://docs.google.com/presentation/d/1o52GP6IXR6gikbG0qYRst5qjhPLo_jPjwMm3rUx9-Kc"
          target="_blank"
          rel="noreferrer"
        >
          Javascript
        </a>{" "}
        (
        <a
          href="https://drive.google.com/drive/folders/1D48ONCt-G9QsWrMR2Ki6uHQjFADMICAi?usp=share_link"
          target="_blank"
          rel="noreferrer"
        >
          Lab
        </a>
        )
      </>
    ),
  },
  {
    time: "3pm - 4pm",
    link: (
      <>
        <a
          href="https://docs.google.com/presentation/d/19VVkb2jXxVi6WsbaPCSpI_qn3a0comlNtPTIHpQ0l5s"
          target="_blank"
          rel="noreferrer"
        >
          CSS
        </a>{" "}
        |{" "}
        <a
          href="https://docs.google.com/presentation/d/1o52GP6IXR6gikbG0qYRst5qjhPLo_jPjwMm3rUx9-Kc"
          target="_blank"
          rel="noreferrer"
        >
          Javascript
        </a>{" "}
        (
        <a
          href="https://drive.google.com/drive/folders/1D48ONCt-G9QsWrMR2Ki6uHQjFADMICAi?usp=share_link"
          target="_blank"
          rel="noreferrer"
        >
          Lab
        </a>
        )
      </>
    ),
  },
  {
    time: "4pm - 5pm",
    link: (
      <a
        href="https://docs.google.com/presentation/d/1ROqdAK8_i0HK3BJ330gUbV915o2C-qtZ-dKvg0O6aqU/edit#slide=id.p"
        target="_blank"
        rel="noreferrer"
      >
        Deployment
      </a>
    ),
  },
  {
    time: "5pm - 5:30pm",
    link: "Closing + Raffle",
  },
];

function Section({ title, Svg, imgUrl, description }: SectionItem) {
  const icon =
    Svg == null ? (
      <img src={imgUrl} className={styles.sectionImg} />
    ) : (
      <Svg className={styles.sectionSvg} role="img" />
    );
  return (
    <div className={styles.section}>
      <div>{icon}</div>
      <div className={styles.sectionDetails}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Schedule() {
  return (
    <div className={styles.scheduleSection}>
      <h2>Schedule</h2>

      <div className={styles.scheduleContainer}>
        {scheduleList.map((scheduleItem) => (
          <>
            <div>{scheduleItem.time}</div>
            <div>{scheduleItem.link}</div>
          </>
        ))}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const [aboutFeature, clubFeature] = sectionList;

  return (
    <section className={styles.features}>
      <div className="container">
        <Section {...aboutFeature} />
        <Schedule />
        <Section {...clubFeature} />
      </div>
    </section>
  );
}

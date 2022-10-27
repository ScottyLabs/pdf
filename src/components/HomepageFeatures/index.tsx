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
  start: number;
  end: number;
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
    start: 0,
    end: 0.5,
    time: "11am - 11:30am",
    link: <a href="/content">Opening Ceremony</a>,
  },
  {
    start: 0.5,
    end: 1,
    time: "11:30am - 12pm",
    link: <a href="/content">Content</a>,
  },
  {
    start: 1,
    end: 2,
    time: "12pm - 1pm",
    link: <a href="/design">Design</a>,
  },
  {
    start: 2,
    end: 3,
    time: "1pm - 2pm",
    link: "Internship Panel w/ Food!",
  },
  {
    start: 3,
    end: 4,
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
        )
      </>
    ),
  },
  {
    start: 3,
    end: 5,
    time: "2pm - 4pm",
    link: (
      <>
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
    start: 4,
    end: 5,
    time: "3pm - 4pm",
    link: (
      <a
        href="https://docs.google.com/presentation/d/19VVkb2jXxVi6WsbaPCSpI_qn3a0comlNtPTIHpQ0l5s"
        target="_blank"
        rel="noreferrer"
      >
        CSS
      </a>
    ),
  },
  {
    start: 5,
    end: 6,
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
    start: 6,
    end: 6.5,
    time: "5pm - 5:30pm",
    link: "Closing + Raffle",
  },
];

function time24To12(hour: number): string {
  const meridian = hour >= 12 ? "PM" : "AM";
  const minute = (hour % 1) * 60;
  let minuteStr = String(minute);
  if (minute < 10) {
    minuteStr = "0" + minute;
  }

  const baseHour = Math.floor(hour);
  const hourStr = baseHour == 12 ? baseHour : baseHour % 12;
  return `${hourStr}:${minuteStr} ${meridian}`;
}

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
  const hours = [];
  for (let i = 0; i < 14; i++) {
    hours.push(i);
  }

  return (
    <div className={styles.scheduleSection}>
      <h2>Schedule</h2>

      <div className={styles.scheduleContainer}>
        {hours.map((hour) => {
          const startTime = 11;
          const hourStr = time24To12(hour / 2 + startTime);
          return (
            <div
              className={styles.timeCell}
              style={{
                gridRow: `${hour + 1} / span 1`,
              }}
            >
              {hour % 2 == 0 || hour < 3 ? hourStr : ""}
            </div>
          );
        })}
        {scheduleList.map((scheduleItem, idx) => {
          const { start, end, link } = scheduleItem;
          let colStart = 2;
          if (end - start == 2) {
            colStart = 3;
          }
          const colSpan = 3 <= start && end <= 5 ? 1 : 2;
          return (
            <div
              className={styles.scheduleCell}
              key={idx}
              style={{
                gridRowStart: start * 2 + 1,
                gridRowEnd: end * 2 + 1,
                gridColumn: `${colStart} / span ${colSpan}`,
              }}
            >
              <div>{link}</div>
            </div>
          );
        })}
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

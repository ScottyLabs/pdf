import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  imgUrl?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
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

function Feature({ title, Svg, imgUrl, description }: FeatureItem) {
  const icon =
    Svg == null ? (
      <img src={imgUrl} className={styles.featureImage} />
    ) : (
      <Svg className={styles.featureSvg} role="img" />
    );
  return (
    <div className={clsx("text--center --10")}>
      <div>{icon}</div>
      <div className={styles.featureItem}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Schedule() {
  return (
    <div className="text--center padding-horiz--md">
      <h3>Schedule</h3>
      <p>
        <table className={styles.table}>
          <tr>
            <th>Session</th>
            <th>Time</th>
          </tr>
          <tr>
            <td>
              <a href="/content">Content</a>
            </td>
            <td>11am - 12pm</td>
          </tr>
          <tr>
            <td>
              <a href="/design">Design</a>
            </td>
            <td>12pm - 1pm</td>
          </tr>
          <tr>
            <td>Internship Panel w/ Food!</td>
            <td>1pm - 2pm</td>
          </tr>
          <tr>
            <td>
              <a href="/html">HTML</a> | <a href="/javascript">Javascript</a>
            </td>
            <td>2pm - 3pm</td>
          </tr>
          <tr>
            <td>
              <a href="/css">CSS</a> | <a href="/javascript">Javascript</a>
            </td>
            <td>3pm - 4pm</td>
          </tr>
          <tr>
            <td>
              <a href="deployment">Deployment</a>
            </td>
            <td>4pm - 5pm</td>
          </tr>
          <tr>
            <td>Closing + Raffle</td>
            <td>5pm - 5:30pm</td>
          </tr>
        </table>
      </p>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const [aboutFeature, clubFeature] = FeatureList;

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <Feature {...aboutFeature} />
        </div>
        <div className={clsx("row", styles.centeredRow)}>
          <Schedule />
        </div>
        <div className="row">
          <Feature {...clubFeature} />
        </div>
      </div>
    </section>
  );
}

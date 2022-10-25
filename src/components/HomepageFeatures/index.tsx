import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "A Personal Website for Everyone",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Whether you want to learn a widely-applicable skill, applying for full time jobs, or somewhere
        in between, our workshops are designed to provide you the skills to create a aesthetic and functional
        personal website!

        Our workshop focuses on the fundementals of web development with activities that
        will walk you through the development and deployment of your personal website! We
        have a beginner track, more focused on HTML and CSS, and an advanced track, more focused
        on Javascript integration. At the end of the day, you will have a deployed website and a
        good understanding of the basics of web development.
      </>
    ),
  },
  {
    title: "Who we are",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Portfolio Development Fair is run by <a href="https://www.scottylabs.org/">ScottyLabs</a>. We also run <a href="https://tartanhacks.com/">TartanHacks</a> (CMU’s largest software hackathon) and other educational events like <a href="https://crashcourse.scottylabs.org/">CrashCourse</a>.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("text--center --10")}>
      <div className="">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

      <div className="row" style={{display: "flex", flexDirection: "column", alignItems: "center", whiteSpace: "nowrap"}}>
      <div className="text--center padding-horiz--md ">
        <h3>Schedule</h3>
        <p><table className={styles.table}>
          <tr>
            <th>Session</th>
            <th>Time</th>
          </tr>
          <tr>
            <td><a href="/Content">Content</a></td>
            <td>11am - 12pm</td>
          </tr>
          <tr>
            <td><a href="/Design">Design</a></td>
            <td>12pm - 1pm</td>
          </tr>
          <tr>
            <td>Internship Panel w/ Food!</td>
            <td>1pm - 2pm</td>
          </tr>
          <tr>
            <td><a href="/Html">HTML</a> | <a href="/Javascript">Javascript</a></td>
            <td>2pm - 3pm</td>
          </tr>
          <tr>
            <td><a href="/Css">CSS</a> | <a href="/Javascript">Javascript</a></td>
            <td>3pm - 4pm</td>
          </tr>
          <tr>
            <td><a href="Deployment">Deployment</a></td>
            <td>4pm - 5pm</td>
          </tr>
          <tr>
            <td>Closing + Raffle</td>
            <td>5pm - 5:30pm</td>
          </tr>
        </table></p>
      </div>
      </div>

      </div>
    </section>
  );
}

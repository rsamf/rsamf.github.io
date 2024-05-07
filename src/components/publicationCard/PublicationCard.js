import React from "react";
import {Fade, Slide} from "react-reveal";
import "./PublicationCard.scss";
import Button from "../button/Button";

export default function PublicationCard({publication}) {
  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div>
      <Fade left duration={1000}>
        <div className="publication-card">
          <div className="publication-card-right">
            <p className="publication-text">
                {publication.authors} ({publication.year}). {publication.title}. {publication.conference}.
            </p>
            <div className="publication-text-details">
              <div className="publication-text-bullets">
                <ul>
                  <GetDescBullets descBullets={publication.descBullets} />
                </ul>
              </div>
            </div>
            <Button className="publication-button" text="Read More" href={publication.url} newTab={true} />
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="publication-card-border"></div>
      </Slide>
    </div>
  );
}

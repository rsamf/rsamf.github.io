import React from "react";
import "./Publications.scss";
import PublicationCard from "../../components/publicationCard/PublicationCard";
import {publicationsInfo} from "../../portfolio";

export default function Publications() {
  if (publicationsInfo.display) {
    return (
      <div className="publications-section" id="publications">
        <h1 className="publications-heading">Publications</h1>
        <div className="publications-card-container">
          {publicationsInfo.publications.map((publication, index) => (
            <PublicationCard key={index} publication={publication} />
          ))}
        </div>
        {
            publicationsInfo.currentlyInReview > 0 && (
                <div className="publications-currently-in-review">
                    + {publicationsInfo.currentlyInReview} currently in review
                </div>
            )
        }
      </div>
    );
  }
  return null;
}

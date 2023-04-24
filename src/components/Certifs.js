import React from "react";
import { Card } from "react-bootstrap";

function Certifs() {
    const certifs = [
        {
            certif: "DevOps, Cloud, and Agile Foundations",
            org: "IBM",
            link: "https://coursera.org/verify/specialization/CMH5YNHMM2X2",
            
        },
        {
            certif: "Python Functions, Files, and Dictionaries",
            org: "University of Michigan",
            link: "https://coursera.org/verify/265NKYZ43ZYG"
        },
        {
            certif: "Developing Back-End Apps with Node.js and Express",
            org: "IBM",
            link: "https://coursera.org/verify/N3HEQYE5GBR",
        },
        {
            certif: "Data Collection and Processing with Python",
            org: "University of Michigan",
            link: "https://coursera.org/verify/FB5CWW4QQDRJ",
        },
        {
            certif: "Social skills, Communication, Collaboration",
            org: "HONORIS ONLINE ACADEMY",
            link: "",
        },
        {
            certif: "Entrepreneurial skills, Entrepreneurship",
            org: "HONORIS ONLINE ACADEMY",
            link: "",
        },
    ];
    return (
        <section className="section">
            {
                certifs.map((certif) => (
                <Card key={certif.id} className="mb-3">
                    <Card.Body>
                        <Card.Title>{certif.certif}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {certif.org}
                        </Card.Subtitle>
                        <a href={certif.link} target="_blank" rel="noopener noreferrer">Lien de vérification</a>
                    </Card.Body>
                </Card>
                ))
            }
        </section>
    );
}
export default Certifs;
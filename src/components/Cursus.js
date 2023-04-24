import React from "react";
import { Card } from "react-bootstrap";

function Cursus() {
    const formations = [
        {
            cycle: "Ingénieurie informatique et réseau (IIR option MIAGE)",
            ecole: "Ecole Marocaine des Sciences de l'Ingénieur (EMSI - MARRAKECH)",
            annees: "2021 - 2023",
        },
        {
            cycle: "2 années préparatoires",
            ecole: "Ecole Marocaine des sciences de l'ingénieur de Marrakech",
            annees: "2019 - 2021",
        },
        {
            cycle: "BAC scientifique, option physique/chimie",
            ecole: "Lycée Le Sud Marrakech",
            annees: "2014 - 2016",
        },
    ];
    return (
        <section className="section">
            {formations.map((formation) => (
                <Card key={formation.cycle} className="mb-3">
                    <Card.Body>
                        <Card.Title>{formation.cycle}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {formation.ecole}
                        </Card.Subtitle>
                        <Card.Text>{formation.annees}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </section>
    );
}
export default Cursus;

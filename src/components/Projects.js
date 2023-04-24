import React from 'react';
import { Card } from 'primereact/card';

const ProjetsCard = ({ title, date, projects }) => {
    return (
        <div>
            <Card title={title} footer={date}>
                <div>
                    <ul>
                        {projects.map((project, index) => (
                            <li key={index}>
                                <div>{project.titre}</div>
                                <b>Téchnologies :</b> {project.technologie}
                            </li>
                        ))}
                    </ul>
                </div>
            </Card>
            <br />
        </div>
    );
};

const Projects = () => {
    const data = [
        {
            title: "Projet de stage d'été",
            date: '2022 - 2023',
            projects: [
                {
                    titre:"Application pour la géstion du parc informatique de la direction régionale de BARID AL MAGHRIB",
                    technologie: 'HTML5, CSS3, JS, PHP, MySql',
                },
            ],
        },
        {
            title: "Projet de gestion de stock",
            date: '2022 - 2023',
            projects: [
                {
                    titre:"Application desktop pour la gestion de stock d'un magasin",
                    technologie: 'JAVA, Mysql',
                },
            ],
        },
        {
            title: "Smart home",
            date: '2022 - 2023',
            projects: [
                {
                    titre:"Application desktop pour la gestion des équipements éléctroniques d'une maison",
                    technologie: 'C#, MySql',
                },
            ],
        },
        {
            title: "Projet de gestion d'une bibliothèque",
            date: '2021 - 2022',
            projects: [
                {
                    titre:"Application console pour la gestion des livres d'une bibliothèque",
                    technologie: 'C++',
                },
            ],
        },

    ];

    return (
        <section className="section">
            {data.map((experience, index) => (
                <ProjetsCard
                    key={index}
                    title={experience.title}
                    date={experience.date}
                    projects={experience.projects}
                />
            ))}
        </section>
    );
};

export default Projects;

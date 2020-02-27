import React, { useEffect } from 'react';

import { useStarwarsPeople } from './Hooks';

interface IProps {
    name?: string;
}

export const StarwarsPeople = ({ name }: IProps) => {
    const { people, fetchPeople, error, isLoading } = useStarwarsPeople();

    useEffect(() => {
        fetchPeople(name);
    }, [fetchPeople, name]);

    if (isLoading) {
        return <p>Loading people...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Height</th>
                    <th>Homeworld</th>
                </tr>
            </thead>
            <tbody>
                {people.map((person, index) => (
                    <tr key={index}>
                        <td>{person.name}</td>
                        <td>{person.gender}</td>
                        <td>{person.height}</td>
                        <td>{person.homeworld}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

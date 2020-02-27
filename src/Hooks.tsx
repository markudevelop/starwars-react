import { useState, useCallback } from 'react';

const API_URL = 'https://swapi.co/api';

export interface IPerson {
    name: string;
    gender: string;
    height: string;
    homeworld: string;
}
export type IPeople = IPerson[];

export interface IPeopleResponse {
    count: number;
    results: IPeople;
    next: string | null;
    previous: string | null;
}

export const useStarwarsPeople = () => {
    const [error, setError] = useState<string|null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [people, setPeople] = useState<IPeople>([]);

    const getPeoplePath = (name?: string) => {
        if (name) {
            return `${API_URL}/people?search=${name}`;
        }

        return `${API_URL}/people`;
    };

    const fetchPeople = useCallback((name?: string) => {
        setIsLoading(true);
        setError(null);

        fetch(getPeoplePath(name))
            .then(r => r.json())
            .then((response) => {
                setPeople(response?.results);
                setIsLoading(false);
            }).catch(() => {
                setIsLoading(false);
                setError('Failed to fetch people');
            });
    }, []);

    return {
        people,
        isLoading,
        error,
        fetchPeople,
    };
};

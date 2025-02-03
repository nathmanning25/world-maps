export interface Country {
    name: {
        common: string;
        official: string;
        nativeName: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    cca2: string;
    cca3: string;
    capital: string[];
    region: string;
    subregion: string;
    languages: {
        [key: string]: string;
    };
    latlng: number[];
    borders: string[];
    area: number;
    population: number;
    continents: string[];
    flags: {
        png: string;
        svg: string;
        alt?: string;
    };
}

/**************
 * 
 * Fetch all countries
 * 
 *************/

export async function fetchCountries(): Promise<Country[]> {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all', {
            cache: 'force-cache',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Country[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching countries:', error);
        throw error;
    }
}

/**************
 * 
 * Fetch all countries by region
 * 
 *************/


export async function fetchCountriesByRegion(region: string): Promise<Country[]> {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/region/${region}`, {
            cache: 'force-cache',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Country[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching countries by region:', error);
        throw error;
    }
}

/**************
 * 
 * Fetch country by name
 * 
 *************/

export async function fetchCountriesByName(name: string): Promise<Country[]> {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`, {
            cache: 'force-cache',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Country[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching countries by name:', error);
        throw error;
    }
}

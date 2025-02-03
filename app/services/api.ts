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
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
        if (!baseUrl) {
            throw new Error("API base URL is not defined")
        }

        const response = await fetch(`${baseUrl}all`, {
            cache: "force-cache",
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data: Country[] = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching countries:", error)
        throw error
    }
}

/**************
 *
 * Fetch all countries by region
 *
 *************/

export async function fetchCountriesByRegion(region: string): Promise<Country[]> {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
        if (!baseUrl) {
            throw new Error("API base URL is not defined")
        }

        const response = await fetch(`${baseUrl}region/${region}`, {
            cache: "force-cache",
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data: Country[] = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching countries by region:", error)
        throw error
    }
}

/**************
 *
 * Fetch country by name
 *
 *************/

export async function fetchCountriesByName(name: string): Promise<Country[]> {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
        if (!baseUrl) {
            throw new Error("API base URL is not defined")
        }

        const response = await fetch(`${baseUrl}name/${name}`, {
            cache: "force-cache",
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data: Country[] = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching countries by name:", error)
        throw error
    }
}
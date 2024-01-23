import { Country } from "../interfaces/Country"
import data from "./fileReader";

const localData = data as Country[];

export const getCountriesWithLimit = async (limit = 5) => {
    const listOfCountries: Country[] = localData.slice(0, limit);
    const promise: Promise<Country[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listOfCountries)
        }, 1500);
    })
    return promise;
}

export const getCountryByName = async (name = '') => {
    const country = localData.find(country => country.name.includes(name));
    const promise: Promise<Country | undefined> = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(country)
        }, 1500);
    })
    return promise;
}

export const getCountryByAlpha3Code = async (alphaCode = '') => {
    const country = localData.find(country => country.alpha3Code == alphaCode);
    const promise: Promise<Country | undefined> = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(country)
        }, 1500);
    })
    return promise;
}

export const getCountriesByName = async (name = '') => {
    const listOfCountries = localData.filter(country => country.name.includes(name));
    const promise: Promise<Country[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listOfCountries)
        }, 1500);
    })
    return promise;
}

export const getCountriesByRegion = async (regionName = '') => {
    const listOfCountries = localData.filter(country => country.region == regionName);
    const promise: Promise<Country[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listOfCountries)
        }, 1500);
    })
    return promise;
}
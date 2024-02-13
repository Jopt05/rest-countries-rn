import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { colors } from '../theme/appTheme'
import { SearchInput } from '../components/SearchInput';
import { Filter } from '../components/Filter';
import { CountryElement } from '../components/CountryElement';
import { Header } from '../components/Header';
import { getCountriesByName, getCountriesByRegion, getCountriesWithLimit } from '../utils/countriesService';
import { Country } from '../interfaces/Country';
import { FooterLoader } from '../components/FooterLoader';
import  CurrencyFormater from 'currency-formatter';
import { useForm } from '../hooks/useForm';

export const HomeScreen = () => {

  const { searchQuery, handleChange } = useForm({
    searchQuery: ''
  })

  const [listOfCountries, setListOfCountries] = useState<Country[]>([]);
  const [queryLimit, setqueryLimit] = useState(5);
  const [filter, setFilter] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const handleIncreaseLimit = () => {
    if( isLoading || searchQuery != '' ) return;
    console.log("handleIncreaseLimit");
    setIsLoading(true);
    setqueryLimit( queryLimit + 5 );
  };

  const handleQuery = (value: string) => {
    if( isFirstLoad || filter != '') return;
    console.log("handleQuery");
    setIsLoading(true);
    setFilter('');
    setListOfCountries([]);
    if( value == '' ) {
      setqueryLimit( queryLimit + 1 );
    }
    handleChange(value, 'searchQuery');
  }
  
  const handleFilter = (value: string) => {
    if( isFirstLoad ) return;
    console.log("handleFilter");
    setIsLoading(true);
    handleChange('', 'searchQuery');
    setListOfCountries([]);
    if( value == '' ) {
      setqueryLimit( queryLimit + 1 );
    }
    setFilter(value);
  }

  const renderItem = (country: Country) => {
    return (
      <CountryElement
        capital={ country.capital }
        population={ CurrencyFormater.format(country.population, {precision: 0}) }
        region={ country.region }
        imageUri={ country.flags.png }
        name={ country.name }
      />
    )
  }

  useEffect(() => {
    setIsLoading(true);
  }, [queryLimit])
  

  useEffect(() => {
    getCountriesWithLimit(queryLimit)
      .then(response => {
        setListOfCountries(response);
        setIsLoading(false);
        setIsFirstLoad(false);
      })
  }, [])

  useEffect(() => {
    if( queryLimit == 5 ) return;
    getCountriesWithLimit(queryLimit)
      .then(response => {
        setListOfCountries(response);
        setIsLoading(false);
      })
  }, [queryLimit])

  useEffect(() => {
    if( searchQuery == '' ) {return};
    getCountriesByName(searchQuery)
      .then(response => {
        setListOfCountries(response);
        setIsLoading(false);
      })
  }, [searchQuery])

  useEffect(() => {
    if( filter == '' ) {return};
    getCountriesByRegion(filter)
      .then(response => {
        setListOfCountries(response);
        setIsLoading(false);
      })
  }, [filter])
  
  
  
  return (
    <View style={ styles.mainContainer }>
      <Header />
      <FlatList 
        ListHeaderComponent={
          <View>
            <SearchInput 
              onDebounce={ (value) => handleQuery(value)}
            />
            <Filter 
              currentValue={ filter }
              onChange={ (value) => handleFilter(value) }
            />
          </View>
        }
	      data={ listOfCountries }
	      renderItem={ ({ item }) =>  renderItem(item)}
	      keyExtractor={ (item) => item.alpha2Code}
        onEndReached={ handleIncreaseLimit }
        onEndReachedThreshold={ 0.5 }
        ListFooterComponent={ <FooterLoader isLoading={isLoading}  /> }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
})
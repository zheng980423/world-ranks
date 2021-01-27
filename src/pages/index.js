import CountriesTabel from '../components/CountriesTable/CountriesTabel';
import { useState } from 'react';
import Layout from '../components/Layout/Layout';
import SearchInput from '../components/SearchInput/SearchInput';
import styles from '../styles/Home.module.css';
export default function Home({ countries }) {
  const [keyword, setKeyword] = useState('');
  const filteredCountries = countries.filter(
    country =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );
  const onInputChange = e => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  return (
    <Layout>
      <div className={styles.counts}>发现 {countries.length}个国家和地区</div>
      <SearchInput placeholder="搜索名称，地区" onChange={onInputChange} />
      <CountriesTabel countries={filteredCountries} />
    </Layout>
  );
}
export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const countries = await res.json();
  return {
    props: {
      countries,
    },
  };
};

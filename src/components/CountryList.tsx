import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { ROUTE } from '../router/routes';

interface CountryListProps {
  countries: any[];
}

export const CountryList = ({ countries }: CountryListProps) => {
  return (
    <ul>
      {countries.map((country) => {
        return (
          <li>
            <Link
              to={generatePath(ROUTE.DETAILS, { name: country.name.common })}
            >
              {country.name.common}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

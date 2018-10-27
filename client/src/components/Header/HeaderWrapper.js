import React from 'react';
import { fetchCategories } from '../../services/categories';
import Header from './Header';

const getCategories = async () => {
  const rer = await fetchCategories();
  console.log(rer)
}
getCategories();
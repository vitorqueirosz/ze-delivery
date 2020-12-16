import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Map from '../pages/Map';

import Home from '../pages/Home';
import Location from '../pages/Location';
import Details from '../pages/Details';
import Product from '../pages/Product';
import Bag from '../pages/Bag';
import FinishBag from '../pages/FinishBag';
import Category from '../pages/Category';
import Brand from '../pages/Brand';
import EmptyBag from '../pages/EmptyBag';

const { Navigator, Screen } = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Location" component={Location} />
        <Screen name="Map" component={Map} />
        <Screen name="Details" component={Details} />
        <Screen name="Product" component={Product} />
        <Screen name="Bag" component={Bag} />
        <Screen name="FinishBag" component={FinishBag} />
        <Screen name="Category" component={Category} />
        <Screen name="Brand" component={Brand} />
        <Screen name="EmptyBag" component={EmptyBag} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;

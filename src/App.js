import './App.css';
import React from 'react';
import { SplitScreen } from './SplitScreen';
import { RegularList } from './RegularList';
import { people, products } from './localData';
import { SmallPersonListItem } from './people/SmallPersonListItem';
import { UserInfo } from './people/UserInfo';
import { ProductInfo } from './products/ProductInfo';
import { NumberedList } from './NumberedList';
import { Modal } from './Modal';
import { CurrentUserLoader } from './CurrentUserLoader';
import { UserLoader } from './UserLoader';
import { ResourceLoader } from './ResourceLoader';
import { DataSource } from './DataSource';
import axios from 'axios';
import { UncontrolledForm } from './UncontrolledForm';

const LeftComponent = ({name}) => {
  return <h1 style={{backgroundColor: 'green'}}>{name}</h1>;
}

const RightComponent = ({message="Hello World!"}) => {
  return <h1 style={{backgroundColor: 'red'}}>{message}</h1>;
}

const getServerData = url => async () => {
  const response = await axios.get(url);
  return response.data;
}

const getLocalStorageData = key => () => {
  return localStorage.getItem(key);
}

const Text = ({ message }) => <h1>{ message }</h1>;

function App() {
  return (
    <>

    {/* 1. LAYOUT COMPONENTS */}
    {/* <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftComponent name="Shawn"/>
      <RightComponent message="Bye bye"/>
    </SplitScreen>
    <Modal>
      <ProductInfo product={products[0]} />
    </Modal>
    <NumberedList
      items={people}
      resourceName="person"
      itemComponent={SmallPersonListItem} />
    <RegularList
      items={products}
      resourceName="product"
      itemComponent={ProductInfo} /> */}

      {/* 2. CONTAINER COMPONENTS */}
      {/* <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>

      <UserLoader userId="345">
        <UserInfo />
      </UserLoader>

      <ResourceLoader
        resourceUrl="/users/123"
        resourceName="user">
          <UserInfo />
      </ResourceLoader>
      
      <ResourceLoader
        resourceUrl="/products/1234"
        resourceName="product">
          <ProductInfo />
      </ResourceLoader> 

      <DataSource getDataFunc={async () => {
        const response = await axios.get('/users/123');
        return response.data;
      }} resourceName="user">
        <UserInfo />
      </DataSource>

      <DataSource 
        getDataFunc={getServerData('/users/456')}
        resourceName="user">
        <UserInfo />
      </DataSource>

      <DataSource
        getDataFunc={getLocalStorageData("message")} resourceName="message">
          <Text />
      </DataSource> */}

      {/* 3. CONTROLLED AND UNCONTROLLED COMPONENTS */}

      <UncontrolledForm />

    </>
  );
}



export default App;

import './App.css';
import React, { useState } from 'react';
import { SplitScreen } from './SplitScreen';
import { RegularList } from './RegularList';
import { people, products } from './localData';
import { SmallPersonListItem } from './people/SmallPersonListItem';
import { UserInfo, UserInfoWithCustomHook, UserInfoWithDataSource, UserInfoWithUseResource, UseUserCustomHook } from './people/UserInfo';
import { ProductInfo, ProductInfoWithUseResource } from './products/ProductInfo';
import { NumberedList } from './NumberedList';
import { UncontrolledModal } from './UncontrolledModal';
import { CurrentUserLoader } from './CurrentUserLoader';
import { UserLoader } from './UserLoader';
import { ResourceLoader } from './ResourceLoader';
import { DataSource } from './DataSource';
import axios from 'axios';
import { UncontrolledForm } from './UncontrolledForm';
import { ControlledForm } from './ControlledForm';
import { ControlledModal } from './ControlledModal';
import { UncontrolledOnboardingFlow } from './UncontrolledOnboardingFlow';
import { ControlledOnboardingFlow } from './ControlledOnboardingFlow';
import { printProps } from './printProps';
import { withUser } from './withUser';
import { UserInfoForm, UserInfoForm2 } from './UserInfoForm';
import { useCurrentUser } from './useCurrentUser';
import { RecursiveComponent } from './RecursiveComponent';
import { BigSuccessButton, DangerButton } from './partiallyApply';

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

  /* 
   * 1. LAYOUT COMPONENTS 
   */
  // return (
  //   <>
  //   <SplitScreen leftWeight={1} rightWeight={3}>
  //     <LeftComponent name="Shawn"/>
  //     <RightComponent message="Bye bye"/>
  //   </SplitScreen>
    
  //   <UncontrolledModal>
  //     <ProductInfo product={products[0]} />
  //   </UncontrolledModal>
  
  //   <NumberedList
  //     items={people}
  //     resourceName="person"
  //     itemComponent={SmallPersonListItem} />
    
  //   <RegularList
  //     items={products}
  //     resourceName="product"
  //     itemComponent={ProductInfo} />
  //   </>
  // );

  /* 
   * 2. CONTAINER COMPONENTS 
   */
  // return (
  //   <>
  //   <CurrentUserLoader>
  //     <UserInfo />
  //   </CurrentUserLoader>

  //   <UserLoader userId="345">
  //     <UserInfo />
  //   </UserLoader>

  //   <ResourceLoader
  //     resourceUrl="/users/123"
  //     resourceName="user">
  //       <UserInfo />
  //   </ResourceLoader>
    
  //   <ResourceLoader
  //     resourceUrl="/products/1234"
  //     resourceName="product">
  //       <ProductInfo />
  //   </ResourceLoader> 

  //   <DataSource getDataFunc={async () => {
  //       const response = await axios.get('/users/123');
  //       return response.data;
  //     }} resourceName="user">
  //     <UserInfo />
  //   </DataSource>

  //   <DataSource 
  //     getDataFunc={getServerData('/users/456')}
  //     resourceName="user">
  //     <UserInfo />
  //   </DataSource>

  //   <DataSource
  //     getDataFunc={getLocalStorageData("message")} resourceName="message">
  //       <Text />
  //   </DataSource>
  //   </>
  // );


  /* 
   * 3. CONTROLLED AND UNCONTROLLED COMPONENTS 
   */
  // const [shouldShowModal, setShouldShowModal] = useState(false);
  
  // const Step1 = ({ goToNext }) => (
  //   <>
  //   <h1>Step 1</h1>
  //   <button onClick={() => goToNext({name: 'John Doe'})}>Next</button>
  //   </>
  // );

  // const Step2 = ({ goToNext }) => (
  //   <>
  //   <h1>Step 2</h1>
  //   <button onClick={() => goToNext({age: 50})}>Next</button>
  //   </>
  // );
  
  // const Step3 = ({ goToNext }) => (
  //   <>
  //   <h1>Step 3</h1>
  //   <p>Congratulations! You qualify for our senior discount!</p>
  //   <button onClick={() => goToNext({})}>Next</button>
  //   </>
  // );  

  // const Step4 = ({ goToNext }) => (
  //   <>
  //   <h1>Step 4</h1>
  //   <button onClick={() => goToNext({hairColor: 'Ginger'})}>Next</button>
  //   </>
  // );  

  // const onNext = stepData => {
  //   setOnboardingData({...onboardingData, ...stepData});
  //   setCurrentIndex(currentIndex+1);
  // }

  // const [onboardingData, setOnboardingData] = useState({});
  // const [currentIndex, setCurrentIndex] = useState(0);

  // return (
  //   <>
  //   <UncontrolledForm />
    
  //   <ControlledForm />

  //   <ControlledModal 
  //     shouldShow={shouldShowModal}
  //     onRequestClose={() => {
  //       setShouldShowModal(false);
  //     }}>
  //     <h1>Hello Modal!</h1>
  //   </ControlledModal>
    
  //   <button onClick={() => setShouldShowModal(!shouldShowModal)}>
  //     {shouldShowModal?'Hide Modal':'Show Modal'}
  //   </button>

  //   <ControlledOnboardingFlow 
  //     currentIndex={currentIndex}
  //     onNext={onNext}
  //   >
  //     <Step1/>
  //     <Step2/>
  //     {onboardingData.age >= 62 && <Step3/>}
  //     <Step4/>
  //   </ControlledOnboardingFlow>

  //   </>
  // );

  /*
   * 4. HIGHER-ORDER COMPONENTS (HOCs)
   * (components that returns another components (and not a JS code)
   * )
   */

  // const UserInfoWrapped = printProps(UserInfo);

  // const UserInfoWithLoader = withUser(UserInfo, '234');

  // return (
    //<UserInfoWrapped a={1} b="Hello" c={{name: "Shawn"}}/>

    // <UserInfoWithLoader />

    // <UserInfoForm2 />
  // );

  /*
   * 5. CUSTOM HOOKS
   */

  // return (

  //   <>
  //   <UserInfoWithCustomHook />

  //   <UseUserCustomHook userId="123" />
  //   <UseUserCustomHook userId="234" />
  //   <UseUserCustomHook userId="345" />

  //   <UserInfoWithUseResource userId="234" />
  //   <ProductInfoWithUseResource productId="2345" />

  //   <UserInfoWithDataSource userId="234" />
  //   </>
  // );


  /*
   * 6. FUNCTIONAL PROGRAMMING
   *  FP is a method of organizing code in a way that:
   *  1. Minimizes mutation and state change
   *  2. Keeps functions independent of external data
   *  3. Treats functions as first-class citizens
   */
  const nestedObject = {
    a: 1,
    b: {
      b1: 4,
      b2: {
        b23: 'Hello',
      },
      b3: {
        b31: {
          message: 'Hi',
        },
        b32: {
          message: 'Hi',
        }
      }
    },
    c: {
      c1: 2,
      c2: 3,
    }
  }

  return (
    <>

    {/* <RecursiveComponent data={nestedObject} /> */}

    <DangerButton text='FCK!'/>
    <BigSuccessButton text='YAY :)'/>
    </>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './components/about';
import Home from './components/home';
import Registration from './components/registration';
import LitterRegistration from './components/litter_registrations';
import DogRegistration from './components/dog_registrations';
import AdultRegistration from './components/adult_registrations';
import Breeds from './components/breeds'
import Shows from './components/shows'
import Judges from './components/judges'
import Contact from './components/contact'
// import { SignUp } from './components/sign_login';
import Login from './components/login';
import Register from './components/register';
import Reset from './components/reset';
import Dashboard from './components/dashboard';

import axios from 'axios'
import ProfileDog from './components/ProfileDog';
import ProfileMain from './components/profile_main';
import CsAndPs from './components/csandps'
import SignOut from './components/signout'
import Personal from './components/personal';
import PersonalForm from './components/personal2';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { url } from './components/weburl';
import { AmericanBulldog } from './components/americanbulldog';
import { AmericanBully } from './components/americanbully';
import { FrenchBulldog } from './components/frenchbulldog';
import { Pittbull } from './components/pitbull';
import Terms from './components/terms';
import Register_Special from './components/dog_registrations_special';

import { Register_Success } from './components/dog_registrations_success';
import { Litter_Register_Success } from './components/litter_registrations_success';
import { Community_Main } from './components/community/community_main';
import { Newly } from './components/community/newly_registered';
import { Post } from './components/community/posts';
import  Ads  from './components/community/advertisements';

import { CountryProvider } from './components/country_context';
import RegistrationInternational from './components/registration_international';
import { AdminDogs } from './components/admin/admindogs';
import { AdminUsers } from './components/admin/admin_users';
import { AdminMain } from './components/admin/admin_main';
import FeaturedArticlesContent from './components/community/featured_articles_content';
import FeaturedArticlesFull  from './components/community/featured_articles_full';
import Adverts from './components/community/advertisements';





class App extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      user: '',
      dog_name: '',
      pedigree: {
        maindog: { id: 404 },
        sire: { id: 404 },
        dam: { id: 404 },
        siresire: { id: 404 },
        siredam: { id: 404 },
        damsire: { id: 404 },
        damdam: { id: 404 },
        siresireisre: { id: 404 },
        siresiredam: { id: 404 },
        siredamsire: { id: 404 },
        siredamdam: { id: 404 },
        damsiresire: { id: 404 },
        damsiredam: { id: 404 },
        damdamsire: { id: 404 },
        damdamdam: { id: 404 }
      },
      location: '',
      litter_registrations_price: 20,
      puppy_registrations_price: 30,
      dog_registrations_price: 35

    }
  }




  componentDidMount()
  {
    this.getcurrentuserLocation()
    // console.log('calling this function')
    const auth = getAuth();
    onAuthStateChanged(auth, (user) =>
    {
      if (user)
      {
        this.setState({ ...this.state, user }, () =>
        {
          this.get_user_sql_details()
        }
        );
        // console.log('onAuthState', user.displayName, user.uid, user.email)
      } else
      {
        this.setState({ user: null });
        console.log('usershmm')

      }

      if (this.state.loading)
      {
        this.setState({ loading: false });
      }
    });
  }



  getdogpedigree = (id) =>
  {
    if (id)
    {
      axios
        .get(`${url}api/dogs/pedigree/${id}`)
        .then((res) =>
        {

          // console.log(res.data);
          this.setState({ pedigree: res.data }, () =>
          {
            // console.log('getting pedigree for profile main')
            // console.log(this.state.pedigree)


          })
          // console.log('data',data)
        })
        .catch((err) =>
        {
          console.log("Error couldn't get dog id");
          console.log(err.message);
        });
    }
    else axios
      .get(`${url}api/dogs/pedigree/${this.state.dog_id.id}`)
      .then((res) =>
      {

        // console.log(res.data);
        this.setState({ pedigree: res.data }, () =>
        {
          // console.log('getting pedigree')
          // console.log(this.state.pedigree)

        })
        // console.log('data',data)
      })
      .catch((err) =>
      {
        console.log("Error couldn't get dog id");
        console.log(err.message);
      });
  }

  getcurrentuserLocation = () =>
  {
    // console.log('calling this function actually')

    axios.get('https://ipapi.co/json/')

      .then((res) =>
      {
        // console.log(res.data)
        this.setState({ ...this.state, location: res.data.country_name },
          () =>
          {

            if (this.state.location === 'Ghana')
            {

              this.setState({ litter_registrations_price: 20.00 })
              this.setState({ puppy_registrations_price: 30.00 })
              this.setState({ dog_registrations_price: 35.00 }, () => console.log(this.state))
              // console.log(this.state.location)

            }
            else
            {
              //international prices
              this.setState({ litter_registrations_price: 25.00 })
              this.setState({ puppy_registrations_price: 35.00 })
              this.setState({ dog_registrations_price: 40.00 })
              // this.setState({puppy_registrations_price : 20.00})
              // this.setState({dog_registrations_price : 20.00}, ()=>console.log(this.state))

            }
          })
      })
      .catch((err) => console.log(err))
  }

  get_user_sql_details = () =>
  {
    console.log('calling from profile sql')
    axios
      .get(`${url}api/users/getUserByUid/${this.state.user.uid}`)
      .then((res) =>
      {
        // console.log(res.data)
        this.setState({
          ...this.state,
          user_sql_details: res.data[0]
        },
          () =>
          {
            console.log('getting user details', this.state.user_sql_details)

          })
      })

      .catch((err) =>
      {
        console.log(err)
      })
  }

  render()
  {
    return (

      <CountryProvider value={{
        location: this.state.location,
        user: this.state.user, user_sql_details: this.state.user_sql_details
      }}>

        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/registration/domestic' element={<Registration />} />
            <Route path='/registration/international' element={< RegistrationInternational />} />

            <Route path='/breeds' element={<Breeds />} />
            <Route path='/breeds/americanbulldog' element={<AmericanBulldog />} />
            <Route path='/breeds/americanbully' element={<AmericanBully />} />
            <Route path='/breeds/frenchbulldog' element={<FrenchBulldog />} />
            <Route path='/breeds/pitbull' element={<Pittbull />} />
            <Route path='/shows_and_events' element={<Shows />} />
            <Route path='/judges' element={<Judges />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/community' element={<Post />} />
            <Route path='/newly_registered' element={<Post />} />

            {/* <Route path='/newly_registered' element={<Newly />} /> */}
            {/* <Route path='/community/posts' element={< Post />} />
            <Route path='/community/posts_mock' element={< Post />} /> */}
            <Route path='/community/advertisements' element={< Ads />} />

            <Route path='/community/featured_articles' element={< FeaturedArticlesFull />} />


            <Route path='/sign_up' element={< Register />} />
            <Route path='/login' element={< Login />} />

            <Route path='/reset' element={< Reset />} />
            <Route path='/dashboard' element={< Dashboard />} />

            <Route path='/litter_registrations/:price' element={<LitterRegistration />} />

            <Route path='/litter_registrations_success' element={<Litter_Register_Success />} />

            <Route path='/dog_registrations/:price' element={<DogRegistration
              navbar={true} user={this.state.user}
              puppy_registrations_price={this.state.puppy_registrations_price}
              transaction_name={'dog_registrations'} />} />

            <Route path='/dog_registrations_success/:dog_name/:username/:email/' element={<Register_Success
              navbar={true} />} />
            <Route path='/dog_registrations_special/:price' element={<Register_Special
              navbar={true} />} />

            <Route path='/dog_registrations/edit/:dog_id' element={<DogRegistration />} />

            <Route path='/adult_registrations/:price' element={<DogRegistration
              dog_registrations_price={this.state.dog_registrations_price} transaction_name={'adult_registrations'} />} />
            <Route path='/profile' element={<ProfileMain />} />

            <Route path='/my_dogs' element={<ProfileMain />} />
            <Route path='/my_dogs/:dog_id' element={<ProfileDog pedigree={this.state.pedigree} getdogpedigree={this.getdogpedigree} />} />
            <Route path='/profile/csandps' element={<CsAndPs />} />
            <Route path='/profile/signout' element={<SignOut />} />
            <Route path='/profile/personal' element={<Personal user_sql_details={this.state.user_sql_details} />} />

            <Route path='/profile/personal/edit' element={<PersonalForm user={this.state.user_sql_details} />} />

            <Route path='/terms' element={< Terms />} />

            <Route path='/admin' element={< AdminMain />} />

            <Route path='/admin/dogs' element={< AdminDogs />} />
            <Route path='/admin/users' element={< AdminUsers />} />



          </Routes>

        </BrowserRouter>
      </ CountryProvider>

    );
  }

}

export default App;


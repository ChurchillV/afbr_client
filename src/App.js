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
import { PedigDam, PedigDamDam, PedigMain, PedigSire, PedigSireDam, PedigDamSire, PedigSireSire } from './components/pedig-manual-components/pedigcomponents';
import { PedigSireDamDam, PedigSireDamSire, PedigSireSireDam, PedigSireSireSire } from './components/pedig-manual-components/pedigcomponents2';
import { PedigDamDamDam, PedigDamDamSire, PedigDamSireDam, PedigDamSireSire } from './components/pedig-manual-components/pedigcomponents3';
import { PedigSuccess } from './components/pedig-manual-components/pedigsuccess';

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

export const UserContext = React.createContext('default');
// console.log(user,'kkkhhk')




class App extends Component {
  constructor(props) {
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
      }

    }
    console.log('App .js state', this.state)
  }




  componentDidMount() {
    this.getcurrentuserLocation()
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({ ...this.state, user }, () => console.log(this.state.user));
        console.log('onAuthState', user.displayName, user.uid, user.email)
      } else {
        this.setState({ user: null });
        console.log('usershmm')

      }

      if (this.state.loading) {
        this.setState({ loading: false });
      }
    });
  }




  getnameofDog = (name) => {
    this.setState({ dog_name: name }, () => {
      console.log(this.state)

    })
  }

  getnameofDog2 = (name) => {
    this.setState({ next_dog_name: name }, () => {
      console.log(this.state)

    })
  }

  getdogid = () => {

    axios
      .get(`${url}api/dogs/getbyname/${this.state.dog_name}`)
      .then((res) => {

        console.log(res.data);
        this.setState({ dog_id: res.data[0] }, () => {
          console.log(this.state)
          this.getdogpedigree()
        })
        // console.log('data',data)
      })
      .catch((err) => {
        console.log("Error couldn't get dog id");
        console.log(err.message);
      });


  }

  getnext_dog_id = (callback_func) => {

    axios
      .get(`${url}api/dogs/getbyname/${this.state.next_dog_name}`)
      .then((res) => {

        console.log(res.data);
        this.setState({ next_dog_id: res.data[0] }, () => {
          console.log(this.state)
          //  this.getdogpedigree()
          callback_func()
        })
        // console.log('data',data)
      })
      .catch((err) => {
        console.log("Error couldn't get dog id");
        console.log(err.message);
      });


  }




  getdogpedigree = (id) => {
    if (id) {
      axios
        .get(`${url}api/dogs/pedigree/${id}`)
        .then((res) => {

          console.log(res.data);
          this.setState({ pedigree: res.data }, () => {
            console.log('getting pedigree for profile main')
            console.log(this.state.pedigree)


          })
          // console.log('data',data)
        })
        .catch((err) => {
          console.log("Error couldn't get dog id");
          console.log(err.message);
        });
    }
    else axios
      .get(`${url}api/dogs/pedigree/${this.state.dog_id.id}`)
      .then((res) => {

        console.log(res.data);
        this.setState({ pedigree: res.data }, () => {
          console.log('getting pedigree')
          console.log(this.state.pedigree)

        })
        // console.log('data',data)
      })
      .catch((err) => {
        console.log("Error couldn't get dog id");
        console.log(err.message);
      });
  }

  getcurrentuserLocation = () => {
    axios.get('https://ipapi.co/json/') 
    
    .then((res)=> {
        console.log(res.data)
        this.setState({...this.state, location: res.data.country_name},
             ()=>{
              if (this.state.location === 'Ghana'){

                //local
                console.log(this.state.location)
                console.log(this.state.location === 'Ghana')
                this.setState({litter_registrations_price : 20.00})
                this.setState({puppy_registrations_price : 30.00})
                // this.setState({dog_registrations_price : 35.00}, ()=>console.log(this.state))
                // this.setState({puppy_registrations_price : 20.00})
                this.setState({dog_registrations_price : 35.00}, ()=>console.log(this.state))
                
    
            }
            else{
                         //international prices
                this.setState({litter_registrations_price : 25.00})
                this.setState({puppy_registrations_price : 35.00})
                this.setState({dog_registrations_price : 40.00})
                // this.setState({puppy_registrations_price : 20.00})
                // this.setState({dog_registrations_price : 20.00}, ()=>console.log(this.state))
    
            }
             })
    })
    .catch((err)=> console.log(err))
}

  render() {
    return (

      <UserContext.Provider value={this.state.user}>

        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/registration' element={<Registration litter_registrations_price={this.state.litter_registrations_price}
            puppy_registrations_price={this.state.puppy_registrations_price} 
            dog_registrations_price={this.state.dog_registrations_price}/>} />
            <Route path='/breeds' element={<Breeds />} />
            <Route path='/breeds/americanbulldog' element={<AmericanBulldog />} />
            <Route path='/breeds/americanbully' element={<AmericanBully />} />
            <Route path='/breeds/frenchbulldog' element={<FrenchBulldog />} />
            <Route path='/breeds/pitbull' element={<Pittbull />} />
            <Route path='/shows_and_events' element={<Shows />} />
            <Route path='/judges' element={<Judges />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/community' element={<Community_Main />} />
            <Route path='/newly_registered' element={<Newly />} />

            <Route path='/sign_up' element={< Register />} />
            <Route path='/login' element={< Login />} />

            <Route path='/reset' element={< Reset />} />
            <Route path='/dashboard' element={< Dashboard />} />

            <Route path='/litter_registrations' element={<LitterRegistration 
            litter_registrations_price={this.state.litter_registrations_price}/>} />

            <Route path='/litter_registrations_success' element={<Litter_Register_Success />} />

            <Route path='/dog_registrations' element={<DogRegistration
              navbar={true} user={this.state.user} 
              puppy_registrations_price={this.state.puppy_registrations_price}/>} />
            <Route path='/dog_registrations_success/:dog_name/:username/' element={<Register_Success
              navbar={true} />} />
              <Route path='/dog_registrations_special' element={<Register_Special
              navbar={true} />} />
              
            <Route path='/dog_registrations/edit/:dog_id' element={<DogRegistration />} />
        
            <Route path='/adult_registrations' element={<DogRegistration 
            dog_registrations_price={this.state.dog_registrations_price} />} />
            <Route path='/profile' element={<ProfileMain />} />

            <Route path='/my_dogs' element={<ProfileMain />} />
            <Route path='/my_dogs/:dog_id' element={<ProfileDog pedigree={this.state.pedigree} getdogpedigree={this.getdogpedigree} />} />
            <Route path='/profile/csandps' element={<CsAndPs />} />
            <Route path='/profile/signout' element={<SignOut />} />
            <Route path='/profile/personal/:uid' element={<Personal />} />

            <Route path='/profile/personal/edit/:uid' element={<PersonalForm />} />

            <Route path='/terms' element={< Terms />} />

          </Routes>

        </BrowserRouter>
      </UserContext.Provider>

    );
  }

}

export default App;


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
import { PedigDam, PedigDamDam, PedigMain, PedigSire, PedigSireDam, PedigDamSire, PedigSireSire } from './components/pedig-manual-components/pedigcomponents';
import { PedigSireDamDam, PedigSireDamSire, PedigSireSireDam, PedigSireSireSire } from './components/pedig-manual-components/pedigcomponents2';
import { PedigDamDamDam, PedigDamDamSire, PedigDamSireDam, PedigDamSireSire } from './components/pedig-manual-components/pedigcomponents3';
import { PedigSuccess } from './components/pedig-manual-components/pedigsuccess';



import { Amplify } from 'aws-amplify';

// import { Authenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';

// import awsExports from './aws-exports';
// Amplify.configure(awsExports);




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dog_name: '',
      pedigree: {
        maindog: {id: 404},
        sire: {id: 404},
        dam: {id: 404},
        siresire: {id: 404},
        siredam:{id: 404},
        damsire:{id: 404},
        damdam:{id: 404},
        siresireisre:{id: 404},
        siresiredam:{id: 404},
        siredamsire:{id: 404},
        siredamdam:{id: 404},
        damsiresire:{id: 404},
        damsiredam:{id: 404},
        damdamsire:{id: 404},
        damdamdam:{id: 404}
      }

    }
    console.log('this.state', this.state)
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
      .get(`http://localhost:8000/api/dogs/getbyname/${this.state.dog_name}`)
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
      .get(`http://localhost:8000/api/dogs/getbyname/${this.state.next_dog_name}`)
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
    if (id){
      axios
      .get(`http://localhost:8000/api/dogs/pedigree/${id}`)
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
      .get(`http://localhost:8000/api/dogs/pedigree/${this.state.dog_id.id}`)
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

  render() {
    return (
     
      
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/breeds' element={<Breeds />} />
          <Route path='/shows_and_events' element={<Shows />} />
          <Route path='/judges' element={<Judges />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/sign_up' element={< Register />} />
          <Route path='/login' element={< Login />} />

          <Route path='/reset' element={< Reset />} />
          <Route path='/dashboard' element={< Dashboard />} />

          <Route path='/litter_registrations' element={<LitterRegistration />} />
          <Route path='/dog_registrations' element={<DogRegistration />} />
          <Route path='/dog_registrations/edit/:dog_id' element={<DogRegistration />} />
          <Route path='/dog_registrations/pedig-main' 
          element={<PedigMain getnameofDog={this.getnameofDog} 
          pedigree={this.state.pedigree}  getdogid={this.getdogid} />} />
          <Route path='/dog_registrations/pedigsire' element={<PedigSire getnameofDog2={this.getnameofDog2} getnext_dog_id={this.getnext_dog_id}
            refresh_pedigree={this.getdogpedigree}
            dog_id={this.state.dog_id}
            pedigree={this.state.pedigree} 
            next_dog_id={this.state.next_dog_id} />} />
          <Route path='/dog_registrations/pedigdam' element={<PedigDam getnameofDog2={this.getnameofDog2}
            refresh_pedigree={this.getdogpedigree}
            pedigree={this.state.pedigree}  getnext_dog_id={this.getnext_dog_id} dog_id={this.state.dog_id}
            next_dog_id={this.state.next_dog_id} />} />
          <Route path='/dog_registrations/pedigsiresire' element={<PedigSireSire getnameofDog2={this.getnameofDog2}
            refresh_pedigree={this.getdogpedigree}
            getnext_dog_id={this.getnext_dog_id} dog_id={this.state.dog_id}
            next_dog_id={this.state.next_dog_id} pedigree={this.state.pedigree} />} />
          <Route path='/dog_registrations/pedigsiredam' element={<PedigSireDam getnameofDog2={this.getnameofDog2}
            refresh_pedigree={this.getdogpedigree}
            getnext_dog_id={this.getnext_dog_id} dog_id={this.state.dog_id}
            next_dog_id={this.state.next_dog_id} pedigree={this.state.pedigree} />} />
          <Route path='/dog_registrations/pedigdamsire' element={<PedigDamSire getnameofDog2={this.getnameofDog2}
            refresh_pedigree={this.getdogpedigree}
            getnext_dog_id={this.getnext_dog_id} dog_id={this.state.dog_id}
            next_dog_id={this.state.next_dog_id} pedigree={this.state.pedigree} />} />
          <Route path='/dog_registrations/pedigdamdam' element={<PedigDamDam getnameofDog2={this.getnameofDog2}
            refresh_pedigree={this.getdogpedigree}
            getnext_dog_id={this.getnext_dog_id} dog_id={this.state.dog_id}
            next_dog_id={this.state.next_dog_id} pedigree={this.state.pedigree} />} />

          <Route path='/dog_registrations/pedigsiresiresire' element={<PedigSireSireSire getnameofDog2={this.getnameofDog2}
            refresh_pedigree={this.getdogpedigree}
            getnext_dog_id={this.getnext_dog_id} dog_id={this.state.dog_id}
            next_dog_id={this.state.next_dog_id} pedigree={this.state.pedigree} />} />
          <Route path='/dog_registrations/pedigsiresiredam' element={<PedigSireSireDam getnameofDog2={this.getnameofDog2}
            refresh_pedigree={this.getdogpedigree}
            getnext_dog_id={this.getnext_dog_id} dog_id={this.state.dog_id}
            next_dog_id={this.state.next_dog_id} pedigree={this.state.pedigree} />} />
          <Route path='/dog_registrations/pedigsiredamsire' element={<PedigSireDamSire getnameofDog2={this.getnameofDog2}
            refresh_pedigree={this.getdogpedigree}
            getnext_dog_id={this.getnext_dog_id} dog_id={this.state.dog_id} 
            next_dog_id={this.state.next_dog_id} pedigree={this.state.pedigree} />} />
          <Route path='/dog_registrations/pedigsiredamdam' element={<PedigSireDamDam getnameofDog2={this.getnameofDog2}
            refresh_pedigree={this.getdogpedigree}
            getnext_dog_id={this.getnext_dog_id} dog_id={this.state.dog_id}
            next_dog_id={this.state.next_dog_id} pedigree={this.state.pedigree} />} />

          <Route path='/dog_registrations/pedigdamsiresire' element={<PedigDamSireSire getnameofDog2={this.getnameofDog2}
            refresh_pedigree={this.getdogpedigree}
            getnext_dog_id={this.getnext_dog_id} dog_id={this.state.dog_id}
            next_dog_id={this.state.next_dog_id} pedigree={this.state.pedigree} />} />
          <Route path='/dog_registrations/pedigdamsiredam' element={<PedigDamSireDam getnameofDog2={this.getnameofDog2}
            refresh_pedigree={this.getdogpedigree}
            getnext_dog_id={this.getnext_dog_id} dog_id={this.state.dog_id}
            next_dog_id={this.state.next_dog_id} pedigree={this.state.pedigree} />} />
          <Route path='/dog_registrations/pedigdamdamsire' element={<PedigDamDamSire getnameofDog2={this.getnameofDog2}
            refresh_pedigree={this.getdogpedigree}
            getnext_dog_id={this.getnext_dog_id} dog_id={this.state.dog_id}
            next_dog_id={this.state.next_dog_id} pedigree={this.state.pedigree} />} />
          <Route path='/dog_registrations/pedigdamdamdam' element={<PedigDamDamDam getnameofDog2={this.getnameofDog2}
            refresh_pedigree={this.getdogpedigree}
            getnext_dog_id={this.getnext_dog_id} dog_id={this.state.dog_id}
            next_dog_id={this.state.next_dog_id} pedigree={this.state.pedigree} />} />

          <Route path='/dog_registrations/save_and_end_here' 
              element={<PedigSuccess pedigree={this.props.pedigree} />}
          />


          <Route path='/adult_registrations' element={<AdultRegistration />} />
          <Route path='/profile' element={<ProfileMain />} />

          <Route path='/my_dogs' element={<ProfileMain />} />
          <Route path='/my_dogs/:dog_id' element={<ProfileDog  pedigree={this.state.pedigree} getdogpedigree={this.getdogpedigree} />} />
          <Route path='/profile/csandps' element={<CsAndPs />} />
          <Route path='/profile/signout' element={<SignOut />} />

        </Routes>

      </BrowserRouter>
      

    );
  }

}

export default App;


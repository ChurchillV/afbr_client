import { withRouter } from "./pedigree_cards";
import React from "react";
import { Link } from "react-router-dom";
import Profile from "./profile";
import axios from "axios";
import { url } from "./weburl";
import CountryContext from "./country_context";
import Profile_pic from "../images/profile.jpg";

class PersonalForm extends React.Component {
  static contextType = CountryContext;

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      buttonMessage: 'Edit Details'
    };
  }

  componentDidMount = () => {
    this.get_user_sql_details();
  };

  get_user_sql_details = () => {
    this.props.user &&
      axios
        .get(`${url}api/users/getUserByUid/${this.props.user.uid}`)
        .then((res) => {
          // console.log(res.data)
          this.setState({
            ...this.state,
            user: res.data[0],
          });
        })

        .catch((err) => {
          console.log(err);
        });
  };

  change_buttonMessage = () => {
    this.setState({buttonMessage: "Loading, just a sec"})
  }
  uploadImage = (callback) => {
    // console.log(files[0])
    const formData = new FormData();
    formData.append("file", this.state.imageSelected);
    // // console.log(this.state.imageSelected)
    formData.append("upload_preset", "gwxgv5ii");

    axios
      .post("https://api.cloudinary.com/v1_1/daurieb51/image/upload", formData)
      .then((response) => {
        this.setState(
          {
            ...this.state,
            user: { ...this.state.user, public_id: response.data.public_id },
          },
          () => {
            // console.log(this.state.user);
            callback();
            // console.log("called the callback");
            this.props.navigate("/profile");

          }
        );

        console.log("responseeeee", response.data.public_id);
        // console.log("image successfuly uploaded thank you jehovah");
      });
  };

  addImageSelected = (e) => {
    this.setState(
      {
        ...this.state,
        imageSelected: e.target.files[0],
      },
      () => console.log(this.state.imageSelected, this.state)
    );
  };
  handleImageChange = (e) => {
    console.log(e.target.files[0].name);

    // this.setState((data) => ({ ...data, [e.target.name]: e.target.value }));
    this.setState(
      {
        ...this.state,
        user: { ...this.state.user, image_url: e.target.files[0].name },
      },
      this.addImageSelected(e)
    );
  };

  updateUserInfo = () => {
    axios
      .post(`${url}api/users/edit/${this.state.user.uid}`, this.state.user)
      .then((res) => {
        console.log(res.data.message);
        console.log("editeed");
        this.props.navigate("/profile");

      })
      .catch((err) => {
        console.log("Error couldn't edit user");
        console.log(err.message);
      });
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let user = {
      [name]: value,
    };
    this.setState(
      {
        ...this.state,
        user: { ...this.state.user, [name]: value },
      },
      () => {
        console.log(this.state);
      }
    );
  };

  submit = (e) => {
    e.preventDefault();

    this.change_buttonMessage()
    this.state.imageSelected
      ? this.uploadImage(this.updateUserInfo)
      : this.updateUserInfo();
    console.log("submitting");


  };

  render() {
    return (
      <div className="container-fluid " style={{ color: "black" }}>
        <Profile class="profile_first">
          <form
            onSubmit={(e) => {
              this.submit(e);
            }}
            method="post"
            className="text-dark align-items-center justify-content-center "
          >

            {this.state.user.username ? 
            <div class="row align-items-end justify-content-start py-5">
              <div className="col-md-3 smallrem ">
                {this.state.user && this.state.user.public_id ? (
                  <img
                    src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${this.state.user.public_id}.png`}
                    className="img-fluid profile_pic_user2"
                  ></img>
                ) : (
                  <img
                    src={Profile_pic}
                    className="img-fluid profile_pic_user"
                  ></img>
                )}
                {/* {this.context.user_sql_details && !this.context.user_sql_details.uid  && <img src={Profile_pic} className='img-fluid profile_pic_user'></img>} */}
              </div>
              <div className="col-sm-7 ">
                <div className="form-row">
                  <div className="form-group smallrem text-dark ">
                    <label for="inputimage">Change Image &nbsp;</label>
                    <input
                      type="file"
                      onChange={this.handleImageChange}
                      name="image"
                      accept="image/*"
                      id="inputimage"
                    ></input>
                  </div>
                </div>

                <div className="form-row align-items-center justify-content-center">
                  <div class="form-group  smallrem text-dark col-sm-4">
                    <label for="inputName">Name</label>
                    </div>
                  <div className="form-group col-md-8">
                    {this.state.user && (
                      <input
                        name="username"
                        onChange={this.handleChange}
                        value={this.state.user.username}
                        type="text"
                        class="form-control"
                        id="inputName"
                        placeholder="Username"
                      ></input>
                    )}
                  </div>
                </div>
                <div className="form-row align-items-center justify-content-center">
                  <div class="form-group  smallrem  col-md-4 text-dark">
                    <label for="inputAge">Phone Number</label>
                    </div>
                  <div className="form-group col-md-8">
                    {this.state.user && (
                      <input
                        name="phone_number"
                        type="number"
                        class="form-control"
                        value={this.state.user.phone_number}
                        id="inputAge"
                        onChange={this.handleChange}
                        placeholder="Phone Number"
                      ></input>
                    )}
                  </div>
                </div>

                <div class="form-row align-items-center justify-content-center">
                  <div class="form-group  smallrem col-md-4">
                    <label for="Breed" className="text-dark">
                      Email
                    </label>
                    </div>
                  <div className="form-group col-md-8">
                    {this.state.user && (
                      <input
                        name="email"
                        type="email"
                        value={this.state.user.email}
                        class="form-control"
                        onChange={this.handleChange}
                        id="Breed"
                        placeholder="Email Address"
                      ></input>
                    )}
                  </div>
                </div>

                <div class="form-row align-items-center justify-content-center">
                  <div class="form-group smallrem  col-md-4">
                    <label for="Breed" className="text-dark">
                      Contact Address
                    </label>
                  </div>
                  <div className="form-group col-md-8">
                    {this.state.user && (
                      <input
                        name="contact_address"
                        value={this.state.user.contact_address}
                        type="text"
                        class="form-control"
                        id="Breed"
                        onChange={this.handleChange}
                        placeholder="Contact Address/Location"
                      ></input>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <button
                  type="submit"
                  class="btn btn-outline-warning text-dark w-100"
                >
                  {this.state.buttonMessage}
                </button>
              </div>
            </div>
                : 
                
                <p className="py-5 text-dark box_shadow">
                    Data cannot be accessed at this moment!!!
                    <hr />
                    Please go back and try again.
                </p>
                }
          </form>
        </Profile>
      </div>
    );
  }
}

export default withRouter(PersonalForm);

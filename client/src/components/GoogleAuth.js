import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOAUTH_CID,
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    isSignedIn ? this.props.signIn() : this.props.signOut();
  };

  onAuthUpdate = () => {
    this.auth.isSignedIn.get() ? this.auth.signOut() : this.auth.signIn();
  };

  renderAuthBtn() {
    if (this.props.isSignedIn == null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className={"ui red google button"} onClick={this.onAuthUpdate}>
          <i className={"google icon"} />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className={"ui red google button"} onClick={this.onAuthUpdate}>
          <i className={"google icon"} />
          Sign In
        </button>
      );
    }
  }

  render() {
    return this.renderAuthBtn();
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  {
    signIn,
    signOut
  }
)(GoogleAuth);

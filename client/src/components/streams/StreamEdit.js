import React from "react";
import { connect } from "react-redux";
import { editStream } from "../../actions";

class StreamEdit extends React.Component {
  render() {
    return <div>StreamEdit</div>;
  }
}

const mapStateToProps = state => {
  return {
    streams: state.streams
  };
};

export default connect(
  mapStateToProps,
  {
    editStream
  }
)(StreamEdit);

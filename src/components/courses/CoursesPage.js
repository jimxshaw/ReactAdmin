import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: ""
    }
  };

  handleChange = event => {
    // The ellipses clones existing state and then
    // overrode the value of title.
    const course = {
      ...this.state.course,
      title: event.target.value
    };

    this.setState({ course });
  };

  handleSubmit = event => {
    event.preventDefault();

    // Connect function below automatically adds dispatch as a
    // prop if the user didn't declare mapDispatchToProps.
    // Since it is declared below, we can call create course
    // action directly from props.
    this.props.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  createCourse: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

// This function tells what state we
// pass to the component via props.
function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

// This function determines what actions are
// available on props in our component.
function mapDispatchToProps(dispatch) {
  return {
    // Action creators must be called by dispatch.
    createCourse: course => dispatch(courseActions.createCourse(course))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);

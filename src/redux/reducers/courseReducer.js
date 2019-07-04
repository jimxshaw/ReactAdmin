export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      // Clone existing state array. Then add the cloned course passed in.
      // This will update the redux store by adding the new action
      // passed in on action.course.
      return [...state, { ...action.course }];
    default:
      return state;
  }
}

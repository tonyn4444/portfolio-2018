import { combineReducers } from 'redux';
import ProjectsReducer from './projects_reducer';
import AboutReducer from './about_reducer';

const rootReducer = combineReducers({
  projects: ProjectsReducer,
  about: AboutReducer
});

export default rootReducer;

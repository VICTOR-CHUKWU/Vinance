import { SideBarActions } from '../constant/Constant';

const initialstate = {
  isSideBarOpen: false,
};
const sideBarCheck = (state = initialstate, action) => {
  if (action.type === SideBarActions.OPEN_SIDEBAR) {
    return { isSideBarOpen: true };
  }
  if (action.type === SideBarActions.CLOSE_SIDEBAR) {
    return { isSideBarOpen: false };
  }
  return state;
};

export default sideBarCheck;

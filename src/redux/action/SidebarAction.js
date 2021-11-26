import { SideBarActions } from '../constant/Constant';

export const closeSidebar = () => ({
  type: SideBarActions.CLOSE_SIDEBAR,
});

export const openSidebar = () => ({
  type: SideBarActions.OPEN_SIDEBAR,
});

import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import SideScrollNavigation from "./SideScrollNavigation";

function Layout(props) {
  return (
    <div>
      <div>
        <MainNavigation />
        <main className={classes.main}>{props.children}</main>
      </div>
      <div>
        <SideScrollNavigation />
      </div>
    </div>
  );
}

export default Layout;

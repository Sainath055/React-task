
import { Link, useLocation } from "react-router-dom"
import "../../src/styles/side_menu.scss";


const SideMenu = () => {

  const location = useLocation();

  return (
    <>
    <div id="side-menu">
      <p>Menu</p>
      <Link to="/" className={location.pathname === '/' ? ' active-menu-item ' : null}>
      <svg xmlns="http://www.w3.org/2000/svg" 
      width="26px" height="26px" viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"></path><path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"></path></g></svg>
        Home
      </Link >
      <Link to="/blogs" className={location.pathname === '/blogs' ? ' active-menu-item ' : null}>
      <svg xmlns="http://www.w3.org/2000/svg" 
      width="26px" height="26px"
      viewBox="0 0 16 16"><g fill="currentColor"><path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"></path><path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"></path></g></svg>
        Blogs
      </Link >
      <Link to="/products" className={location.pathname === '/products' ? ' active-menu-item ' : null}>
      <svg xmlns="http://www.w3.org/2000/svg" 
       width="26px" height="26px"
      viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4"><path d="M44 14L24 4L4 14v20l20 10l20-10V14Z"></path><path strokeLinecap="round" d="m4 14l20 10m0 20V24m20-10L24 24M34 9L14 19"></path></g></svg>
        Products
      </Link>
      <Link to="/settings" className={location.pathname === '/settings' ? ' active-menu-item ' : null}>
      <svg xmlns="http://www.w3.org/2000/svg" 
      width="26px" height="26px"
      viewBox="0 0 24 24"><path fill="currentColor" d="M18.525 8.3q-.125 0-.262-.075T18.075 8l-.65-1.4l-1.4-.65q-.15-.05-.225-.187t-.075-.263q0-.125.075-.262t.225-.188l1.4-.65l.65-1.4q.05-.15.188-.225t.262-.075q.125 0 .263.075t.187.225l.65 1.4l1.4.65q.15.05.225.188t.075.262q0 .125-.075.263t-.225.187l-1.4.65l-.65 1.4q-.05.15-.188.225t-.262.075Zm2 7.025q-.125 0-.25-.075t-.2-.2l-.35-.75l-.75-.35q-.075-.05-.275-.45q0-.125.075-.25t.2-.2l.75-.35l.35-.75q.05-.075.45-.275q.125 0 .25.075t.2.2l.35.75l.75.35q.075.05.275.45q0 .125-.075.25t-.2.2l-.75.35l-.35.75q-.05.075-.45.275ZM8.4 22q-.375 0-.65-.25t-.325-.625l-.2-1.475q-.2-.075-.388-.2t-.312-.25l-1.375.6q-.35.15-.713.038t-.562-.463l-1.6-2.8q-.2-.35-.125-.713t.4-.587l1.175-.875v-.8l-1.175-.875q-.325-.225-.4-.588t.125-.712l1.6-2.8q.2-.35.563-.463t.712.038l1.375.6q.125-.125.313-.25t.387-.2l.2-1.475q.05-.375.325-.625T8.4 6h3.25q.375 0 .65.25t.325.625l.2 1.475q.2.075.388.2t.312.25l1.375-.6q.35-.15.712-.037t.563.462l1.6 2.8q.2.35.125.713t-.4.587l-1.175.875v.8l1.175.875q.325.225.4.588t-.125.712l-1.6 2.8q-.2.35-.563.463T14.9 19.8l-1.375-.6q-.125.125-.313.25t-.387.2l-.2 1.475q-.05.375-.325.625t-.65.25H8.4Zm1.625-5q1.25 0 2.125-.875T13.025 14q0-1.25-.875-2.125T10.025 11q-1.25 0-2.125.875T7.025 14q0 1.25.875 2.125t2.125.875Zm0-3Z"></path></svg>
        Settings
      </Link >
    </div>
    </>
  )
}

export default SideMenu
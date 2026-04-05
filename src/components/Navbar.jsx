import React from 'react'

function Navbar() {
  return (
   <div className="drawer lg:drawer-open">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Navbar */}
    <nav className="navbar w-full bg-base-300 fixed z-50" >
      <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
        {/* Sidebar toggle icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
      </label>
      <div className="px-4">MUZEEK</div>
      {/* Right side */}
  <div className="navbar-end ml-auto flex gap-3 items-center">

    {/* Song Search */}
    <input 
      type="text"
      placeholder="Search songs..."
      className="input input-bordered w-56 md:w-72"
    />

    {/* Login Button */}
    <button className="btn btn-outline btn-primary">
      Login
    </button>

    {/* Signup Button */}
    <button className="btn btn-primary">
      Sign Up
    </button>
{/* theme change */}
    <label className="flex cursor-pointer gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <input type="checkbox" value="synthwave" className="toggle theme-controller" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>
  </div>
    </nav>
    {/* Page content here */}
    {/* <div className="p-4">Page Content</div> */}
  </div>

  <div className="drawer-side is-drawer-open:overflow-visible fixed ">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="flex min-h-full flex-col items-start bg-base-300 is-drawer-open:w-20 is-drawer-open:w-64">
      {/* Sidebar content here */}
      <ul className="menu w-full grow pt-20">
        {/* List item */}
        <li>
          <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
            {/* Home icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            <span className="is-drawer-close:hidden">Homepage</span>
          </button>
        </li>

        {/* List item */}
        <li>
          <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
            {/* Settings icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
            <span className="is-drawer-close:hidden">Settings</span>
          </button>
        </li>
        {/* List item */}
<li>
  <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Trending">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8"/>
    </svg>
    <span className="is-drawer-close:hidden">Trending</span>
  </button>
</li>

{/* List item */}
<li>
  <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Library">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
    </svg>
    <span className="is-drawer-close:hidden">Library</span>
  </button>
</li>

{/* List item */}
<li>
  <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="New Releases">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
    </svg>
    <span className="is-drawer-close:hidden">New Releases</span>
  </button>
</li>

{/* List item */}
<li>
  <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Top Charts">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6m4 6V7m4 10V4"/>
    </svg>
    <span className="is-drawer-close:hidden">Top Charts</span>
  </button>
</li>

{/* List item */}
<li>
  <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Podcasts">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4">
      <circle cx="12" cy="11" r="3"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 11a7 7 0 0114 0"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v3"/>
    </svg>
    <span className="is-drawer-close:hidden">Podcasts</span>
  </button>
</li>

{/* List item */}
<li>
  <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Artists">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4">
      <circle cx="12" cy="7" r="4"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 21a6.5 6.5 0 0113 0"/>
    </svg>
    <span className="is-drawer-close:hidden">Artists</span>
  </button>
</li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navbar
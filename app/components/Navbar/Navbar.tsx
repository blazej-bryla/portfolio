import { DesktopNavbar, MobileNavbar } from '.'

export const Navbar = () => {
  return (
    <nav className="w-full dark:bg-dark">
      <DesktopNavbar />
      <MobileNavbar />
    </nav>
  )
}

import { DesktopNavbar, MobileNavbar } from '.'

export const Navbar = () => {
  return (
    <nav className="w-full bg-white dark:bg-dark">
      <DesktopNavbar />
      <MobileNavbar />
    </nav>
  )
}

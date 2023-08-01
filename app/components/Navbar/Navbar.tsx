import { DesktopNavbar, MobileNavbar } from '.'

export const Navbar = () => {
  return (
    <nav className="w-full bg-dark">
      <DesktopNavbar />
      <MobileNavbar />
    </nav>
  )
}

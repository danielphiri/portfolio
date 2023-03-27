/** @jsx jsx */
import { jsx, get } from "theme-ui"
import { Link } from "gatsby"
import { readableColor } from "polished"
import Logo from "../icons/logo"
import useSiteMetadata from "@lekoarts/gatsby-theme-jodie/src/hooks/use-site-metadata"
import useJodieConfig from "@lekoarts/gatsby-theme-jodie/src/hooks/use-jodie-config"
import Navigation from "@lekoarts/gatsby-theme-jodie/src/components/navigation"

type SidebarProps = { bg: string }

const Sidebar = ({ bg }: SidebarProps) => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useJodieConfig()

  return (
    <header
      sx={{
        p: [4, 4, 4, 4],
        width: (t) => [`100%`, `100%`, `100%`, `100%`, `100%`],
        backgroundColor: bg,
        position: [`relative`, `relative`, `relative`, `relative`],
        height: `100%`,
        display: `flex`,
        flexDirection: [`column`, `column`, `column`, `column`],
        alignItems: [`flex-start`, `flex-start`, `flex-start`, `flex-start`],
        justifyContent: [`flex-start`, `flex-start`, `flex-start`, `flex-start`],
        svg: {
          fill: readableColor(bg),
        },
        variant: `sidebar`,
      }}
      data-testid="sidebar"
    >
      {/* <Link to={basePath} aria-label={`${siteTitle}, Back to Home`} sx={{ width: [`3rem`, `4rem`, `4.5rem`, `5rem`] }}> */}
        <Logo />
      {/* </Link> */}
      {/* <div sx={{ py: 0, display: [`none`, `none`, `none`, `block`] }} /> */}
      {/* <br></br> */}
      <div sx={{ py: 3, display: [`block`, `block`, `block`, `block`] }} />
      <i> I am a Software Engineer with close to 5 years of building iOS apps. I built this website using React and hosting it on AWS. </i> <br></br>
      <div sx={{ py: 3, display: [`none`, `none`, `none`, `block`] }} />
      <Navigation bg={bg} />
    </header>
  )
}

export default Sidebar

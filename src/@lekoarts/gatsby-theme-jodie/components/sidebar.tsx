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
        outline: `solid #715696 1px`,
        variant: `sidebar`,
      }}
      data-testid="sidebar"
    >
        <Logo />
      <div sx={{ py: 0, display: [`block`, `block`, `block`, `block`] }} />
      <p> <small><em>I am a Software Engineer with close to 5 years of building software. I built this website using Gatsby and hosting it on AWS.</em></small></p>
      <div sx={{ py: 2, display: [`none`, `none`, `none`, `block`] }} />
      <Navigation bg={bg} />
    </header>
  )
}

export default Sidebar

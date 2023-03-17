/** @jsx jsx */
import { jsx, Link, useThemeUI, get } from "theme-ui"
import { readableColor } from "polished"
import useSiteMetadata from "@lekoarts/gatsby-theme-jodie/src/hooks/use-site-metadata"
import { Facebook, Twitter, Linkedin, Pocket, Mail } from 'react-feather';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PocketShareButton,
  EmailShareButton,
} from 'react-share';

const Footer = ({ bg }: { bg: string }) => {
  const { siteTitle } = useSiteMetadata()
  const {
    theme: { rawColors },
  } = useThemeUI()

  const text = readableColor(
    bg,
    rawColors!.textMuted as string | undefined,
    rawColors!.textMutedLight as string | undefined
  )

  return (
    <footer
      sx={{
        position: [`relative`, `relative`, `relative`, `fixed`],
        width: (t) => [`100%`, `100%`, `100%`, get(t, `sidebar.normal`), get(t, `sidebar.wide`)],
        bottom: 0,
        color: text,
        fontSize: 0,
        p: [3, 3, 4],
        background: bg,
        a: {
          color: readableColor(bg),
          "&:hover,&:focus": {
            color: readableColor(bg, `primary`, `primaryLight`, false),
          },
        },
        variant: `footer`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}.
      </div>
      <div>
        <Link
          aria-label="Link to the theme's GitHub repository"
          href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-jodie"
        >
          LinkedIn
        </Link>
        {` `}
        by
        {` `}
        <Link
          aria-label="Link to the theme author's website"
          href="https://www.lekoarts.de?utm_source=jodie&utm_medium=Theme"
        >
          Daniel
        </Link>
        <br></br>
      <FacebookShareButton url={"https"} quote={"FB"}>
        <Facebook strokeWidth={1.25} />
      </FacebookShareButton>
      &nbsp;&nbsp;
      <LinkedinShareButton url={"url"} title={"Welcome"} summary={"Try Dis"}>
        <Linkedin strokeWidth={1.25} />
      </LinkedinShareButton>
      &nbsp;&nbsp;
      <TwitterShareButton url={"Hoa"} title={"Okay"}>
        <Twitter strokeWidth={1.25} />
      </TwitterShareButton>
      &nbsp;&nbsp;
      <EmailShareButton url={"wow"} title={"greatness"}>
        <Mail strokeWidth={1.25} />
      </EmailShareButton>

      </div>
    </footer>
  )
}

export default Footer

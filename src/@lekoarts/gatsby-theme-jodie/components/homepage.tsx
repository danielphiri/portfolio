/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image"
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout"
import GridItem from "@lekoarts/gatsby-theme-jodie/src/components/grid-item"
import { itemListWrapperStyles, itemStyles } from "@lekoarts/gatsby-theme-jodie/src/styles/item-list"
import locales from "@lekoarts/gatsby-theme-jodie/src/locales"
import { visuallyHidden } from "@lekoarts/gatsby-theme-jodie/src/styles/utils"
import modifyGrid from "../utils/modify-grid"
import Seo from "@lekoarts/gatsby-theme-jodie/src/components/seo"
import CareerPage from ".//../../../../content/pages/career/index.mdx"


export type JodieHomepageProps = {
  projects: {
    nodes: {
      title: string
      shortTitle: string
      slug: string
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }[]
  }
}

const Homepage: React.FC<PageProps<JodieHomepageProps>> = ({ data: { projects } }) => {

  return (
    <Layout>
    <h1 sx={visuallyHidden} data-testid="page-title">
      {locales.projects}
    </h1>
    <div>
    <CareerPage />
    </div>
  </Layout>
  )
}

export default Homepage

export const Head: HeadFC<JodieHomepageProps> = ({ location }) => <Seo title="Daniel's Porfolio" pathname={location.pathname} />
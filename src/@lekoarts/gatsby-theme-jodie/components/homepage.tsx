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
  // const rawItems = [...projects.nodes]
  // const items = modifyGrid(rawItems)
  // const itemsCount = items.length
  // let divisor = 4

  // for (let i = 0; i < itemsCount; i++) {
  //   const quotient = itemsCount % divisor
  //   const quotientAlt = (itemsCount - 1) % divisor

  //   if (quotient === 0 || quotientAlt === 0) {
  //     break
  //   }

  //   divisor -= 1
  // }

  return (
    <Layout>
    <h1 sx={visuallyHidden} data-testid="page-title">
      {locales.projects}
    </h1>
    <div
      sx={{
        display: `grid`,
        gridTemplateColumns: [`1fr`],
        gridAutoRows: [`50vw`],
      }}
    >
      {projects.nodes.length > 0 ? (
        projects.nodes.map((project) => (
          <GridItem to={project.slug} key={project.slug} data-testid={project.shortTitle}>
          <span>{project.title}</span>
            <GatsbyImage image={project.cover.childImageSharp.gatsbyImageData} alt="" />
          </GridItem>
        ))
      ) : (
        <div sx={{ padding: 3 }}>No projects found at the location defined for "projectsPath"</div>
      )}
    </div>
  </Layout>
  )
}

export default Homepage

export const Head: HeadFC<JodieHomepageProps> = ({ location }) => <Seo title="Daniel's Porfolio" pathname={location.pathname} />
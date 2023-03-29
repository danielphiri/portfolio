exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions
  
    // Delete the existing home page
    if (page.isHomePage && page.path !== '/career') {
      deletePage(page)
    }
  
    // Create a new page and set it as the default entry page
    createPage({
      ...page,
      path: '/career',
      context: {
        ...page.context,
        isHomePage: true,
      },
    })
  }
  
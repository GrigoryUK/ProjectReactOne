export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
  ARTICLES = 'articles',
  ARTICLES_DETAILS = 'articles_details',
  ARTICLES_CREATE = 'articles_create',
  ARTICLES_EDIT = 'articles_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',

}

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string) => `/profile/${id}`
export const getRouteArticles = () => '/articles'
export const getRouteAdmin = () => '/admin'
export const getRouteForbidden = () => '/forbidden'
export const getRouteArticlesDetails = (id: string) => `/articles/${id}`
export const getRouteArticlesCreate = () => '/articles/new'
export const getRouteArticlesEdit = (id: string) => `/articles/${id}/edit`

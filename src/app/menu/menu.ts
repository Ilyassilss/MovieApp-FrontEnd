import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'Home',
    translate: 'MENU.HOME',
    type: 'item',
    icon: 'home',
    url: 'movie/allmovies'
  },
  {
    id: 'Actors',
    title: 'Actors',
    translate: 'MENU.ACTORS',
    type: 'item',
    icon: 'users',
    url: 'movie/allactors'
  },
  {
    id: 'Directors',
    title: 'Directors',
    translate: 'MENU.DIRECTORS',
    type: 'item',
    icon: 'users',
    url: 'movie/alldirectors'
  }
]

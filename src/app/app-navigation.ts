import { faOven } from '@fortawesome/pro-solid-svg-icons';

export const navigation = [
  {
    text: 'Recipes',
    path: '/recipes',
    icon: 'fad fa-oven '
  },
  {
    text: 'Settings',
    icon: 'fad fa-cog fa-swap-opacity',
    items: [
      {
        text: 'Courses',
        path: '/courses'
      }
    ]
  }
];

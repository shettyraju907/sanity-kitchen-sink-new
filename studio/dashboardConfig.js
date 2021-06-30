export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60dc67d01c568513001c658f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-new-studio-qhs3tpwt',
                  apiId: '7b508380-d36c-4f60-a4c4-51bf85898b5d'
                },
                {
                  buildHookId: '60dc67d0e6dad512801b7134',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-new-web-d2tyu4hy',
                  apiId: '3aeb0629-c794-4cb5-92c1-4e74202aa1ab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shettyraju907/sanity-kitchen-sink-new',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-new-web-d2tyu4hy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

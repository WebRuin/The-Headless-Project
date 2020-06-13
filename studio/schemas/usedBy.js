export default {
  name: 'usedBy',
  title: 'Used By',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'url',
      title: 'Url',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'url'
    }
  }
}

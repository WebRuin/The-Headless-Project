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

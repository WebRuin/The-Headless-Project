export default {
  name: 'cms',
  title: 'Cms',
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
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Url',
      type: 'string'
    },
    {
      name: 'billing',
      title: 'Billing',
      type: 'string'
    },
    {
      name: 'creditCardNeeded',
      title: 'Credit Card Needed',
      type: 'boolean'
    },
    {
      name: 'usedBy',
      title: 'Used By',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'usedBy'}
          ]
        }
      ]
    },
    {
      name: 'pricing',
      title: 'Pricing',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'pricing'}
          ]
        }
      ]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    }
  ],

  preview: {
    select: {
      title: 'name',
      heading: 'heading'
    },
    prepare(selection) {
      const {heading} = selection
      return Object.assign({}, selection, {
        subtitle: heading && `by ${heading}`
      })
    }
  }
}

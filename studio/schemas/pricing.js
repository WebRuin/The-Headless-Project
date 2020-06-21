export default {
  name: 'pricing',
  title: 'Pricing',
  type: 'document',
  fields: [
    {
      name: 'tier',
      title: 'Tier',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string'
    },
    {
      name: 'features',
      title: 'features',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'features'}
          ]
        }
      ]
    },
  ]
}

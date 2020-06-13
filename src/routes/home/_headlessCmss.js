const headlessCmss = [
  {
    name: 'Sanity',
    slug: 'sanity',
    heading: 'Build with Structured Content',
    description:
      'Sanity is the fastest, most flexible platform for delivering content to digital devices and products.',
    url: '//sanity.io',
    billing: 'monthly',
    creditCardNeeded: false,
    usedBy: [
      {name: 'inVISION', url: '//invisionapp.com'},
      {name: 'CONDE NAST', url: '//condenast.com'},
      {name: 'CLOUDFLARE', url: '//cloudflare.com'},
      {name: 'Cornerstone', url: ''},
      {name: 'EUROSTAR', url: '//eurostar.com'},
      {name: 'Schibsted', url: '//schibsted.com'},
      {name: 'MUX', url: '//mux.com'},
      {name: 'Micro:Bit', url: '//microbit.org'},
      {name: 'Mambu', url: '//mambu.com'},
      {name: 'OMA', url: '//oma.eu'},
      {name: 'CHIEF', url: '//chief.com'},
    ],
    pricing: [
      {
        tier: 'Standard',
        description: 'Get started for free. Pay-as-you-go.',
        price: '0',
        features: [
          'Includes 3 users',
          '$10 per extra user / month',
          'Generous quota included',
          'Optionally add a credit card for additional users, usage and datasets.',
        ],
      },
      {
        tier: 'Advanced',
        description: 'Larger teams & high volume projects',
        price: '199',
        features: [
          'Includes 20 users',
          '$10 per extra user / month',
          'High quota included',
          '90 days history retention. SLA available. Pay as you go above extended quota.',
        ],
      },
      {
        tier: 'Enterprise',
        description: 'Get started for free. Pay-as-you-go.',
        price: 'Custom',
        features: [
          'Includes 50 users and 10 datasets',
          'Custom quotas available',
          'Enterprise SLA, SSO, access control, and support included. Custom options available',
        ],
      },
    ],
  },
  
  {
    name: 'Prismic',
    slug: 'prismic',
    heading: 'Make your website editable for the whole team',
    description:
      'Choose your technology. Use the API to fetch content. Empower your content team.',
    url: '//prismic.io',
    billing: 'monthly',
    creditCardNeeded: true,
    usedBy: [
      {name: 'Netfix', url: '//netflix.com'},
      {name: 'ueno.', url: '//ueno.co'},
      {name: 'Google', url: '//google.com'},
      {name: 'Rakuten', url: '//rakuten.com'},
      {name: 'EUROSTAR', url: '//eurostar.com'},
      {name: 'deliveroo', url: '//deliveroo.co.uk'},
      {name: 'DigitalOcian', url: '//digitalocean.com'}
    ],
    pricing: [
      {
        tier: 'Community',
        description: `per month, billed annually
        $0 per month, billed monthly`,
        price: '0',
        features: [
          'Unlimited API Calls',
          'Unlimited Documents',
          'Unlimited Custom Types',
          'Unlimited Locales',
          'Unlimited Assets',
          'Unlimited Image Optimizations',
          '100 GB of Built-in CDN',
        ],
      },
      {
        tier: 'Starter',
        description: `per month, billed annually
        $9 per month, billed monthly`,
        price: '7',
        features: [
          'Unlimited API Calls',
          'Unlimited Documents',
          'Unlimited Custom Types',
          'Unlimited Locales',
          'Unlimited Assets',
          'Unlimited Image Optimizations',
          '100 GB of Built-in CDN',
        ],
      },
      {
        tier: 'Small',
        description: `per month, billed annually
          $20 per month, billed monthly`,
        price: '15',
        features: [
          'Unlimited API Calls',
          'Unlimited Documents',
          'Unlimited Custom Types',
          'Unlimited Locales',
          'Unlimited Assets',
          'Unlimited Image Optimizations',
          '100 GB of Built-in CDN',
        ],
      },
      {
        tier: 'Medium',
        description: `per month, billed annually
          $125 per month, billed monthly`,
        price: '100',
        features: [
          '25 Users',
          'Unlimited API Calls',
          'Unlimited Documents',
          'Unlimited Custom Types',
          'Unlimited Locales',
          'Unlimited Assets',
          'Unlimited Image Optimizations',
          'User Roles',
          'Basic Support',
          '500GB of Built-in CDN',
        ],
      },
      {
        tier: 'Platinum',
        description: `per month, billed annually
          $575 per month, billed monthly`,
        price: '500',
        features: [
          '25 Users',
          'Unlimited API Calls',
          'Unlimited Documents',
          'Unlimited Custom Types',
          'Unlimited Locales',
          'Unlimited Assets',
          'Unlimited Image Optimizations',
          'User Roles',
          'Basic Support',
          '500GB of Built-in CDN',
          'Development Environment (optional)',
        ],
      },
    ],
  },
];

export default headlessCmss;

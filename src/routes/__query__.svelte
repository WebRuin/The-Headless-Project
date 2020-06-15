const query = `*[_type == "cms" && slug.current == $slug][0]
      {
        name,
        slug,
        heading,
        description,
        url,
        billing,
        creditCardNeeded,
      "pricing": *[_type == "pricing"]{
        teir,
        description,
        price
      },
      "usedBy": *[_type == "usedBy"]{
        name,
        slug,
        url
      }
    }
    `;
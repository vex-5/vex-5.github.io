/**
 * SEO Structured Data (JSON-LD) for vex5online
 * Injects Schema.org metadata (WebSite, VideoGame, ImageObject, FAQPage) into document head
 */
(function () {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://vex-5.github.io/#website",
        "url": "https://vex-5.github.io/",
        "name": "vex5online",
        "description": "Play Vex 5 Online and Vex 5 Unblocked Games for free in your browser."
      },
      {
        "@type": "VideoGame",
        "@id": "https://vex-5.github.io/",
        "name": "Vex 5 Online",
        "alternateName": ["vex5online", "Vex 5 Unblocked", "Vex 5"],
        "description": "Vex 5 Online is the acclaimed fifth installment in the legendary Vex stickman platformer series. Run, jump, slide, and survive deadly obstacles across 10 demanding acts and hardcore challenge rooms.",
        "url": "https://vex-5.github.io/",
        "image": [
          "https://vex-5.github.io/images/vex5.png",
          "https://vex-5.github.io/images/vex-5-online-gameplay.jpg",
          "https://vex-5.github.io/images/vex-5-unblocked-acts-traps.jpg"
        ],
        "genre": ["Platformer", "Action", "Parkour", "Obstacle Course"],
        "gamePlatform": ["Web Browser", "PC", "Mobile", "Chromebook"],
        "applicationCategory": "Game",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "bestRating": "5",
          "ratingCount": "12580"
        }
      },
      {
        "@type": "ImageObject",
        "@id": "https://vex-5.github.io/#gameplay-image",
        "url": "https://vex-5.github.io/images/vex-5-online-gameplay.jpg",
        "contentUrl": "https://vex-5.github.io/images/vex-5-online-gameplay.jpg",
        "name": "Vex 5 Online Gameplay - Dodge Spinning Saws",
        "description": "Vex 5 Online stickman parkour runner dodging deadly spinning red saw blades on vex5online",
        "width": 1280,
        "height": 720
      },
      {
        "@type": "ImageObject",
        "@id": "https://vex-5.github.io/#traps-image",
        "url": "https://vex-5.github.io/images/vex-5-unblocked-acts-traps.jpg",
        "contentUrl": "https://vex-5.github.io/images/vex-5-unblocked-acts-traps.jpg",
        "name": "Vex 5 Unblocked Obstacles & Traps",
        "description": "Vex 5 Unblocked stickman wall jumping between deadly spiked corridors on vex5online",
        "width": 1280,
        "height": 720
      },
      {
        "@type": "FAQPage",
        "@id": "https://vex-5.github.io/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Vex 5 Online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vex 5 Online is a fast-paced HTML5 platformer game where you control a nimble stickman through dangerous obstacle courses filled with spinning saw blades, spikes, cannons, and crumbling platforms."
            }
          },
          {
            "@type": "Question",
            "name": "How can I play Vex 5 unblocked at school or work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can play Vex 5 unblocked directly on vex-5.github.io (vex5online). Because the game runs on GitHub Pages using modern HTML5, it bypasses standard network firewalls and requires no downloads or flash player plugins."
            }
          },
          {
            "@type": "Question",
            "name": "Is vex5online completely free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, vex5online provides 100% free access to Vex 5 and other popular unblocked games without registration or fees."
            }
          },
          {
            "@type": "Question",
            "name": "What controls are used to play Vex 5 online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the W, A, S, D keys or Arrow keys to move, jump, slide, and climb. Press R to quickly restart a level if you get stuck."
            }
          }
        ]
      }
    ]
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(schemaData);
  document.head.appendChild(script);
})();

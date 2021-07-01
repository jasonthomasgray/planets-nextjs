import type { NextApiRequest, NextApiResponse } from 'next';

type PlanetData = {
  name: string;
  picture: string;
  age: number
  solarMass: number;
}

type Data = {
  data: PlanetData[];
}

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>,
): void {
  res.status(200).json({
    data: [
      {
        name: 'Mercury',
        picture: '/images/mercury.jpeg',
        age: 4.503,
        solarMass: 0.166014,
      },
      {
        name: 'Venus',
        picture: '/images/venus.jpeg',
        age: 4.503,
        solarMass: 2.08106272,
      },
      {
        name: 'Earth',
        picture: '/images/earth.jpeg',
        age: 4.503,
        solarMass: 3.00348959632,
      },
      {
        name: 'Mars',
        picture: '/images/mars.jpeg',
        age: 4.503,
        solarMass: 0.3232371722,
      },
      {
        name: 'Jupiter',
        picture: '/images/jupiter.jpeg',
        age: 4.503,
        solarMass: 954.7919,
      },
      {
        name: 'Saturn',
        picture: '/images/saturn.jpeg',
        age: 4.503,
        solarMass: 285.885670,
      },
      {
        name: 'Uranus',
        picture: '/images/uranus.jpeg',
        age: 4.503,
        solarMass: 43.66244,
      },
      {
        name: 'Neptune',
        picture: '/images/neptune.jpeg',
        age: 4.503,
        solarMass: 51.51384,
      },
      {
        name: 'Pluto',
        picture: '/images/pluto.jpeg',
        age: 4.503,
        solarMass: 0.007396,
      },
      {
        name: 'Ceres',
        picture: '/images/ceres.jpeg',
        age: 4.503,
        solarMass: 0.00047,
      },
      {
        name: 'Makemake',
        picture: '/images/makemake.jpeg',
        age: 4.503,
        solarMass: 0.00155849379,
      },
      {
        name: 'Haumea',
        picture: '/images/haumea.jpeg',
        age: 4.503,
        solarMass: 0.00201397617,
      },
      {
        name: 'Eris',
        picture: '/images/eris.jpeg',
        age: 4.503,
        solarMass: 0.00827811573,
      },
    ],
  });
}

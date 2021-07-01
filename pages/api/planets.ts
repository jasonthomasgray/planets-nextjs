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
        picture: '/images/mercury.jpg',
        age: 4.503,
        solarMass: 0.055,
      },
      {
        name: 'Venus',
        picture: '/images/venus.jpg',
        age: 4.503,
        solarMass: 0.815,
      },
      {
        name: 'Earth',
        picture: '/images/earth.jpg',
        age: 0,
        solarMass: 0,
      },
      {
        name: 'Mars',
        picture: '/images/mars.jpg',
        age: 0,
        solarMass: 0,
      },
      {
        name: 'Jupiter',
        picture: '/images/jupiter.jpg',
        age: 0,
        solarMass: 0,
      },
      {
        name: 'Saturn',
        picture: '/images/saturn.jpg',
        age: 0,
        solarMass: 0,
      },
      {
        name: 'Uranus',
        picture: '/images/uranus.jpg',
        age: 0,
        solarMass: 0,
      },
      {
        name: 'Neptune',
        picture: '/images/neptune.jpg',
        age: 0,
        solarMass: 0,
      },
      {
        name: 'Pluto',
        picture: '/images/pluto.jpg',
        age: 0,
        solarMass: 0,
      },
      {
        name: 'Ceres',
        picture: '/images/ceres.jpg',
        age: 0,
        solarMass: 0,
      },
      {
        name: 'Makemake',
        picture: '/images/makemake.jpg',
        age: 0,
        solarMass: 0,
      },
      {
        name: 'Haumea',
        picture: '/images/haumea.jpg',
        age: 0,
        solarMass: 0,
      },
      {
        name: 'Eris',
        picture: '/images/eris.jpg',
        age: 0,
        solarMass: 0,
      },
    ],
  });
}

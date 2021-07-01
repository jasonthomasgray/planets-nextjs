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
    ],
  });
}

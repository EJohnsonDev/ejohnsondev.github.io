import { ServerSide } from './bio-info';

export const techStack: TechStackInfo[] = [
  {
    name: 'html5',
    img: 'locaiton of image',
    side: ServerSide.Front,
  },
  {
    name: 'css3',
    img: 'locaiton of image',
    side: ServerSide.Front,
  },
  {
    name: 'Javascript',
    img: 'assets/icons/js.svg',
    side: ServerSide.Front,
  },
  {
    name: 'Typeceript',
    img: 'locaiton of image',
    side: ServerSide.Front,
  },
  {
    name: 'Bootstrap',
    img: 'locaiton of image',
    side: ServerSide.Front,
  },
  {
    name: 'Angular',
    img: 'locaiton of image',
    side: ServerSide.Front,
  },
  {
    name: 'rxjs',
    img: 'locaiton of image',
    side: ServerSide.Front,
  },
  {
    name: 'Azure DevOps',
    img: 'locaiton of image',
    side: ServerSide.Back,
  },
  {
    name: 'Git',
    img: 'locaiton of image',
    side: ServerSide.Back,
  },
  {
    name: 'npm',
    img: 'locaiton of image',
    side: ServerSide.Back,
  },
  {
    name: 'RestAPI',
    img: 'locaiton of image',
    side: ServerSide.Back,
  },
  {
    name: 'json',
    img: 'locaiton of image',
    side: ServerSide.Back,
  },
  {
    name: 'Express',
    img: 'locaiton of image',
    side: ServerSide.Back,
  },
];

export interface TechStackInfo {
  name: string;
  img: string;
  side: ServerSide;
}

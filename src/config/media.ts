export type Embed = {
  src: string;
  poster: string;
  title: string;
  start: string;
  hint: string;
  hintIcon: string;
  link: string;
  linkLabel: string;
};

export type Video = Embed & { description: string; uploaded: string; duration: string };

export const maternityTour: Embed = {
  src: 'https://my.3dtours.co.za/tour/arwyp-medical-centre-maternity-ward',
  poster: '/media/maternity-tour.webp',
  title: 'Arwyp Medical Centre maternity ward 3D tour',
  start: 'Start the 3D tour',
  hint: 'Drag to look around, click the floor to move',
  hintIcon: 'move-3d',
  link: 'https://my.3dtours.co.za/tour/arwyp-medical-centre-maternity-ward',
  linkLabel: 'Open full screen',
};

export const hospitalFilm: Video = {
  src: 'https://www.youtube-nocookie.com/embed/Qn9vZ4_3c4s?autoplay=1&rel=0',
  poster: '/media/hospital-film.webp',
  title: 'Arwyp Medical Centre, Kempton Park',
  start: 'Play the hospital film',
  hint: 'Our wards, theatres and teams in 3 minutes',
  hintIcon: 'clapperboard',
  link: 'https://www.youtube.com/watch?v=Qn9vZ4_3c4s',
  linkLabel: 'Watch on YouTube',
  description: 'A walk through Arwyp Medical Centre in Kempton Park: our wards, theatres, maternity unit and the teams who care for our patients.',
  uploaded: '2024-07-23T05:53:03-07:00',
  duration: 'PT3M29S',
};

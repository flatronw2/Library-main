export enum GenresEnum {
  DRAMA = 'DRAMA',
  ACTION = 'ACTION',
  COMEDY = 'COMEDY',
  THRILLER = 'THRILLER',
  HORROR = 'HORROR',
  DOCUMENTARY = 'DOCUMENTARY',
  SCIFI = 'SCI-FI'
}

export const GenresType: Record<GenresEnum, string> = {
  [GenresEnum.DRAMA]: "DRAMA",
  [GenresEnum.ACTION]: "ACTION",
  [GenresEnum.COMEDY]: "COMEDY",
  [GenresEnum.THRILLER]: "THRILLER",
  [GenresEnum.HORROR]: "HORROR",
  [GenresEnum.DOCUMENTARY]: "DOCUMENTARY",
  [GenresEnum.SCIFI]: "SCI-FI",
};

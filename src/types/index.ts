import {
  ExpressStatus,
  LastStatus,
  MetroLine,
  MetroLineNameKor,
  StatusCode,
  TrainStateStatus,
  UpDownLine,
} from '../utils';

export type MetroLineKeyType = keyof typeof MetroLine;
export type MetroLineType = (typeof MetroLine)[MetroLineKeyType];
export type MetroLineNameKorType = (typeof MetroLineNameKor)[MetroLineKeyType];

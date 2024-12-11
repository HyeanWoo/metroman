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

export type UpDownLineType = (typeof UpDownLine)[keyof typeof UpDownLine];
export type TrainStateStatusType =
  (typeof TrainStateStatus)[keyof typeof TrainStateStatus];
export type ExpressStatusType =
  (typeof ExpressStatus)[keyof typeof ExpressStatus];
export type LastStatusType = (typeof LastStatus)[keyof typeof LastStatus];

export type StatusCodeType = keyof typeof StatusCode;

export type MetroPositionType = {
  rowNum: number;
  selectedCount: number;
  subwayId: MetroLineType;
  subwayNm: MetroLineNameKorType;
  statnId: string;
  statnNm: string;
  trainNo: string;
  lastRecptnDt: string;
  recptnDt: string;
  updnLine: UpDownLineType;
  statnTid: string;
  statnTnm: string;
  trainSttus: TrainStateStatusType;
  directAt: ExpressStatusType;
  lstcarAt: LastStatusType;
};
export type MetroListResponse = {
  errorMessage: {
    status: number;
    code: StatusCodeType;
    total: number;
  };
  realtimePositionList: MetroPositionType[];
};

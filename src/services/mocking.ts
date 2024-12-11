import type {
  MetroLineKeyType,
  MetroListResponse,
  UpDownLineType,
} from '../types';
import cache from '../utils/cache';
import {
  ExpressStatus,
  LastStatus,
  MetroLine,
  MetroLineNameKor,
  StationList,
  TrainStateStatus,
} from '../utils/constants';

function addRandomTime(currentTime: Date): Date {
  const randomMs = Math.floor(Math.random() * (3 * 60 * 1000)) + 1 * 60 * 1000;
  const futureTime = new Date(currentTime.getTime() + randomMs);
  return futureTime;
}

function getMetroDate(date: Date): string {
  return `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
}

function getFullMetroTime(date: Date): string {
  return date.toISOString().replace('T', ' ').split('.')[0];
}

export async function mockingPositionApi(
  lineNumber: MetroLineKeyType,
): Promise<MetroListResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const min = 30;
  const max = 40;
  const totalMetroInService = Math.floor(Math.random() * (max - min + 1)) + min;

  const realtimePositionList = [];

  let currentDate = new Date();
  for (let i = 0; i < totalMetroInService; i++) {
    const randomStation = StationList[Math.floor(Math.random() * 48)];
    const recentDate = getMetroDate(currentDate);
    const recentTime = getFullMetroTime(currentDate);
    const updnLine = ['0', '1'][
      Math.floor(Math.random() * 2)
    ] as UpDownLineType;

    const oneMetro = {
      rowNum: i + 1,
      selectedCount: totalMetroInService,
      subwayId: MetroLine[lineNumber],
      subwayNm: MetroLineNameKor[lineNumber],
      statnId: randomStation.id.toString(),
      statnNm: randomStation.name,
      trainNo: (Math.floor(Math.random() * totalMetroInService) + 1).toString(),
      lastRecptnDt: recentDate,
      recptnDt: recentTime,
      updnLine: updnLine,
      statnTid: updnLine === '0' ? '1004000409' : '1004000456',
      statnTnm: updnLine === '0' ? '당고개' : '오이도',
      trainSttus: TrainStateStatus.entered,
      directAt: ExpressStatus.normal,
      lstcarAt: LastStatus.normal,
    };

    realtimePositionList.push(oneMetro);
    currentDate = addRandomTime(currentDate);
  }

  const data: MetroListResponse = {
    errorMessage: {
      status: 200,
      total: totalMetroInService,
      code: 'INFO-000',
    },
    realtimePositionList,
  };

  cache.set(lineNumber, data);

  return data;
}

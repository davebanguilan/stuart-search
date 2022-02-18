import { Data } from '../models';

export const PHARMACOLOGICAL_ACTIVITY: Data[] = [
  {
    text: 'ANTIOXIDANT',
    value: 'antiOxidant',
  },
  {
    text: 'ANALGESIC',
    value: 'analgesic',
  },
  {
    text: 'ANTI-DIABETIC',
    value: 'antiDiabetic',
  },
  // {
  //   text: 'ANTI-INFLAMMATORY',
  //   value: 'antiInflammatory'
  // },
  // {
  //   text: 'ANTI-HELMINTIC',
  //   value: 'antiHelmintic',
  // },
  // {
  //   text: 'ANTI-DIARRHEAL',
  //   value: 'antiDiarrheal',
  // },
  // {
  //   text: 'ANTICANCER',
  //   value: 'antiCancer',
  // },
  // {
  //   text: 'ASTRINGENT',
  //   value: 'astringent',
  // },
  // {
  //   text: 'ANTIBACTERIAL',
  //   value: 'antibacterial',
  // },
  // {
  //   text: 'ANTIMICROBIAL',
  //   value: 'antiMicrobial',
  // },
];

export const ANTIOXIDANT = [
  'ACACIA',
  'CHINESE ANAHAU',
];

export const ANALGESIC = [
  'DAMONG MABAHO',
  'SALUYOT'
];

export const ANTIDIABETIC = [
  'TAWA TAWA',
  'IPIL-IPIL'
];


export const MAP_PA = {
  antiOxidant: ANTIOXIDANT,
  analgesic: ANALGESIC,
  antiDiabetic: ANTIDIABETIC,
};

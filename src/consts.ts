/*
 * @author: tisfeng
 * @createTime: 2022-06-24 22:36
 * @lastEditor: tisfeng
 * @lastEditTime: 2022-07-15 16:20
 * @fileName: consts.ts
 *
 * Copyright (c) 2022 by tisfeng, All Rights Reserved.
 */

import { LanguageItem, RequestErrorInfo } from "./types";

export const clipboardQueryTextKey = "clipboardQueryTextKey";

export enum YoudaoRequestStateCode {
  Success = "0",
  AccessFrequencyLimited = "207",
  InsufficientAccountBalance = "401",
  TargetLanguageNotSupported = "102",
  TranslationQueryFailed = "302", // 翻译查询失败, such as 'con' 😓
}

// https://fanyi-api.baidu.com/doc/21
export enum BaiduRequestStateCode {
  Success = "52000",
  AccessFrequencyLimited = "54003",
  InsufficientAccountBalance = "54004",
  TargetLanguageNotSupported = "58001",
}

export const youdaoErrorCodeUrl = encodeURI(
  "https://ai.youdao.com/DOCSIRMA/html/自然语言翻译/API文档/文本翻译服务/文本翻译服务-API文档.html#section-11"
);

export const youdaoErrorList: RequestErrorInfo[] = [
  {
    code: YoudaoRequestStateCode.Success,
    message: "Success",
  },
  {
    code: YoudaoRequestStateCode.AccessFrequencyLimited,
    message: "Access frequency limited",
  },
  {
    code: YoudaoRequestStateCode.InsufficientAccountBalance,
    message: "Insufficient account balance",
  },
  {
    code: YoudaoRequestStateCode.TargetLanguageNotSupported,
    message: "Target language not supported",
  },
  {
    code: YoudaoRequestStateCode.TranslationQueryFailed,
    message: "Translation query failed",
  },
];

export function getYoudaoErrorInfo(errorCode: string): RequestErrorInfo {
  return (
    youdaoErrorList.find((item) => item.code === errorCode) || {
      code: errorCode,
      message: "",
    }
  );
}

/**
 * language item list
 * TODO: add more language item.
 */
export const languageItemList: LanguageItem[] = [
  {
    youdaoLanguageId: "auto",
    appleLanguageId: "auto",
    francLanguageId: "und", // 'und', means undetermined
    aliyunLanguageId: "auto",
    tencentLanguageId: "auto",
    baiduLanguageId: "auto",
    caiyunLanguageId: "auto",
    googleLanguageId: "auto",
    languageTitle: "Auto Language",
  },
  {
    youdaoLanguageId: "zh-CHS",
    appleLanguageId: "zh_CN",
    appleChineseLanguageTitle: "中文",
    deeplSourceLanguageId: "ZH",
    francLanguageId: "cmn",
    aliyunLanguageId: "zh",
    tencentLanguageId: "zh",
    baiduLanguageId: "zh",
    caiyunLanguageId: "zh",
    googleLanguageId: "zh-CN",
    languageTitle: "Chinese-Simplified",
    voiceList: ["Ting-Ting"],
  },
  {
    youdaoLanguageId: "zh-CHT",
    appleLanguageId: "zh-TW",
    appleChineseLanguageTitle: "中文",
    deeplSourceLanguageId: "ZH",
    francLanguageId: "cmn",
    aliyunLanguageId: "zh-tw",
    tencentLanguageId: "zh-TW",
    baiduLanguageId: "cht",
    caiyunLanguageId: "zh",
    googleLanguageId: "zh-TW",
    languageTitle: "Chinese-Traditional",
    voiceList: ["Ting-Ting"],
  },
  {
    youdaoLanguageId: "en",
    appleLanguageId: "en_US",
    appleChineseLanguageTitle: "英语",
    deeplSourceLanguageId: "EN",
    deeplTargetLanguageId: "EN-US", // "EN-GB" "EN-US"
    francLanguageId: "eng",
    aliyunLanguageId: "en",
    tencentLanguageId: "en",
    youdaoWebLanguageId: "eng",
    eudicWebLanguageId: "en",
    baiduLanguageId: "en",
    caiyunLanguageId: "en",
    googleLanguageId: "en",
    languageTitle: "English",
    voiceList: ["Alex", "Samantha"],
  },
  {
    youdaoLanguageId: "ja",
    appleLanguageId: "ja_JP",
    appleChineseLanguageTitle: "日语",
    deeplSourceLanguageId: "JA",
    francLanguageId: "jpn",
    aliyunLanguageId: "ja",
    tencentDetectLanguageId: "jp",
    tencentLanguageId: "ja",
    youdaoWebLanguageId: "jap",
    baiduLanguageId: "jp",
    caiyunLanguageId: "ja",
    languageTitle: "Japanese",
    voiceList: ["Kyoko"],
  },
  {
    youdaoLanguageId: "ko",
    appleLanguageId: "ko_KR",
    appleChineseLanguageTitle: "韩语",
    francLanguageId: "kor",
    aliyunLanguageId: "ko",
    tencentDetectLanguageId: "kr",
    tencentLanguageId: "ko",
    youdaoWebLanguageId: "ko",
    baiduLanguageId: "kor",
    languageTitle: "Korean",
    voiceList: ["Yuna"],
  },
  {
    youdaoLanguageId: "fr",
    appleLanguageId: "fr_FR",
    appleChineseLanguageTitle: "法语",
    deeplSourceLanguageId: "FR",
    francLanguageId: "fra",
    aliyunLanguageId: "fr",
    tencentLanguageId: "fr",
    youdaoWebLanguageId: "fr",
    eudicWebLanguageId: "fr",
    baiduLanguageId: "fra",
    languageTitle: "French",
    voiceList: ["Amelie", "Thomas"],
  },
  {
    youdaoLanguageId: "es",
    appleLanguageId: "es_ES",
    appleChineseLanguageTitle: "西班牙语",
    deeplSourceLanguageId: "ES",
    francLanguageId: "spa",
    aliyunLanguageId: "es",
    tencentLanguageId: "es",
    eudicWebLanguageId: "es",
    baiduLanguageId: "spa",
    languageTitle: "Spanish",
    voiceList: ["Jorge", "Juan", "Diego", "Monica", "Paulina"],
  },
  {
    youdaoLanguageId: "it",
    appleLanguageId: "it_IT",
    appleChineseLanguageTitle: "意大利语",
    deeplSourceLanguageId: "IT",
    francLanguageId: "ita",
    aliyunLanguageId: "it",
    tencentLanguageId: "it",
    baiduLanguageId: "it",
    languageTitle: "Italian",
    voiceList: ["Alice", "Luca"],
  },
  {
    youdaoLanguageId: "de",
    appleLanguageId: "de_DE",
    appleChineseLanguageTitle: "德语",
    deeplSourceLanguageId: "DE",
    francLanguageId: "deu",
    aliyunLanguageId: "de",
    tencentLanguageId: "de",
    eudicWebLanguageId: "de",
    baiduLanguageId: "de",
    languageTitle: "German",
    voiceList: ["Anna"],
  },
  {
    youdaoLanguageId: "pt",
    appleLanguageId: "pt_BR",
    appleChineseLanguageTitle: "葡萄牙语",
    deeplSourceLanguageId: "PT",
    deeplTargetLanguageId: "PT-PT", // "PT-PT" "PT-BR"
    francLanguageId: "por",
    aliyunLanguageId: "pt",
    tencentLanguageId: "pt",
    baiduLanguageId: "pt",
    languageTitle: "Portuguese",
    voiceList: ["Joana", "Luciana"],
  },
  {
    youdaoLanguageId: "ru",
    appleLanguageId: "ru_RU",
    appleChineseLanguageTitle: "俄语",
    deeplSourceLanguageId: "RU",
    francLanguageId: "rus",
    aliyunLanguageId: "ru",
    tencentLanguageId: "ru",
    baiduLanguageId: "ru",
    languageTitle: "Russian",
    voiceList: ["Milena", "Yuri"],
  },
  {
    youdaoLanguageId: "ar",
    appleLanguageId: "ar_AE",
    appleChineseLanguageTitle: "阿拉伯语",
    francLanguageId: "arb",
    aliyunLanguageId: "ar",
    tencentLanguageId: "ar",
    baiduLanguageId: "ara",
    languageTitle: "Arabic",
    voiceList: ["Maged"],
  },
  {
    youdaoLanguageId: "th",
    francLanguageId: "tha",
    aliyunLanguageId: "th",
    tencentLanguageId: "th",
    baiduLanguageId: "th",
    languageTitle: "Thai",
    voiceList: ["Kanya"],
  },
  {
    youdaoLanguageId: "sv",
    deeplSourceLanguageId: "SV",
    francLanguageId: "swe",
    aliyunLanguageId: "sv",
    baiduLanguageId: "swe",
    languageTitle: "Swedish",
    voiceList: ["Alva"],
  },
  {
    youdaoLanguageId: "nl",
    deeplSourceLanguageId: "NL",
    francLanguageId: "nld",
    aliyunLanguageId: "nl",
    baiduLanguageId: "nl",
    languageTitle: "Dutch",
    voiceList: ["Ellen", "Xander"],
  },
  {
    youdaoLanguageId: "ro",
    deeplSourceLanguageId: "RO",
    francLanguageId: "ron",
    aliyunLanguageId: "ro",
    baiduLanguageId: "rom",
    languageTitle: "Romanian",
    voiceList: ["Ioana"],
  },
  {
    youdaoLanguageId: "sk",
    deeplSourceLanguageId: "SK",
    francLanguageId: "slk",
    aliyunLanguageId: "sk",
    baiduLanguageId: "slo",
    languageTitle: "Slovak",
    voiceList: ["Laura"],
  },
  {
    youdaoLanguageId: "hu",
    deeplSourceLanguageId: "HU",
    francLanguageId: "hun",
    aliyunLanguageId: "hu",
    baiduLanguageId: "hu",
    languageTitle: "Hungarian",
    voiceList: ["Mariska"],
  },
  {
    youdaoLanguageId: "el",
    deeplSourceLanguageId: "EL",
    francLanguageId: "ell",
    aliyunLanguageId: "el",
    baiduLanguageId: "el",
    languageTitle: "Greek",
    voiceList: ["Melina"],
  },
  {
    youdaoLanguageId: "da",
    deeplSourceLanguageId: "DA",
    francLanguageId: "dan",
    aliyunLanguageId: "da",
    baiduLanguageId: "dan",
    languageTitle: "Danish",
    voiceList: ["Sara"],
  },
  {
    youdaoLanguageId: "fi",
    deeplSourceLanguageId: "FI",
    francLanguageId: "fin",
    aliyunLanguageId: "fi",
    baiduLanguageId: "fin",
    languageTitle: "Finnish",
    voiceList: ["Satu"],
  },
  {
    youdaoLanguageId: "pl",
    deeplSourceLanguageId: "PL",
    francLanguageId: "pol",
    aliyunLanguageId: "pl",
    baiduLanguageId: "pl",
    languageTitle: "Polish",
    voiceList: ["Zosia"],
  },
  {
    youdaoLanguageId: "cs",
    deeplSourceLanguageId: "CS",
    francLanguageId: "ces",
    aliyunLanguageId: "cs",
    baiduLanguageId: "cs",
    languageTitle: "Czech",
    voiceList: ["Zuzana"],
  },
];

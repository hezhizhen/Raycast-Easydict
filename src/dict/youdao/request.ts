/*
 * @author: tisfeng
 * @createTime: 2022-06-26 11:13
 * @lastEditor: tisfeng
 * @lastEditTime: 2022-06-27 13:18
 * @fileName: request.ts
 *
 * Copyright (c) 2022 by tisfeng, All Rights Reserved.
 */

import {
  downloadAudio,
  downloadWordAudioWithURL,
  getWordAudioPath,
  maxTextLengthOfDownloadYoudaoTTSAudio,
} from "../../audio";
import { QueryWordInfo } from "../../types";

/**
  download word audio file. if query text is a word (only English word?), download audio file from youdao wild api, otherwise download from youdao tts.
  if query text is too long, don't download audio file, later derectly use say command to play.
 */
export function downloadYoudaoAudio(queryWordInfo: QueryWordInfo, callback?: () => void) {
  if (queryWordInfo.isWord && queryWordInfo.fromLanguage === "en") {
    downloadYoudaoWebWordAudio(queryWordInfo.word, callback);
  } else if (queryWordInfo.word.length < maxTextLengthOfDownloadYoudaoTTSAudio) {
    if (queryWordInfo.speechUrl) {
      downloadWordAudioWithURL(queryWordInfo.word, queryWordInfo.speechUrl, callback);
    } else {
      console.warn(`youdao tts url not found: ${queryWordInfo.word}`);
    }
  }
}

/**
  * * Note: this function is only used to download `word` audio file from youdao, if not a word, the pronunciation audio is not accurate.
  
  this is a wild web API from https://cloud.tencent.com/developer/article/1596467 , also can find in web https://dict.youdao.com/w/good
  example https://dict.youdao.com/dictvoice?type=0&audio=good
 */
export function downloadYoudaoWebWordAudio(word: string, callback?: () => void) {
  const url = `https://dict.youdao.com/dictvoice?type=2&audio=${encodeURI(word)}`;
  console.log(`download youdao web audio: ${url}`);
  const audioPath = getWordAudioPath(word);
  downloadAudio(url, audioPath, callback);
}

import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import { FileUpload } from 'graphql-upload';

interface IFilesServiceUplode {
  file: FileUpload;
}

@Injectable()
export class FilesService {
  async upload({ file }: IFilesServiceUplode): Promise<string> {
    console.log(file);
    // 1. 파일을 클라우드 스토리지에 저장하는 로직

    // 1-1) 스토리지 셋팅하기
    const storage = new Storage({
      projectId: 'linear-reporter-437203-g8',
      keyFilename: 'gcp-file-storage.json',
    }).bucket('jj-file-storage');

    // 1-2) 스토리지에 파일 올리기
    await new Promise((resolve, reject) => {
      file
        .createReadStream()
        .pipe(storage.file(file.filename).createWriteStream())
        .on('finish', () => {
          console.log('성공');
          resolve('성공');
        })
        .on('error', () => {
          console.log('실패');
          reject('실패');
        });
    })

    console.log('파일 전송이 완료되었습니다.');
    return 'image upload';
  }
}

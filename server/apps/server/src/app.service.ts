import { BusinessException } from '@app/common'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    const a: any = {}
    try {
      console.log(a.b.c)
    } catch (error) {
      throw new BusinessException('你这个参数错了')
    }
    return 'Hello World!'
  }
}

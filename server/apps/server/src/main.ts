import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { VersioningType } from '@nestjs/common'
import {
  TransformInterceptor,
  AllExceptionsFilter,
  HttpExceptionFilter,
} from '@app/common'
import { generateDocument } from './doc'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // 统一响应体格式
  app.useGlobalInterceptors(new TransformInterceptor())

  // 异常过滤器
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter())

  // 接口版本管理
  app.enableVersioning({
    type: VersioningType.URI,
  })

  // 创建文档
  generateDocument(app)

  await app.listen(3000)
}
bootstrap()

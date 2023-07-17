/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app/app.module'

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const globalPrefix = 'api/v1'
	const port = 3333

	const config = new DocumentBuilder().setTitle('Monopoly').setDescription('Monopoly Room API description').setVersion('1.0').build()
	const document = SwaggerModule.createDocument(app, config)

	app.setGlobalPrefix(globalPrefix)
	SwaggerModule.setup('api/swagger', app, document)

	await app.listen(port)
	Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`)
	Logger.log(`🚀 Application swagger is running on: http://localhost:${port}/api/swagger`)
}

bootstrap()

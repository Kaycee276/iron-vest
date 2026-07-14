import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';

@Catch(
  Prisma.PrismaClientKnownRequestError,
  Prisma.PrismaClientInitializationError,
  Error,
)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    console.error(exception.message);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    // Check if the error is a Prisma client error
    if (
      exception instanceof Prisma.PrismaClientKnownRequestError ||
      exception instanceof Prisma.PrismaClientInitializationError ||
      exception.code === 'ETIMEDOUT'
    ) {
      const status = HttpStatus.SERVICE_UNAVAILABLE;
      let message = 'Database connection error. Please try again later.';

      if (exception.code === 'P2002') {
        response.status(HttpStatus.CONFLICT).json({
          statusCode: HttpStatus.CONFLICT,
          message: 'Conflict: Unique constraint failed.',
        });
        return;
      } else if (exception.code === 'ETIMEDOUT') {
        message = 'Database connection timed out. Please try again.';
      }

      response.status(status).json({
        statusCode: status,
        message: message,
      });
      return;
    }

    // Let default NestJS exception filter handle other errors (like UnauthorizedException)
    super.catch(exception, host);
  }
}

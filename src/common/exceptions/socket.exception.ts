import { Catch, ArgumentsHost, WsExceptionFilter } from '@nestjs/common';
import { WsException } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { AppLogger } from 'src/common/logger';

@Catch(Error, WsException)
export class WebsocketsExceptionFilter implements WsExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const socket: Socket = host.switchToWs().getClient();
    const res = exception.getResponse();
    const result = {
      error: res.error || 'InternalServerError',
      status: res.statusCode || 500,
      message: res.message || 'Server Error!',
    };
    AppLogger.error(result);
    socket.emit('exception', result);
  }
}

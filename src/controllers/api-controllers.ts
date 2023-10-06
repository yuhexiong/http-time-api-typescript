// controllers/api-controllers.ts
import { Request, Response, NextFunction } from 'express';
import moment from 'moment-timezone';

export let timezone: string = 'Etc/UTC';
const allZones: String[] = moment.tz.names();

export class ApiControllers {
  getTimePage(request: Request, response: Response, next: NextFunction) {
    let timezoneNow: string | undefined = <string>request.query.timezone; // ?timezone=時區

    timezoneNow = timezoneNow ?? timezone;

    if (allZones.includes(timezoneNow)){
      response.send(`Zone: ${timezoneNow}, Time: ${moment().tz(timezoneNow).format('YYYY-MM-DD HH:mm:ss')}`);
    } else {
      response.send(`Invalid Input! Zone: ${timezone}, Time: ${moment().tz(timezone).format('YYYY-MM-DD HH:mm:ss')}`);
    }
  }

  postTimePage(request: Request, response: Response, next: NextFunction) {
    let timezoneNow: string | undefined = request.body?.timezone;

    timezoneNow = timezoneNow ?? timezone;

    if (allZones.includes(timezoneNow)){
      response.send(`Zone: ${timezoneNow}, Time: ${moment().tz(timezoneNow).format('YYYY-MM-DD HH:mm:ss')}`);
    } else {
      response.send(`Invalid Input! Zone: ${timezone}, Time: ${moment().tz(timezone).format('YYYY-MM-DD HH:mm:ss')}`);
    }
  }

  putTimezonePage(request: Request, response: Response, next: NextFunction) {
    let timezoneNew: string | undefined = request.body?.timezone;

    timezoneNew = timezoneNew ?? timezone;

    if (!allZones.includes(timezoneNew)){
      timezone = 'Etc/UTC';
      response.send(`Invalid zone! Reset as ${timezone}`);
    } else {
      timezone = timezoneNew;
      response.send(`Reset as ${timezone}`);
    }
  }
  
  deleteTimezonePage(request: Request, response: Response, next: NextFunction) {
    timezone = 'Etc/UTC';
    response.send(`Reset as ${timezone}`);
  }
}
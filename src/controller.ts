import { Request, Response } from 'express';

class AppController {
  public fizzBuzz(req: Request, res: Response) {
    let response = [];
    for (let count = 1; count <= 100; count++) {
      if ( fizzCount(count) && buzzCount(count) ) response.push(count);
    }
    return res.status(200).send(response);
  };

  public fizz(req: Request, res: Response) {
    let response = [];
    for (let count = 1; count <= 100; count++) {
      if (fizzCount(count)) response.push(count);
    }
    return res.status(200).send(response);
  }

  public buzz(req: Request, res: Response) {
    let response = [];
    for (let count = 1; count <= 100; count++) {
      if (buzzCount(count)) response.push(count);
    }
    return res.status(200).send(response);
  }

  public other(req: Request, res: Response) {
    let response = [];
    for (let count = 1; count <= 100; count++) {
      if (!fizzCount(count) && !buzzCount(count)) response.push(count);
    }
    return res.status(200).send(response);
  }
}


function fizzCount(value: number) {
  if (value % 3 === 0) {
    return true;
  }
  return false;
}

function buzzCount(value: number) {
  if (value % 5 === 0) {
    return true;
  }
  return false;
}

export default new AppController();

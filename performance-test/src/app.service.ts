import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTest(): number {
    function fibonacci(num: number): number {
      if (num <= 1) return num;
      return fibonacci(num - 1) + fibonacci(num - 2);
    }

    const result = fibonacci(35); // 예: 35번째 피보나치 수 계산
    return result;
  }
}

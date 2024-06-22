# Node-JS-Performance-Test
Node JS 부하테스트 툴 autocannon을 활용해 임의로 트래픽을 생성하고, 이를 해결하기 위해 pm2 모듈의 cluster를 활용해 멀티 프로세스 구현을 시도한다.

## 1. 테스트용 Nest JS api 만들기

node js의 웹 프레임워크 nest js 활용해 간단한 api를 만든다.
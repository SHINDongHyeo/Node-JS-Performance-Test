module.exports = {
    apps: [
      {
        name: 'performance-test',
        script: 'dist/main.js', // 빌드된 JS 파일 경로
        instances: 2,
        exec_mode: 'cluster', // 클러스터 모드 사용
        env: {
          NODE_ENV: 'development',
        },
        env_production: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  
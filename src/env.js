let baseURL
switch (process.env.NODE_ENV) {
    // 开发
    case 'dev':
        baseURL = 'http:/dev-mall-pre.springboot.cn/api'
        break;
    // 测试
    case 'test':
        baseURL = 'http:/test-mall-pre.springboot.cn/api'
        break;
    // 线上
    case 'prod':
        baseURL = 'http:/mall-pre.springboot.cn/api'
        break;
    default:
        baseURL = 'http:/mall-pre.springboot.cn/api'
        break;
}


export default {
    baseURL
}
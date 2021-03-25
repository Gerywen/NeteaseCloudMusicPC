import originAxios from "axios";
export const baseUrl = "http://localhost:3000";
export default function axios(option) {
  return new Promise((resolve, reject) => {
    // 创建axios实例
    const instace = originAxios.create({
      baseURL: baseUrl,
      timeout: 5000,
    });
    // 配置请求和响应拦截
    instace.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return error;
      }
    );
    instace.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (err) => {
        console.log("来到response拦截failure中");
        console.log(err);
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = "请求错误";
              break;
            case 401:
              err.message = "未授权的访问";
              break;
          }
        }
        return err;
      }
    );
    // 传入对象进行网络请求
    instace(option)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

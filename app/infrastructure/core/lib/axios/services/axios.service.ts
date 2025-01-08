import axios from 'axios'
import type { AxiosInstance } from 'axios';
class AxiosService {
  readonly instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: '',
      timeout: 10000, //time wait backend response before abort
    })
  }
    /**
     * Get Axios instance
     */
    public getAxiosInstance(): AxiosInstance {
        return this.instance;
      }
}

const axiosService = new AxiosService();
export default axiosService;
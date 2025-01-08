import axiosService from '../services/axios.service';

const useAxios = () => {
  return {
    axiosInstance: axiosService.getAxiosInstance(),

  };
};

export default useAxios;

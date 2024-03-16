import { useMutation, useQuery } from 'react-query'
import { request } from '../../components/utils/request'

// GET Service Plus Status
const fetchServicePlusStatus = () => {
  return request({
    url: '/servicePlusStatus',
    method: 'get',
  })
}

export const useFetchServicePlusStatus = (onSuccess, onError) => {
  return useQuery('get-servicePlus-status', () => fetchServicePlusStatus(), {
    onSuccess,
    onError,
  })
}

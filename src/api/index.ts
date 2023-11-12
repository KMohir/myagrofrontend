import axios, { AxiosError } from 'axios'

const env = import.meta.env

function createInstance(baseURL: string, type: string) {
  const headers: any = {
    Accept: 'application/json',
    'Content-Type': type
  }

  const axiosInstance = axios.create({ baseURL, headers })
  return axiosInstance
}

const mediaInstance = createInstance(
  env.VITE_APP_API_URL,
  'multipart/form-data'
)
const instance = createInstance(env.VITE_APP_API_URL, 'application/json')
const instanceTest = createInstance(env.VITE_APP_API_URL_TEST, 'application/json')
interface Params {
  url: string
}

interface GetParams extends Params {
  params?: any
}

interface PostData extends Params {
  data?: any
}
interface DeleteData extends Params {
  data?: any
}

export const useGet = ({ url, params }: GetParams) => {
  return instance.get(url, { params })
}

export const usePost = ({ url, data }: PostData) => {
  return instance.post(url, data)
}

export const useUpdate = ({ url, data }: DeleteData) => {
  return instance.patch(url, data)
}

export const useDelete = ({ url, data }: DeleteData) => {
  return instance.delete(url, { data })
}

// for media
export const usePostMedia = ({ url, data }: PostData) => {
  return mediaInstance.post(url, data)
}

export const useDeleteMedia = ({ url, data }: any) => {
  return instance.delete(url, { data })
}

// for test
export const useTestGet = ({ url, params }: GetParams) => {
  return instanceTest.get(url, { params })
}

export const useTestPost = ({ url, data }: PostData) => {
  return instanceTest.post(url, data)
}

export const useTestUpdate = ({ url, data }: DeleteData) => {
  return instanceTest.patch(url, data)
}

export const useTestDelete = ({ url, data }: DeleteData) => {
  return instanceTest.delete(url, { data })
}
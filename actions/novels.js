import axios from 'axios'

export default async () => {
  // eslint-disable-next-line no-undef
  const { data } = await axios.get(`${API_BASE_URL}/novels`)

  return data
}

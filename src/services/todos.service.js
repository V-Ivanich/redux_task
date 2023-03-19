import httpService from './http.service'

const todosEndepoint = 'todos/'

const todosService = {
  fetch: async () => {
    const { data } = await httpService.get(todosEndepoint, {
      params: {
        _page: 1,
        _limit: 10,
      },
    })
    return data
  },
  fetchTasks: async (title, completed) => {
    const { data } = await httpService.post(todosEndepoint, {
      userId: 1,
      title,
      completed,
    })
    return data
  },
}
export default todosService

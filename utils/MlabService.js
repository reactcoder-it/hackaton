class MlabService {
  _apiBase = 'http://localhost:3000/api'

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`)
    if (!res.ok) {
      throw new Error(`Не могу стянуть данные с URL ${url}, принят статус ${res.status}`)
    }
    return await res.json()
  }

  /**
   * Отправка данных в API
   */
  setResourse = async (url, data) => {
    const opts = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }
    const res = await fetch(`${this._apiBase}${url}`, opts)
    if (!res.ok) {
      throw new Error(`Не могу отправить данные по URL ${url}`)
    }
    return await res.json()
  }

  getAllPromises = async () => {
    return await this.getResource(`/promise`)
  }

  createPromise = async (promise) => {
    return await this.setResourse(`/promise`, promise)
  }
}

export default MlabService
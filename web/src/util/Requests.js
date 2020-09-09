let api = 'http://localhost:5000'

export async function GET(url) {
  let res = await fetch(`${api}/${url}`)
  return await res.json()
}

export async function POST(url, data) {
  let res = await fetch(`${api}/${url}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return await res.json()
}

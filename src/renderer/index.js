const information = document.getElementById('info')
information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`



const func = async () => {
  const pong = document.getElementById('pong')

    const response = await window.versions.ping()
    pong.innerHTML = response
    console.log(response) // 打印 'pong'
  }
  
  func()
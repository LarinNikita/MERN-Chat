import io from 'socket.io-client'

// const socket = io(window.location.origin.replace('3000', '4444'))
const socket = io('http://localhost:4444')

export default socket
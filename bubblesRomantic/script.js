// Lista de mensajes románticos
const messages = [
  'Te amo muchísimo ❤️',
  'Gracias por estar en mi vida 🌟',
  'Eres mi persona favorita 💕',
  'Juntos por siempre 🥰',
  'Tú y yo, para siempre 💖',
  'Tu sonrisa me ilumina 💫',
  'Eres lo mejor que me ha pasado 😍',
  'Cada momento contigo es mágico ✨',
  'Siempre pienso en ti 💭',
  'Mi corazón es tuyo 💘',
  'Contigo todo es mejor 💗',
  'Eres mi sueño hecho realidad 🌈',
  'Tu amor me hace volar 🚀',
  'Eres mi lugar feliz 🏡',
  'A tu lado soy más fuerte 💪',
  'Eres el sol de mis días ☀️',
  'Te elijo hoy y siempre 💍',
  'Nuestro amor no tiene límites 🌌',
  'Me haces sonreír con solo pensarte 😊',
  'Gracias por tanto amor 💞',
  'Eres la melodía de mi corazón 🎶',
  'Amarte es lo más fácil del mundo 🌎',
  'Tú haces que todo valga la pena 💝',
  'Eres el amor de mi vida 🫶',
  'Siempre serás mi persona 💓',
  'Nuestro amor es eterno ♾️',
  'Eres magia pura ✨',
  'Solo tú me haces sentir así 💫',
  'Estar contigo es mi lugar favorito 🏖️',
  'Amarte es mi aventura favorita 🗺️',
  'No necesito más que a ti 💑',
  'Tú haces que mi mundo gire 🌍',
  'Nuestro amor es mi tesoro 💎',
  'Estoy muy orgulloso de ti mi amor 💎'
]

// Crear una burbuja de texto
function createTextBubble () {
  const bubble = document.createElement('div')
  bubble.className = 'text-bubble'
  bubble.innerText = messages[Math.floor(Math.random() * messages.length)]

  // Añadir la burbuja al contenedor
  const container = document.getElementById('bubbles-text')
  container.appendChild(bubble)

  // Esperar a que se renderice para calcular el tamaño real
  requestAnimationFrame(() => {
    const rect = bubble.getBoundingClientRect()

    // Definir márgenes para evitar que la burbuja se salga
    const margin = 20
    const maxLeft = window.innerWidth - rect.width - margin
    const maxTop = window.innerHeight - rect.height - margin

    // Posiciones aleatorias dentro del área visible
    const left = Math.random() * maxLeft
    const top = Math.random() * maxTop

    bubble.style.left = `${left}px`
    bubble.style.top = `${top}px`
  })

  // Eliminar la burbuja después de 8 segundos
  setTimeout(() => {
    bubble.remove()
  }, 8000)
}

// Crear una burbuja cada 0.5 segundos
setInterval(createTextBubble, 500)

const syncDepthCopy = () => {
  const language = document.documentElement.lang === 'en' ? 'en' : 'fa'
  document.querySelectorAll('[data-depth]').forEach((element) => {
    element.innerHTML = element.dataset[language]
  })
}

document.querySelector('#lang')?.addEventListener('click', () => {
  queueMicrotask(syncDepthCopy)
})

syncDepthCopy()

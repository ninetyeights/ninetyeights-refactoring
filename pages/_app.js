import Head from 'next/head'
import { useState, useEffect } from 'react'
import Navbar from '../components/common/Navbar'
import Drawer from '../components/common/Drawer'
import favicon from '../assets/favicon.ico'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false)
  const [isWide, setIsWide] = useState(null)
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState(null)
  const [themeColor, setThemeColor] = useState('green')

  useEffect(() => {
    // mode
    const getMode = () => localStorage.getItem('mode') || 'system'
    setMode(getMode())

    // isWide
    const getIsWide = () => (localStorage.getItem('isWide') === 'false' ? false : true) || false
    setIsWide(getIsWide())

    // theme color
    const getThemeColor = () => localStorage.getItem('themeColor') || 'green'
    setThemeColor(getThemeColor())
  }, [])

  useEffect(() => {
    if (mode === null) return

    switch (mode) {
      case 'light':
        setIsDark(false)
        break
      case 'dark':
        setIsDark(true)
        break
    }
  }, [mode])

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href={favicon.src} />
      </Head>
      <div
        id="main"
        data-theme-color={themeColor}
        className={`pt-[60px] min-h-screen ${isDark ? 'dark' : 'light'}`}
      >
        <Navbar open={open} isWide={isWide} setOpen={setOpen} />
        <Drawer
          open={open}
          setOpen={setOpen}
          isWide={isWide}
          setIsWide={setIsWide}
          themeColor={themeColor}
          setThemeColor={setThemeColor}
          mode={mode}
          setMode={setMode}
        />
        <div className={`container px-4 pb-8${isWide ? '' : ' lg:max-w-4xl'}`}>
          <Component isWide={isWide} theme={isDark} {...pageProps} />
        </div>
      </div>
    </div>
  )
}

export default MyApp

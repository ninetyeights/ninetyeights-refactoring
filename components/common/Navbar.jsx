import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, Fragment } from 'react'
import Image from 'next/image'
import logo from '../../assets/logo.png'
import { MdSettings } from 'react-icons/md'
import { WEBSITE_NAME } from '../../constants'

const NAV_DATA = [
  {
    name: '首页',
    path: '/',
  },
  {
    name: '软件列表',
    path: '/software',
  },
  {
    name: '插件列表',
    path: '/extensions',
  },
  {
    name: '实用工具',
    path: '/tools',
  },
  {
    name: '常用网站',
    path: '/bookmarks',
  },
]

export default function Navbar({ open, setOpen, isWide }) {
  const router = useRouter()

  const triggerSettings = (event) => {
    event.stopPropagation()
    setOpen(!open)
  }

  return (
    <Fragment>
      <nav className="fixed top-0 left-0 z-20 w-full py-3 bg-white/70 backdrop-blur-sm dark:bg-slate-900 dark:bg-opacity-90 shadow">
        <div
          className={`container flex flex-wrap justify-between items-center px-4${
            isWide ? '' : ' lg:max-w-4xl'
          }`}
        >
          <Link href="/" className="flex items-center">
            <Image
              src={logo.src}
              className="mr-3 h-9 rounded-full"
              height={36}
              width={36}
              alt="NinetyEights"
            />
            <span className="self-center text-xl whitespace-nowrap text-black/70 dark:text-white/70 font-semibold ml-2">
              {WEBSITE_NAME}
            </span>
          </Link>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={triggerSettings}
            >
              <MdSettings className="h-5 w-5" />
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col items-center md:flex-row mt-0 space-x-2">
              {NAV_DATA.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    router.pathname === item.path
                      ? 'text-color-primary ne-nav-btn-current '
                      : ''
                  }rounded ne-nav-btn hover:text-color-primary`}
                >
                  <Link
                    href={item.path}
                    className="flex items-center justify-center py-1 px-2"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

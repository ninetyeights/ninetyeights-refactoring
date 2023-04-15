import {IoExtensionPuzzleOutline, IoAppsOutline, IoBuildOutline, IoLinkOutline, IoBookmarksOutline} from 'react-icons/io5'
import {MdUpdateDisabled, MdOutlineExtension} from 'react-icons/md'
import {FiTool, FiLink} from 'react-icons/fi'
import {GrAppsRounded} from 'react-icons/gr'
import {BiExtension} from 'react-icons/bi'

export const BROWSER_CATEGORIES = {
  all: '全部',
  blogging: '博客',
  shopping: '购物',
  'web-development': '开发者工具',
  communication: '社交与通讯',
  productivity: '实用工具',
  'search-tools': '搜索工具',
  sports: '体育',
  news: '新闻与天气',
  fun: '娱乐',
  photos: '照片',
  accessibility: '辅助功能',
  bookmarks: '书签',
  tabs: '标签页',
  appearance: '外观',
  'privacy-security': '隐私和安全',
  other: '其他',
}

export const SOFTWARE_CATEGORIES = {
  all: '全部',
  cut: '剪辑',
  test: '测试'
}

export const PLATFORM = {
  win: {
    name: 'Windows',
    thumbnail: 'https://images.unsplash.com/photo-1624571409108-e9a41746af53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: '这里汇集 Windows 常用软件下载地址，软件兼容 Win11、Win10、Win8.1 主流操作系统，为您提供一键批量下载功能。'
  },
  'mac-intel': {
    name: 'macOS (Intel)',
    thumbnail: 'https://images.unsplash.com/photo-1501163109389-abf37ca1276a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: '这里汇集 macOS (Intel) 常用软件下载地址，软件兼容 High Sierra、Mojave、Catalina、Big Sur、Monterey 主流操作系统，为您提供一键批量下载功能。'
  },
  'mac-apple': {
    name: 'macOS (Apple Silicon)',
    thumbnail: 'https://images.unsplash.com/photo-1635310569109-38d12a1c4188?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: '这里汇集 macOS (Apple Silicon) 常用软件下载地址，软件兼容 Big Sur、Monterey 主流操作系统，为您提供一键批量下载功能。'
  }
}

export const WEBSITE_NAME = '玖捌网'

export const HOME_CARD_DATA = [
  {
    title: '旧网站',
    icon: <MdUpdateDisabled size="2em" />,
    description: '此网站已停止更新',
    href: '#',
  },
  {
    title: '软件列表',
    icon: <IoAppsOutline className="icon-style" size="2em" />,
    description: '收集高安全性实用软件，支持跨平台批量下载',
    href: '/software',
  },
  {
    title: '插件列表',
    icon: <IoExtensionPuzzleOutline size="2em" />,
    description: '收集高安全性浏览器扩展程序，支持主流浏览器批量下载',
    href: '/extensions'
  },
  {
    title: '线上工具',
    icon: <IoBuildOutline size="2em" />,
    description: '收集高安全性浏览器扩展程序，支持主流浏览器批量下载',
    href: '/tools'
  },
  {
    title: '常用网站',
    icon: <IoLinkOutline style={{transform: 'rotate(-45deg)'}} size="2em" />,
    description: '收集高安全性浏览器扩展程序，支持主流浏览器批量下载',
    href: '/bookmarks'
  },
]
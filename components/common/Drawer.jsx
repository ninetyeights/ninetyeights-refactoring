import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MdClose, MdFiberManualRecord } from 'react-icons/md'

export default function Drawer({
  open,
  setOpen,
  isWide,
  setIsWide,
  themeColor,
  setThemeColor,
  mode,
  setMode,
}) {
  const [color, setColor] = useState('green')

  // 关闭设置
  useEffect(() => {
    document.addEventListener('click', () => setOpen(false))
    const _color = JSON.parse(localStorage.getItem('color')) || 'green'
    setColor(_color)
  }, [])

  /**
   * 点击设置内容阻止事件冒泡
   * @param {*} event
   */
  const triggerSettings = (event) => {
    event.stopPropagation()
  }

  /**
   * 更换主题
   * @param {String} mode
   */
  const onChangeMode = (mode) => {
    setMode(mode)
    localStorage.setItem('mode', mode)
  }

  /**
   * 切换宽屏
   * @param {Boolean} bool
   */
  const onChangeIsWide = (bool) => {
    setIsWide(bool)
    localStorage.setItem('isWide', bool)
  }

  /**
   * 切换主题颜色
   * @param {String} color
   */
  const onChangeThemeColor = (color) => {
    setThemeColor(color)
    localStorage.setItem('themeColor', color)
  }

  return (
    <div
      onClick={triggerSettings}
      style={{
        transition: 'transform 0.4s cubic-bezier(0.33, 1, 0.68, 1)',
        transform: open
          ? 'translateZ(0) translate(-16px, -50%)'
          : 'translateZ(0) translate(300px, -50%)',
        willChange: 'transform',
      }}
      className={`transition-all duration-300 shadow-2xl fixed top-1/2 ${'right-0'} z-30 w-[280px] rounded-lg p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg">偏好设置</h2>
        <button
          className="dark:hover:bg-slate-500/30 dark:active:bg-slate-600/30 p-1 rounded"
          onClick={() => setOpen(false)}
        >
          <MdClose className="w-5 h-5" />
        </button>
      </div>
      <div className="mb-4">
        <button
          className={`${!isWide ? 'border-700 dark:text-500' : ''} w-1/2 ne-group-btn`}
          onClick={() => onChangeIsWide(false)}
        >
          默认
        </button>
        <button
          className={`${isWide ? 'border-700 dark:text-500' : ''} w-1/2 ne-group-btn`}
          onClick={() => onChangeIsWide(true)}
        >
          宽屏
        </button>
      </div>
      <div className="mb-4">
        <button
          className={`${mode === 'light' ? 'border-700 dark:text-500' : '' } ne-group-btn w-1/3`}
          onClick={() => onChangeMode('light')}
        >
          亮色
        </button>
        <button
          className={`${mode === 'system' ? 'border-700 dark:text-500' : '' } ne-group-btn w-1/3`}
          onClick={() => onChangeMode('system')}
        >
          系统
        </button>
        <button
          className={`${mode === 'dark' ? 'border-700 dark:text-500' : '' } ne-group-btn w-1/3`}
          onClick={() => onChangeMode('dark')}
        >
          暗色
        </button>
      </div>
      <div>
        <button
          className={`${
            themeColor === 'green' ? 'border-700 dark:text-500' : ''
          } ne-group-btn w-1/3 inline-flex align-center justify-center`}
          onClick={() => onChangeThemeColor('green')}
        >
          绿色
        </button>
        <button
          className={`${
            themeColor === 'sky' ? 'border-700 dark:text-500' : ''
          } ne-group-btn w-1/3 inline-flex align-center justify-center`}
          onClick={() => onChangeThemeColor('sky')}
        >
          蓝色
        </button>
        <button
          className={`${
            themeColor === 'red' ? 'border-700 dark:text-500' : ''
          } ne-group-btn w-1/3 inline-flex align-center justify-center`}
          onClick={() => onChangeThemeColor('red')}
        >
          红色
        </button>
        <button
          className={`${
            themeColor === 'purple' ? 'border-700 dark:text-500' : ''
          } ne-group-btn w-1/3 inline-flex align-center justify-center`}
          onClick={() => onChangeThemeColor('purple')}
        >
          紫色
        </button>
        <button
          className={`${
            themeColor === 'pink' ? 'border-700 dark:text-500' : ''
          } ne-group-btn w-1/3 inline-flex align-center justify-center`}
          onClick={() => onChangeThemeColor('pink')}
        >
          粉色
        </button>
        <button
          className={`${
            themeColor === 'orange' ? 'border-700 dark:text-500' : ''
          } ne-group-btn w-1/3 inline-flex align-center justify-center`}
          onClick={() => onChangeThemeColor('orange')}
        >
          橙色
        </button>
      </div>
    </div>
  )
}

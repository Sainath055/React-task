/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react'
import '../styles/settings.scss'

const Settings = ({ modeCheck, setModeCheck, hue, setHue,
  heading, setHeading, menu, setMenu, buttons, setButtons}) => {

  const [opts_color, setOpts_color] = useState(0)

  useEffect(() => {
    document.documentElement.setAttribute('color-scheme', modeCheck);
  }, [modeCheck])

  useEffect(() => {
    document.documentElement.style.setProperty('--hue', hue);
  }, [hue])

  const handleDefault = () => {
    setHue(160)
    setButtons(16)
    setHeading(25)
    setMenu(16)
  }

  return (
    <>
    <div>
      <div id="settings_top_div">
        <h2>Settings</h2>
        <button onClick={handleDefault}>
          <svg xmlns="http://www.w3.org/2000/svg" 
          width="18px" height="18px"
          viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M9 .5L11.5 3L9 5.5"></path><path d="M.5 6V4a1 1 0 0 1 1-1h10M5 13.5L2.5 11L5 8.5"></path><path 
          d="M13.5 8v2a1 1 0 0 1-1 1h-10"></path></g></svg>
          Default
        </button>
      </div>

      <div id="settings_body">

        <div className='settings_card'>
          <div id='color_title_div'>
            <h2>Colors & Theme</h2>
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={() => setModeCheck((prevMode) => (prevMode === "light" ? "dark" : "light"))}
                  checked={modeCheck === "dark"}
                />
                <span className="mode_btn"></span>
              </label>
          </div>

          <div className='color_opts'>
            <div id='opts_btns'>
              <button onClick={()=>setOpts_color(0)} className={opts_color === 0 ? 'selected' : null}>
                Predefined
              </button>
              <button onClick={()=>setOpts_color(1)} className={opts_color === 1 ? 'selected' : null}>
                Custom
              </button>
            </div>

            <div className={opts_color === 0 ? 'color_select' : 'hidden'}>
              <select value={hue} onChange={(e) => setHue(e.target.value)}>
                <option value="95">Theme 1</option>
                <option value="30">Theme 2</option>
                <option value="220">Theme 3</option>
                <option value="270">Theme 4</option>
                <option value="320">Theme 5</option>
              </select>
            </div>

            <div className={opts_color === 1 ? 'color_custom' : 'hidden'}>
              <input
                className='picker'
                type="range"
                min="0"
                max="360"
                value={hue}
                onInput={(e) => setHue(e.target.value)}
              />
            </div>
          </div>

        </div>

        <div className='settings_card'>
 
          <form autoComplete='off'>

            <div id='font_title_div'>
              <h2>Font size [In pixels]</h2>
            </div>

            <div id='input_cont'>
              <div className='all_input_divs'>
                <p>Heading(25-initial)</p>
                <input alt='text' name='Heading' type='number' 
                value={heading} onChange={(e)=> setHeading(e.target.value)} />
              </div>
              <div className='all_input_divs'>
                <p>Menu(16-initial)</p>
                <input alt='text' name='Heading' type='number' 
                value={menu} onChange={(e)=> setMenu(e.target.value)} />
              </div>
              <div className='all_input_divs'>
                <p>Buttons(16-initial)</p>
                <input alt='text' name='Heading' type='number' 
                value={buttons} onChange={(e)=> setButtons(e.target.value)} />
              </div>
            </div>
        
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Settings
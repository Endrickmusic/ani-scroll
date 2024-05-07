import { forwardRef } from 'react'

const Overlay = forwardRef(({ caption, scroll }, ref) => (
    
    <div
      ref={ref}
      onScroll={(e) => {
        scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
        caption.current.innerText = scroll.current.toFixed(2)
        console.log(scroll.current)
      }}
      className="scroll">
        <span className="caption" ref={caption}>
          0.00
        </span>
    </div>
  ))

export default Overlay
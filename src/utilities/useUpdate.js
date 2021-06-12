import { useEffect, useRef } from 'react'

export default function useDidUpdateEffect( fn, inputs ) {
  const didMountRef = useRef( false )
  useEffect( () => {
    didMountRef.current ? fn() : didMountRef.current = true
  }, [fn, inputs] )
}

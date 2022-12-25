import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

const SearchIcon=(props)=> {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16.458}
      height={16.458}
      viewBox="0 0 16.458 16.458"
      style={{marginTop:3}}
      {...props}
    >
      <G
        data-name="Icon feather-search"
        fill="none"
        stroke="#747474"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <Path
          data-name="Path 18227"
          d="M12.783 6.767A6.017 6.017 0 116.767.75a6.017 6.017 0 016.016 6.017z"
        />
        <Path data-name="Path 18228" d="M15.398 15.398l-4-4" />
      </G>
    </Svg>
  )
}

export default SearchIcon
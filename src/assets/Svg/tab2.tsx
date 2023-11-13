


import { Path, Svg } from "react-native-svg"
import { colors } from "../../constants"



const Tab2svg = ({ focused }: any) => {

  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M21.0125 4.20001C20.9583 4.20417 15.4208 4.67917 12.7875 2.20001C12.6291 2.04584 12.3791 2.04584 12.2166 2.20001C9.58331 4.67917 4.04998 4.20417 3.99164 4.20001C3.87498 4.18751 3.76248 4.22917 3.67498 4.30834C3.58748 4.38751 3.53748 4.49584 3.53748 4.61251V8.47501C3.53748 21.3792 12.35 22.9 12.4375 22.9125C12.4583 22.9167 12.4833 22.9167 12.5041 22.9167C12.525 22.9167 12.5458 22.9167 12.5666 22.9125C12.6541 22.9 21.4666 21.3792 21.4666 8.47501V4.61251C21.4666 4.49584 21.4166 4.38751 21.3333 4.30834C21.2458 4.22917 21.1291 4.18751 21.0125 4.20001ZM16.9541 13.5583C16.9541 13.7875 16.7666 13.975 16.5375 13.975H13.9708V16.5417C13.9708 16.7708 13.7833 16.9583 13.5541 16.9583H11.4458C11.2166 16.9583 11.0291 16.7708 11.0291 16.5417V13.975H8.46248C8.23331 13.975 8.04581 13.7875 8.04581 13.5583V11.45C8.04581 11.2208 8.23331 11.0333 8.46248 11.0333H11.0291V8.46667C11.0291 8.23751 11.2166 8.05001 11.4458 8.05001H13.5541C13.7833 8.05001 13.9708 8.23751 13.9708 8.46667V11.0333H16.5375C16.7666 11.0333 16.9541 11.2208 16.9541 11.45V13.5583Z"
        fill={focused ? colors.buttonGreen : "#BDBDBD"} />
    </Svg>

  )
}

export default Tab2svg
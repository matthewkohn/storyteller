import { signupBackgroundImg } from "../main/images"

const backgroundContainerCss = {
  height:'100vh',
  width: '100%',
  minWidth: '100%',
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  '&::after': {
    content: "''",
    backgroundImage: signupBackgroundImg,
    opacity: 0.3,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundColor: 'black',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    zIndex: -1,
    overflow: 'hidden',
  }
}

const landingContainerCss = {
  display: 'flex',
  justifyContent: 'center',
  height: '100%'
}

export { backgroundContainerCss, landingContainerCss }
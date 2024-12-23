import { useDraw } from './use-draw'

const PATHS = {
  en: {
    prev: 'M40.82 327.055L41.587 326.288L39.0259 323.736H45.7163V322.628H39.0259L41.587 320.067L40.82 319.308L36.9464 323.182L40.82 327.055ZM51.3455 327H52.6623V323.932H54.4521C56.4762 323.932 57.4776 322.709 57.4776 321.098C57.4776 319.491 56.4847 318.273 54.4563 318.273H51.3455V327ZM52.6623 322.815V319.402H54.3157C55.6197 319.402 56.1523 320.109 56.1523 321.098C56.1523 322.087 55.6197 322.815 54.3327 322.815H52.6623ZM58.919 327H60.1932V323.003C60.1932 322.146 60.8537 321.528 61.7571 321.528C62.0213 321.528 62.3196 321.575 62.4219 321.605V320.386C62.294 320.369 62.0426 320.357 61.8807 320.357C61.1136 320.357 60.4574 320.791 60.2188 321.494H60.1506V320.455H58.919V327ZM66.1112 327.132C67.5387 327.132 68.5487 326.429 68.8384 325.364L67.6325 325.146C67.4023 325.764 66.8484 326.08 66.1239 326.08C65.033 326.08 64.3001 325.372 64.266 324.111H68.9194V323.659C68.9194 321.294 67.5046 320.369 66.0217 320.369C64.1978 320.369 62.9961 321.759 62.9961 323.77C62.9961 325.803 64.1808 327.132 66.1112 327.132ZM64.2702 323.156C64.3214 322.227 64.9947 321.422 66.0302 321.422C67.0188 321.422 67.6665 322.155 67.6708 323.156H64.2702ZM75.8974 320.455H74.5295L72.8761 325.491H72.8079L71.1502 320.455H69.7823L72.1602 327H73.5238L75.8974 320.455Z',
    next: 'M329.225 318.273H327.922V324.682H327.841L323.4 318.273H322.181V327H323.498V320.599H323.579L328.015 327H329.225V318.273ZM333.865 327.132C335.293 327.132 336.303 326.429 336.592 325.364L335.386 325.146C335.156 325.764 334.602 326.08 333.878 326.08C332.787 326.08 332.054 325.372 332.02 324.111H336.673V323.659C336.673 321.294 335.259 320.369 333.776 320.369C331.952 320.369 330.75 321.759 330.75 323.77C330.75 325.803 331.935 327.132 333.865 327.132ZM332.024 323.156C332.075 322.227 332.749 321.422 333.784 321.422C334.773 321.422 335.42 322.155 335.425 323.156H332.024ZM338.94 320.455H337.543L339.554 323.727L337.517 327H338.915L340.385 324.554L341.859 327H343.253L341.195 323.727L343.236 320.455H341.842L340.385 323.003L338.94 320.455ZM347.599 320.455H346.257V318.886H344.983V320.455H344.024V321.477H344.983V325.342C344.979 326.531 345.886 327.107 346.892 327.085C347.297 327.081 347.57 327.004 347.719 326.949L347.489 325.896C347.403 325.913 347.246 325.952 347.041 325.952C346.628 325.952 346.257 325.815 346.257 325.078V321.477H347.599V320.455ZM357.724 327.055L361.598 323.182L357.724 319.308L356.957 320.075L359.518 322.628H352.828V323.736H359.518L356.957 326.293L357.724 327.055Z',
    one: 'M126.653 318.273H125.37L123.193 319.696V320.957L125.281 319.594H125.332V327H126.653V318.273Z',
    two: 'M179.498 327H185.242V325.871H181.313V325.807L183.048 323.991C184.646 322.376 185.102 321.605 185.102 320.629C185.102 319.227 183.96 318.153 182.315 318.153C180.683 318.153 179.489 319.21 179.489 320.804H180.746C180.742 319.866 181.347 319.253 182.289 319.253C183.175 319.253 183.849 319.798 183.849 320.668C183.849 321.439 183.389 321.993 182.451 322.986L179.498 326.045V327Z',
    three:
      'M239.349 327.119C241.13 327.119 242.438 326.054 242.434 324.605C242.438 323.501 241.769 322.709 240.61 322.53V322.462C241.522 322.227 242.114 321.511 242.11 320.531C242.114 319.249 241.062 318.153 239.383 318.153C237.781 318.153 236.494 319.121 236.451 320.54H237.725C237.755 319.739 238.509 319.253 239.366 319.253C240.256 319.253 240.84 319.794 240.836 320.599C240.84 321.443 240.163 321.997 239.195 321.997H238.458V323.071H239.195C240.406 323.071 241.104 323.685 241.104 324.562C241.104 325.411 240.367 325.986 239.34 325.986C238.394 325.986 237.657 325.5 237.606 324.724H236.268C236.323 326.148 237.585 327.119 239.349 327.119Z'
  },
  es: {},
  ru: {
    prev: 'm35.8736 326.586.767-.767-2.5611-2.552h6.6904v-1.108h-6.6904l2.5611-2.561-.767-.759L32 322.713l3.8736 3.873ZM52.6005 326.531h-1.1309v-3.943h-4.3008v3.943h-1.125V318h1.125v3.668h4.3008V318h1.1309v8.531ZM58.3427 326.531c-.0625-.125-.1133-.347-.1524-.668-.5039.524-1.1054.785-1.8047.785-.625 0-1.1386-.175-1.541-.527-.3984-.355-.5976-.805-.5976-1.348 0-.66.25-1.171.75-1.535.5039-.367 1.2109-.55 2.1211-.55h1.0546v-.499c0-.378-.1132-.679-.3398-.902-.2266-.226-.5605-.34-1.002-.34-.3867 0-.7109.098-.9726.293-.2617.196-.3926.432-.3926.709h-1.0898c0-.316.1113-.621.334-.914.2265-.297.5312-.531.914-.703.3867-.172.8106-.258 1.2715-.258.7305 0 1.3027.184 1.7168.551.4141.363.6289.865.6445 1.506v2.918c0 .582.0742 1.045.2227 1.389v.093h-1.1367Zm-1.7989-.826c.3399 0 .6621-.088.9668-.264.3047-.175.5254-.404.6621-.685v-1.301h-.8496c-1.3281 0-1.9922.389-1.9922 1.166 0 .34.1133.606.3399.797.2266.191.5176.287.873.287ZM64.4423 321.926c0-.297-.1133-.531-.3399-.703-.2265-.176-.5371-.264-.9316-.264-.3828 0-.7031.1-.9609.299-.254.199-.3809.433-.3809.703h-1.0781c0-.551.2304-1.002.6914-1.354.4609-.351 1.0371-.527 1.7285-.527.7422 0 1.3203.16 1.7344.481.414.316.6211.769.6211 1.359 0 .285-.086.547-.2579.785-.1718.238-.416.428-.7324.568.7383.25 1.1074.743 1.1074 1.477 0 .582-.2246 1.043-.6738 1.383-.4492.34-1.0488.51-1.7988.51-.7305 0-1.334-.178-1.8106-.534-.4726-.359-.7089-.843-.7089-1.453h1.0781c0 .309.1367.574.4101.797.2774.219.6211.328 1.0313.328.4141 0 .748-.095 1.0019-.287.2539-.191.3809-.439.3809-.744 0-.355-.1074-.609-.3223-.762-.2109-.156-.541-.234-.9902-.234h-1.084v-.914h1.1778c.7382-.02 1.1074-.324 1.1074-.914ZM70.9638 326.531c-.0625-.125-.1133-.347-.1524-.668-.5039.524-1.1055.785-1.8047.785-.625 0-1.1386-.175-1.541-.527-.3984-.355-.5976-.805-.5976-1.348 0-.66.25-1.171.75-1.535.5039-.367 1.2109-.55 2.121-.55h1.0547v-.499c0-.378-.1132-.679-.3398-.902-.2266-.226-.5606-.34-1.002-.34-.3867 0-.7109.098-.9726.293-.2617.196-.3926.432-.3926.709H66.997c0-.316.1113-.621.3339-.914.2266-.297.5313-.531.9141-.703.3867-.172.8106-.258 1.2715-.258.7305 0 1.3027.184 1.7168.551.4141.363.6289.865.6445 1.506v2.918c0 .582.0742 1.045.2227 1.389v.093h-1.1367Zm-1.7989-.826c.3399 0 .6621-.088.9668-.264.3047-.175.5254-.404.6621-.685v-1.301h-.8496c-1.3281 0-1.9922.389-1.9922 1.166 0 .34.1133.606.3399.797.2265.191.5176.287.873.287ZM73.5243 325.646l.375-.462c.4219-.547.6621-1.368.7207-2.461l.0996-2.532h4.084v5.455h.8145v2.749h-1.084v-1.864h-4.4239v1.864h-1.0839l.0058-2.749h.4922Zm1.2832 0h2.9121v-4.453h-1.9512l-.0644 1.512c-.0664 1.262-.3652 2.242-.8965 2.941Z',
    next: 'm364.734 326.709 3.874-3.873-3.874-3.874-.767.767 2.561 2.553h-6.69v1.108h6.69l-2.561 2.557.767.762ZM315 326.654v-8.531h2.789c.926 0 1.621.191 2.086.574.469.383.703.949.703 1.699 0 .399-.113.752-.34 1.061-.226.305-.535.541-.926.709.461.129.825.375 1.09.738.27.36.405.789.405 1.289 0 .766-.248 1.368-.745 1.805-.496.438-1.197.656-2.103.656H315Zm1.125-3.99v3.07h1.857c.524 0 .936-.134 1.237-.404.304-.273.457-.648.457-1.125 0-1.027-.559-1.541-1.676-1.541h-1.875Zm0-.902h1.699c.492 0 .885-.123 1.178-.369.297-.247.445-.581.445-1.002 0-.469-.136-.809-.41-1.02-.273-.215-.689-.322-1.248-.322h-1.664v2.713ZM327.492 326.654h-1.084v-5.443h-2.918v5.443h-1.09v-6.34h5.092v6.34ZM331.863 326.771c-.859 0-1.558-.281-2.097-.843-.539-.567-.809-1.323-.809-2.268v-.199c0-.629.119-1.19.357-1.682.243-.496.579-.883 1.008-1.16.434-.281.903-.422 1.407-.422.824 0 1.464.272 1.921.815.457.543.686 1.32.686 2.332v.451h-4.295c.016.625.197 1.131.545 1.517.352.383.797.575 1.336.575.383 0 .707-.078.973-.235.265-.156.498-.363.697-.621l.662.516c-.531.816-1.328 1.224-2.391 1.224Zm-.134-5.683c-.438 0-.805.16-1.102.48-.297.317-.481.762-.551 1.336h3.176v-.082c-.031-.551-.18-.976-.445-1.277-.266-.305-.625-.457-1.078-.457ZM340.951 323.555c0 .965-.221 1.742-.662 2.332-.441.59-1.039.884-1.793.884-.769 0-1.375-.244-1.816-.732v3.053h-1.084v-8.778h.99l.053.704c.441-.547 1.054-.821 1.84-.821.761 0 1.363.287 1.804.862.446.574.668 1.373.668 2.396v.1Zm-1.084-.123c0-.715-.152-1.28-.457-1.694-.305-.414-.722-.621-1.254-.621-.656 0-1.148.291-1.476.873v3.03c.324.578.82.867 1.488.867.52 0 .932-.205 1.236-.616.309-.414.463-1.027.463-1.839ZM344.965 326.771c-.86 0-1.559-.281-2.098-.843-.539-.567-.808-1.323-.808-2.268v-.199c0-.629.119-1.19.357-1.682.242-.496.578-.883 1.008-1.16.433-.281.902-.422 1.406-.422.824 0 1.465.272 1.922.815.457.543.686 1.32.686 2.332v.451h-4.295c.015.625.197 1.131.545 1.517.351.383.796.575 1.335.575.383 0 .707-.078.973-.235.266-.156.498-.363.697-.621l.662.516c-.531.816-1.328 1.224-2.39 1.224Zm-.135-5.683c-.437 0-.805.16-1.101.48-.297.317-.481.762-.551 1.336h3.176v-.082c-.032-.551-.18-.976-.446-1.277-.265-.305-.625-.457-1.078-.457Zm-1.892-2.467c0-.176.052-.322.158-.439.109-.121.269-.182.48-.182.211 0 .371.061.481.182.109.117.164.263.164.439s-.055.322-.164.44c-.11.117-.27.175-.481.175-.211 0-.371-.058-.48-.175-.106-.118-.158-.264-.158-.44Zm2.519.012c0-.176.053-.324.158-.445.11-.122.27-.182.481-.182.211 0 .371.06.48.182.11.121.164.269.164.445s-.054.322-.164.439c-.109.117-.269.176-.48.176-.211 0-.371-.059-.481-.176-.105-.117-.158-.263-.158-.439ZM348.645 325.77l.375-.463c.421-.547.662-1.368.72-2.461l.1-2.532h4.084v5.456h.814v2.748h-1.084v-1.864h-4.424v1.864h-1.084l.006-2.748h.493Zm1.283 0h2.912v-4.454h-1.951l-.065 1.512c-.066 1.262-.365 2.242-.896 2.942Z'
  }
}

export const Pagination = () => (
  <svg viewBox="0 0 769 356" fill="none" className="invert-on-dark">
    <path
      d="M5 0.5H763C765.485 0.5 767.5 2.51472 767.5 5V351C767.5 353.485 765.485 355.5 763 355.5H5.00002C2.51473 355.5 0.5 353.485 0.5 351V5C0.5 2.51472 2.51472 0.5 5 0.5Z"
      fill="white"
      stroke="#EEEEEE"
    />
    <path d="M1 288H769" stroke="#E5E5E5" />
    <path d="M21 26H747V40H21V26Z" fill="#E5E5E5" />
    <path d="M21 70H747V84H21V70Z" fill="#E5E5E5" />
    <path d="M21 114H747V128H21V114Z" fill="#E5E5E5" />
    <path d="M21 158H747V172H21V158Z" fill="#E5E5E5" />
    <path d="M21 202H747V216H21V202Z" fill="#E5E5E5" />
    <path d="M21 246H747V260H21V246Z" fill="#E5E5E5" />
    <rect
      x="21.5"
      y="306.5"
      width="69"
      height="31"
      rx="2.5"
      fill="#FAFAFA"
      stroke="#D3D3D3"
    />
    <path d={useDraw(PATHS, 'prev')} fill="#454545" />
    <rect
      x="307.5"
      y="306.5"
      width="69"
      height="31"
      rx="2.5"
      fill="#FAFAFA"
      stroke="#D3D3D3"
    />
    <path d={useDraw(PATHS, 'next')} fill="#454545" />
    <path
      d="M281.098 322.03C281.563 322.03 281.951 321.651 281.951 321.178C281.951 320.713 281.563 320.33 281.098 320.33C280.63 320.33 280.246 320.713 280.246 321.178C280.246 321.651 280.63 322.03 281.098 322.03ZM284.497 322.03C284.961 322.03 285.349 321.651 285.349 321.178C285.349 320.713 284.961 320.33 284.497 320.33C284.028 320.33 283.645 320.713 283.645 321.178C283.645 321.651 284.028 322.03 284.497 322.03ZM287.895 322.03C288.36 322.03 288.748 321.651 288.748 321.178C288.748 320.713 288.36 320.33 287.895 320.33C287.426 320.33 287.043 320.713 287.043 321.178C287.043 321.651 287.426 322.03 287.895 322.03Z"
      fill="black"
    />
    <rect
      x="103.5"
      y="306.5"
      width="44"
      height="31"
      rx="2.5"
      fill="#FAFAFA"
      stroke="#D3D3D3"
    />
    <path d={useDraw(PATHS, 'one')} fill="#454545" />
    <rect
      x="160.5"
      y="306.5"
      width="44"
      height="31"
      rx="2.5"
      fill="#EDEDED"
      stroke="#B3B3B3"
    />
    <path d={useDraw(PATHS, 'two')} fill="#454545" />
    <rect
      x="217.5"
      y="306.5"
      width="44"
      height="31"
      rx="2.5"
      fill="#FAFAFA"
      stroke="#D3D3D3"
    />
    <path d={useDraw(PATHS, 'three')} fill="#454545" />
  </svg>
)

import { SVGProps } from "react";

// TODO: Switch to sprite based icons instead of svg as JSX

export function IconArrowTopRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 34 34" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5858 10L13.5 10L13.5 8L26 8.00002L26 20.5L24 20.5L24 11.4142L10.2071 25.2071L8.79289 23.7929L22.5858 10Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 34 34" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.5858 16L19.2929 9.70712L20.7071 8.29291L29.4142 17L20.7071 25.7071L19.2929 24.2929L25.5858 18H6V16H25.5858Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconArrowLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 34 34" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.41421 16L14.7071 9.70712L13.2929 8.29291L4.58579 17L13.2929 25.7071L14.7071 24.2929L8.41422 18H28V16H8.41421Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const IconMoveLang = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="49" height="16" viewBox="0 0 49 16" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 0C0.895431 0 0 0.895431 0 2V14C0 15.1046 0.89543 16 2 16H47C48.1046 16 49 15.1046 49 14V2C49 0.895431 48.1046 0 47 0H2ZM22.5703 5.01904C22.517 5.0764 22.4435 5.1087 22.3662 5.1087H17.2187C18.0973 3.90755 19.4947 3.13043 21.0684 3.13043C22.6422 3.13043 24.0395 3.90755 24.9181 5.1087H23.9957C23.8966 5.1087 23.8029 5.06493 23.7372 4.98888L23.3931 4.58906C23.3419 4.52915 23.2679 4.49516 23.1907 4.49516H23.1738C23.1002 4.49516 23.0296 4.52618 22.9788 4.58099L22.5703 5.01904ZM22.9413 6.4287C22.8419 6.4287 22.747 6.38881 22.6809 6.3195L22.3344 5.95514C22.2828 5.90093 22.2083 5.86957 22.1306 5.86957C22.0528 5.86957 21.9783 5.90054 21.9267 5.95514L21.6293 6.268C21.532 6.37023 21.3922 6.42908 21.2454 6.42908H16.5675C16.4344 6.78261 16.3474 7.15588 16.3129 7.54348H20.7292C20.807 7.54348 20.881 7.51405 20.9347 7.46178L21.3461 7.06256C21.3972 7.01261 21.4683 6.98434 21.5424 6.98434H21.5594C21.6372 6.98434 21.7117 7.01532 21.7633 7.06992L22.1098 7.43428C22.1759 7.5036 22.2703 7.54348 22.3702 7.54348H25.9749C25.9404 7.15588 25.8534 6.78261 25.7203 6.42908L22.9413 6.4287ZM19.0237 10.13C19.1001 10.13 19.1728 10.0981 19.2256 10.0415L19.6297 9.60876C19.6799 9.55462 19.7498 9.52398 19.8225 9.52398H19.8393C19.9157 9.52398 19.9888 9.55755 20.0395 9.61673L20.3798 10.0117C20.4448 10.0868 20.5375 10.13 20.6356 10.13H25.4341C25.6139 9.74851 25.7455 9.33889 25.8239 8.91039H21.2183C21.1206 8.91039 21.0274 8.86716 20.9625 8.79203L20.6221 8.3971C20.5715 8.33834 20.4983 8.30435 20.4219 8.30435C20.3455 8.30435 20.2724 8.33792 20.2217 8.3971L19.9296 8.73621C19.834 8.84701 19.6967 8.9108 19.5524 8.9108H16.4639C16.5423 9.33973 16.6739 9.74893 16.8537 10.1304L19.0237 10.13ZM19.2379 11.3362C19.1384 11.3362 19.0435 11.2937 18.9773 11.2196L18.6305 10.8305C18.5789 10.7726 18.5044 10.7391 18.4265 10.7391C18.3487 10.7391 18.2742 10.7722 18.2225 10.8305L17.9249 11.1646C17.8275 11.2738 17.6876 11.3367 17.5406 11.3367H17.5207C18.4066 12.2795 19.6675 12.8696 21.0684 12.8696C22.4693 12.8696 23.7303 12.2795 24.6162 11.3367L19.2379 11.3362ZM6.25489 3.25692H4.14085V12.8696H5.79856V6.25148H5.88703L8.5226 12.8414H9.76123L12.3968 6.26556H12.4853V12.8696H14.143V3.25692H12.0289L9.19779 10.2223H9.08604L6.25489 3.25692ZM29.6803 3.25692L32.1622 10.8231H32.26L34.7372 3.25692H36.6371L33.2751 12.8696H31.1424L27.7851 3.25692H29.6803ZM38.5488 3.25692V12.8696H44.7885V11.4098H40.2764V8.78607H44.43V7.32633H40.2764V4.71665H44.7513V3.25692H38.5488Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const IconBump = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="24" height="9" viewBox="0 0 24 9" fill="none" {...props}>
      <path
        d="M0 8.5C0.985627 8.5 1.92199 8.12898 2.60207 7.45935L7.99342 2.15654C10.2801 -0.0966995 14.1832 -0.0424036 16.4009 2.26513L21.3389 7.396C22.0091 8.09279 22.9848 8.5 24 8.5"
        stroke="currentColor"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export const IconQuote = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="66" height="49" viewBox="0 0 66 49" fill="none" {...props}>
      <path
        d="M12.7354 22.5632C13.0831 19.776 14.2616 17.4449 16.2655 15.5465C18.7196 13.2215 21.8278 11.6618 25.6109 10.8791L26.0096 10.7966V10.3895V2V1.42818L25.4429 1.50447C18.3966 2.45301 12.4944 5.64258 7.75505 11.059L7.75446 11.0597C3.14214 16.3503 0.839844 22.7281 0.839844 30.1648C0.839844 35.7089 2.26096 40.1049 5.16535 43.2859C8.05249 46.448 11.5804 48.043 15.7218 48.043C19.824 48.043 23.156 46.8084 25.6634 44.3011L25.6635 44.3012L25.6728 44.2914C28.1676 41.658 29.4053 38.3342 29.4053 34.3595C29.4053 30.3986 28.2416 27.2586 25.8578 25.0119C23.6327 22.7893 20.9098 21.6748 17.7193 21.6748C15.9562 21.6748 14.4918 21.8773 13.349 22.3058C13.1398 22.3843 12.9352 22.4701 12.7354 22.5632ZM48.5029 22.4679C48.8654 19.7228 50.0397 17.4232 52.0207 15.5465C54.4748 13.2215 57.5831 11.6618 61.3661 10.8791L61.7648 10.7966V10.3895V2V1.42962L61.1994 1.5043C54.0219 2.45227 48.0519 5.64037 43.3106 11.059L43.31 11.0597C38.6976 16.3503 36.3953 22.7281 36.3953 30.1648C36.3953 35.7089 37.8165 40.1049 40.7209 43.2859C43.6116 46.4519 47.2077 48.043 51.4771 48.043C55.4515 48.043 58.7148 46.8051 61.2189 44.3011C63.8507 41.6692 65.1606 38.3423 65.1606 34.3595C65.1606 30.3986 63.9969 27.2586 61.6131 25.0119C59.3834 22.7849 56.5919 21.6748 53.2748 21.6748C51.6367 21.6748 50.1829 21.8794 48.922 22.2997L48.9132 22.3026L48.9045 22.3058C48.7687 22.3568 48.6348 22.4108 48.5029 22.4679Z"
        stroke="url(#paint0_radial_229_10885)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_229_10885"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(33.0002 24.6646) rotate(44.1443) scale(102.143 1562.28)"
        >
          <stop stopColor="#C97E64" />
          <stop offset="0.114583" stopColor="#D8A679" />
          <stop offset="0.333333" stopColor="#97D9D7" />
          <stop offset="1" stopColor="#E99E52" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export const IconAptos = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="114" height="42" viewBox="0 0 114 42" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M72.1445 14.0687C72.3299 14.0687 72.5064 13.9934 72.6343 13.8597L73.6149 12.8383C73.7369 12.7105 73.9064 12.6382 74.0829 12.6382H74.1236C74.309 12.6382 74.4865 12.7174 74.6094 12.8571L75.4354 13.7893C75.593 13.9667 75.8181 14.0687 76.0561 14.0687H78.2701C76.1612 11.268 72.8068 9.45605 69.0291 9.45605C65.2514 9.45605 61.8971 11.268 59.7881 14.0687H72.1445ZM73.3127 17.1835H75.3503V17.1845H79.937C80.2543 18.089 80.4616 19.044 80.5439 20.0357H71.9513C71.7133 20.0357 71.4883 19.9337 71.3306 19.7563L70.5047 18.8241C70.3817 18.6844 70.2042 18.6051 70.0188 18.6051H69.9782C69.8017 18.6051 69.6321 18.6775 69.5102 18.8053L68.5295 19.8267C68.4016 19.9604 68.2251 20.0357 68.0397 20.0357H57.5127C57.595 19.044 57.8022 18.089 58.1195 17.1845H69.2702C69.6202 17.1845 69.9534 17.0339 70.1854 16.7724L70.8943 15.9719C71.0173 15.8322 71.1948 15.7529 71.3802 15.7529C71.5656 15.7529 71.7431 15.8332 71.866 15.9719L72.692 16.9041C72.8496 17.0814 73.0757 17.1835 73.3127 17.1835ZM64.3736 25.8192C64.2457 25.953 64.0692 26.0283 63.8838 26.0283V26.0293H58.6178C58.1815 25.1287 57.8622 24.1628 57.6719 23.1503H65.1668C65.5168 23.1503 65.85 22.9997 66.082 22.7382L66.7909 21.9377C66.9139 21.798 67.0914 21.7188 67.2768 21.7188C67.4622 21.7188 67.6397 21.799 67.7626 21.9377L68.5886 22.8699C68.7462 23.0473 68.9723 23.1493 69.2093 23.1493H80.3858C80.1954 24.1608 79.8761 25.1277 79.4398 26.0283H67.7954C67.5574 26.0283 67.3323 25.9262 67.1747 25.7489L66.3487 24.8166C66.2258 24.677 66.0483 24.5977 65.8629 24.5977H65.8222C65.6457 24.5977 65.4762 24.67 65.3542 24.7978L64.3736 25.8192ZM64.6682 28.8827H67.6963V28.8837H77.4777C75.3677 31.1425 72.3644 32.5562 69.0279 32.5562C65.6914 32.5562 62.6881 31.1425 60.5781 28.8837H60.6257C60.9757 28.8837 61.3089 28.7331 61.5409 28.4716L62.2498 27.6711C62.3728 27.5314 62.5503 27.4521 62.7357 27.4521C62.9211 27.4521 63.0986 27.5324 63.2215 27.6711L64.0475 28.6033C64.2051 28.7807 64.4312 28.8827 64.6682 28.8827ZM17.9298 31.809L15.5779 26.1016H5.07066L2.71876 31.809H0L10.3089 10.202L20.6485 31.809H17.9298ZM5.95709 23.935H14.6617L10.295 14.7294L5.95709 23.935ZM24.4035 10.202V31.809H26.9388V22.5926H30.3903C34.9722 22.5926 37.5987 20.4864 37.5987 16.4275C37.5987 12.3686 35.1249 10.202 30.4211 10.202H24.4035ZM29.8103 20.3338H26.9388V12.4598H29.8103C33.4145 12.4598 35.0336 13.711 35.0336 16.4275C35.0336 19.144 33.4452 20.3338 29.8103 20.3338ZM46.8068 12.5214H39.3545V10.2021H56.7954V12.5214H49.3421V31.8092H46.8068V12.5214ZM86.2967 26.3919L84.1133 27.8719L84.1123 27.871C85.8534 31.1056 88.1746 32.3875 91.5349 32.3875C95.5367 32.3875 98.3467 29.6106 98.3467 26.3453C98.3467 23.3544 97.1241 21.4929 92.1457 19.2341C88.3273 17.4944 87.4419 16.5483 87.4419 14.9008C87.4419 13.1314 88.8161 11.8188 91.168 11.8188C93.0926 11.8188 94.2229 12.643 95.1391 14.0775L95.6587 14.1994L97.4305 12.9789C96.2694 10.9034 94.2229 9.6214 91.2295 9.6214C87.1672 9.6214 84.8153 11.9713 84.8153 14.9622C84.8153 17.7084 86.3433 19.6314 90.8329 21.4929C94.7425 23.1107 95.7201 24.4224 95.7201 26.376C95.7201 28.4515 93.979 30.1604 91.5051 30.1604C89.2752 30.1604 87.8087 29.1836 86.4652 26.7426L86.2967 26.3919Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const IconDiscord = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" {...props}>
      <path
        d="M26.0102 7.72963C24.3245 6.95641 22.5456 6.40501 20.7179 6.08926C20.7013 6.08615 20.6841 6.08837 20.6688 6.0956C20.6534 6.10282 20.6408 6.11469 20.6326 6.12951C20.3903 6.56907 20.1703 7.02056 19.9735 7.48227C17.9755 7.18333 15.9871 7.18333 14.0302 7.48227C13.8526 7.05636 13.5904 6.53567 13.3608 6.12951C13.3523 6.11498 13.3396 6.10337 13.3243 6.09618C13.3091 6.089 13.2921 6.08659 13.2754 6.08926C11.4478 6.40438 9.66887 6.9558 7.98359 7.72963C7.96916 7.73579 7.95701 7.74627 7.9488 7.75963C4.57799 12.7909 3.65446 17.6992 4.10744 22.546C4.1087 22.558 4.11237 22.5695 4.11823 22.58C4.12408 22.5905 4.13199 22.5998 4.14149 22.6071C6.36538 24.2391 8.51933 25.2296 10.6337 25.8864C10.6502 25.8913 10.6677 25.891 10.684 25.8857C10.7003 25.8803 10.7146 25.8701 10.7249 25.8564C11.2262 25.1745 11.6705 24.4524 12.0531 23.6975C12.0583 23.6872 12.0612 23.6759 12.0618 23.6643C12.0623 23.6527 12.0604 23.6412 12.0561 23.6304C12.0519 23.6196 12.0454 23.6099 12.0371 23.6018C12.0288 23.5937 12.0189 23.5874 12.008 23.5834C11.3075 23.3154 10.6292 22.9924 9.9797 22.6174C9.9679 22.6104 9.95799 22.6007 9.95086 22.589C9.94372 22.5773 9.93957 22.564 9.93877 22.5504C9.93797 22.5367 9.94056 22.523 9.94629 22.5106C9.95202 22.4982 9.96073 22.4873 9.97165 22.4791C10.1083 22.3769 10.2426 22.2718 10.3745 22.1636C10.3861 22.1542 10.4001 22.1481 10.415 22.1462C10.4299 22.1442 10.445 22.1465 10.4587 22.1527C14.7135 24.0934 19.3198 24.0934 23.5244 22.1527C23.5381 22.1461 23.5534 22.1435 23.5685 22.1452C23.5836 22.147 23.5979 22.153 23.6098 22.1625C23.7401 22.2698 23.8764 22.377 24.0137 22.4791C24.0246 22.4873 24.0334 22.4981 24.0392 22.5105C24.045 22.5229 24.0476 22.5365 24.0469 22.5502C24.0462 22.5638 24.0421 22.5771 24.035 22.5888C24.028 22.6005 24.0181 22.6103 24.0063 22.6174C23.3585 22.9955 22.6799 23.3183 21.9776 23.5823C21.9668 23.5864 21.9569 23.5928 21.9486 23.6011C21.9404 23.6093 21.934 23.6192 21.9298 23.63C21.9256 23.6409 21.9238 23.6525 21.9244 23.6642C21.925 23.6758 21.928 23.6872 21.9333 23.6975C22.3223 24.4482 22.7659 25.1694 23.2604 25.8553C23.2705 25.8693 23.2847 25.8798 23.301 25.8854C23.3174 25.8909 23.3351 25.8911 23.3516 25.886C25.4759 25.2296 27.6302 24.2387 29.8541 22.6071C29.8636 22.6001 29.8716 22.5911 29.8774 22.5808C29.8832 22.5704 29.8867 22.5589 29.8878 22.5471C30.4297 16.9432 28.9796 12.0755 26.0438 7.76C26.0365 7.74601 26.0245 7.7351 26.0098 7.72926L26.0102 7.72963ZM12.6881 19.595C11.4075 19.595 10.3518 18.42 10.3518 16.9765C10.3518 15.5334 11.387 14.3581 12.6881 14.3581C14.0001 14.3581 15.0456 15.5436 15.0251 16.9765C15.0251 18.42 13.9895 19.595 12.6881 19.595ZM21.3276 19.595C20.0467 19.595 18.9913 18.42 18.9913 16.9765C18.9913 15.5334 20.0262 14.3581 21.3276 14.3581C22.6394 14.3581 23.6848 15.5436 23.664 16.9765C23.664 18.42 22.6394 19.595 21.3276 19.595Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const IconGithub = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 4C9.81768 4 4 9.81768 4 17C4 22.7459 7.72683 27.6138 12.8901 29.3376C13.5365 29.4574 13.7759 29.0583 13.7759 28.7071C13.7759 28.3959 13.768 27.582 13.76 26.4966C10.1449 27.2787 9.37876 24.7568 9.37876 24.7568C8.78821 23.2566 7.93432 22.8575 7.93432 22.8575C6.75322 22.0515 8.0221 22.0675 8.0221 22.0675C9.3229 22.1633 10.0172 23.4082 10.0172 23.4082C11.1743 25.3953 13.0577 24.8208 13.7999 24.4855C13.9196 23.6477 14.2548 23.0731 14.6219 22.7459C11.733 22.4187 8.70042 21.3014 8.70042 16.3217C8.70042 14.9012 9.2032 13.744 10.0411 12.8343C9.90546 12.5071 9.45856 11.1823 10.1688 9.39471C10.1688 9.39471 11.2621 9.04358 13.744 10.7274C14.7815 10.4401 15.8907 10.2965 17 10.2885C18.1012 10.2885 19.2186 10.4401 20.256 10.7274C22.7378 9.04358 23.8312 9.39471 23.8312 9.39471C24.5414 11.1823 24.0945 12.5071 23.9589 12.8343C24.7888 13.744 25.2915 14.9012 25.2915 16.3217C25.2915 21.3174 22.2511 22.4107 19.3542 22.7378C19.8171 23.1369 20.24 23.935 20.24 25.1479C20.24 26.8877 20.224 28.2843 20.224 28.7152C20.224 29.0663 20.4555 29.4653 21.1179 29.3376C26.2811 27.6138 30 22.7459 30 17.0079C30 9.81768 24.1824 4 17 4Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const IconLinkedIn = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.875 4H25.125C27.816 4 30 6.184 30 8.875V25.125C30 27.816 27.816 30 25.125 30H8.875C6.184 30 4 27.816 4 25.125V8.875C4 6.184 6.184 4 8.875 4ZM8.0001 26.0701H12.0392L12.0158 13.9762H7.9767L8.0001 26.0701ZM9.9176 12.3941H9.8942C8.5734 12.3941 7.7232 11.4841 7.7232 10.3518C7.7232 9.1909 8.6007 8.3121 9.9449 8.3121C11.2891 8.3121 12.1133 9.1909 12.1406 10.3518C12.1406 11.4841 11.2852 12.3941 9.9176 12.3941ZM21.9686 26.0701H26.0389V19.0462C26.0389 15.4179 24.1058 13.7292 21.5201 13.7292C19.4336 13.7292 18.5626 14.8745 18.0387 15.6831L18.0153 13.9762H13.9216L13.945 26.0701H18.04V19.223C18.04 18.8668 18.066 18.5197 18.1726 18.2649C18.4534 17.559 19.0397 16.8284 20.1252 16.8284C21.5474 16.8284 21.9686 17.91 21.9686 19.4999V26.0701Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const IconTelegram = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.9846 6.85082L25.5722 28.0749C25.4683 28.576 24.8806 28.803 24.466 28.5017L18.4426 24.1287C18.077 23.8631 17.5783 23.8774 17.2282 24.1628L13.8889 26.885C13.5144 27.1913 12.9563 27.0365 12.7852 26.5951L13.1635 23.7903C13.2448 23.1897 13.5312 22.6361 13.9754 22.2228L26.6115 10.477C26.848 10.2579 26.5648 9.8858 26.2898 10.0547L10.9786 19.4848C10.857 19.5598 10.7488 19.6497 10.6553 19.7509L10.4499 19.0903L4.45896 16.8545C3.85039 16.6265 3.84529 15.7674 4.45212 15.5337L29.039 6.04857C29.5603 5.84701 30.0982 6.3035 29.9846 6.85082Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const IconTwitter = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.0078 9.33704C29.0297 9.74654 27.9978 10.0144 26.9434 10.1323C28.0432 9.51896 28.8781 8.52453 29.2893 7.33823C28.2353 7.9288 27.091 8.34294 25.9022 8.56411C25.3916 8.05498 24.7846 7.6518 24.1164 7.37795C23.4481 7.10411 22.7319 6.96505 22.0093 6.96883C19.063 6.96883 16.6745 9.22999 16.6745 12.0182C16.6745 12.4135 16.7218 12.7994 16.8128 13.1688C12.3786 12.957 8.44909 10.9476 5.81836 7.89352C5.34575 8.65679 5.09535 9.53572 5.09509 10.4323C5.09509 12.1841 6.03581 13.7288 7.46699 14.6335C6.62445 14.61 5.7985 14.3947 5.05254 14.0041V14.0664C5.05254 16.5135 6.89027 18.5546 9.33072 19.0182C8.54371 19.2206 7.72187 19.2504 6.92218 19.1052C7.60054 21.1111 9.57063 22.5699 11.9047 22.6111C9.98845 24.0234 7.66496 24.7815 5.28063 24.7722C4.84927 24.7722 4.42499 24.7487 4.00781 24.7017C6.47166 26.1917 9.30074 26.9762 12.1836 26.9687C21.9963 26.9687 27.3617 19.2746 27.3617 12.6041C27.3617 12.3841 27.357 12.1664 27.3464 11.95C28.3826 11.2436 29.2839 10.3587 30.0078 9.33704Z"
        fill="currentColor"
      />
    </svg>
  );
};

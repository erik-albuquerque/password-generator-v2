import { Edge } from 'reactflow'

import { NodeCustomProps } from '../@types'
import {
  AddonButton,
  Button,
  DefaultEdge,
  GeneratePasswordButton,
  InputPasswordLength,
  Label,
  PasswordText,
  Rectangle
} from '../components'

const NODE_TYPES = {
  rectangle: Rectangle,
  button: Button,
  label: Label
}

const EDGE_TYPES = {
  default: DefaultEdge
}

const useFlow = () => {
  const INITIALS_NODES = [
    {
      id: 'node-0',
      type: 'rectangle',
      position: {
        x: 571,
        y: 240
      },
      data: {
        width: 244,
        height: 103,
        title: 'Addons',
        headerStyle: 'mt-2',
        children: (
          <div className='flex flex-row items-center gap-4'>
            <AddonButton type='Numbers'>
              <svg
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_229_84)'>
                  <path
                    d='M7.47679 4.74134H6.6049C5.89556 4.74134 5.60001 4.22412 5.60001 3.72167C5.60001 3.20445 5.96945 2.70201 6.6049 2.70201H8.70334C9.33879 2.70201 9.69345 3.16012 9.69345 3.75123V12.159C9.69345 12.8979 9.22056 13.3109 8.58512 13.3109C7.94968 13.3109 7.47679 12.8971 7.47679 12.159V4.74134ZM11.466 17.6735C11.466 18.6037 11.067 19.4165 10.2542 19.9337C11.3182 20.4213 12.0571 21.4115 12.0571 22.5781C12.0571 24.3514 10.4316 25.8432 8.33312 25.8432C6.14601 25.8432 4.78723 24.2332 4.78723 23.0658C4.78723 22.4902 5.39312 22.0765 5.92512 22.0765C6.92923 22.0765 6.69356 23.8055 8.36268 23.8055C9.13112 23.8055 9.75179 23.2143 9.75179 22.4311C9.75179 20.3622 7.23956 21.8843 7.23956 20.1413C7.23956 18.5897 9.33801 19.6389 9.33801 17.9986C9.33801 17.437 8.93901 17.0085 8.27401 17.0085C6.87012 17.0085 7.06223 18.4567 6.05734 18.4567C5.45145 18.4567 5.09679 17.9099 5.09679 17.3631C5.09679 16.2112 6.67801 14.9699 8.31834 14.9699C10.4463 14.9691 11.466 16.52 11.466 17.6735ZM21.8672 11.2716C22.5175 11.2716 23.0183 11.5671 23.0183 12.2469C23.0183 12.9267 22.5175 13.2222 21.9551 13.2222H17.0193C16.3699 13.2222 15.8682 12.9267 15.8682 12.2469C15.8682 11.9366 16.0596 11.6706 16.2081 11.4932C17.4347 10.0302 18.7639 8.70101 19.8862 7.07545C20.153 6.69123 20.4042 6.23312 20.4042 5.70112C20.4042 5.09523 19.9453 4.56323 19.3402 4.56323C17.6408 4.56323 18.4536 6.95723 17.0349 6.95723C16.3256 6.95723 15.9561 6.45478 15.9561 5.87845C15.9561 4.01645 17.6112 2.52467 19.4289 2.52467C21.2458 2.52467 22.7088 3.72167 22.7088 5.59767C22.7088 7.65178 20.419 9.69034 19.1629 11.2716H21.8672ZM16.4741 23.3473C15.75 23.3473 15.4397 22.8597 15.4397 22.4755C15.4397 22.1503 15.5579 21.973 15.6473 21.8252L18.9568 15.8262C19.2819 15.2351 19.6957 14.9691 20.4641 14.9691C21.3212 14.9691 22.1628 15.5159 22.1628 16.8607V21.3967H22.414C22.9903 21.3967 23.4485 21.7809 23.4485 22.372C23.4485 22.9631 22.9903 23.3473 22.414 23.3473H22.1628V24.6027C22.1628 25.3859 21.8532 25.7561 21.0996 25.7561C20.3459 25.7561 20.0356 25.3859 20.0356 24.6027V23.3473H16.4741ZM20.0348 17.2745H20.0052L18.011 21.3967H20.0356L20.0348 17.2745Z'
                    fill='white'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_229_84'>
                    <rect width='28' height='28' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </AddonButton>
            <AddonButton type='Lowercase'>
              <svg
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.1894 11.9218C12.1894 12.4686 12.1894 13.3109 11.1697 13.3109C10.549 13.3109 10.2978 12.971 10.15 12.4094C9.60324 13.0597 8.93824 13.3996 8.12546 13.3996C6.13046 13.3996 4.60913 11.7001 4.60913 9.30689C4.60913 6.97278 6.17557 5.18467 8.12546 5.18467C8.90869 5.18467 9.67713 5.49501 10.15 6.16001C10.2091 5.64278 10.6525 5.27334 11.1697 5.27334C12.1894 5.27334 12.1894 6.11567 12.1894 6.66245V11.9218ZM8.4218 11.4489C9.53013 11.4489 10.0621 10.3258 10.0621 9.30689C10.0621 8.28723 9.54491 7.13534 8.4218 7.13534C7.25435 7.13534 6.73713 8.28723 6.73713 9.30689C6.73791 10.3258 7.26913 11.4489 8.4218 11.4489ZM11.0305 19.9928C10.4985 19.9928 10.0256 19.579 9.3458 19.579C8.13402 19.579 7.55846 20.6578 7.55846 21.7513C7.55846 22.8006 8.19391 23.8941 9.3458 23.8941C9.8778 23.8941 10.6758 23.4508 10.927 23.4508C11.4295 23.4508 11.8432 23.8793 11.8432 24.3818C11.8432 25.4746 10.0108 25.844 9.24313 25.844C6.95258 25.844 5.43124 23.968 5.43124 21.7513C5.43124 19.5946 6.99769 17.6291 9.24313 17.6291C10.0855 17.6291 11.8432 17.9394 11.8432 18.9739C11.8425 19.4164 11.5321 19.9928 11.0305 19.9928ZM15.8091 3.02712C15.8091 2.31778 16.2517 1.84489 16.8724 1.84489C17.493 1.84489 17.9364 2.31778 17.9364 3.02712V5.92278C18.5002 5.44071 19.2191 5.17834 19.9609 5.18389C22.2507 5.18389 23.3886 7.32589 23.3886 9.39478C23.3886 11.4046 22.0298 13.3988 19.8862 13.3988C19.1629 13.3988 18.3354 13.0737 17.9364 12.4234C17.8034 12.985 17.4635 13.3101 16.8724 13.3101C16.2517 13.3101 15.8091 12.8372 15.8091 12.1279V3.02712ZM19.6062 11.4489C20.7146 11.4489 21.2614 10.297 21.2614 9.30689C21.2614 8.302 20.7146 7.13534 19.6062 7.13534C18.4684 7.13534 17.9371 8.19934 17.9371 9.23301C17.9371 10.2674 18.4388 11.4489 19.6062 11.4489ZM23.0782 24.5731C23.0782 25.2824 22.6357 25.7561 22.015 25.7561C21.4239 25.7561 21.084 25.431 20.9518 24.8694C20.552 25.5189 19.7245 25.844 19.0011 25.844C16.8584 25.844 15.4988 23.8498 15.4988 21.8408C15.4988 19.7719 16.6367 17.6299 18.9265 17.6299C19.6654 17.6299 20.3895 17.8803 20.9518 18.368V15.4723C20.9518 14.7622 21.3944 14.2901 22.015 14.2901C22.6357 14.2901 23.0782 14.763 23.0782 15.4723V24.5731ZM19.2811 19.579C18.1728 19.579 17.626 20.7464 17.626 21.7513C17.626 22.7414 18.1728 23.8941 19.2811 23.8941C20.4486 23.8941 20.951 22.7111 20.951 21.6774C20.9518 20.643 20.419 19.579 19.2811 19.579Z'
                  fill='white'
                />
              </svg>
            </AddonButton>
            <AddonButton type='Uppercase'>
              <svg
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.56115 7.83377C5.93137 6.83199 6.77993 6.02621 7.89137 6.02621C9.04482 6.02621 9.85137 6.78766 10.2216 7.83377L14.49 19.6801C14.6207 20.0285 14.6643 20.3334 14.6643 20.4859C14.6643 21.3352 13.9674 21.9232 13.1616 21.9232C12.2462 21.9232 11.7888 21.4441 11.5718 20.7908L10.8889 18.6667H4.88448L4.21093 20.769C3.99315 21.4441 3.53582 21.9232 2.64293 21.9232C1.77182 21.9232 1.03137 21.2699 1.03137 20.3988C1.03137 20.0503 1.14026 19.789 1.18382 19.6801L5.56115 7.83377ZM5.80071 15.7383H9.93848L7.91315 9.42355H7.86959L5.80071 15.7383ZM15.5556 7.85555C15.5556 6.81021 16.2743 6.22221 17.276 6.22221H21.4574C23.7223 6.22221 25.5524 7.74666 25.5524 10.0551C25.5524 11.5795 24.9208 12.6031 23.5263 13.2564V13.3C25.3774 13.5613 26.8365 15.1853 26.8365 17.0792C26.8365 20.1499 24.7894 21.7778 21.784 21.7778H17.2978C16.296 21.7778 15.5556 21.0964 15.5556 20.0729V7.85555ZM18.8223 12.4444H20.5209C21.588 12.4444 22.2849 11.8105 22.2849 10.7209C22.2849 9.6981 21.4792 9.09688 20.5209 9.09688H18.8223V12.4444ZM18.8223 18.6667H21.392C22.5688 18.6667 23.4391 18.0997 23.4391 16.8809C23.4391 15.8581 22.6551 15.2382 21.1307 15.2382H18.8223V18.6667Z'
                  fill='white'
                />
              </svg>
            </AddonButton>
            <AddonButton type='Symbols'>
              <svg
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_229_94)'>
                  <path
                    d='M28 14C28 21.7319 21.7319 28 14 28C6.26889 28 0 21.7319 0 14C0 6.26889 6.26889 0 14 0C21.7319 0 28 6.26889 28 14Z'
                    fill='#DA2F47'
                  />
                  <path
                    d='M19.8217 23.2392C19.7867 23.1 18.9132 19.8333 14 19.8333C9.08603 19.8333 8.21336 23.1 8.17836 23.2392C8.15792 23.3213 8.16487 23.4078 8.19815 23.4856C8.23142 23.5634 8.2892 23.6282 8.36269 23.6701C8.43659 23.7116 8.52188 23.7282 8.60594 23.7174C8.68999 23.7066 8.76834 23.669 8.82936 23.6102C8.84414 23.5954 10.3491 22.1667 14 22.1667C17.6509 22.1667 19.1567 23.5954 19.1707 23.6094C19.2309 23.6689 19.3088 23.7073 19.3927 23.7186C19.4766 23.73 19.5619 23.7138 19.6358 23.6724C19.71 23.6305 19.7683 23.5655 19.8019 23.4872C19.8355 23.4089 19.8424 23.3218 19.8217 23.2392ZM12.2166 11.8946C9.68492 9.36288 5.61636 9.33333 5.44447 9.33333C5.2442 9.34219 5.05507 9.42795 4.91645 9.57276C4.77784 9.71757 4.70042 9.91027 4.70032 10.1107C4.70022 10.3112 4.77744 10.504 4.91592 10.6489C5.05439 10.7939 5.24344 10.8798 5.44369 10.8889C5.46625 10.8889 6.94092 10.9068 8.54158 11.4621C8.08036 11.9599 7.77781 12.733 7.77781 13.6111C7.77781 15.1153 8.64814 16.3333 9.72225 16.3333C10.7964 16.3333 11.6667 15.1153 11.6667 13.6111C11.6667 13.4758 11.6519 13.3467 11.6379 13.2168C11.648 13.2168 11.6574 13.2222 11.6667 13.2222C11.8207 13.2226 11.9713 13.1771 12.0994 13.0917C12.2275 13.0063 12.3274 12.8848 12.3863 12.7425C12.4452 12.6003 12.4605 12.4437 12.4303 12.2928C12.4001 12.1418 12.3257 12.0032 12.2166 11.8946ZM22.5556 9.33333C22.3837 9.33333 18.3159 9.36288 15.7835 11.8946C15.6743 12.0032 15.6 12.1418 15.5697 12.2928C15.5395 12.4437 15.5549 12.6003 15.6138 12.7425C15.6727 12.8848 15.7726 13.0063 15.9007 13.0917C16.0288 13.1771 16.1794 13.2226 16.3334 13.2222C16.3435 13.2222 16.352 13.2168 16.3614 13.2168C16.3489 13.3467 16.3334 13.4758 16.3334 13.6111C16.3334 15.1153 17.2037 16.3333 18.2778 16.3333C19.3519 16.3333 20.2222 15.1153 20.2222 13.6111C20.2222 12.733 19.9197 11.9599 19.4585 11.4621C20.458 11.1215 21.5019 10.9284 22.5571 10.8889C22.6593 10.8888 22.7604 10.8686 22.8547 10.8294C22.949 10.7902 23.0347 10.7328 23.1069 10.6605C23.179 10.5882 23.2362 10.5024 23.2752 10.408C23.3142 10.3136 23.3342 10.2125 23.3341 10.1103C23.334 10.0082 23.3138 9.90707 23.2746 9.81275C23.2355 9.71842 23.1781 9.63274 23.1058 9.56058C23.0335 9.48843 22.9477 9.43123 22.8533 9.39224C22.7589 9.35324 22.6577 9.33323 22.5556 9.33333Z'
                    fill='#272727'
                  />
                  <path
                    d='M23.1303 25.6667H4.86964C4.40362 25.6654 3.95704 25.4798 3.62751 25.1502C3.29799 24.8207 3.11232 24.3741 3.11108 23.9081V19.4444C3.11232 18.9784 3.29799 18.5318 3.62751 18.2023C3.95704 17.8728 4.40362 17.6871 4.86964 17.6859H23.1303C23.5963 17.6871 24.0429 17.8728 24.3724 18.2023C24.702 18.5318 24.8876 18.9784 24.8889 19.4444V23.9081C24.8876 24.3741 24.702 24.8207 24.3724 25.1502C24.0429 25.4798 23.5963 25.6654 23.1303 25.6667Z'
                    fill='#272727'
                  />
                  <path
                    d='M6.09854 21.1781H5.46232C5.2181 21.1781 5.10688 21 5.10688 20.8227C5.10688 20.6453 5.2181 20.468 5.46232 20.468H6.20121L6.36376 19.278C6.40032 19.012 6.51154 18.9233 6.73321 18.9233C6.91054 18.9233 7.07388 19.0408 7.07388 19.2189C7.07388 19.3301 7.07388 19.278 7.0591 19.397L6.91132 20.4688H7.62143L7.78399 19.2788C7.82054 19.0128 7.93176 18.9241 8.15343 18.9241C8.33076 18.9241 8.4941 19.0416 8.4941 19.2197C8.4941 19.3309 8.4941 19.2788 8.47932 19.3978L8.33076 20.4696H8.96699C9.21121 20.4696 9.32165 20.6477 9.32165 20.8242C9.32165 21.0016 9.21043 21.1797 8.96699 21.1797H8.22732L8.1091 22.022H8.74532C8.98954 22.022 9.09999 22.2001 9.09999 22.3774C9.09999 22.5548 8.98876 22.7321 8.74532 22.7321H8.00565L7.8431 23.9221C7.80576 24.1889 7.69454 24.2768 7.47288 24.2768C7.29554 24.2768 7.13221 24.1593 7.13221 23.9812C7.13221 23.87 7.13221 23.9221 7.14699 23.8031L7.29554 22.7313H6.58621L6.42365 23.9213C6.38632 24.1881 6.27588 24.276 6.05343 24.276C5.8761 24.276 5.71276 24.1586 5.71276 23.9804C5.71276 23.8692 5.71276 23.9213 5.72754 23.8023L5.87532 22.7306H5.24065C4.99721 22.7306 4.88599 22.5524 4.88599 22.3759C4.88599 22.1978 4.99721 22.0204 5.24065 22.0204H5.98032L6.09854 21.1781ZM6.69743 22.0204H7.39976L7.51799 21.1781H6.81565L6.69743 22.0204ZM10.2877 20.076C10.2877 19.4328 10.7683 18.8782 11.4263 18.8782C12.0843 18.8782 12.565 19.4328 12.565 20.076C12.565 20.7192 12.0843 21.2668 11.4263 21.2668C10.7675 21.2676 10.2877 20.72 10.2877 20.076ZM11.8105 20.076C11.8105 19.8396 11.6698 19.6327 11.4263 19.6327C11.1821 19.6327 11.0413 19.8403 11.0413 20.076C11.0413 20.3132 11.1821 20.5131 11.4263 20.5131C11.6698 20.5131 11.8105 20.3132 11.8105 20.076ZM13.6072 19.0711C13.7037 18.8868 13.7775 18.8347 13.9479 18.8347C14.1773 18.8347 14.3842 19.019 14.3842 19.2484C14.3842 19.3076 14.3842 19.3597 14.3251 19.4701L11.8409 24.1204C11.7297 24.2752 11.6853 24.3639 11.508 24.3639C11.3159 24.3639 11.0864 24.1796 11.0864 23.9579C11.0864 23.8467 11.1308 23.744 11.1603 23.6841L13.6072 19.0711ZM12.8901 23.1303C12.8901 22.4871 13.3708 21.9326 14.0288 21.9326C14.6868 21.9326 15.1674 22.4871 15.1674 23.1303C15.1674 23.7728 14.6868 24.3203 14.0288 24.3203C13.37 24.3211 12.8901 23.7728 12.8901 23.1303ZM14.413 23.1303C14.413 22.8931 14.2722 22.687 14.028 22.687C13.7838 22.687 13.643 22.8939 13.643 23.1303C13.643 23.3668 13.7838 23.5667 14.028 23.5667C14.2722 23.5667 14.413 23.3668 14.413 23.1303ZM16.3465 23.744C16.3465 23.4259 16.6055 23.1669 16.9229 23.1669C17.241 23.1669 17.5 23.4259 17.5 23.744C17.5 23.897 17.4392 24.0437 17.3311 24.1518C17.2229 24.26 17.0762 24.3207 16.9233 24.3207C16.7703 24.3207 16.6236 24.26 16.5155 24.1518C16.4073 24.0437 16.3465 23.897 16.3465 23.744ZM16.3909 19.3814C16.3909 19.0711 16.6195 18.879 16.9229 18.879C17.2192 18.879 17.4557 19.0789 17.4557 19.3814V22.2281C17.4557 22.5314 17.2192 22.7306 16.9229 22.7306C16.6195 22.7306 16.3909 22.5384 16.3909 22.2281V19.3814ZM22.6738 24.3647C22.6097 24.3682 22.5458 24.3562 22.4874 24.3296C22.4291 24.3031 22.378 24.2628 22.3385 24.2122L21.7754 23.5978L21.7194 23.6491C21.1734 24.1508 20.7021 24.3639 20.1452 24.3639C19.2827 24.3639 18.4115 23.8723 18.4115 22.7741C18.4115 21.9131 19.0859 21.3982 19.488 21.168L19.579 21.1159L19.5051 21.0397C19.1745 20.6936 19.0392 20.4073 19.0392 20.0527C19.0392 19.215 19.8038 18.8339 20.5139 18.8339C21.1081 18.8339 21.945 19.1862 21.945 19.9679C21.945 20.7076 21.2582 21.1353 21.0482 21.2489L20.9588 21.2971L21.8618 22.3401L22.2071 21.9232C22.3992 21.6922 22.5112 21.595 22.7095 21.595C22.869 21.595 23.0393 21.7381 23.0393 22.0018C23.0393 22.1993 22.8433 22.4568 22.6512 22.6823L22.4202 22.9429L22.9693 23.5947C23.0712 23.716 23.1132 23.7806 23.1132 23.9276C23.1089 24.0425 23.0612 24.1516 22.9796 24.2327C22.8981 24.3138 22.7888 24.361 22.6738 24.3647ZM19.9928 21.6627C19.6599 21.8859 19.3208 22.1799 19.3208 22.6668C19.3208 23.177 19.6529 23.506 20.1678 23.506C20.5971 23.506 20.8748 23.3178 21.1594 23.0347L21.2147 22.981L20.048 21.6253L19.9928 21.6627ZM20.5147 19.5541C20.2969 19.5541 19.9935 19.7322 19.9935 20.0223C19.9935 20.293 20.1265 20.4579 20.4089 20.7449L20.4485 20.7853L20.4975 20.7597C20.8841 20.5574 21.0801 20.3296 21.0801 20.0838C21.0809 19.7198 20.7877 19.5541 20.5147 19.5541Z'
                    fill='white'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_229_94'>
                    <rect width='28' height='28' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </AddonButton>
          </div>
        ),
        dots: [
          {
            id: 'edge-0',
            type: 'source',
            position: 'Left',
            top: 21
          },
          {
            id: 'edge-1',
            type: 'source',
            position: 'Bottom',
            left: 20
          },
          {
            id: 'edge-2',
            type: 'source',
            position: 'Right',
            top: 63
          }
        ]
      }
    },
    {
      id: 'node-1',
      type: 'rectangle',
      position: {
        x: 610,
        y: 422
      },
      data: {
        width: 281,
        height: 143,
        title: 'Password',
        headerStyle: 'mt-4',
        className: 'gap-6',
        children: <PasswordText />,
        dots: [
          {
            id: 'edge-0',
            type: 'source',
            position: 'Top',
            left: 200
          },
          {
            id: 'edge-1',
            type: 'source',
            position: 'Bottom',
            left: 84
          },
          {
            id: 'edge-2',
            type: 'source',
            position: 'Right',
            top: 73
          }
        ]
      }
    },
    {
      id: 'node-2',
      type: 'button',
      position: {
        x: 861,
        y: 279
      },
      data: {
        className: 'bg-purple-500 hover:bg-purple-500/90',
        children: <GeneratePasswordButton />,
        dots: [
          {
            id: 'edge-0',
            type: 'target',
            position: 'Left'
          },
          {
            id: 'edge-1',
            type: 'target',
            position: 'Bottom'
          }
        ]
      }
    },
    {
      id: 'node-3',
      type: 'button',
      position: {
        x: 443,
        y: 292
      },
      data: {
        className: 'py-3 px-4 bg-purple-500 hover:bg-purple-500/90',
        children: <span>Random</span>,
        dots: [
          {
            id: crypto.randomUUID(),
            type: 'source',
            position: 'Top'
          }
        ]
      }
    },
    {
      id: 'node-4',
      type: 'button',
      position: {
        x: 646,
        y: 595
      },
      data: {
        className: 'py-3 px-4 bg-gray-700 hover:bg-gray-700/80 !gap-2',
        children: (
          <>
            <svg
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4.12725 3.47025L4.125 5.0625V12.9405C4.125 13.587 4.38181 14.207 4.83893 14.6641C5.29605 15.1212 5.91603 15.378 6.5625 15.378H13.0245C12.9081 15.707 12.6925 15.9919 12.4075 16.1933C12.1225 16.3948 11.782 16.503 11.433 16.503H6.5625C5.61767 16.503 4.71153 16.1277 4.04343 15.4596C3.37533 14.7915 3 13.8853 3 12.9405V5.0625C3 4.3275 3.47025 3.70125 4.12725 3.47025ZM13.3125 1.5C13.5341 1.5 13.7535 1.54365 13.9583 1.62845C14.163 1.71326 14.349 1.83756 14.5057 1.99426C14.6624 2.15096 14.7867 2.33698 14.8715 2.54172C14.9564 2.74646 15 2.96589 15 3.1875V12.9375C15 13.1591 14.9564 13.3785 14.8715 13.5833C14.7867 13.788 14.6624 13.974 14.5057 14.1307C14.349 14.2874 14.163 14.4117 13.9583 14.4965C13.7535 14.5814 13.5341 14.625 13.3125 14.625H6.5625C6.11495 14.625 5.68572 14.4472 5.36926 14.1307C5.05279 13.8143 4.875 13.3851 4.875 12.9375V3.1875C4.875 2.73995 5.05279 2.31072 5.36926 1.99426C5.68572 1.67779 6.11495 1.5 6.5625 1.5H13.3125Z'
                fill='white'
              />
            </svg>

            <span>Copy</span>
          </>
        ),
        dots: [
          {
            id: 'edge-0',
            type: 'target',
            position: 'Top'
          }
        ]
      }
    },
    {
      id: 'node-5',
      type: 'label',
      position: {
        x: 550,
        y: 365
      },
      data: {
        children: <span>Length</span>,
        dots: [
          {
            id: 'edge-0',
            type: 'source',
            position: 'Top'
          },
          {
            id: 'edge-1',
            type: 'source',
            position: 'Left'
          }
        ]
      }
    },
    {
      id: 'node-6',
      type: 'label',
      position: {
        x: 493,
        y: 432
      },
      data: {
        className: '!py-3 !px-2',
        children: <InputPasswordLength />,
        dots: [
          {
            id: 'edge-0',
            type: 'source',
            position: 'Top'
          }
        ]
      }
    },
    {
      id: 'node-7',
      type: 'label',
      position: {
        x: 941,
        y: 470
      },
      data: {
        children: <span>Strength</span>,
        dots: [
          {
            id: 'edge-0',
            type: 'source',
            position: 'Bottom'
          },
          {
            id: 'edge-1',
            type: 'target',
            position: 'Left'
          }
        ]
      }
    },
    {
      id: 'node-8',
      type: 'label',
      position: {
        x: 965,
        y: 548
      },
      data: {
        children: <span>💪</span>,
        className: '!py-1 !px-3',
        dots: [
          {
            id: 'edge-0',
            type: 'target',
            position: 'Top'
          }
        ]
      }
    }
  ] satisfies NodeCustomProps[]

  const INITIALS_EDGES = [
    {
      id: crypto.randomUUID(),
      source: INITIALS_NODES[0].id,
      target: INITIALS_NODES[3].id,
      sourceHandle: INITIALS_NODES[0].data.dots[0].id,
      targetHandle: 'top'
    },
    {
      id: crypto.randomUUID(),
      source: INITIALS_NODES[0].id,
      target: INITIALS_NODES[5].id,
      sourceHandle: INITIALS_NODES[0].data.dots[1].id,
      targetHandle: 'top'
    },
    {
      id: crypto.randomUUID(),
      source: INITIALS_NODES[0].id,
      target: INITIALS_NODES[2].id,
      sourceHandle: INITIALS_NODES[0].data.dots[2].id,
      targetHandle: 'left'
    },
    {
      id: crypto.randomUUID(),
      source: INITIALS_NODES[1].id,
      target: INITIALS_NODES[2].id,
      sourceHandle: INITIALS_NODES[1].data.dots[0].id,
      targetHandle: 'bottom'
    },
    {
      id: crypto.randomUUID(),
      source: INITIALS_NODES[1].id,
      target: INITIALS_NODES[4].id,
      sourceHandle: INITIALS_NODES[1].data.dots[1].id
    },
    {
      id: crypto.randomUUID(),
      source: INITIALS_NODES[1].id,
      target: INITIALS_NODES[7].id,
      sourceHandle: INITIALS_NODES[1].data.dots[2].id,
      targetHandle: 'left'
    },
    {
      id: crypto.randomUUID(),
      source: INITIALS_NODES[5].id,
      target: INITIALS_NODES[6].id,
      sourceHandle: 'left'
    },
    {
      id: crypto.randomUUID(),
      source: INITIALS_NODES[7].id,
      target: INITIALS_NODES[8].id,
      sourceHandle: INITIALS_NODES[7].data.dots[1].id
    }
  ] satisfies Edge[]

  return {
    NODE_TYPES,
    EDGE_TYPES,
    INITIALS_NODES,
    INITIALS_EDGES
  }
}

export { useFlow }

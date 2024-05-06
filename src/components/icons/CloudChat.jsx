import React from 'react'

export const CloudChat = ({className='',active=false}) => {
  return (
    <svg stroke={active?'#727CF5':''} strokeWidth="1"  className={`${className}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M8.58958 18.0031C8.58958 18.0031 7.26353 17.7705 6.0899 17.1259L3.74838 17.7889C3.74838 17.7889 3.42683 17.8829 3.09702 17.7986C3.09702 17.7986 2.76722 17.7142 2.5265 17.4735C2.5265 17.4735 2.28579 17.2328 2.20142 16.903C2.20142 16.903 2.11706 16.5732 2.21262 16.2464L2.87409 13.9101C2.87409 13.9101 2.22946 12.7365 1.99686 11.4104C1.99686 11.4104 1.74065 9.94973 2.01746 8.49282C2.01746 8.49282 2.29428 7.03591 3.06836 5.77099C3.06836 5.77099 3.84244 4.50608 5.01378 3.59658C5.01378 3.59658 6.18511 2.68709 7.60237 2.25052C7.60237 2.25052 9.01962 1.81395 10.4997 1.9067C10.4997 1.9067 11.9798 1.99946 13.3314 2.60956C13.3314 2.60956 14.6831 3.21966 15.7317 4.26828C15.7317 4.26828 16.7803 5.31689 17.3904 6.66856C17.3904 6.66856 18.0005 8.02022 18.0933 9.50029C18.0933 9.50029 18.186 10.9804 17.7495 12.3976C17.7495 12.3976 17.3129 13.8149 16.4034 14.9862C16.4034 14.9862 15.4939 16.1575 14.229 16.9316C14.229 16.9316 12.9641 17.7057 11.5072 17.9825C11.5072 17.9825 10.0503 18.2593 8.58958 18.0031ZM11.2738 16.7545C11.2738 16.7545 8.72386 17.239 6.49098 15.9157C6.34362 15.8284 6.16642 15.8051 6.0016 15.8518L3.41619 16.5838L4.14822 13.9984C4.19489 13.8336 4.17186 13.6568 4.08452 13.5094C4.08452 13.5094 2.76094 11.2764 3.24549 8.72615C3.24549 8.72615 3.73004 6.17592 5.78039 4.5839C5.78039 4.5839 7.83074 2.99189 10.4215 3.15425C10.4215 3.15425 13.0123 3.31662 14.8478 5.15216C14.8478 5.15216 16.6834 6.9877 16.8457 9.57847C16.8457 9.57847 17.0081 12.1692 15.4161 14.2196C15.4161 14.2196 13.8241 16.2699 11.2738 16.7545Z" fill="#100F0D"/>
</svg>
  )
}
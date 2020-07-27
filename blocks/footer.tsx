import React from 'react'
import { Container } from '../components/container'
import logo from '../images/logo.png'
import { Row } from '../components/row'
import { Column } from '../components/column'

export function Footer() {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Column className="w-full md:w-auto">
            <img className="h-32 mx-auto md:-ml-6" src={logo} alt="logo" />
          </Column>
          <Column className="flex-grow flex items-center justify-center md:justify-start mb-5 md:mb-0">
            <div className="flex">
              <div className="mr-20">
                <a href="oursponsors" className="text-sm">Parteneri</a>
                <br/>
                <a href="oursponsors" className="text-sm">Susținători</a>
              </div>
              <div className="mr-20">
                <a href="legal" className="text-sm">Cod de conduită</a>
                <br/>
                <a href="legal" className="text-sm">Legal</a>
              </div>
              <div>
                <a href="#contacte" className="text-sm">Contacte</a>
              </div>
            </div>
          </Column>
          <Column className="flex items-center mx-auto">
            <a href="#facebook">
              <svg className="w-10 h-10" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 0V39H39V0H0ZM28.055 5.08924C28.3383 5.08323 28.6332 5.09242 28.9382 5.11303C30.0586 5.11456 31.2289 5.21557 32.3897 5.31775L32.2635 9.93567H29.1453C27.6831 9.9033 27.1551 10.471 27.1077 12.1208V15.7485H32.3897L32.1802 20.6949H27.1077V34.4654H21.9542V20.695H18.3765V15.7485H21.9542V11.5019C21.9542 8.44015 23.2486 6.49129 25.7985 5.50342C26.4533 5.24576 27.2053 5.10728 28.055 5.08924Z"
                  fill="#024BBB"
                />
              </svg>
            </a>
            <a href="#linkedin">
              <svg className="ml-8 w-10 h-10" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 0V39H40V0H0ZM9.80957 7.66717C11.3939 7.68456 12.9546 8.75023 13.0225 10.595C13.0563 12.2355 11.5901 13.485 9.76807 13.5229H9.72413C8.15557 13.5052 6.62373 12.4128 6.55273 10.595C6.5751 8.97286 7.97363 7.70565 9.80957 7.66717ZM26.8066 15.4177C28.5485 15.4282 30.1924 15.932 31.543 17.2744C32.9465 18.8006 33.3971 20.905 33.4473 23.0444V32.7753H27.6953V23.7061C27.6825 22.0063 27.0853 19.9401 24.7778 19.8713C23.4255 19.8854 22.4718 20.6516 21.8188 21.9328C21.6406 22.3451 21.6149 22.8191 21.6064 23.2919V32.7753H15.8569C15.8789 28.0343 15.9092 23.2937 15.8984 18.5526C15.8984 17.2059 15.8851 16.2991 15.8569 15.8319H21.6064V18.2217C22.0945 17.545 22.6357 16.9032 23.3618 16.3865C24.3466 15.7012 25.5296 15.4385 26.8066 15.4177ZM6.8921 15.8319H12.6416V32.7753H6.8921V15.8319Z"
                  fill="#3399FF"
                />
              </svg>
            </a>
            <a href="#instagram">
              <svg className="ml-8 w-10 h-10" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.0009 0C15.2929 0 14.5815 0.0275625 12.3476 0.122062C10.1045 0.232312 8.58729 0.580125 7.24854 1.09987C5.8474 1.62884 4.57847 2.45702 3.53023 3.52669C2.45758 4.57248 1.62894 5.84211 1.10342 7.245C0.583665 8.58375 0.235853 10.101 0.125603 12.3441C0.02454 14.5792 0.00354004 15.2893 0.00354004 20.9974C0.00354004 26.7054 0.0311025 27.4168 0.125603 29.6507C0.235853 31.8872 0.583665 33.411 1.10342 34.7497C1.63238 36.1509 2.46056 37.4198 3.53023 38.4681C4.57602 39.5407 5.84565 40.3694 7.24854 40.8949C8.58729 41.4081 10.1111 41.7624 12.3476 41.8727C14.5828 41.9737 15.2929 41.9947 21.0009 41.9947C26.709 41.9947 27.4204 41.9672 29.6542 41.8727C31.8907 41.7624 33.4145 41.4067 34.7533 40.8949C36.1544 40.3659 37.4234 39.5377 38.4716 38.4681C39.5456 37.4234 40.3745 36.1534 40.8984 34.7497C41.4116 33.411 41.766 31.8872 41.8762 29.6507C41.9773 27.4155 41.9983 26.7054 41.9983 20.9974C41.9983 15.2893 41.9707 14.5779 41.8762 12.3441C41.766 10.1076 41.4103 8.57587 40.8984 7.245C40.3694 5.84386 39.5413 4.57493 38.4716 3.52669C37.4269 2.45265 36.157 1.6238 34.7533 1.09987C33.4145 0.580125 31.8907 0.232312 29.6542 0.122062C27.419 0.021 26.709 0 21.0009 0ZM21.0009 3.78C26.6066 3.78 27.276 3.80756 29.4915 3.90206C31.535 3.99787 32.648 4.33912 33.387 4.62787C34.3005 4.96509 35.1273 5.5018 35.8072 6.19894C36.5032 6.87596 37.0379 7.70089 37.3717 8.61262C37.6605 9.35156 38.0017 10.4646 38.0975 12.5081C38.192 14.7236 38.2196 15.3943 38.2196 20.9987C38.2196 26.6031 38.192 27.2737 38.0897 29.4892C37.9794 31.5328 37.6382 32.6458 37.3507 33.3847C36.953 34.3704 36.5094 35.0595 35.777 35.805C35.0949 36.4978 34.2686 37.0319 33.3568 37.3695C32.627 37.6582 31.4983 37.9995 29.4468 38.0953C27.2195 38.1898 26.5633 38.2174 20.9432 38.2174C15.323 38.2174 14.6681 38.1898 12.4382 38.0874C10.3946 37.9772 9.26717 37.6359 8.52823 37.3485C7.53073 36.9508 6.84692 36.5072 6.11454 35.7748C5.3756 35.0359 4.90573 34.3324 4.54348 33.3546C4.24948 32.6248 3.91348 31.4961 3.80454 29.4446C3.72973 27.2436 3.69429 26.5611 3.69429 20.9672C3.69429 15.3759 3.72973 14.6921 3.80454 12.4635C3.91348 10.4121 4.24948 9.28594 4.54348 8.55356C4.90573 7.55475 5.37692 6.87225 6.11454 6.13331C6.8456 5.40225 7.53073 4.92975 8.52823 4.55962C9.26717 4.27219 10.367 3.93094 12.4185 3.82856C14.6458 3.7485 15.302 3.71962 20.9143 3.71962L21.0009 3.78ZM21.0009 10.2204C19.5852 10.2199 18.1832 10.4984 16.8751 11.0399C15.5671 11.5815 14.3785 12.3755 13.3775 13.3765C12.3764 14.3776 11.5824 15.5662 11.0408 16.8742C10.4993 18.1823 10.2208 19.5843 10.2214 21C10.2208 22.4157 10.4993 23.8177 11.0408 25.1258C11.5824 26.4338 12.3764 27.6224 13.3775 28.6235C14.3785 29.6245 15.5671 30.4185 16.8751 30.9601C18.1832 31.5016 19.5852 31.7801 21.0009 31.7796C22.4167 31.7801 23.8186 31.5016 25.1267 30.9601C26.4348 30.4185 27.6233 29.6245 28.6244 28.6235C29.6254 27.6224 30.4194 26.4338 30.961 25.1258C31.5025 23.8177 31.781 22.4157 31.7805 21C31.781 19.5843 31.5025 18.1823 30.961 16.8742C30.4194 15.5662 29.6254 14.3776 28.6244 13.3765C27.6233 12.3755 26.4348 11.5815 25.1267 11.0399C23.8186 10.4984 22.4167 10.2199 21.0009 10.2204ZM21.0009 27.9996C17.1317 27.9996 14.0014 24.8692 14.0014 21C14.0014 17.1307 17.1317 14.0004 21.0009 14.0004C24.8702 14.0004 28.0005 17.1307 28.0005 21C28.0005 24.8692 24.8702 27.9996 21.0009 27.9996ZM34.7349 9.78994C34.7342 10.4589 34.468 11.1002 33.9947 11.5729C33.5215 12.0457 32.8799 12.3112 32.211 12.3112C31.8802 12.3112 31.5527 12.2461 31.2471 12.1195C30.9415 11.9929 30.6639 11.8074 30.43 11.5735C30.1961 11.3397 30.0106 11.062 29.884 10.7564C29.7574 10.4508 29.6923 10.1233 29.6923 9.79256C29.6923 9.4618 29.7574 9.13428 29.884 8.8287C30.0106 8.52312 30.1961 8.24546 30.43 8.01158C30.6639 7.7777 30.9415 7.59217 31.2471 7.4656C31.5527 7.33902 31.8802 7.27387 32.211 7.27387C33.5983 7.27387 34.7349 8.40262 34.7349 9.78994Z"
                  fill="#A633FF"
                />
              </svg>
            </a>
            <a href="#github">
              <svg className="ml-8 w-10 h-10" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.9828 0.278566C9.35664 0.274269 0.75 8.87661 0.75 19.4942C0.75 27.8903 6.13398 35.0274 13.632 37.6485C14.6418 37.902 14.4871 37.1844 14.4871 36.6946V33.3645C8.65625 34.0477 8.41992 30.1891 8.02891 29.5446C7.23828 28.1954 5.36914 27.8516 5.92773 27.2071C7.25547 26.5239 8.60898 27.379 10.1773 29.695C11.3117 31.375 13.5246 31.0915 14.6461 30.8122C14.891 29.8024 15.4152 28.9 16.1371 28.1997C10.0957 27.1168 7.57773 23.4301 7.57773 19.0473C7.57773 16.9204 8.27813 14.9653 9.65313 13.3883C8.77656 10.7887 9.73477 8.56294 9.86367 8.23208C12.3602 8.00864 14.9555 10.0196 15.1574 10.1786C16.5754 9.79614 18.1953 9.59419 20.0086 9.59419C21.8305 9.59419 23.4547 9.80474 24.8855 10.1915C25.3711 9.82193 27.7773 8.09458 30.0977 8.30513C30.2223 8.63599 31.159 10.8102 30.334 13.3754C31.7262 14.9567 32.4352 16.929 32.4352 19.0602C32.4352 23.4516 29.9 27.1426 23.8414 28.2083C24.3603 28.7186 24.7724 29.3272 25.0535 29.9986C25.3346 30.6699 25.4791 31.3906 25.4785 32.1184V36.9524C25.5129 37.3391 25.4785 37.7215 26.123 37.7215C33.7328 35.1563 39.2113 27.9676 39.2113 19.4985C39.2113 8.87661 30.6004 0.278566 19.9828 0.278566Z"
                  fill="#333333"
                />
              </svg>
            </a>
          </Column>
        </Row>
        <p className="text-center text-gray-500 text-xs my-5">
          Code4Moldova © 2020 All Rights Reserved
        </p>
      </Container>
    </section>
  )
}

export const data = {
    header: {
        images: {
            logo: {
                img: '../../../../public/image/logo-test.png',
                alt: 'logo'
            },
            contact: {
                img: '../../../../public/image/contact.png',
                alt: 'contactImg'
            },
            location: {
                img: '../../../../public/image/location.png',
                alt: 'locationImg'
            }
        },
        textData: {
            phone1: '+381611111111',
            phone2: '+3811411111',
            address: 'Adresa adresa 10',
            city: 'Osecina',
        },
        navOptions: [
            {
                value: 'Pocetna',
                href: 'pocetna',
                default: true,
                children: null
            },
            {
                value: 'Usluge',
                href: 'usluge',
                default: false,
                children: [
                    {
                        value: 'Usluga 1'
                    },
                    {
                        value: 'Usluga 2'
                    },
                    {
                        value: 'Usluga 3'
                    }
                ]
            },
            {
                value: 'O nama',
                href: 'o-nama',
                default: false,
                children: null
            },
            {
                value: 'Kontakt',
                href: 'kontakt',
                default: false,
                children: null
            },
        ]

    },
    content: {
        carousel: [
            {
                image: {
                    img: '../../../public/image/test4.jpg',
                    alt: 'carousel1'
                },
                text: 'Servis i popravka klima uredjaja',
                additional: 'Koristimo najkvalitenije materijale'
            },
            {
                image: {
                    img: '../../../public/image/test4.jpg',
                    alt: 'carousel2'
                },
                text: 'Servis i popravka klima uredjaja2',
                additional: 'Koristimo najkvalitenije materijale2'
            },

        ],
        infoCards: [
            {
                image: {
                    img: '../../../../public/image/location.png',
                    alt: 'info1'
                },
                text:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical',
                additional:null
            },
            {
                image: {
                    img: '../../../../public/image/location.png',
                    alt: 'info1'
                },
                text:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical',
                additional:null
            },
            {
                image: {
                    img: '../../../../public/image/location.png',
                    alt: 'info1'
                },
                text:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical',
                additional:null
            }
        ]
    }


};
const metro = require('assets/img/metro.png')
const avtovagzal = require('assets/img/avtovagzal.png')
const baktelekom = require('assets/img/baktelekom.png')
const soccar = require('assets/img/soccar.png')
const havaLimani = require('assets/img/hava-limani.png')

export const areas = [
    {
        "id": "4c020744-7bd8-4a70-ab54-01f5673983d8",
        "type": "area",
        "name": "Masazır",
        "document_price": "600",
        "empty_area": "20",
        "image": "",
        "color": "#fff",
        "bg_color": "#472929",
        "price": {
            "one": "100",
            "two": "300",
            "three": "900",
            "four": "1600",
            "hotel": "2500"
        },
        "mortgage": "300",
        "building_home": "500",
        "building_hotel": "2500"
    },
    {
        "id": "9ad317dc-c064-49c5-b52f-ec4c5f989e1a",
        "type": "area",
        "name": "Xırdalan",
        "document_price": "600",
        "color": "#fff",
        "bg_color": "#472929",
        "image": "",
        "empty_area": "40",
        "price": {
            "one": "200",
            "two": "600",
            "three": "1800",
            "four": "3200",
            "hotel": "4500"
        },
        "mortgage": "300",
        "building_home": "500",
        "building_hotel": "2500"
    },
    {
        "id": "58065388-64a0-4f0f-803d-d42ccf5e27d8",
        "type": "executive",
        "name": "İcra hakimiyyəti",
        "document_price": "5000",
        "color": "#fff",
        "bg_color": "#9f2c2c",
        "image": "",
        "empty_area": "40",
        "price": {
            "one": "100",
            "two": "200",
            "three": "300",
            "four": "400",
            "hotel": "1000"
        },
        "building_home": "100",
        "building_hotel": "500"
    },
    {
        "id": "9c37874a-4bf4-4afa-b152-b40284740384",
        "type": "transport",
        "name": "Metro",
        "document_price": "2000",
        "color": "#fff",
        "bg_color": "blue",
        "image": metro,
        "empty_area": "250",
        "price": {
            "two": "500",
            "three": "1000"
        },
        "mortgage": "1000"
    },
    {
        "id": "f78ef784-5000-454b-90d8-2fabc03bdc49",
        "type": "transport",
        "name": "Hava limanı",
        "document_price": "2000",
        "color": "#fff",
        "bg_color": "blue",
        "image": havaLimani,
        "empty_area": "250",
        "price": {
            "two": "500",
            "three": "1000"
        },
        "mortgage": "1000"
    },
    {
        "id": "94bfd041-6ae0-4893-93a8-1622ae1840f7",
        "type": "transport",
        "name": "Avtovağzal",
        "document_price": "2000",
        "color": "#fff",
        "bg_color": "blue",
        "image": avtovagzal,
        "empty_area": "250",
        "price": {
            "two": "500",
            "three": "1000"
        },
        "mortgage": "1000"
    },
    {
        "id": "ea07fbc0-ca99-452c-a5bb-b563c6889d74",
        "type": "company",
        "name": "Baktelekom",
        "document_price": "2000",
        "color": "#fff",
        "bg_color": "yellow",
        "image": baktelekom,
        "one_price": "40",
        "two_price": "100",
        "mortgage": "750"
    },
    {
        "id": "897ea97d-72d2-4c0b-b07f-7a9a6ac5d347",
        "type": "company",
        "name": "SOCAR",
        "document_price": "2000",
        "color": "#fff",
        "bg_color": "yellow",
        "image": soccar,
        "one_price": "40",
        "two_price": "100",
        "mortgage": "750"
    },
    {
        "id": "1618ad93-9834-4344-9d12-3772b914097d",
        "type": "area",
        "name": "Həzi Aslanov",
        "document_price": "1000",
        "color": "#fff",
        "bg_color": "#7489a7",
        "empty_area": "60",
        "price": {
            "one": "300",
            "two": "900",
            "three": "2700",
            "four": "4000",
            "hotel": "5500"
        },
        "mortgage": "500",
        "building_home": "500",
        "building_hotel": "2500"
    },
    {
        "id": "2df55150-8889-4e3d-ad2f-ed925406da4b",
        "type": "area",
        "name": "Koroğlu",
        "document_price": "1200",
        "color": "#fff",
        "bg_color": "#7489a7",
        "empty_area": "60",
        "price": {
            "one": "400",
            "two": "1000",
            "three": "3000",
            "four": "4500",
            "hotel": "6000"
        },
        "mortgage": "500",
        "building_home": "500",
        "building_hotel": "2500"
    },
    {
        "id": "81cb70c9-f198-42a3-8910-4ba8e98fa392",
        "type": "area",
        "name": "Ulduz",
        "document_price": "1000",
        "color": "#fff",
        "bg_color": "#7489a7",
        "empty_area": "60",
        "price": {
            "one": "300",
            "two": "900",
            "three": "2700",
            "four": "4000",
            "hotel": "5500"
        },
        "mortgage": "500",
        "building_home": "500",
        "building_hotel": "2500"
    },
    {
        "id": "aa3c8c5f-9364-41fa-85cf-3d7b2d9ead4a",
        "type": "area",
        "name": "Biləcəri",
        "document_price": "1400",
        "color": "#fff",
        "bg_color": "#bd4949",
        "empty_area": "100",
        "price": {
            "one": "500",
            "two": "1500",
            "three": "4500",
            "four": "6250",
            "hotel": "7500"
        },
        "mortgage": "700",
        "building_home": "1000",
        "building_hotel": "5000"
    },
    {
        "id": "f6a9c748-c002-40b7-89e1-ca60d553db38",
        "type": "area",
        "name": "20 yanvar",
        "document_price": "1400",
        "color": "#fff",
        "bg_color": "#bd4949",
        "empty_area": "100",
        "price": {
            "one": "500",
            "two": "1500",
            "three": "4500",
            "four": "6250",
            "hotel": "7500"
        },
        "mortgage": "700",
        "building_home": "1000",
        "building_hotel": "5000"
    },
    {
        "id": "ec327cb4-ac6b-43e3-8798-3868c106216a",
        "type": "area",
        "name": "İnşaatçılar",
        "document_price": "1600",
        "color": "#fff",
        "bg_color": "#bd4949",
        "empty_area": "120",
        "price": {
            "one": "600",
            "two": "1800",
            "three": "5000",
            "four": "7000",
            "hotel": "9000"
        },
        "mortgage": "800",
        "building_home": "1000",
        "building_hotel": "5000"
    },
    {
        "id": "5c5b6230-2896-489d-b2e3-f4bde07cce2f",
        "type": "area",
        "name": "Elimlər A.",
        "document_price": "1800",
        "color": "#fff",
        "bg_color": "#ff914d",
        "empty_area": "140",
        "price": {
            "one": "700",
            "two": "2000",
            "three": "5500",
            "four": "7500",
            "hotel": "9500"
        },
        "mortgage": "900",
        "building_home": "1000",
        "building_hotel": "5000"
    },
    {
        "id": "42da9f87-7cee-4536-97aa-923004b47bb4",
        "type": "area",
        "name": "Nizami",
        "document_price": "1800",
        "color": "#fff",
        "bg_color": "#ff914d",
        "empty_area": "140",
        "price": {
            "one": "700",
            "two": "2000",
            "three": "5500",
            "four": "7500",
            "hotel": "9500"
        },
        "mortgage": "900",
        "building_home": "1000",
        "building_hotel": "5000"
    },
    {
        "id": "c568be54-4cdf-4155-aa5a-519f2a5190f4",
        "type": "area",
        "name": "28 may",
        "document_price": "2000",
        "color": "#fff",
        "bg_color": "#ff914d",
        "empty_area": "160",
        "price": {
            "one": "800",
            "two": "2200",
            "three": "6000",
            "four": "8000",
            "hotel": "10000"
        },
        "mortgage": "1000",
        "building_home": "1000",
        "building_hotel": "5000"
    },
    {
        "id": "4a7ddd37-5e6c-4a93-a70f-a265caaff09d",
        "type": "area",
        "name": "Buzovna",
        "document_price": "2200",
        "color": "#fff",
        "bg_color": "#e81f25",
        "empty_area": "180",
        "price": {
            "one": "900",
            "two": "2500",
            "three": "7000",
            "four": "8750",
            "hotel": "10500"
        },
        "mortgage": "1100",
        "building_home": "1500",
        "building_hotel": "7500"
    },
    {
        "id": "28b54795-1297-4784-9cc7-2ec5cfca1901",
        "type": "area",
        "name": "Mərdəkan",
        "document_price": "2200",
        "color": "#fff",
        "bg_color": "#e81f25",
        "empty_area": "180",
        "price": {
            "one": "900",
            "two": "2500",
            "three": "7000",
            "four": "8750",
            "hotel": "10500"
        },
        "mortgage": "1100",
        "building_home": "1500",
        "building_hotel": "7500"
    },
    {
        "id": "22f94714-6ce5-47f0-a25c-ac8e378a325b",
        "type": "area",
        "name": "Bilgəh",
        "document_price": "2400",
        "color": "#fff",
        "bg_color": "#e81f25",
        "empty_area": "200",
        "price": {
            "one": "1000",
            "two": "3000",
            "three": "7500",
            "four": "9250",
            "hotel": "11000"
        },
        "mortgage": "1200",
        "building_home": "1500",
        "building_hotel": "7500"
    },
    {
        "id": "ce5f264a-ac83-4776-b88b-1a5d42acde3e",
        "type": "area",
        "name": "Xalqlar D.",
        "document_price": "2600",
        "color": "#fff",
        "bg_color": "#ffe168",
        "empty_area": "220",
        "price": {
            "one": "1100",
            "two": "3300",
            "three": "8000",
            "four": "9750",
            "hotel": "11500"
        },
        "mortgage": "1300",
        "building_home": "1500",
        "building_hotel": "7500"
    },
    {
        "id": "0bfc804c-9c46-40c0-a4fe-35ae8963f9e8",
        "type": "area",
        "name": "Q. Qarayev",
        "document_price": "2600",
        "color": "#fff",
        "bg_color": "#ffe168",
        "empty_area": "220",
        "price": {
            "one": "1100",
            "two": "3300",
            "three": "8000",
            "four": "9750",
            "hotel": "11500"
        },
        "mortgage": "1300",
        "building_home": "1500",
        "building_hotel": "7500"
    },
    {
        "id": "d2ac4cc3-a669-4b9c-9bd3-e0eb986cb1fa",
        "type": "area",
        "name": "Neftçilər",
        "document_price": "2800",
        "color": "#fff",
        "bg_color": "#ffe168",
        "empty_area": "240",
        "price": {
            "one": "1200",
            "two": "3600",
            "three": "8500",
            "four": "10250",
            "hotel": "12000"
        },
        "mortgage": "1300",
        "building_home": "1500",
        "building_hotel": "7500"
    },
    {
        "id": "102c8ebd-a8ba-4bcb-a2dc-1f3af140c9f2",
        "type": "area",
        "name": "Gənclik",
        "document_price": "3000",
        "color": "#fff",
        "bg_color": "#008037",
        "empty_area": "260",
        "price": {
            "one": "1300",
            "two": "3900",
            "three": "9000",
            "four": "11000",
            "hotel": "12750"
        },
        "mortgage": "1500",
        "building_home": "2000",
        "building_hotel": "10000"
    },
    {
        "id": "6877c7fe-65e3-4227-895f-f0718e34c06b",
        "type": "area",
        "name": "N. Nərimanov",
        "document_price": "3000",
        "color": "#fff",
        "bg_color": "#008037",
        "empty_area": "260",
        "price": {
            "one": "1300",
            "two": "3900",
            "three": "9000",
            "four": "11000",
            "hotel": "12750"
        },
        "mortgage": "1500",
        "building_home": "2000",
        "building_hotel": "10000"
    },
    {
        "id": "8b16122a-0e3e-49b3-b03e-1c6d36f596b7",
        "type": "area",
        "name": "Sahil",
        "document_price": "3200",
        "color": "#fff",
        "bg_color": "#008037",
        "empty_area": "280",
        "price": {
            "one": "1500",
            "two": "4500",
            "three": "10000",
            "four": "12000",
            "hotel": "14000"
        },
        "mortgage": "1600",
        "building_home": "2000",
        "building_hotel": "10000"
    },
    {
        "id": "fd3a8d29-9204-4fdf-8eac-38774f0cbf7c",
        "type": "area",
        "name": "İçəri Şəhər",
        "document_price": "3500",
        "color": "#fff",
        "bg_color": "#004aad",
        "empty_area": "350",
        "price": {
            "one": "1750",
            "two": "5000",
            "three": "11000",
            "four": "13000",
            "hotel": "15000"
        },
        "mortgage": "1750",
        "building_home": "2000",
        "building_hotel": "10000"
    },
    {
        "id": "bee06307-66cf-4f0f-b790-26d937bc0eaf",
        "type": "area",
        "name": "Tarqovi",
        "document_price": "4000",
        "color": "#fff",
        "bg_color": "#004aad",
        "empty_area": "500",
        "price": {
            "one": "2000",
            "two": "6000",
            "three": "14000",
            "four": "17000",
            "hotel": "20000"
        },
        "mortgage": "2000",
        "building_home": "2000",
        "building_hotel": "10000"
    }
]

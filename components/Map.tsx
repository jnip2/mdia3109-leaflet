import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import L from "leaflet"

const icon = L.icon({
    iconUrl: '/images/icon.png',
    iconSize: [20, 20]
})

const expoOptions = { color: 'red' }
const millenniumOptions = { color: 'blue' }

const expoPolyline: [number, number][][] = [
    [
        [49.28596254125285, -123.1115641984694],
        [49.28562655391477, -123.12013658449946],
        [49.28332068860059, -123.11610837886587],
        [49.279593538903825, -123.10973723719147],
        [49.27318833962156, -123.10037533014491],
        [49.26262556853368, -123.06922959912575],
        [49.24828748044079, -123.05597868051555],
        [49.244224930897545, -123.04598147356097],
        [49.2385357389229, -123.0318416494578],
        [49.229846559084535, -123.01262806720702],
        [49.225828722653375, -123.00394849445841],
        [49.220110564198315, -122.98845223374066],
        [49.2122090841458, -122.95916947524144],
        [49.200050597176755, -122.94912210695107],
        [49.20152302863246, -122.91265937821458],
        [49.2048263863152, -122.90604161170117], //columbia
        [49.2247492784129, -122.8893533313045],
        [49.23320914057442, -122.8827972324297],
        [49.2484585774381, -122.89692764718882],
        [49.253476998259956, -122.91809540657253]
    ],
    [
        [49.28596254125285, -123.1115641984694],
        [49.28562655391477, -123.12013658449946],
        [49.28332068860059, -123.11610837886587],
        [49.279593538903825, -123.10973723719147],
        [49.27318833962156, -123.10037533014491],
        [49.26262556853368, -123.06922959912575],
        [49.24828748044079, -123.05597868051555],
        [49.244224930897545, -123.04598147356097],
        [49.2385357389229, -123.0318416494578],
        [49.229846559084535, -123.01262806720702],
        [49.225828722653375, -123.00394849445841],
        [49.220110564198315, -122.98845223374066],
        [49.2122090841458, -122.95916947524144],
        [49.200050597176755, -122.94912210695107],
        [49.20152302863246, -122.91265937821458],
        [49.2048263863152, -122.90604161170117],
        [49.20433152023783, -122.8743407662247],
        [49.19898868800528, -122.85072488150593],
        [49.18957322111294, -122.84797372385256],
        [49.18295549228162, -122.84477853543264]
    ]
]

const stops = {
    expo: [
        {
            name: 'Waterfront',
            coordinates: [49.28596254125285, -123.1115641984694]
        },
        {
            name: 'Burrard',
            coordinates: [49.28562655391477, -123.12013658449946]
        },
        {
            name: 'Granville',
            coordinates: [49.28332068860059, -123.11610837886587]
        },
        {
            name: 'Stadium-Chinatown',
            coordinates: [49.279593538903825, -123.10973723719147]
        },
        {
            name: 'Main Street-Science World',
            coordinates: [49.27318833962156, -123.10037533014491]
        },
        {
            name: 'Commercial-Broadway',
            coordinates: [49.26262556853368, -123.06922959912575]
        },
        {
            name: 'Nanaimo',
            coordinates: [49.24828748044079, -123.05597868051555]
        },
        {
            name: '29th Avenue',
            coordinates: [49.244224930897545, -123.04598147356097]
        },
        {
            name: 'Joyce-Collingwood',
            coordinates: [49.2385357389229, -123.0318416494578]
        },
        {
            name: 'Patterson',
            coordinates: [49.229846559084535, -123.01262806720702]
        },
        {
            name: 'Metrotown',
            coordinates: [49.225828722653375, -123.00394849445841]
        },
        {
            name: 'Royal Oak',
            coordinates: [49.220110564198315, -122.98845223374066]
        },
        {
            name: 'Edmonds',
            coordinates: [49.2122090841458, -122.95916947524144]
        },
        {
            name: '22nd Street',
            coordinates: [49.200050597176755, -122.94912210695107]
        },
        {
            name: 'New Westminster',
            coordinates: [49.20152302863246, -122.91265937821458]
        },
        {
            name: 'Columbia',
            coordinates: [49.2048263863152, -122.90604161170117]
        },
        {
            name: 'Sapperton',
            coordinates: [49.2247492784129, -122.8893533313045]
        },
        {
            name: 'Braid',
            coordinates: [49.23320914057442, -122.8827972324297]
        },
        {
            name: 'Lougheed Town Centre',
            coordinates: [49.2484585774381, -122.89692764718882]
        },
        {
            name: 'Production Way-University',
            coordinates: [49.253476998259956, -122.91809540657253]
        },
        {
            name: 'Scott Road',
            coordinates: [49.20433152023783, -122.8743407662247]
        },
        {
            name: 'Gateway',
            coordinates: [49.19898868800528, -122.85072488150593]
        },
        {
            name: 'Surrey Central',
            coordinates: [49.18957322111294, -122.84797372385256]
        },
        {
            name: 'King George',
            coordinates: [49.18295549228162, -122.84477853543264]
        }

    ],
    millennium: [
        {
            name: 'VCC-Clark',
            coordinates: [49.26590784923915, -123.0789991566088]
        },
        {
            name: 'Renfrew',
            coordinates: [49.25894539616446, -123.04538851025973]
        },
        {
            name: 'Rupert',
            coordinates: [49.26083536319238, -123.03279926371272]
        },
        {
            name: 'Gilmore',
            coordinates: [49.26499749648871, -123.0136123291517]
        },
        {
            name: 'Brentwood Town Centre',
            coordinates: [49.266396574716595, -123.00163992359386]
        },
        {
            name: 'Holdom',
            coordinates: [49.26469541711446, -122.98218161413023]
        },
        {
            name: 'Sperling-Burnaby Lake',
            coordinates: [49.25922280028765, -122.96403088346]
        },
        {
            name: 'Lake City Way',
            coordinates: [49.25463930035987, -122.93920909328277]
        },
        {
            name: 'Burquitlam',
            coordinates: [49.26134056629032, -122.88982617732917]
        },
        {
            name: 'Moody Centre',
            coordinates: [49.2779986736361, -122.84584474841797]
        },
        {
            name: 'Inlet Centre',
            coordinates: [49.27723271042005, -122.82822048245389]
        },
        {
            name: 'Coquitlam Central',
            coordinates: [49.274811242859954, -122.80077036734338]
        },
        {
            name: 'Lincoln',
            coordinates: [49.280360663252836, -122.79383918387805]
        },
        {
            name: 'Lafarge Lake-Douglas',
            coordinates: [49.28565918325952, -122.79156621011902]
        },
    ]
}

const millenniumPolyline: [number, number][] = [
    [49.26590784923915, -123.0789991566088],
    [49.25894539616446, -123.04538851025973],
    [49.26083536319238, -123.03279926371272],
    [49.26499749648871, -123.0136123291517],
    [49.266396574716595, -123.00163992359386],
    [49.26469541711446, -122.98218161413023],
    [49.25922280028765, -122.96403088346],
    [49.25463930035987, -122.93920909328277],
    [49.253476998259956, -122.91809540657253],
    [49.2484585774381, -122.89692764718882],
    [49.26134056629032, -122.88982617732917],
    [49.2779986736361, -122.84584474841797],
    [49.27723271042005, -122.82822048245389],
    [49.274811242859954, -122.80077036734338],
    [49.280360663252836, -122.79383918387805],
    [49.28565918325952, -122.79156621011902]
]

const Map = () => {
    return (
        <>
            <div style={{ height: '50px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <h1>How2Go</h1>
            </div>
            <MapContainer
                style={{ height: '100vh' }}
                center={[49.24584406444096, -122.97478007167216]}
                zoom={14}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; By <a href="">Joey Nip</a>'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {
                    stops.expo.map((item, index) => {
                        return (
                            <div key={index}>
                                <Marker
                                    position={item.coordinates}
                                    icon={icon}
                                >
                                    <Popup>
                                        {item.name}
                                    </Popup>
                                </Marker>
                            </div>
                        )
                    })
                }
                {
                    stops.millennium.map((item, index) => {
                        return (
                            <div key={index}>
                                <Marker
                                    position={item.coordinates}
                                    icon={icon}
                                >
                                    <Popup>
                                        {item.name}
                                    </Popup>
                                </Marker>
                            </div>
                        )
                    })
                }
                {/* <Marker
                position={[49.28596254125285, -123.1115641984694]}
                icon={icon}
            >
                <Popup>
                    Waterfront
                </Popup>
            </Marker> */}
                <Polyline pathOptions={expoOptions} positions={expoPolyline} />
                <Polyline pathOptions={millenniumOptions} positions={millenniumPolyline} />
            </MapContainer>
        </>
    )
}

export default Map